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
      {categories.map(({ label, highlight }) => (
        <li key={label} className="flex flex-col items-center">
          <button
            type="button"
            className={[
              "size-20 rounded-full border",
              highlight ? "border-brand/30 bg-brand/5" : "border-gray/30 bg-gray/5",
              "grid place-items-center transition-colors hover:bg-brand/10",
            ].join(" ")}
            onClick={() => handleCategoryClick(label)}
            aria-label={label}
          >
            <img
              src={`https://api.dicebear.com/7.x/icons/svg?seed=${encodeURIComponent(label)}`}
              alt={`${label} icon`}
              className="size-9"
              crossOrigin="anonymous"
            />
          </button>
          <span
            className={[
              "mt-3 text-sm text-center cursor-pointer",
              highlight ? "text-brand font-medium" : "text-gray-foreground"
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
