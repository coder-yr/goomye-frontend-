export const metadata = {
  title: "Product return - Reason",
}

import ReturnReasonClient from "@/components/return-reason-client"

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-10">
      <h1 className="mb-4 text-balance text-2xl font-semibold tracking-tight">Product return form</h1>
      <ReturnReasonClient />
    </main>
  )
}
