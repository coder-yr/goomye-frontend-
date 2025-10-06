"use client"

import * as React from "react"
import { OrdersToolbar, type StatusFilter, type DateRange } from "./orders-toolbar"
import { OrdersTable, type OrderRecord } from "./orders-table"
import { Pagination } from "./pagination"

export type OrdersClientProps = {
  initialOrders: OrderRecord[]
}

const PAGE_SIZE = 10

export function OrdersClient({ initialOrders }: OrdersClientProps) {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState<StatusFilter>("all")
  const [range, setRange] = React.useState<DateRange>("all")
  const [page, setPage] = React.useState(3) // to mirror the screenshot

  const filtered = React.useMemo(() => {
    const now = new Date()
    const minDate = range === "all" ? new Date(0) : new Date(now.getTime() - Number(range) * 24 * 60 * 60 * 1000)

    return initialOrders
      .filter((o) => (query ? o.id.toLowerCase().includes(query.toLowerCase()) : true))
      .filter((o) => (status === "all" ? true : o.status === status))
      .filter((o) => new Date(o.dueDate) >= minDate)
      .sort((a, b) => +new Date(b.dueDate) - +new Date(a.dueDate))
  }, [initialOrders, query, status, range])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const slice = filtered.slice(start, start + PAGE_SIZE)

  const showingFrom = filtered.length === 0 ? 0 : start + 1
  const showingTo = Math.min(start + slice.length, filtered.length)

  return (
    <div className="space-y-4">
      <OrdersToolbar
        value={{ query, status, range }}
        onChange={(v) => {
          if (v.query !== undefined) setQuery(v.query)
          if (v.status !== undefined) setStatus(v.status)
          if (v.range !== undefined) setRange(v.range)
          setPage(1)
        }}
      />

      <OrdersTable orders={slice} />

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>
          Showing {showingFrom}-{showingTo} of {filtered.length}
        </p>
        <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
      </div>

      <div>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm hover:bg-muted"
        >
          <span aria-hidden>←</span> Back to Homepage
        </a>
      </div>
    </div>
  )
}
