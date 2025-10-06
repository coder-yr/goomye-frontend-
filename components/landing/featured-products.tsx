import Link from "next/link"
import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/data/products"
import { BACKEND_URL } from "@/lib/config"

async function fetchCategoryProducts(slug: string): Promise<Product[]> {
  const url = `${BACKEND_URL}/api/products?category=${slug}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      cache: 'no-store',
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    const mapped: Product[] = (data.products || []).map((p: any) => ({
      id: String(p.slug || p.id),
      title: p.name,
      price: p.price ?? 0,
      image: Array.isArray(p.images) ? p.images[0] : p.image || "/placeholder.svg",
      category: String(p.categoryId ?? slug),
    }))
    return mapped
  } catch (err) {
    console.error(`Failed to fetch products for ${slug} from ${url}:`, err)
    // Try localhost fallback in dev environments
    try {
      const localUrl = `http://localhost:8001/api/products?category=${slug}`
      const res = await fetch(localUrl, { cache: 'no-store' })
      if (!res.ok) return []
      const data = await res.json()
      const mapped: Product[] = (data.products || []).map((p: any) => ({
        id: String(p.slug || p.id),
        title: p.name,
        price: p.price ?? 0,
        image: Array.isArray(p.images) ? p.images[0] : p.image || "/placeholder.svg",
        category: String(p.categoryId ?? slug),
      }))
      return mapped
    } catch (err2) {
      console.error(`Local fallback also failed for ${slug}:`, err2)
      return []
    }
  } finally {
    clearTimeout(timer)
  }
}

export async function FeaturedProducts() {
  const [computers, mobiles] = await Promise.all([
    fetchCategoryProducts("computers"),
    fetchCategoryProducts("mobiles"),
  ])

  return (
    <section className="space-y-12">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-balance text-2xl font-bold">Computers</h2>
          <Link
            className="text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-colors flex items-center gap-1 group"
            href="/category/computers"
          >
            View all
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {computers.slice(0, 4).map((p, index) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={p} />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-balance text-2xl font-bold">Mobiles</h2>
          <Link
            className="text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-colors flex items-center gap-1 group"
            href="/category/mobiles"
          >
            View all
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mobiles.slice(0, 4).map((p, index) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={p} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
