"use client"
import { cn } from "@/lib/utils"

type Step = {
  id: number
  label: string
  active?: boolean
  completed?: boolean
}

export function ReturnSteps({
  current = 1,
}: {
  current?: number
}) {
  const steps: Step[] = [
    { id: 1, label: "My products" },
    { id: 2, label: "Return reason" },
    { id: 3, label: "Delivery option" },
    { id: 4, label: "Refund choice" },
    { id: 5, label: "Confirmation" },
  ]

  return (
    <nav aria-label="Progress" className="rounded-lg border bg-background p-4">
      <ol className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
        {steps.map((s) => {
          const isActive = s.id === current
          const isCompleted = s.id < current
          return (
            <li key={s.id} className="flex min-w-[140px] flex-1 items-center gap-3">
              <span
                className={cn(
                  "inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs",
                  isCompleted && "bg-primary text-primary-foreground border-primary",
                  isActive && !isCompleted && "bg-primary/10 text-primary border-primary/30",
                  !isActive && !isCompleted && "bg-muted text-muted-foreground border-muted-foreground/20",
                )}
                aria-hidden="true"
              >
                {isCompleted ? (
                  // Check
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  s.id
                )}
              </span>
              <span className={cn("text-sm", isActive ? "text-foreground font-medium" : "text-muted-foreground")}>
                {s.label}
              </span>
              {s.id !== steps.length && (
                <span className="ml-3 hidden h-px flex-1 bg-border md:block" aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
