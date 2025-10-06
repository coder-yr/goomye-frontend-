import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-muted" aria-label="Featured collection">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-lg border bg-card">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                New in
              </span>
              <h1 className="text-3xl md:text-4xl font-semibold text-balance">New arrivals picked just for you</h1>
              <p className="text-muted-foreground">
                Level up your everyday carry with our latest drops across fashion, tech, and lifestyle.
              </p>
              <div className="flex items-center gap-3">
                <Button className="bg-primary text-primary-foreground">Explore now</Button>
                <Button variant="outline">Shop men</Button>
              </div>
            </div>
            <div className="aspect-[16/9] md:aspect-auto md:h-[420px]">
              <img
                src="/placeholder.svg"
                alt="Lifestyle model showcasing new arrivals"
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
