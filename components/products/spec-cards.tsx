import { Card } from "@/components/ui/card"

type Specs = {
  display: { type: string; diagonal: string; resolution: string; format: string }
  processor: { type: string; model: string; physicalCores: number; virtualCores: number; process: string }
  ram: { capacity: string; max: string }
  storage: { capacity: string }
}

export default function SpecCards({ specs }: { specs: Specs }) {
  return (
    <div className="grid gap-4">
      <Card className="p-4">
        <h3 className="text-sm font-semibold text-foreground">Display</h3>
        <dl className="mt-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <dt>Screen Type</dt>
            <dd>{specs.display.type}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Diagonal</dt>
            <dd>{specs.display.diagonal}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Resolution</dt>
            <dd>{specs.display.resolution}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Format</dt>
            <dd>{specs.display.format}</dd>
          </div>
        </dl>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-semibold text-foreground">Processor</h3>
        <dl className="mt-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <dt>Processor Type</dt>
            <dd>{specs.processor.type}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Model</dt>
            <dd>{specs.processor.model}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Physical cores</dt>
            <dd>{specs.processor.physicalCores}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Virtual Cores</dt>
            <dd>{specs.processor.virtualCores}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Technology</dt>
            <dd>{specs.processor.process}</dd>
          </div>
        </dl>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-semibold text-foreground">RAM memory</h3>
        <dl className="mt-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <dt>Capacity</dt>
            <dd>{specs.ram.capacity}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Maximum memory</dt>
            <dd>{specs.ram.max}</dd>
          </div>
        </dl>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-semibold text-foreground">Storage</h3>
        <dl className="mt-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <dt>Capacity</dt>
            <dd>{specs.storage.capacity}</dd>
          </div>
        </dl>
      </Card>
    </div>
  )
}
