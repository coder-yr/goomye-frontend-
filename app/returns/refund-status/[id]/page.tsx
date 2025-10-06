import { RefundStatusTimeline } from "@/components/refund-status-timeline"
import { DetailCard } from "@/components/refund-detail-card"
import { Button } from "@/components/ui/button"

type Params = { params: { id: string } }

export default function RefundStatusPage({ params }: Params) {
  const id = params.id

  // Example mocked data (replace with real API later)
  const steps = [
    {
      title: "Refund the amount",
      dateText: "Estimated time will be 22 September 2024",
      description: "We will return the amount depending on the option chosen.",
      done: false,
      icon: "wallet" as const,
    },
    {
      title: "Product check",
      dateText: "Estimated time will be 22 September 2024",
      description:
        "We will carefully check the product and inform you as soon as possible if you are eligible for a refund.",
      done: false,
      icon: "clip" as const,
    },
    {
      title: "Products in the courier’s warehouse",
      dateText: "Estimated time will be 20 September 2024",
      description: "The products have arrived at the courier's headquarters and are ready to be shipped to the seller.",
      done: false,
      icon: "warehouse" as const,
    },
    {
      title: "Pick up product from the address",
      dateText: "16–17 September 2024",
      description: "Estimated time will be 2–3 business days.",
      done: true,
      icon: "truck" as const,
    },
    {
      title: "Refund accepted",
      dateText: "13 September 2024 at 12:07",
      description: "",
      done: true,
      icon: "check" as const,
    },
    {
      title: "Order placed",
      dateText: "12 September 2024 at 10:45",
      description: "",
      done: true,
      icon: "package" as const,
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      <h1 className="text-balance text-2xl font-semibold md:text-3xl">{`Track the refund of order #${id}`}</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr]">
        {/* Left timeline */}
        <section aria-label="Refund progress" className="rounded-xl border bg-card p-5">
          <RefundStatusTimeline steps={steps} />
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="outline">Back to your account</Button>
            <Button variant="destructive">Cancel the refund</Button>
          </div>
        </section>

        {/* Right details */}
        <div className="grid grid-cols-1 gap-4">
          <DetailCard title="Details of the refund">
            <dl className="grid grid-cols-1 gap-2">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-foreground">Refund reason</dt>
                <dd className="text-right">
                  The product received is broken, malfunctioning, or damaged, making it unusable.
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-foreground">Due date</dt>
                <dd className="text-right">12 September 2024</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-foreground">Package condition</dt>
                <dd className="text-right">Return a non‑functional but unsealed product.</dd>
              </div>
            </dl>
          </DetailCard>

          <DetailCard title="The amount to be refunded">
            <p className="text-lg font-semibold text-foreground">$7,191.00</p>
          </DetailCard>

          <DetailCard title="The chosen refund method">
            <p className="mb-2 text-foreground">Bank transfer refund</p>
            <p>The refund is processed by transferring the funds directly to your bank account.</p>
            <p className="mt-3 rounded-md bg-emerald-600/10 px-3 py-2 text-emerald-700 dark:text-emerald-400">
              Refunds may take up to 3–4 additional business days to reflect in your bank account from the date of
              initiating it.
            </p>
          </DetailCard>
        </div>
      </div>

      {/* Reference image (optional for devs/design) */}
      <figure className="sr-only">
        <img src="/images/figma/refund-status-reference.png" alt="Refund status reference mockup" />
        <figcaption>Refund Status design reference</figcaption>
      </figure>
    </main>
  )
}
