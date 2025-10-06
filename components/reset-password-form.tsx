"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ResetPasswordForm() {
  const [email, setEmail] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) {
      toast({ title: "Email required", description: "Please enter your email address." })
      return
    }
    try {
      setLoading(true)
      // Simulate request latency
      await new Promise((r) => setTimeout(r, 900))
      toast({
        title: "Reset link sent",
        description: "Check your inbox for a link to reset your password.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-border">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-balance">Reset your password</h1>
          <p className="text-sm text-muted-foreground">
            Enter the email address associated with your account. We&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-success text-success-foreground hover:bg-success/90"
          >
            {loading ? "Sending…" : "Send email"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          You didn’t forget your password?{" "}
          <Link href="/signin" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
