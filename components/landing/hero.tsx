"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gradient-to-b from-muted to-background py-12" aria-label="Featured collection">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-xl border bg-card shadow-lg">
          <div className="grid md:grid-cols-2">
            <div
              className={`p-8 md:p-12 flex flex-col justify-center gap-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary animate-pulse">
                New in
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                New arrivals picked just for you
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Level up your everyday carry with our latest drops across fashion, tech, and lifestyle.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-md hover:shadow-lg"
                >
                  Explore now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform"
                >
                  Shop men
                </Button>
              </div>
            </div>
            <div
              className={`aspect-[16/9] md:aspect-auto md:h-[480px] transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative h-full w-full group">
                <img
                  src="/placeholder.svg"
                  alt="Lifestyle model showcasing new arrivals"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
