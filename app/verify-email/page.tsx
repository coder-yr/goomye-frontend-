import Image from "next/image"
import { VerifyEmailCard } from "@/components/verify-email-card"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column - Marketing/Brand */}
      <div className="hidden lg:flex flex-col gap-8 p-12 bg-background">
        {/* Logo */}
        <div>
          <Image
            src="/circular-logo-with-goomiye-text.jpg"
            alt="GOOMIYE Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-4xl font-semibold tracking-tight max-w-md leading-tight">
          The easiest way to shop everything you need
        </h1>

        {/* Lifestyle Imagery */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Main fashion image */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/lifestyle-fashion-shot.jpg" alt="Fashion lifestyle" fill className="object-cover" />
            </div>

            {/* Floating customer avatars */}
            <div className="absolute -top-8 -right-4 w-16 h-16 rounded-full border-4 border-background shadow-lg overflow-hidden">
              <Image src="/customer-avatar.png" alt="Customer" fill className="object-cover" />
            </div>
            <div className="absolute top-20 -right-8 w-20 h-20 rounded-full border-4 border-background shadow-lg overflow-hidden">
              <Image src="/customer-avatar-2.jpg" alt="Customer" fill className="object-cover" />
            </div>
            <div className="absolute top-48 -left-6 w-14 h-14 rounded-full border-4 border-background shadow-lg overflow-hidden">
              <Image src="/customer-avatar.png" alt="Customer" fill className="object-cover" />
            </div>
            <div className="absolute bottom-12 right-16 w-14 h-14 rounded-full border-4 border-background shadow-lg overflow-hidden">
              <Image src="/customer-avatar.png" alt="Customer" fill className="object-cover" />
            </div>

            {/* 5-star review card */}
            <div className="absolute -bottom-12 -left-8 bg-background rounded-2xl shadow-xl p-6 w-64">
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded w-3/4"></div>
                <div className="h-2 bg-muted rounded w-full"></div>
                <div className="h-2 bg-muted rounded w-2/3"></div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-success" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Product demo on phone */}
            <div className="absolute -bottom-6 right-8 w-40 h-32 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/product-grid.jpg" alt="Product demo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Verify Email Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <VerifyEmailCard email="mark@gmail.com" />
        </div>
      </div>
    </div>
  )
}
