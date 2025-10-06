import { cn } from "@/lib/utils"

type Step = {
  label: string
  status?: "done" | "current" | "upcoming"
}

export function ReturnStepper({
  steps,
}: {
  steps: Step[]
}) {
  return (
    <nav aria-label="return progress" className="rounded-xl border bg-card p-4 md:p-6">
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs",
                step.status === "done" && "bg-primary text-primary-foreground border-primary",
                step.status === "current" && "border-primary text-primary",
                step.status === "upcoming" && "text-muted-foreground",
              )}
              aria-hidden="true"
            >
              {step.status === "done" ? "✓" : idx + 1}
            </span>
            <span
              className={cn(
                "text-sm",
                step.status === "current" ? "text-foreground font-medium" : "text-muted-foreground",
              )}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  )
}
