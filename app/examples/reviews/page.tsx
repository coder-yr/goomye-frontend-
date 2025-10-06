import { ReviewSummary } from "@/components/review-summary"
import { ReviewList } from "@/components/review-list"

export default function ReviewsExamplePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-balance text-2xl font-semibold text-foreground">Product reviews</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Example implementation of a rating summary and customer reviews list.
      </p>

      <div className="mt-6 space-y-6">
        <ReviewSummary />
        <ReviewList />
      </div>
    </main>
  )
}
