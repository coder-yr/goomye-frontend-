import { Card, CardContent } from "@/components/ui/card"

const items = [
  { title: "Tower Fan", price: "$89" },
  { title: "Split AC 1.5T", price: "$449" },
  { title: "Dehumidifier", price: "$119" },
  { title: "Air Cooler", price: "$129" },
]

export function SummerDeals() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((i) => (
        <Card key={i.title}>
          <CardContent className="p-4">
            <div className="aspect-square rounded-md bg-muted overflow-hidden">
              <img
                src={
                  i.title === "Tower Fan"
                    ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                    : i.title === "Split AC 1.5T"
                    ? "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                    : i.title === "Dehumidifier"
                    ? "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                    : i.title === "Air Cooler"
                    ? "https://images.unsplash.com/photo-1517263904808-5dc0d6e1b8a6?auto=format&fit=crop&w=400&q=80"
                    : ""
                }
                alt={i.title}
                className="h-full w-full object-contain"
                crossOrigin="anonymous"
              />
            </div>
            <div className="mt-3">
              <p className="text-sm">{i.title}</p>
              <p className="text-sm text-muted-foreground">{i.price}</p>
              <div className="mt-1 text-xs text-muted-foreground">{"★★★★★"}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
