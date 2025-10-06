import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Package, Printer, Edit, ChevronRight, Check } from "lucide-react"
import Image from "next/image"

export default function OrderTrackingPage() {
  const orderItems = [
    {
      id: 1,
      name: "Nike SB Zoom Blazer Mid Electric",
      price: 150,
      originalPrice: null,
      image: "/nike-sb-zoom-blazer.jpg",
      color: "White",
      size: "US 10",
      quantity: 1,
    },
    {
      id: 2,
      name: "Windrunner",
      price: 40,
      originalPrice: 60,
      image: "/windrunner-jacket.jpg",
      color: "Gray",
      size: "M",
      quantity: 1,
    },
    {
      id: 3,
      name: "White Jeans",
      price: 39,
      originalPrice: null,
      image: "/white-jeans.jpg",
      color: "White",
      size: "M",
      quantity: 1,
    },
  ]

  const orderSteps = [
    { label: "Order placed", completed: true, active: false },
    { label: "Preparing order", completed: false, active: true },
    { label: "Shipped", completed: false, active: false },
    { label: "Delivered", completed: false, active: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Order Header */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-medium">Order in progress</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order at?fl</p>
              <p className="font-medium">72813820</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order date</p>
              <p className="font-medium">04/08/2024</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total</p>
              <p className="font-medium">$229</p>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Shipping & Contact */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Address */}
              <div>
                <h3 className="font-semibold mb-3">Shipping address</h3>
                <div className="text-sm space-y-1">
                  <p>James Collins</p>
                  <p>280 Suzanne Throughway</p>
                  <p>New York, Breannabury, OR 45801, US</p>
                  <p className="mt-2">+44 000 000 0001</p>
                </div>
                <Button variant="ghost" size="sm" className="mt-3 px-0">
                  <Edit className="w-4 h-4 mr-2" />
                  Change address
                </Button>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="font-semibold mb-3">Contact details</h3>
                <p className="text-sm">jamescollins@site.so</p>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="font-semibold mb-3">Payment method</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded" />
                    <span className="text-sm">MasterCard •••• 4242</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">$229</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Tax</span>
                  <span className="font-medium">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sale</span>
                  <span className="font-medium text-red-600">-$20</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">USD $229</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <Printer className="w-4 h-4 mr-2" />
                  View or Print receipt
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Button variant="link" className="px-0 text-sm">
              Something wrong? <span className="underline ml-1">Exchange or return</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              Cancel order
            </Button>
          </div>
        </Card>

        {/* Delivery Estimate */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Package className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm">
              Estimated delivery: <span className="font-semibold">Wednesday, Aug 7 2024</span>
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              {orderSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="flex items-center w-full">
                    {index > 0 && (
                      <div className={`flex-1 h-1 ${step.completed || step.active ? "bg-green-600" : "bg-gray-200"}`} />
                    )}
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        step.completed ? "bg-gray-900" : step.active ? "bg-green-600" : "bg-gray-200"
                      }`}
                    >
                      {step.completed && <Check className="w-3 h-3 text-white" />}
                      {step.active && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    {index < orderSteps.length - 1 && (
                      <div className={`flex-1 h-1 ${step.completed ? "bg-green-600" : "bg-gray-200"}`} />
                    )}
                  </div>
                  <p
                    className={`text-xs mt-2 text-center ${
                      step.completed || step.active ? "font-medium text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Order Items */}
        <div className="space-y-4">
          {orderItems.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                        )}
                        <span className="font-medium">${item.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground mb-1">Color</p>
                      <p className="font-medium">{item.color}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Size</p>
                      <p className="font-medium">{item.size}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Quantity</p>
                      <p className="font-medium">{item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      Buy it again
                    </Button>
                    <Button variant="outline" size="sm">
                      Write a product review
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
