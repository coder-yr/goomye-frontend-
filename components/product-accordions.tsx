import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductAccordions() {
  return (
    <div className="rounded-lg border bg-card">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details">
          <AccordionTrigger className="px-4">Product Details</AccordionTrigger>
          <AccordionContent className="px-4 text-sm text-muted-foreground">
            Includes 24-inch 4.5K Retina display, 1080p FaceTime HD camera, studio-quality mics, and Wi‑Fi 6.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="specs">
          <AccordionTrigger className="px-4">Specifications</AccordionTrigger>
          <AccordionContent className="px-4 text-sm text-muted-foreground">
            Thunderbolt / USB 4 ports, Bluetooth 5.0, and support for Spatial Audio with Dolby Atmos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger className="px-4">Warranty</AccordionTrigger>
          <AccordionContent className="px-4 text-sm text-muted-foreground">
            1‑year limited hardware warranty and 90 days of complimentary technical support.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
