import { Card, CardContent } from "@/components/ui/card"

const tiles = [
  { title: "Truly Wireless Earbuds", note: "Up to 60% off" },
  { title: "4K & Above Smart TVs", note: "Starting ₹26,990*" },
  { title: "Windows Laptops", note: "Save big on top brands" },
  { title: "Fit & Health", note: "Best offers" },
  { title: "Air Conditioners", note: "Beat the heat" },
  { title: "Bestselling TVs", note: "Top picks" },
]

export function FeatureTiles() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tiles.map((t, idx) => (
        <Card
          key={t.title + idx}
          className="bg-primary text-primary-foreground border-none cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          aria-label={t.title}
        >
          <CardContent className="p-6 flex items-end justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg group-hover:translate-x-1 transition-transform duration-300">{t.title}</h3>
              <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">{t.note}</p>
            </div>
            <div className="size-20 rounded-md overflow-hidden bg-primary-foreground/10 backdrop-blur-sm">
              <img
                src={"/placeholder.svg?height=80&width=80&query=" + encodeURIComponent(t.title)}
                alt={t.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                crossOrigin="anonymous"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
