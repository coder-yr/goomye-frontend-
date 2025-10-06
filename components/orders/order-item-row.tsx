"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Item = {
  id: string
  title: string
  price: number
  compareAt?: number
  image: string
  attrs: Record<string, string>
  qty: number
}

export default function OrderItemRow({ item }: { item: Item }) {
  return (
    <Card className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4" aria-label={item.title}>
      <div className="size-24 overflow-hidden rounded-md border bg-muted">
        <Image
          src={item.image || "/smart-watch-series-5.jpg"}
          alt={`${item.title} image`}
          width={120}
          height={120}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className="text-sm font-medium">{item.title}</h4>
          <Price price={item.price} compareAt={item.compareAt} />
        </div>

        <dl className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted-foreground sm:grid-cols-4">
          {Object.entries(item.attrs).map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="">{k}</dt>
              <dd className="font-medium text-foreground">{v}</dd>
            </div>
          ))}
          <div className="flex gap-2">
            <dt>Quantity</dt>
            <dd className="font-medium text-foreground">{item.qty}</dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button size="sm" variant="outline">
            Buy it again
          </Button>
          <Button size="sm" variant="outline">
            Write a product review
          </Button>
        </div>
      </div>

      <div className="hidden text-right text-sm text-muted-foreground sm:block">
        <div>Item #{item.id}</div>
      </div>
    </Card>
  )
}

function Price({ price, compareAt }: { price: number; compareAt?: number }) {
  if (!compareAt) {
    return <span className="text-sm font-medium">{`$${price}`}</span>
  }
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-muted-foreground line-through">{`$${compareAt}`}</span>
      <span className="text-sm font-medium">{`$${price}`}</span>
    </span>
  )
}
