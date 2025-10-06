"use client"

import Image from "next/image"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type CartItemData = {
  id: string
  name: string
  price: number
  salePrice?: number
  imageAlt: string
  imageUrl: string
  color: string
  size: string
  lowStock?: boolean
  quantity: number
}

type Props = {
  item: CartItemData
  onChange: (next: Partial<CartItemData>) => void
  onRemove: () => void
}

export function CartItem({ item, onChange, onRemove }: Props) {
  const effectivePrice = useMemo(() => item.salePrice ?? item.price, [item])
  const hasSale = item.salePrice && item.salePrice < item.price

  return (
    <div className="py-6">
      <div className="grid grid-cols-[96px_1fr_auto] gap-4 md:grid-cols-[120px_1fr_auto] md:gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg md:h-28 md:w-28">
          <Image
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.imageAlt}
            fill
            sizes="112px"
            className="object-cover"
          />
          <button
            aria-label="Add to wishlist"
            className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-input/70 bg-background/80 backdrop-blur text-foreground/70 hover:text-foreground"
          >
            {/* Heart icon */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12.1 21.35c-.2 0-.3-.05-.45-.15C7.14 17.86 4 15.09 4 11.77 4 9.3 6.02 7.5 8.4 7.5c1.27 0 2.5.57 3.3 1.49.8-.92 2.03-1.49 3.3-1.49 2.38 0 4.4 1.8 4.4 4.27 0 3.32-3.14 6.09-7.65 9.43-.15.1-.26.15-.45.15z" />
            </svg>
          </button>
        </div>

        <div className="min-w-0">
          <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-base font-medium text-pretty">{item.name}</h3>
              <div className="mt-1 flex items-center gap-3">
                <div className="flex items-baseline gap-2">
                  {hasSale ? (
                    <>
                      <span className="text-muted-foreground line-through">${item.price}</span>
                      <span className="text-destructive font-medium">${item.salePrice}</span>
                    </>
                  ) : (
                    <span className="font-medium">${item.price}</span>
                  )}
                </div>
                {item.lowStock && (
                  <span className="inline-flex items-center gap-1 text-sm text-[color:var(--color-chart-1)]">
                    {/* Clock icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    Low in stock
                  </span>
                )}
              </div>
            </div>
            <Button variant="link" className="px-0 text-muted-foreground hover:text-foreground" onClick={onRemove}>
              Remove
            </Button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 sm:max-w-md">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Color</span>
              <Badge variant="secondary" className="rounded-lg">
                {item.color}
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Size</span>
              <Badge variant="secondary" className="rounded-lg">
                {item.size}
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Quantity</span>
              <Select value={String(item.quantity)} onValueChange={(v) => onChange({ quantity: Number(v) })}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => (
                    <SelectItem key={q} value={String(q)}>
                      {q}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="hidden sm:block text-right whitespace-nowrap">
          <span className="font-medium">${effectivePrice}</span>
        </div>
      </div>

      <Separator className="mt-6" />
    </div>
  )
}

export type { CartItemData }
