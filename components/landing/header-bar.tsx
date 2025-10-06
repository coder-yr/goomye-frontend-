"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HeaderBar() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 lg:px-6 py-3 flex items-center gap-3">
        <Link href="/" className="font-semibold text-lg text-primary">
          Shoply
          <span className="sr-only">Go to homepage</span>
        </Link>

        <form className="flex-1 max-w-2xl" role="search" aria-label="Site search" onSubmit={(e) => e.preventDefault()}>
          <Input className="w-full" placeholder="Search for products, brands and more" />
        </form>

        <nav aria-label="Quick actions" className="flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button variant="ghost">Wishlist</Button>
          <Button className="bg-primary text-primary-foreground hover:opacity-90">Cart</Button>
        </nav>
      </div>
    </header>
  )
}
