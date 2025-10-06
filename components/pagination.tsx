"use client"

import { Button } from "@/components/ui/button"

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number
  totalPages: number
  onChange: (p: number) => void
}) {
  const pages = windowWidthAwarePages(page, totalPages)

  return (
    <div className="flex items-center justify-end gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
      >
        {"<"}
      </Button>
      {pages.map((p, idx) =>
        typeof p === "number" ? (
          <Button
            key={`${p}-${idx}`}
            variant={p === page ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </Button>
        ) : (
          <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">
            …
          </span>
        ),
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        {">"}
      </Button>
    </div>
  )
}

function windowWidthAwarePages(page: number, total: number) {
  // Produce a compact paginator: 1 … p-1 p p+1 … total
  const set = new Set<number>([1, total, page, page - 1, page + 1])
  const sorted = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)
  const out: (number | "...")[] = []
  for (let i = 0; i < sorted.length; i++) {
    out.push(sorted[i])
    if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] > 1) out.push("...")
  }
  return out
}
