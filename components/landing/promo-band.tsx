import { Button } from "@/components/ui/button"

export function PromoBand() {
  return (
    <section aria-label="Mid-page promotion" className="py-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="rounded-lg border bg-primary text-primary-foreground px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">CMF Phone 2 Pro</h3>
            <p className="opacity-90 text-sm">Starting at ₹17,999* • Limited stocks</p>
          </div>
          <Button variant="secondary" className="text-primary">
            Shop now
          </Button>
        </div>
      </div>
    </section>
  )
}
