"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function RatingStars({
  value,
  className,
  size = 16,
  "aria-label": ariaLabel,
}: {
  value: number
  className?: string
  size?: number
  "aria-label"?: string
}) {
  const full = Math.floor(value)
  const rest = 5 - full
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={ariaLabel ?? `${value} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`full-${i}`} className="text-primary" style={{ width: size, height: size }} fill="currentColor" />
      ))}
      {Array.from({ length: rest }).map((_, i) => (
        <Star key={`empty-${i}`} className="text-muted-foreground/30" style={{ width: size, height: size }} />
      ))}
    </div>
  )
}
