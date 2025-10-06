"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function FilterSidebar() {
  const [query, setQuery] = useState("")

  return (
    <aside aria-label="Filters" className="space-y-4">
      <div className="rounded-lg border bg-card">
        <div className="p-4">
          <h3 className="text-sm font-medium">Categories</h3>
          <div className="mt-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories"
              className="h-9"
            />
          </div>
        </div>
        <div className="border-t px-4 py-3">
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {[
              "TV, Audio-Video",
              "Desktop PC",
              "Gaming",
              "Monitors",
              "Laptops",
              "Consoles",
              "Tablets",
              "Phone",
              "Photo/Video",
              "Fashion",
              "Books",
            ].map((cat) => (
              <li key={cat} className="truncate">
                <a href="#" className="hover:text-foreground">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["price", "rating"]} className="rounded-lg border bg-card">
        <AccordionItem value="price" className="px-4">
          <AccordionTrigger className="py-3">Price</AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="flex items-center gap-2">
              <Input placeholder="Min" className="h-9" />
              <span className="text-muted-foreground">—</span>
              <Input placeholder="Max" className="h-9" />
              <Button size="sm">Apply</Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating" className="px-4">
          <AccordionTrigger className="py-3">Rating</AccordionTrigger>
          <AccordionContent className="pb-3">
            <div className="space-y-2">
              {[5, 4, 3].map((stars) => (
                <label key={stars} className="flex items-center gap-3 text-sm">
                  <Checkbox />
                  <span>{stars} stars & up</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shipping" className="px-4">
          <AccordionTrigger className="py-3">Shipping</AccordionTrigger>
          <AccordionContent className="pb-3">
            <div className="space-y-2">
              {["Free", "Express", "Standard"].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-sm">
                  <Checkbox />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color" className="px-4">
          <AccordionTrigger className="py-3">Color</AccordionTrigger>
          <AccordionContent className="pb-3">
            <div className="flex flex-wrap gap-2">
              {["#111827", "#6b7280", "#e5e7eb", "#60a5fa", "#34d399", "#f59e0b"].map((c) => (
                <button
                  key={c}
                  aria-label={`Filter by color ${c}`}
                  className="h-6 w-6 rounded-full border"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="delivery" className="px-4">
          <AccordionTrigger className="py-3">Delivery Method</AccordionTrigger>
          <AccordionContent className="pb-3">
            <div className="space-y-2 text-sm">
              {["Courier", "Pickup", "Drone"].map((opt) => (
                <label key={opt} className="flex items-center gap-3">
                  <Checkbox />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex gap-2">
        <Button className="flex-1">Apply filters</Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          Reset
        </Button>
      </div>
    </aside>
  )
}
