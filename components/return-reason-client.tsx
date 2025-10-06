"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ReturnSteps } from "./return-steps"

export default function ReturnReasonClient() {
  // demo-selected product (could be hydrated from query/searchParams)
  const product = {
    title:
      'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Silver',
    orderNumber: "#737423642",
    returnTerm: "21.07.2023",
  }

  const [condition, setCondition] = React.useState<string>("mistaken")
  const [reasons, setReasons] = React.useState<Record<string, boolean>>({
    incorrect: true,
    unsatisfactory: true,
    defective: false,
    changedMind: false,
    misleading: false,
  })

  const canContinue = Boolean(condition) && Object.values(reasons).some(Boolean)

  return (
    <div className="space-y-6">
      <ReturnSteps current={2} />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">2. Select the reason for returning:</h2>
        <p className="text-sm text-muted-foreground">
          To help us solve your request as quickly as possible, please answer the following questions.
        </p>

        {/* Selected product summary */}
        <div className="grid grid-cols-1 items-center gap-4 rounded-lg border bg-background p-4 md:grid-cols-[auto,1fr,auto]">
          <div className="relative h-14 w-16 overflow-hidden rounded-md border bg-muted">
            <Image
              src="/product-thumbnail.png"
              alt="Selected product thumbnail"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <p className="text-sm text-pretty text-foreground">{product.title}</p>
          <div className="flex flex-col items-start gap-1 text-sm text-muted-foreground md:items-end">
            <p>
              <span className="mr-2 text-foreground/70">Order Number:</span>
              <span className="font-medium text-foreground">{product.orderNumber}</span>
            </p>
            <p>
              <span className="mr-2 text-foreground/70">Return Term:</span>
              <span className="font-medium text-foreground">{product.returnTerm}</span>
            </p>
          </div>
        </div>

        {/* Two-question grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Condition (single choice) */}
          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-sm font-medium">What is the condition of the product?</h3>
            <RadioGroup value={condition} onValueChange={setCondition} className="space-y-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem id="sealed" value="sealed" />
                <Label htmlFor="sealed" className="text-sm font-normal">
                  I want to return a sealed product
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem id="mistaken" value="mistaken" />
                <Label htmlFor="mistaken" className="text-sm font-normal">
                  I want to return an mistaken order
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem id="functional-unsealed" value="functional-unsealed" />
                <Label htmlFor="functional-unsealed" className="text-sm font-normal">
                  I want to return a functional but unsealed product
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem id="nonfunctional-unsealed" value="nonfunctional-unsealed" />
                <Label htmlFor="nonfunctional-unsealed" className="text-sm font-normal">
                  I want to return a non-functional but unsealed product
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem id="not-delivered" value="not-delivered" />
                <Label htmlFor="not-delivered" className="text-sm font-normal">
                  The product was not delivered
                </Label>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  Other condition
                </Button>
              </div>
            </RadioGroup>
          </div>

          {/* Main reasons (multi select) */}
          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-sm font-medium">What is the main reason for returning the product?</h3>
            <div className="space-y-3">
              {[
                { key: "defective", label: "Defective or Damaged Product" },
                { key: "incorrect", label: "Incorrect Product Received" },
                { key: "unsatisfactory", label: "Unsatisfactory Quality" },
                { key: "changedMind", label: "Changed Mind/Not as Expected" },
                { key: "misleading", label: "Misleading Product Information" },
              ].map((r) => (
                <div key={r.key} className="flex items-center gap-3">
                  <Checkbox
                    id={`r-${r.key}`}
                    checked={reasons[r.key as keyof typeof reasons]}
                    onCheckedChange={(v) => setReasons((prev) => ({ ...prev, [r.key]: Boolean(v) }))}
                  />
                  <Label htmlFor={`r-${r.key}`} className="text-sm font-normal">
                    {r.label}
                  </Label>
                </div>
              ))}
              <div>
                <Button variant="outline" size="sm">
                  I have another reason
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Alert className="border-primary/20 bg-primary/5">
          <AlertDescription className="text-sm">
            Kindly select your reasons for returning the product thoughtfully, as this will aid us in expediting your
            request resolution and ensuring your utmost satisfaction with the overall purchase experience.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href="/returns">Prev: Choose the product</Link>
        </Button>
        <Button asChild className="min-w-[200px]" disabled={!canContinue}>
          <Link href="/returns/delivery">Next: Delivery method</Link>
        </Button>
      </div>

      {/* Reference image (hidden from users) */}
      <div className="sr-only">
        <img src="/images/product-return-reason-reference.png" alt="Product return reason reference" />
      </div>
    </div>
  )
}
