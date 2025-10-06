"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export type StatusFilter = "all" | "Confirmed" | "In transit" | "Cancelled"
export type DateRange = "7" | "30" | "90" | "all"

export function OrdersToolbar({
  value,
  onChange,
}: {
  value: {
    query: string
    status: StatusFilter
    range: DateRange
  }
  onChange: (v: { query?: string; status?: StatusFilter; range?: DateRange }) => void
}) {
  const [localQuery, setLocalQuery] = React.useState(value.query)

  React.useEffect(() => setLocalQuery(value.query), [value.query])

  const applySearch = () => onChange({ query: localQuery })

  const filters: { key: StatusFilter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "Confirmed", label: "Confirmed" },
    { key: "In transit", label: "In Transit" },
    { key: "Cancelled", label: "Cancelled" },
  ]

  const rangeLabel: Record<DateRange, string> = {
    "7": "Last 7 days",
    "30": "Last 30 days",
    "90": "Last 90 days",
    all: "All time",
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Input
            placeholder="Search by Order ID"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applySearch()}
            aria-label="Search by Order ID"
            className="h-10"
          />
        </div>
        <Button className="h-10" onClick={applySearch}>
          Search
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-10 bg-transparent">
              {rangeLabel[value.range]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(rangeLabel).map(([key, label]) => (
              <DropdownMenuItem key={key} onClick={() => onChange({ range: key as DateRange })}>
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Show:</span>
        <div className="flex items-center gap-2">
          {filters.map((f) => {
            const active = value.status === f.key
            return (
              <button
                key={f.key}
                onClick={() => onChange({ status: f.key })}
                className={cn(
                  "rounded-md border px-2.5 py-1.5 transition-colors",
                  active
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "bg-card border-border text-muted-foreground hover:bg-muted",
                )}
                aria-pressed={active}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
