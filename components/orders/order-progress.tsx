"use client"

type Props = {
  steps: string[]
  currentIndex: number
}

export default function OrderProgress({ steps, currentIndex }: Props) {
  return (
    <div className="space-y-3">
      {/* Labels */}
      <div className="grid grid-cols-4 gap-4 text-xs sm:text-sm">
        {steps.map((s, i) => {
          const isActive = i === currentIndex
          const isDone = i < currentIndex
          return (
            <div key={s} className="flex items-center gap-2">
              <span
                aria-hidden
                className={[
                  "inline-flex size-2 rounded-full",
                  isDone || isActive ? "bg-primary" : "bg-muted-foreground/40",
                ].join(" ")}
              />
              <span
                aria-current={isActive ? "step" : undefined}
                className={isActive ? "font-medium" : "text-muted-foreground"}
              >
                {s}
              </span>
            </div>
          )
        })}
      </div>

      {/* Segmented bar */}
      <div className="h-2 rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary transition-all"
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          aria-hidden
        />
      </div>
    </div>
  )
}
