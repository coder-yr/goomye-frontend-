"use client"

import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export type ReturnItem = {
  id: string
  title: string
  orderNumber: string
  returnTerm: string
  imageAlt?: string
  imageUrl?: string
}

export function ReturnItemRow({
  item,
  selected,
  onSelect,
}: {
  item: ReturnItem
  selected: boolean
  onSelect: (checked: boolean) => void
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-4 rounded-lg border bg-background p-4 transition-colors md:grid-cols-[auto,1fr,auto]",
        selected ? "ring-1 ring-primary/40" : "",
      )}
      role="group"
      aria-checked={selected}
    >
      <div className="flex items-center gap-4">
        <Checkbox
          checked={selected}
          onCheckedChange={(v) => onSelect(Boolean(v))}
          aria-label={selected ? "Deselect product" : "Select product"}
        />
        <div className="relative h-16 w-20 overflow-hidden rounded-md border bg-muted">
          <Image
            src={item.imageUrl || "/placeholder.svg?height=64&width=80&query=product%20thumbnail"}
            alt={item.imageAlt || "Product thumbnail"}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      </div>

      <div className="text-sm text-foreground md:pl-2">
        <p className="text-pretty">{item.title}</p>
      </div>

      <div className="flex flex-col items-start gap-1 text-sm text-muted-foreground md:items-end">
        <p>
          <span className="mr-2 text-foreground/70">Order Number:</span>
          <span className="font-medium text-foreground">{item.orderNumber}</span>
        </p>
        <p>
          <span className="mr-2 text-foreground/70">Return Term:</span>
          <span className="font-medium text-foreground">{item.returnTerm}</span>
        </p>
      </div>
    </div>
  )
}
