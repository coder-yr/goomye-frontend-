import { Breadcrumbs } from "@/components/products/breadcrumbs"
import { FilterSidebar } from "@/components/products/filter-sidebar"
import { SortMenu } from "@/components/products/sort-menu"
import { ProductsGrid } from "@/components/products/products-grid"

export default async function ProductsPage() {
  return (
    <main className="container mx-auto max-w-screen-2xl px-4 py-6">
      <div className="mb-4">
        <Breadcrumbs />
      </div>

      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-balance text-2xl font-semibold">Electronics</h1>
        <SortMenu />
      </header>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <FilterSidebar />
        </div>
        <div className="lg:col-span-9">
          <ProductsGrid />
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="rounded-md border bg-card px-4 py-2 text-sm hover:bg-muted"
              aria-label="Load more products"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
