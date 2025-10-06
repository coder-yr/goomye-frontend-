"use client"

import { useRouter } from "next/navigation"

const categories = [
  { label: "Computers" },
  { label: "Fashion" },
  { label: "Mobiles" },
  { label: "Gaming" },
  { label: "Beauty" },
  { label: "Home" },
  { label: "Sports" },
  { label: "Health" },
  { label: "Auto" },
  { label: "Books" },
  { label: "Home Audio" },
  { label: "Cameras" },
  { label: "Grocery" },
  { label: "Electronics" },
  { label: "TV/Projectors" },
  { label: "Toys" },
  { label: "Sport", highlight: true },
  { label: "Photo/Video" },
  { label: "Collectibles" },
]

export function CategoryGrid() {
  const router = useRouter()

  const handleCategoryClick = (label: string) => {
    const slug = label.toLowerCase().replace(/[^a-z0-9]/g, "-")
    router.push(`/category/${slug}`)
  }

  return (
    <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-8 gap-6 pt-6">
      {categories.map(({ label, highlight }, index) => (
        <li
          key={label}
          className="flex flex-col items-center animate-fadeIn"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <button
            type="button"
            className={[
              "size-20 rounded-full border",
              highlight ? "border-primary/30 bg-primary/5" : "border-border bg-muted",
              "grid place-items-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10 hover:border-primary/50",
            ].join(" ")}
            onClick={() => handleCategoryClick(label)}
            aria-label={label}
          >
            <img
              src={`https://api.dicebear.com/7.x/icons/svg?seed=${encodeURIComponent(label)}`}
              alt={`${label} icon`}
              className="size-9 transition-transform duration-300 group-hover:scale-110"
              crossOrigin="anonymous"
            />
          </button>
          <span
            className={[
              "mt-3 text-sm text-center cursor-pointer transition-colors duration-200 hover:text-primary",
              highlight ? "text-primary font-medium" : "text-muted-foreground"
            ].join(" ")}
            onClick={() => handleCategoryClick(label)}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  )
}
