import { cn } from "@/lib/utils"
import { CheckCircle2, PackageOpen, ClipboardCheck, Truck, Warehouse, Wallet } from "lucide-react"

type Step = {
  title: string
  description: string
  dateText?: string
  done?: boolean
  icon?: "wallet" | "clip" | "warehouse" | "truck" | "package" | "check"
}

const iconMap = {
  wallet: Wallet,
  clip: ClipboardCheck,
  warehouse: Warehouse,
  truck: Truck,
  package: PackageOpen,
  check: CheckCircle2,
}

export function RefundStatusTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative border-l pl-5">
      {steps.map((s, i) => {
        const Icon = iconMap[s.icon ?? "clip"]
        return (
          <li key={i} className="mb-8 ml-2">
            <span
              className={cn(
                "absolute -left-[11px] mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border bg-background",
                s.done
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground/40 text-muted-foreground",
              )}
              aria-hidden="true"
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-sm font-semibold">{s.title}</h3>
            {s.dateText && <p className="text-xs text-muted-foreground">{s.dateText}</p>}
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
          </li>
        )
      })}
    </ol>
  )
}
