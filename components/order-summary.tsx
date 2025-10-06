"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

type Shipping = {
  name: string
  line1: string
  line2?: string
  phone?: string
}

export default function OrderSummary(props: {
  orderId: string
  status: "Order placed" | "Preparing order" | "Shipped" | "Delivered"
  orderDate: string
  total: number
  currency: string
  shipping: Shipping
  contact: string
  payment: { brand: string; last4: string }
}) {
  const { orderId, status, orderDate, total, currency, shipping, contact, payment } = props

  return (
    <Card aria-label="Order summary">
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <SummaryCell
            label="Status"
            value={
              <span className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" aria-hidden />
                {status}
              </span>
            }
          />
          <SummaryCell label="Order #" value={orderId} />
          <SummaryCell label="Order date" value={orderDate} />
          <SummaryCell
            label="Total"
            value={
              <span className="font-medium">
                {currency} {total}
              </span>
            }
          />
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto]">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Shipping address</h3>
            <div className="text-sm text-muted-foreground">
              <p>{shipping.name}</p>
              <p>{shipping.line1}</p>
              {shipping.line2 ? <p>{shipping.line2}</p> : null}
              {shipping.phone ? <p>{shipping.phone}</p> : null}
            </div>
            <Button variant="outline" size="sm" className="mt-2 w-fit bg-transparent">
              Change address
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Contact details</h3>
              <p className="text-sm text-muted-foreground">{contact}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Payment method</h3>
              <p className="text-sm text-muted-foreground">
                {payment.brand} •••• {payment.last4}
              </p>
            </div>
          </div>

          <div className="flex items-start justify-end gap-2">
            <Button variant="outline" className="whitespace-nowrap bg-transparent">
              <Printer className="size-4" />
              <span className="sr-only">Print</span>
              View or Print receipt
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SummaryCell({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-md border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  )
}
