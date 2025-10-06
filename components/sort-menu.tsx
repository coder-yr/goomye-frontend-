"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ListFilter } from "lucide-react"
import { useState } from "react"

const options = ["Recommended", "Price: Low to High", "Price: High to Low", "Newest", "Top Rated"]

export function SortMenu() {
  const [active, setActive] = useState(options[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <ListFilter className="h-4 w-4" />
          <span className="hidden sm:inline">Sort</span>
          <span className="font-normal text-muted-foreground sm:ml-1">{active}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {options.map((opt) => (
          <DropdownMenuItem key={opt} onClick={() => setActive(opt)}>
            {opt}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
