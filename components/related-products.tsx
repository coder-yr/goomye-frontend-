import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function RelatedProducts({ className }: { className?: string }) {
  const items = [
    { name: "Xbox Series S 1TB SSD", price: 499, img: "/xbox-series-s.jpg" },
    { name: "Apple iPhone 15 Pro Max", price: 1299, img: "/iphone-15-pro-max-display.png" },
    { name: "iMac 24” (2021)", price: 1999, img: "/imac-24-2021.jpg" },
  ]

  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="text-base font-semibold text-foreground">Related products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.name} className="flex flex-col gap-3 p-4">
            <img
              src={p.img || "/premium-wireless-headphones.jpg"}
              alt={p.name}
              className="h-40 w-full rounded-md object-contain"
              crossOrigin="anonymous"
            />
            <div className="text-sm">
              <h3 className="font-medium text-foreground">{p.name}</h3>
              <div className="mt-1 text-lg font-semibold text-foreground">${p.price}</div>
            </div>
            <div className="mt-auto flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Wishlist
              </Button>
              <Button className="flex-1">Buy now</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
