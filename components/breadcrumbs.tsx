"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-muted-foreground">
          <ChevronRight className="h-4 w-4" />
        </li>
        <li>
          <span className="text-muted-foreground">Products</span>
        </li>
        <li aria-hidden="true" className="text-muted-foreground">
          <ChevronRight className="h-4 w-4" />
        </li>
        <li aria-current="page" className="font-medium text-foreground">
          Electronics
        </li>
      </ol>
    </nav>
  )
}
