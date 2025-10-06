import Image from "next/image"
import { OrdersClient } from "@/components/orders-client"
import type { OrderRecord } from "@/components/orders-table"

// Deterministic PRNG for stable demo data
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function toISODate(d: Date) {
  // yyyy-mm-dd
  return d.toISOString().slice(0, 10)
}

function generateMockOrders(count: number): OrderRecord[] {
  const rand = mulberry32(42)
  const now = new Date()
  const statuses: OrderRecord["status"][] = ["Confirmed", "Cancelled", "In transit", "Pre-order"]

  const arr: OrderRecord[] = []
  for (let i = 0; i < count; i++) {
    // Spread dates across the last ~540 days so filters work
    const daysAgo = Math.floor(rand() * 540)
    const due = new Date(now)
    due.setDate(now.getDate() - daysAgo)

    // Prices between $20 and $6000, some large totals sprinkled in
    const base = 2000 + Math.floor(rand() * 598000) // cents
    const priceCents = base - (base % 100) // whole dollars

    // Rotate statuses with light randomness
    const sIdx = (i + Math.floor(rand() * 3)) % statuses.length
    const status = statuses[sIdx]

    // Order ID like #FWB#########
    const idNum = (100000000 + i).toString().padStart(9, "0")
    const id = `#FWB${idNum}`

    arr.push({
      id,
      dueDate: toISODate(due),
      priceCents,
      status,
    })
  }

  // Ensures stable descending date sort on load
  return arr.sort((a, b) => +new Date(b.dueDate) - +new Date(a.dueDate))
}

const MOCK_ORDERS: OrderRecord[] = generateMockOrders(1000)

export default function OrdersPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-4 text-pretty text-2xl font-semibold">My orders</h1>

      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <OrdersClient initialOrders={MOCK_ORDERS} />
      </div>

      {/* Reference image (not shown to users by default; keep for developers) */}
      <div className="sr-only">
        <Image
          src="/images/my-orders-reference.png"
          alt="Figma reference for My orders page"
          width={1560}
          height={1536}
          priority
        />
      </div>
    </main>
  )
}
