"use client"

import type { Review } from "@/data/reviews"
import { ReviewCard } from "./review-card"
import { Button } from "@/components/ui/button"

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <section className="rounded-lg border bg-card p-4 md:p-6">
      <div className="grid gap-6">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="outline">View more reviews</Button>
      </div>
    </section>
  )
}
