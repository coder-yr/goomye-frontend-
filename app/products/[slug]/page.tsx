"use client"

import { notFound } from "next/navigation"
import ProductGallery from "@/components/products/product-gallery"
import ProductPurchasePanel from "@/components/products/product-purchase-panel"
import ProductAccordions from "@/components/products/product-accordions"
import SpecCards from "@/components/products/spec-cards"
import RelatedProducts from "@/components/products/related-products"
import { useProduct } from "@/hooks/use-products"


export default function ProductPage({ params }: { params: { slug: string } }) {
  const { product, loading, error } = useProduct(params.slug);
  if (loading) return <div>Loading...</div>;
  if (error || !product) return notFound();

  return (
    <main className="container mx-auto px-4 py-6 md:py-10">
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <ProductGallery images={product.images} alt={`${product.name} gallery`} />
          <ProductAccordions />
        </div>

        <ProductPurchasePanel
          name={product.name}
          price={product.price}
          rating={product.rating}
          reviews={product.reviews}
          colors={product.colors}
          capacities={product.capacities ?? []}
        />
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-lg border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-base font-semibold text-foreground">Description</h2>
          <p className="text-pretty">{product.description}</p>
          <p className="mt-4">
            Brilliant 4.5K Retina display offers wide color gamut and up to 500 nits of brightness. True Tone technology
            automatically adjusts color temperature for a natural viewing experience.
          </p>
          <button className="mt-3 text-primary">Show more</button>
        </article>
        <SpecCards specs={{
          display: product.specs?.display ?? { type: '', diagonal: '', resolution: '', format: '' },
          processor: product.specs?.processor ?? { type: '', model: '', physicalCores: 0, virtualCores: 0, process: '' },
          ram: product.specs?.ram ?? { capacity: '', max: '' },
          storage: product.specs?.storage ?? { capacity: '' }
        }} />
      </section>

      <RelatedProducts className="mt-12" />
    </main>
  )
}
