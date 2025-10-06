"use client"

import { Button } from "@/components/ui/button"
import { RatingStars } from "./rating-stars"

type Props = {
  average: number
  histogram: { 5: number; 4: number; 3: number; 2: number; 1: number }
  total: number
  onWriteReview?: () => void
}

const rows: Array<keyof Props["histogram"]> = [5, 4, 3, 2, 1]

export function ReviewSummary({ average, histogram, total, onWriteReview }: Props) {
  return (
    <section className="rounded-lg border bg-card p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-pretty text-xl font-semibold md:text-2xl">Reviews</h2>
          <div className="mt-2 flex items-center gap-3">
            <p className="text-2xl font-bold" aria-label={`${average} out of 5`}>
              {average.toFixed(2)}
            </p>
            <RatingStars value={average} size={18} />
            <span className="text-sm text-muted-foreground">({total} reviews)</span>
          </div>
        </div>
        <Button onClick={onWriteReview} className="self-start md:self-auto">
          Write a review
        </Button>
      </div>

      <div className="mt-6 grid gap-2">
        {rows.map((r) => {
          const count = histogram[r]
          const pct = total ? Math.round((count / total) * 100) : 0
          return (
            <div key={r} className="flex items-center gap-3">
              <span className="w-10 text-right text-sm text-muted-foreground">{r}</span>
              <div className="h-2 flex-1 rounded bg-muted">
                <div className="h-2 rounded bg-primary" style={{ width: `${pct}%` }} />
              </div>
              <span className="w-12 text-right text-sm text-muted-foreground">{count}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
