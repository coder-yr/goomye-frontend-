import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: ["Gaming PC", "Laptop", "Smartwatch", "Air Purifier"][i % 4],
  price: ["$899", "$1,299", "$199", "$149"][i % 4],
  rating: 4 + (i % 2) + ".0",
}))

export function DealsRow() {
  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0"
        role="list"
        aria-label="Trending deals"
      >
        {products.map((p) => (
          <Card key={p.id} className="min-w-[220px] sm:min-w-[240px]">
            <CardHeader className="pb-2">
              <div className="aspect-square rounded-md bg-muted overflow-hidden">
                <img
                  src={
                    p.title === "Gaming PC"
                      ? "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
                      : p.title === "Laptop"
                      ? "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
                      : p.title === "Smartwatch"
                      ? "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80"
                      : p.title === "Air Purifier"
                      ? "/placeholder.svg"
                      : "/placeholder.svg"
                  }
                  alt={p.title}
                  className="h-full w-full object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardTitle className="text-sm line-clamp-2">{p.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{"Rating " + p.rating}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-semibold">{p.price}</span>
                <Button size="sm">Add</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
