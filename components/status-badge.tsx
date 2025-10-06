"use client"

import { cn } from "@/lib/utils"

type Status = "Confirmed" | "Cancelled" | "In transit" | "Pre-order"

export function StatusBadge({
  status,
  className,
}: {
  status: Status
  className?: string
}) {
  const styles: Record<Status, { bg: string; dot: string; text: string }> = {
    Confirmed: {
      bg: "bg-success/15 text-[color:var(--color-success)]",
      dot: "bg-[color:var(--color-success)]",
      text: "text-[color:var(--color-success)]",
    },
    "In transit": {
      bg: "bg-muted text-muted-foreground",
      dot: "bg-muted-foreground/70",
      text: "text-muted-foreground",
    },
    Cancelled: {
      bg: "bg-destructive/10 text-destructive-foreground",
      dot: "bg-destructive",
      text: "text-destructive-foreground",
    },
    "Pre-order": {
      bg: "bg-primary/10 text-primary",
      dot: "bg-primary",
      text: "text-primary",
    },
  }

  const s = styles[status]

  return (
    <span
      className={cn("inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-medium", s.bg, className)}
      aria-label={`Status: ${status}`}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      <span className={cn(s.text)}>{status}</span>
    </span>
  )
}
