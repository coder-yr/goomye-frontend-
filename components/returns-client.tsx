"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { type ReturnItem, ReturnItemRow } from "./return-item-row"
import { ReturnSteps } from "./return-steps"
import Link from "next/link"

function format(date: Date) {
  return date.toLocaleDateString(undefined, { day: "2-digit", month: "2-digit", year: "numeric" })
}

function demoItems(): ReturnItem[] {
  const now = new Date()
  return [
    {
      id: "imac",
      title: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU',
      orderNumber: "#737423642",
      returnTerm: format(new Date(now.getFullYear(), 6, 21)), // 21.07.YYYY
      imageAlt: "iMac",
    },
    {
      id: "watch",
      title: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
      orderNumber: "#45632736",
      returnTerm: format(new Date(now.getFullYear(), 6, 26)),
      imageAlt: "Apple Watch",
    },
    {
      id: "ps5",
      title: "Sony Playstation 5 Digital Edition Console with Extra Blue Controller, and White PULSE 3D Headset",
      orderNumber: "#54628495",
      returnTerm: format(new Date(now.getFullYear(), 6, 24)),
      imageAlt: "Playstation 5",
    },
    {
      id: "iphone",
      title: "APPLE iPhone 15 5G phone, 256GB, Gold",
      orderNumber: "#64534294",
      returnTerm: format(new Date(now.getFullYear(), 6, 26)),
      imageAlt: "iPhone 15",
    },
    {
      id: "xbox",
      title: "Xbox Series X Diablo IV Bundle + Xbox Wireless Controller Carbon Black + Dual Controller Charge Dock",
      orderNumber: "#98475625",
      returnTerm: format(new Date(now.getFullYear(), 6, 21)),
      imageAlt: "Xbox bundle",
    },
  ]
}

export default function ReturnsClient() {
  const [items] = React.useState<ReturnItem[]>(demoItems)
  const [selectedId, setSelectedId] = React.useState<string | null>("ps5")

  const onToggle = (id: string, checked: boolean) => {
    // single-select behavior like in the design
    setSelectedId(checked ? id : null)
  }

  return (
    <div className="space-y-6">
      <ReturnSteps current={1} />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">1. Select the product you want to return:</h2>

        <div className="space-y-3">
          {items.map((it) => (
            <ReturnItemRow key={it.id} item={it} selected={selectedId === it.id} onSelect={(v) => onToggle(it.id, v)} />
          ))}
        </div>
      </section>

      <div className="flex items-center justify-between">
        <Button variant="outline">Cancel</Button>
        {selectedId ? (
          <Button asChild className="min-w-[200px]">
            <Link href={{ pathname: "/returns/reason", query: { item: selectedId } }}>Next: Return reason</Link>
          </Button>
        ) : (
          <Button className="min-w-[200px]" disabled>
            Next: Return reason
          </Button>
        )}
      </div>

      {/* Reference image for developers/designers (not shown to end-users) */}
      <div className="sr-only">
        <img src="/images/product-return-reference.png" alt="Product return form reference" />
      </div>
    </div>
  )
}
