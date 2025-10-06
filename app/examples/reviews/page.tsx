import { ReviewSummary } from "@/components/review-summary"
import { ReviewList } from "@/components/review-list"
import { reviews } from "@/data/reviews-example"

export default function ReviewsExamplePage() {
  const mockData = {
    average: 4.5,
    histogram: { 5: 150, 4: 80, 3: 20, 2: 5, 1: 3 },
    total: 258,
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-balance text-2xl font-semibold text-foreground">Product reviews</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Example implementation of a rating summary and customer reviews list.
      </p>

      <div className="mt-6 space-y-6">
        <ReviewSummary
          average={mockData.average}
          histogram={mockData.histogram}
          total={mockData.total}
        />
        <ReviewList reviews={reviews} />
      </div>
    </main>
  )
}
