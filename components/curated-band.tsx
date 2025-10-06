import { Card, CardContent } from "@/components/ui/card"

const cards = [
  { title: "EMI & Credit Offers", desc: "Flexible payment options for big buys" },
  { title: "IND+ Learning", desc: "Join workshops and level up skills" },
  { title: "Trusted Service", desc: "Hassle-free returns and doorstep support" },
]

export function CuratedBand() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {cards.map((c) => (
        <Card key={c.title}>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
              </div>
              <div className="aspect-video md:aspect-auto md:h-full bg-muted rounded-r-lg overflow-hidden">
                <img
                  src={"/placeholder.svg?height=140&width=240&query=" + encodeURIComponent(c.title)}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
