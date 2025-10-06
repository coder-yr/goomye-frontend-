export const metadata = {
  title: "Product return form",
}

import ReturnsClient from "@/components/returns-client"

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:py-10">
      <h1 className="mb-4 text-balance text-2xl font-semibold tracking-tight">Product return form</h1>
      <ReturnsClient />
    </main>
  )
}
