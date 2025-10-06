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
                  src={
                    c.title === "EMI & Credit Offers"
                      ? "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                      : c.title === "IND+ Learning"
                      ? "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                      : c.title === "Trusted Service"
                      ? "https://images.unsplash.com/photo-1517263904808-5dc0d6e1b8a6?auto=format&fit=crop&w=400&q=80"
                      : ""
                  }
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
