"use client"

import { products as data, type Product } from "@/data/products"
import { ProductCard } from "./product-card"

export function ProductsGrid({ products = data }: { products?: Product[] }) {
  return (
    <div
      className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
