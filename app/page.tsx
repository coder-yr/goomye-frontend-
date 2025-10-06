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
import { FeaturedProducts } from "@/components/landing/featured-products"
import { FeaturedProductsSkeleton } from "@/components/landing/featured-products.skeleton"
import { Suspense } from "react"

export const metadata = {
  title: "Goomye - Shop the best deals",
  description: "Discover trending products across computers, mobiles, and more.",
}

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeaderBar />
      <Hero />
      <section className="container mx-auto px-4 lg:px-6 py-12">
        <div className="space-y-2 mb-8">
          <h2 className="text-balance text-2xl md:text-3xl font-bold">Top categories</h2>
          <p className="text-muted-foreground">Browse our most popular product categories</p>
        </div>
        <hr className="border-border mb-8" />
        <CategoryGrid />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-12">
        <div className="space-y-2 mb-6">
          <h2 className="text-balance text-2xl md:text-3xl font-bold">Trending New Deals Everyday</h2>
          <p className="text-muted-foreground">Check out today's hottest offers</p>
        </div>
        <DealsRow />
      </section>

      <PromoBand />

      <section className="container mx-auto px-4 lg:px-6 py-10">
        <FeatureTiles />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-12">
        <div className="space-y-2 mb-6">
          <h2 className="text-balance text-2xl md:text-3xl font-bold">Summer Special Deals</h2>
          <p className="text-muted-foreground">Limited time summer offers you can't miss</p>
        </div>
        <SummerDeals />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-12">
        <div className="space-y-2 mb-6">
          <h2 className="text-balance text-2xl md:text-3xl font-bold">Exclusively Curated for You</h2>
          <p className="text-muted-foreground">Handpicked selections based on your preferences</p>
        </div>
        <CuratedBand />
      </section>

      <Marquee />

      <section className="container mx-auto px-4 lg:px-6 py-12">
        <AppBenefits />
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-12">
        <div className="space-y-2 mb-6">
          <h2 className="text-balance text-2xl md:text-3xl font-bold">Featured products</h2>
          <p className="text-muted-foreground">Discover our top picks across all categories</p>
        </div>
        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </section>
    </main>
  )
}
