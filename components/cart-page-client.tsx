"use client"

import { useMemo, useState } from "react"
import { CartItem, type CartItemData } from "./cart-item"
import { CartSummary } from "./cart-summary"

type Props = {
  initialItems: CartItemData[]
}

export default function CartPageClient({ initialItems }: Props) {
  const [items, setItems] = useState<CartItemData[]>(initialItems)
  const subtotal = useMemo(
    () =>
      items.reduce((sum, it) => {
        const price = it.salePrice ?? it.price
        return sum + price * it.quantity
      }, 0),
    [items],
  )

  const sale = useMemo(() => {
    // demo: if any item has salePrice, show an extra -$20 line like the Figma
    const anySale = items.some((i) => i.salePrice && i.salePrice < i.price)
    return anySale ? -20 : 0
  }, [items])

  function updateItem(id: string, patch: Partial<CartItemData>) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)))
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-pretty text-2xl font-semibold md:text-3xl">Shopping bag</h1>

      <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_360px]">
        <section aria-label="Cart items">
          <div className="rounded-xl border p-4 md:p-6">
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground">Your bag is empty.</p>
            ) : (
              items.map((it) => (
                <CartItem
                  key={it.id}
                  item={it}
                  onChange={(patch) => updateItem(it.id, patch)}
                  onRemove={() => removeItem(it.id)}
                />
              ))
            )}
          </div>
        </section>

        <CartSummary
          subtotal={subtotal}
          shipping={null}
          tax={null}
          sale={sale}
          onApplyCode={(code) => {
            // demo: simple 10 off
            if (code.trim().toLowerCase() === "save10") {
              alert("Promo applied: -$10 (demo)")
            } else {
              alert("Invalid code (demo)")
            }
          }}
        />
      </div>
    </div>
  )
}
