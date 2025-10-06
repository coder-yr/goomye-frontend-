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
  return (
    <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-8 gap-6 pt-6">
      {categories.map(({ label, highlight }) => (
        <li key={label} className="flex flex-col items-center">
          <div
            className={[
              "size-20 rounded-full border",
              highlight ? "border-brand/30 bg-brand/5" : "border-gray/30 bg-gray/5",
              "grid place-items-center transition-colors hover:bg-brand/10",
            ].join(" ")}
            aria-label={label}
          >
            <img
              src={
                "/placeholder.svg?height=36&width=36&query=" + encodeURIComponent(label + " line icon") ||
                "/placeholder.svg"
              }
              alt={`${label} icon`}
              className="size-9"
              crossOrigin="anonymous"
            />
          </div>
          <span
            className={["mt-3 text-sm text-center", highlight ? "text-brand font-medium" : "text-gray-foreground"].join(
              " ",
            )}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  )
}
