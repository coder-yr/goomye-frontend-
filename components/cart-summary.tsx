"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type SummaryProps = {
  subtotal: number
  shipping?: number | null // null/undefined means unknown
  tax?: number | null
  sale?: number // negative number to subtract
  currency?: "USD"
  onApplyCode?: (code: string) => void
}

export function CartSummary({
  subtotal,
  shipping = null,
  tax = null,
  sale = 0,
  currency = "USD",
  onApplyCode,
}: SummaryProps) {
  const [codeOpen, setCodeOpen] = useState(false)
  const [code, setCode] = useState("")

  const total = subtotal + (shipping ?? 0) + (tax ?? 0) + (sale ?? 0)

  return (
    <aside aria-label="Order summary" className="w-full">
      <div className="sticky top-4">
        <h2 className="mb-4 text-lg font-medium">Order summary</h2>
        <Card className="space-y-4 rounded-xl p-5">
          <Row label="Subtotal" value={fmt(subtotal, currency)} />
          <Row label="Shipping" value={shipping === null ? "—" : fmt(shipping, currency)} />
          <Row
            label="Estimated Tax"
            value={
              tax === null ? (
                <button
                  className="underline underline-offset-4 text-muted-foreground hover:text-foreground"
                  onClick={() => alert("Tax calculation demo")}
                >
                  Calculate
                </button>
              ) : (
                fmt(tax, currency)
              )
            }
          />
          <Row
            label="Promo code"
            value={
              codeOpen ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter code"
                    className="h-9"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      onApplyCode?.(code)
                      setCode("")
                      setCodeOpen(false)
                    }}
                  >
                    Apply
                  </Button>
                </div>
              ) : (
                <button
                  className="underline underline-offset-4 text-muted-foreground hover:text-foreground"
                  onClick={() => setCodeOpen(true)}
                >
                  Enter code
                </button>
              )
            }
          />
          {!!sale && <Row label="Sale" value={<span className="text-destructive">{fmt(sale, currency)}</span>} />}

          <div className="mt-2 flex items-center justify-between">
            <span className="text-base font-medium">Total</span>
            <div className="text-right">
              <div className="text-xs uppercase text-muted-foreground">{currency}</div>
              <div className="text-xl font-semibold">{fmt(total, currency)}</div>
            </div>
          </div>

          <Button className="mt-2 h-11 rounded-xl bg-success text-success-foreground hover:opacity-90">Checkout</Button>

          <Button
            variant="outline"
            className="h-11 rounded-xl bg-transparent"
            onClick={() => alert("PayPal demo")}
            aria-label="Checkout with PayPal"
          >
            {/* Simple PayPal wordmark for demo */}
            <span className="sr-only">PayPal</span>
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8.5 21H6.2l.3-2h2c1 0 1.8-.7 2-1.6l.9-5.4C11.7 10.8 12.5 10 13.5 10H16c.9 0 1.6.7 1.6 1.6 0 .1 0 .2-.1.4l-.7 4.2c-.2 1.3-1.3 2.3-2.6 2.3H12l-.3 2H8.5z"
              />
            </svg>
            PayPal
          </Button>
        </Card>
      </div>
    </aside>
  )
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="text-sm">{value}</div>
    </div>
  )
}

function fmt(n: number, currency: "USD") {
  const sign = n < 0 ? "-" : ""
  const abs = Math.abs(n)
  return `${sign}$${abs}`
}
