import Image from "next/image"
import { ResetPasswordForm } from "@/components/reset-password-form"

export default function ResetPasswordPage() {
  return (
    <main className="mx-auto w-full max-w-6xl min-h-dvh grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-10 md:py-16">
      {/* Left brand/marketing column */}
      <section className="hidden md:flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-pretty">
          The easiest way to shop
          <br /> everything you need
        </h2>

        {/* Simple collage to echo the reference layout */}
        <div className="relative grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-lg overflow-hidden bg-card border">
            <Image
              src="/lifestyle-fashion-shot.jpg"
              alt=""
              width={420}
              height={280}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="rounded-full overflow-hidden size-24 border self-start justify-self-center">
            <Image
              src="/customer-avatar.png"
              alt=""
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-full overflow-hidden size-24 border self-center justify-self-end">
            <Image
              src="/customer-avatar-2.jpg"
              alt=""
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden bg-card border self-end">
            <Image
              src="/product-grid.jpg"
              alt=""
              width={220}
              height={140}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Subtle rating card */}
        <div className="rounded-xl border bg-card p-4">
          <div className="h-3 w-2/3 rounded bg-muted" aria-hidden />
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="inline-block size-2.5 rounded-full bg-success" aria-hidden />
            ))}
          </div>
          <span className="sr-only">Highly rated by customers</span>
        </div>
      </section>

      {/* Right form column */}
      <section className="flex flex-col justify-center">
        <div className="mx-auto w-full max-w-md">
          <ResetPasswordForm />
          {/* Developer note: reference image stored for parity, not rendered */}
          <span className="sr-only">Design reference available at /images/reset-password-reference.png</span>
        </div>
      </section>
    </main>
  )
}
