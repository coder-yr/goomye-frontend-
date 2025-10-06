"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ChevronRight } from "lucide-react"

interface VerifyEmailCardProps {
  email?: string
}

export function VerifyEmailCard({ email = "mark@gmail.com" }: VerifyEmailCardProps) {
  const { toast } = useToast()
  const [isResending, setIsResending] = useState(false)

  const handleResend = async () => {
    setIsResending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast({
      title: "Email sent",
      description: "We've sent another verification link to your email.",
    })
    setIsResending(false)
  }

  const handleContinue = () => {
    toast({
      title: "Check your email",
      description: "Please click the verification link in your email to continue.",
    })
  }

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="space-y-1 px-0">
        <CardTitle className="text-2xl font-semibold tracking-tight">Verify your email</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          We've sent a link to your email address: <span className="font-medium text-foreground">{email}</span>
          <br />
          Please follow the link inside to continue.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <Button onClick={handleContinue} className="w-full bg-success hover:bg-success/90 text-white h-12" size="lg">
          Continue
        </Button>

        <p className="text-sm text-muted-foreground">
          Didn't receive an email?{" "}
          <button
            onClick={handleResend}
            disabled={isResending}
            className="inline-flex items-center gap-1 font-medium text-success hover:underline disabled:opacity-50"
          >
            Resend
            <ChevronRight className="h-3 w-3" />
          </button>
        </p>
      </CardContent>
    </Card>
  )
}
