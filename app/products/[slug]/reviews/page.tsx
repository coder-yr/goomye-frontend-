import { getAverage, getHistogram, reviews as allReviews } from "@/data/reviews"
import { ReviewSummary } from "@/components/review-summary"
import { ReviewList } from "@/components/review-list"
import Link from "next/link"

export default function ProductReviewsPage({ params }: { params: { slug: string } }) {
  const productReviews = allReviews.filter((r) => r.productId === params.slug)
  const product = productReviews.length > 0 ? { id: params.slug, title: "Product" } : null
  const average = getAverage(productReviews)
  const histogram = getHistogram(productReviews)

  return (
    <main className="container mx-auto max-w-5xl px-4 py-6 md:py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex items-center gap-2 text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
          </li>
          {product ? (
            <>
              <li>/</li>
              <li>
                <Link href={`/products/${product.id}`} className="hover:text-foreground">
                  {product.title}
                </Link>
              </li>
            </>
          ) : null}
          <li>/</li>
          <li className="text-foreground">Reviews</li>
        </ol>
      </nav>

      <header className="mb-6">
        <h1 className="text-balance text-2xl font-semibold md:text-3xl">
          {product ? `${product.title} — Reviews` : "Product Reviews"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Read what verified customers are saying. Photos may be submitted by customers.
        </p>
      </header>

      <div className="grid gap-6">
        <ReviewSummary average={average} histogram={histogram} total={productReviews.length} />
        <ReviewList reviews={productReviews} />
      </div>
    </main>
  )
}
