"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Props = {
  name: string
  price: number
  rating: number
  reviews: number
  colors: string[]
  capacities: string[]
}

export default function ProductPurchasePanel({ name, price, rating, reviews, colors, capacities }: Props) {
  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(colors[0] ?? "#E5E7EB")
  const [capacity, setCapacity] = useState(capacities[0] ?? "256GB")

  const decrease = () => setQty((q) => Math.max(1, q - 1))
  const increase = () => setQty((q) => Math.min(99, q + 1))

  return (
    <aside className="space-y-4">
      <Card className="space-y-4 p-5">
        <div className="space-y-1">
          <h1 className="text-lg font-semibold text-foreground">{name}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="rounded-full">
              last 2 products
            </Badge>
            <span className="text-primary">{rating.toFixed(1)}★</span>
            <a href="#reviews" className="underline">
              {reviews} Reviews
            </a>
          </div>
        </div>

        <div className="text-3xl font-semibold tracking-tight text-foreground">
          ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>

        <div className="flex items-center gap-2">
          <span className="sr-only">Quantity</span>
          <div className="inline-flex items-center rounded-md border">
            <Button size="icon" variant="ghost" aria-label="Decrease quantity" onClick={decrease}>
              −
            </Button>
            <span className="min-w-10 text-center">{qty}</span>
            <Button size="icon" variant="ghost" aria-label="Increase quantity" onClick={increase}>
              +
            </Button>
          </div>
          <Button className="ml-auto bg-transparent" variant="outline" aria-label="Add to favorites">
            ♡ Add to favorites
          </Button>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">Add to cart</Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">Colour</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c}
                aria-label={`Color ${c}`}
                onClick={() => setColor(c)}
                className={cn("h-7 w-7 rounded-full border", color === c && "ring-2 ring-primary ring-offset-1")}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">SSD capacity</h3>
          <div className="flex flex-wrap gap-2">
            {capacities.map((cap) => (
              <button
                key={cap}
                onClick={() => setCapacity(cap)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm",
                  capacity === cap && "border-primary text-primary",
                )}
                aria-pressed={capacity === cap}
                aria-label={`Set capacity ${cap}`}
              >
                {cap}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">Pickup</h3>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <label className="flex items-center gap-2">
              <input type="radio" name="pickup" defaultChecked className="accent-primary" />
              Shipping — $19
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pickup" className="accent-primary" />
              Pickup from Flowbox — $9
            </label>
            <label className="flex items-center gap-2 opacity-60">
              <input type="radio" name="pickup" disabled className="accent-primary" />
              Pickup from our store — Not available
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">Add extra warranty</h3>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <label className="flex items-center justify-between rounded-md border p-2">
              <span>1 year — $39</span>
              <input type="checkbox" className="accent-primary" />
            </label>
            <label className="flex items-center justify-between rounded-md border p-2">
              <span>2 years — $69</span>
              <input type="checkbox" className="accent-primary" />
            </label>
            <label className="flex items-center justify-between rounded-md border p-2">
              <span>3 years — $99</span>
              <input type="checkbox" className="accent-primary" />
            </label>
          </div>
        </div>
      </Card>
    </aside>
  )
}
