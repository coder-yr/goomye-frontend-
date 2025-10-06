import { Button } from "@/components/ui/button"

export function Marquee() {
  return (
    <section className="py-12 bg-card border-t border-b">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-lg overflow-hidden border bg-muted">
            <img
              src="/smartwatch-hero.jpg"
              alt="Smartwatch showcase"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="space-y-4">
            <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
              Unboxed
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-balance">
              Ten years on the wrist. And the Apple Watch has gone from a glorified accessory to a necessity.
            </h3>
            <p className="text-muted-foreground">
              Our anniversary edition celebrates innovation with exclusive offers and bundles.
            </p>
            <div className="flex gap-3">
              <Button className="bg-primary text-primary-foreground">Read more</Button>
              <Button variant="outline">Shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
