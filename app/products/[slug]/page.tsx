import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductGallery from "@/components/products/product-gallery"
import ProductPurchasePanel from "@/components/products/product-purchase-panel"
import ProductAccordions from "@/components/products/product-accordions"
import SpecCards from "@/components/products/spec-cards"
import RelatedProducts from "@/components/products/related-products"

// Mock data; replace with real fetch or RSC data loader later
const MOCK_PRODUCTS = [
  {
    slug: "imac-24-2021",
    name: "Apple iMac 24” All‑In‑One (M1, 8GB RAM)",
    price: 1249.99,
    rating: 4.5,
    reviews: 345,
    images: [
      "/imac-front.jpg",
      "/imac-back.jpg",
      "/imac-side.jpg",
      "/imac-stand.jpg",
    ],
    colors: ["#5BB85C", "#E5E7EB", "#CBD5E1", "#9CA3AF"], // green, silver, blue-gray, gray
    capacities: ["256GB", "512GB", "1TB"],
    description:
      "The Apple M1-based iMac 24” features an immersive 4.5K Retina display, studio‑quality mics, and an advanced image signal processor in the M1 for even better video calls. Thunderbolt / USB 4 ports and Wi‑Fi 6 keep you connected.",
    specs: {
      display: { type: "Retina 4.5K", diagonal: "24 inches", resolution: "4480 × 2520", format: "4k" },
      processor: { type: "Apple M1", model: "M1", physicalCores: 8, virtualCores: 16, process: "5nm" },
      ram: { capacity: "8GB", max: "64GB" },
      storage: { capacity: "512GB" },
    },
  },
]

export const metadata: Metadata = {
  title: "Product Details",
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = MOCK_PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return notFound()

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
          capacities={product.capacities}
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
        <SpecCards specs={product.specs} />
      </section>

      <RelatedProducts className="mt-12" />
    </main>
  )
}
