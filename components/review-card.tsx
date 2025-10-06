"use client"

import { CheckCircle2 } from "lucide-react"
import { RatingStars } from "./rating-stars"
import type { Review } from "@/data/reviews"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.dateISO).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="border-b pb-6 last:border-b-0">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-9 w-9 shrink-0 rounded-full bg-muted" aria-hidden />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-medium">{review.author}</h3>
              {review.verified && (
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  Verified purchase
                </span>
              )}
            </div>
            <time className="text-xs text-muted-foreground">{date}</time>
          </div>

          <div className="mt-2">
            <RatingStars value={review.rating} aria-label={`Rated ${review.rating} out of 5`} />
          </div>

          <p className="mt-3 text-sm leading-relaxed text-foreground/90">{review.body}</p>

          {review.images && review.images.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2 sm:max-w-xs">
              {review.images.map((src, i) => (
                <img
                  key={i}
                  src={src || "/placeholder.svg"}
                  alt="Customer uploaded product photo"
                  className={cn("h-20 w-full rounded object-cover")}
                  loading="lazy"
                />
              ))}
            </div>
          )}

          <div className="mt-3 flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Was it helpful to you?</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs bg-transparent">
                Yes: {review.helpfulYes}
              </Button>
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs bg-transparent">
                No: {review.helpfulNo}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
