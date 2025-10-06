import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  { title: "Buy faster with our app", desc: "Seamless checkout and smarter recommendations." },
  { title: "Premium Shipping", desc: "Next-day delivery in select cities." },
  { title: "Weekly Promotions", desc: "Exclusive app-only deals." },
  { title: "Secure Payments", desc: "Industry-standard protection for every order." },
]

export function AppBenefits() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {benefits.map((b) => (
        <Card key={b.title}>
          <CardContent className="p-5">
            <div className="size-10 rounded-md bg-primary/10 grid place-items-center mb-3">
              <img
                src={"/placeholder.svg?height=20&width=20&query=" + encodeURIComponent(b.title + " icon")}
                alt=""
                aria-hidden="true"
                className="opacity-80"
                crossOrigin="anonymous"
              />
            </div>
            <h4 className="font-semibold">{b.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
