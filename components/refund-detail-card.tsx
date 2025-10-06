import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DetailCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="py-4">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm text-muted-foreground">{children}</CardContent>
    </Card>
  )
}
