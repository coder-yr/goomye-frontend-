"use client"

import { useParams } from "next/navigation"
import { ProductCard } from "@/components/products/product-card"
import { SortMenu } from "@/components/products/sort-menu"
import { useEffect, useState } from "react"
import { Product } from "@/data/products"
import { HeaderBar } from "@/components/header-bar"
import { BACKEND_URL } from "@/lib/config"
import Link from "next/link"

export default function CategoryPage() {
  const params = useParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
  const response = await fetch(`${BACKEND_URL}/api/products?category=${params.slug}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        // Map backend fields to frontend Product type
        const productsMapped = (data.products || []).map((p: any) => ({
          id: p.id,
          title: p.name,
          price: p.price,
          image: Array.isArray(p.images) ? p.images[0] : p.image || "/placeholder.svg",
          category: p.categoryId || "",
        }))
        setProducts(productsMapped)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [params.slug])

  return (
    <div>
      <HeaderBar />
      <SortMenu />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : products.length === 0 ? (
        <div>No products found in this category.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}