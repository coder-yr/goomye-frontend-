"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  images: string[]
  alt: string
}

export default function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[96px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={cn(
              "h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-muted",
              active === i && "ring-2 ring-primary",
            )}
          >
            <img
              src={src || "/wireless-earbuds-pro.jpg"}
              alt={`${alt} thumbnail ${i + 1}`}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          </button>
        ))}
      </div>

      <div className="order-1 rounded-lg border bg-card p-2 lg:order-2">
        <img
          src={images[active] || "/wireless-earbuds-pro.jpg"}
          alt={alt}
          className="h-[360px] w-full rounded-md object-contain md:h-[420px] lg:h-[520px]"
          crossOrigin="anonymous"
        />
      </div>
    </div>
  )
}
