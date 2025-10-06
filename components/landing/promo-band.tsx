import { Button } from "@/components/ui/button"

export function PromoBand() {
  return (
    <section aria-label="Mid-page promotion" className="py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="rounded-xl border-2 border-primary bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <div className="relative z-10 space-y-1">
            <h3 className="text-xl md:text-2xl font-bold">CMF Phone 2 Pro</h3>
            <p className="opacity-90 text-sm md:text-base">Starting at ₹17,999* • Limited stocks</p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="text-primary font-semibold hover:scale-110 transition-transform shadow-md hover:shadow-xl relative z-10"
          >
            Shop now
          </Button>
        </div>
      </div>
    </section>
  )
}
