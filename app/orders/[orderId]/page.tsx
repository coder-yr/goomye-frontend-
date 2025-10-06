import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import OrderSummary from "@/components/orders/order-summary"
import OrderProgress from "@/components/orders/order-progress"
import OrderItemRow from "@/components/orders/order-item-row"

type PageProps = {
  params: { orderId: string }
}

export default function OrderPage({ params }: PageProps) {
  // Sample data to mirror the design — replace with real data later via RSC or SWR.
  const order = {
    id: params.orderId,
    status: "Preparing order" as const,
    createdAt: "04/08/2024",
    total: 229,
    currency: "USD",
    shippingAddress: {
      name: "James Collins",
      line1: "280 Suzanne Throughway",
      line2: "New York, Breanabury, OR 45801, US",
      phone: "+44 000 000 0001",
    },
    contact: "jamescollins@site.so",
    payment: { brand: "MasterCard", last4: "4242" },
    estDelivery: "Wednesday, Aug 7 2024",
    items: [
      {
        id: "1",
        title: "Nike SB Zoom Blazer Mid Electric",
        price: 150,
        image: "/nike-shoe-product.jpg",
        attrs: { Color: "White", Size: "US 10" },
        qty: 1,
      },
      {
        id: "2",
        title: "Windrunner",
        price: 40,
        compareAt: 60,
        image: "/windrunner-jacket.jpg",
        attrs: { Color: "Gray", Size: "M" },
        qty: 1,
      },
      {
        id: "3",
        title: "White Jeans",
        price: 39,
        image: "/white-jeans.jpg",
        attrs: { Color: "White", Size: "M" },
        qty: 1,
      },
    ],
  }

  const steps = ["Order placed", "Preparing order", "Shipped", "Delivered"] as const
  const currentIdx = steps.indexOf(order.status)

  return (
    <main className="container mx-auto max-w-5xl space-y-6 px-4 py-6">
      <OrderSummary
        orderId={order.id}
        status={order.status}
        orderDate={order.createdAt}
        total={order.total}
        currency={order.currency}
        shipping={order.shippingAddress}
        contact={order.contact}
        payment={order.payment}
      />

      <Card aria-label="Order updates">
        <CardContent className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {"Something wrong? "}
              <a className="underline underline-offset-4" href="#exchange-return">
                Exchange or return
              </a>
            </p>
            <Button variant="outline" className="shrink-0 bg-transparent">
              Cancel order
            </Button>
          </div>

          <div className="rounded-md border p-4">
            <div className="mb-2 flex items-center gap-2 text-sm">
              <span className="inline-flex size-2 rounded-full bg-primary" aria-hidden />
              <span className="text-muted-foreground">Estimated delivery:</span>
              <span className="font-medium">{order.estDelivery}</span>
            </div>

            <OrderProgress steps={steps as unknown as string[]} currentIndex={currentIdx} />
          </div>

          <div className="space-y-4">
            {order.items.map((item) => (
              <OrderItemRow key={item.id} item={item} />
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
