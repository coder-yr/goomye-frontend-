export function FeaturedProductsSkeleton() {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-10 space-y-10">
      {[0,1].map((row) => (
        <div key={row}>
          <div className="mb-4 h-5 w-48 rounded bg-muted" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-72 rounded-md border bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
