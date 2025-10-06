"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ReturnStepper } from "@/components/return-stepper"
import { RefundOptionCard } from "@/components/refund-option-card"

export default function RefundChoicePage() {
  const [choice, setChoice] = React.useState<string>("exchange")

  const steps = [
    { label: "My products", status: "done" as const },
    { label: "Return reason", status: "done" as const },
    { label: "Delivery option", status: "done" as const },
    { label: "Refund choice", status: "current" as const },
    { label: "Confirmation", status: "upcoming" as const },
  ]

  const handleNext = () => {
    // placeholder action; wire to confirmation route or server action later
    alert(`Selected refund option: ${choice}`)
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 md:py-10">
      <h1 className="text-balance text-2xl font-semibold md:text-3xl">Product return form</h1>

      <div className="mt-4">
        <ReturnStepper steps={steps} />
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">4. Select the money back option:</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <RefundOptionCard
            id="voucher"
            name="refund-option"
            title="I want a Shopping Voucher"
            description="Receive an instant voucher that you can use for new orders."
            checked={choice === "voucher"}
            onChange={setChoice}
          />
          <RefundOptionCard
            id="money"
            name="refund-option"
            title="I want my money back"
            description="We will transfer the money to your account. This can take up to 5 days."
            checked={choice === "money"}
            onChange={setChoice}
          />
          <RefundOptionCard
            id="exchange"
            name="refund-option"
            title="I want another product"
            description="We will replace your product with a new one or one close to the one you returned."
            checked={choice === "exchange"}
            onChange={setChoice}
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button variant="outline">Prev: Delivery</Button>
          <Button onClick={handleNext}>Next: Confirmation</Button>
        </div>
      </section>
    </main>
  )
}
