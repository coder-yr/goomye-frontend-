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
        <Card key={t.title + idx} className="bg-primary text-primary-foreground border-none" aria-label={t.title}>
          <CardContent className="p-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm opacity-90">{t.note}</p>
            </div>
            <div className="size-20 rounded-md overflow-hidden bg-secondary">
              <img
                src={"/placeholder.svg?height=80&width=80&query=" + encodeURIComponent(t.title)}
                alt={t.title}
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
