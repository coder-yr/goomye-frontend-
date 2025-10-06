"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/data/products"
import { Heart } from "lucide-react"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="space-y-2">
        <div className="relative overflow-hidden rounded-md border bg-muted">
          <img src={product.image || "/wireless-headphones-black-front-view.jpg"} alt={product.title} className="h-48 w-full object-cover" />
          {product.badge ? (
            <div className="absolute left-2 top-2">
              <Badge>{product.badge}</Badge>
            </div>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <h3 className="text-sm font-medium leading-tight text-foreground">{product.title}</h3>
        {product.subtitle ? <p className="line-clamp-2 text-sm text-muted-foreground">{product.subtitle}</p> : null}

        {product.installmentsNote ? <p className="text-xs text-muted-foreground">{product.installmentsNote}</p> : null}

        <div className="mt-2 flex items-center justify-between">
          <p className="text-base font-semibold tracking-tight">${product.price}</p>
          <div className="flex items-center gap-2">
            {(product.colors || []).slice(0, 5).map((c) => (
              <span
                key={c}
                className="inline-block h-3 w-3 rounded-full border"
                style={{ backgroundColor: c }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Heart className="h-4 w-4" />
          Wishlist
        </Button>
        <Button size="sm" className="flex-1">
          Buy now
        </Button>
      </CardFooter>
    </Card>
  )
}
