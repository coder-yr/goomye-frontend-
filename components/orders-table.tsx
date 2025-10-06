"use client"

import type React from "react"

import { StatusBadge } from "./status-badge"
import { cn } from "@/lib/utils"

export type OrderRecord = {
  id: string
  dueDate: string // ISO date
  priceCents: number
  status: "Confirmed" | "Cancelled" | "In transit" | "Pre-order"
}

export function OrdersTable({
  orders,
}: {
  orders: OrderRecord[]
}) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-muted/50">
          <tr className="text-muted-foreground">
            <Th>Order ID</Th>
            <Th>Due date</Th>
            <Th align="right">Price</Th>
            <Th>Status</Th>
            <Th />
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t">
              <Td className="font-medium">{o.id}</Td>
              <Td>{formatDate(o.dueDate)}</Td>
              <Td align="right" className="tabular-nums">
                {formatCurrency(o.priceCents)}
              </Td>
              <Td>
                <StatusBadge status={o.status} />
              </Td>
              <Td className="text-right text-muted-foreground">•••</Td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-3" />
    </div>
  )
}

function Th({
  children,
  align = "left",
}: {
  children: React.ReactNode
  align?: "left" | "right"
}) {
  return (
    <th
      scope="col"
      className={cn(
        "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide",
        align === "right" && "text-right",
      )}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode
  className?: string
  align?: "left" | "right"
}) {
  return <td className={cn("px-4 py-3 align-middle", align === "right" && "text-right", className)}>{children}</td>
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}
function formatCurrency(cents: number) {
  return (cents / 100).toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
}
