"use client"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function RefundOptionCard({
  id,
  title,
  description,
  checked,
  onChange,
  name,
}: {
  id: string
  name: string
  title: string
  description: string
  checked?: boolean
  onChange?: (value: string) => void
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "group relative flex cursor-pointer flex-col rounded-xl border bg-card p-4 transition",
        checked ? "border-primary ring-2 ring-primary/20" : "hover:border-foreground/40",
      )}
    >
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={name}
          type="radio"
          className="mt-1 h-4 w-4 accent-current text-primary"
          checked={checked}
          onChange={() => onChange?.(id)}
          aria-describedby={`${id}-desc`}
        />
        <div>
          <Label htmlFor={id} className="text-base">
            {title}
          </Label>
          <p id={`${id}-desc`} className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </label>
  )
}
