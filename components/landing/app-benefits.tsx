import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  { title: "Buy faster with our app", desc: "Seamless checkout and smarter recommendations." },
  { title: "Premium Shipping", desc: "Next-day delivery in select cities." },
  { title: "Weekly Promotions", desc: "Exclusive app-only deals." },
  { title: "Secure Payments", desc: "Industry-standard protection for every order." },
]

export function AppBenefits() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((b, index) => (
        <Card
          key={b.title}
          className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group animate-fadeIn"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <CardContent className="p-6">
            <div className="size-12 rounded-lg bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <img
                src={"/placeholder.svg?height=20&width=20&query=" + encodeURIComponent(b.title + " icon")}
                alt=""
                aria-hidden="true"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
                crossOrigin="anonymous"
              />
            </div>
            <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{b.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
