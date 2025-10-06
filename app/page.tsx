import { HeaderBar } from "@/components/landing/header-bar"
import { Hero } from "@/components/landing/hero"
import { CategoryGrid } from "@/components/landing/category-grid"
import { DealsRow } from "@/components/landing/deals-row"
import { PromoBand } from "@/components/landing/promo-band"
import { FeatureTiles } from "@/components/landing/feature-tiles"
import { SummerDeals } from "@/components/landing/summer-deals"
import { CuratedBand } from "@/components/landing/curated-band"
import { Marquee } from "@/components/landing/marquee"
import { AppBenefits } from "@/components/landing/app-benefits"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeaderBar />
      <Hero />
      <section className="container mx-auto px-4 lg:px-6 py-8">
        <h2 className="text-balance text-xl font-semibold mb-4">Top categories</h2>
        <hr className="border-border mb-6" />
        <CategoryGrid />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-8">
        <h2 className="text-balance text-xl font-semibold mb-4">Trending New Deals Everyday</h2>
        <DealsRow />
      </section>

      <PromoBand />

      <section className="container mx-auto px-4 lg:px-6 py-10">
        <FeatureTiles />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-8">
        <h2 className="text-balance text-xl font-semibold mb-4">Summer Special Deals</h2>
        <SummerDeals />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-8">
        <h2 className="text-balance text-xl font-semibold mb-4">Exclusively Curated for You</h2>
        <CuratedBand />
      </section>

      <Marquee />

      <section className="container mx-auto px-4 lg:px-6 py-12">
        <AppBenefits />
      </section>
    </main>
  )
}
