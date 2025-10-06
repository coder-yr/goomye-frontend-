"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, User, MapPin, Truck, CreditCard, Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card")
  const [useSameAddress, setUseSameAddress] = useState(true)

  const orderItems = [
    {
      id: 1,
      name: "Nike Air Force 1",
      color: "White",
      size: "M",
      quantity: 1,
      price: 150,
      image: "/nike-air-force-white.jpg",
    },
    {
      id: 2,
      name: "Camo Blend Jacket",
      color: "Camo",
      size: "M",
      quantity: 1,
      price: 40,
      originalPrice: 60,
      image: "/camo-jacket.jpg",
    },
    {
      id: 3,
      name: "Mahabis Classic",
      color: "White",
      size: "M",
      quantity: 1,
      price: 39,
      image: "/mahabis-classic.jpg",
    },
  ]

  const subtotal = 229
  const shipping = 0
  const tax = 0
  const sale = -20
  const total = 229

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/cart" className="text-gray-500 hover:text-gray-700">
                Checkout
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="font-medium text-gray-900">Review and Pay</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">Order confirmation</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Checkout Form */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Contact details</h2>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="h-4 w-4" />
                <span>jamescollins@site.so</span>
              </div>
            </Card>

            {/* Shipping Address */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Shipping address</h2>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex gap-2 text-gray-600">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>James Collins</p>
                  <p>280 Suzanne Throughway</p>
                  <p>New York, Breannabury, OR 45801, US</p>
                </div>
              </div>
            </Card>

            {/* Shipping Method */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Shipping method</h2>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Truck className="h-4 w-4" />
                <span>Free, 2-4 working days</span>
              </div>
            </Card>

            {/* Payment Methods */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Payment methods</h2>
              <div className="mb-6 flex gap-2">
                <Button
                  variant={paymentMethod === "card" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setPaymentMethod("card")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Card
                </Button>
                <Button
                  variant={paymentMethod === "paypal" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.028.15a.805.805 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z" />
                  </svg>
                  PayPal
                </Button>
              </div>

              {paymentMethod === "card" && (
                <Card className="p-6">
                  <h3 className="mb-4 font-semibold">Card details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card at?fl</Label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="pr-32" />
                        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 gap-1">
                          <Image src="/visa-logo.jpg" alt="Visa" width={32} height={20} className="h-5 w-auto" />
                          <Image
                            src="/mastercard-logo.jpg"
                            alt="Mastercard"
                            width={32}
                            height={20}
                            className="h-5 w-auto"
                          />
                          <Image
                            src="/unionpay-logo.jpg"
                            alt="UnionPay"
                            width={32}
                            height={20}
                            className="h-5 w-auto"
                          />
                          <Image
                            src="/discover-logo.jpg"
                            alt="Discover"
                            width={32}
                            height={20}
                            className="h-5 w-auto"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiration">Expiration</Label>
                        <Input id="expiration" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" maxLength={4} />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardName">Name r)x3z card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="defaultPayment" />
                      <Label htmlFor="defaultPayment" className="text-sm font-normal">
                        Set as default payment method
                      </Label>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Billing address</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sameAddress"
                      checked={useSameAddress}
                      onCheckedChange={(checked) => setUseSameAddress(checked as boolean)}
                    />
                    <Label htmlFor="sameAddress" className="text-sm font-normal">
                      Use my shipping address
                    </Label>
                  </div>
                  {useSameAddress && (
                    <div className="text-sm text-gray-600">
                      <p>New York, 280 Suzanne Throughway</p>
                      <p>Breannabury, OR 45801, US</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <Card className="sticky top-8 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Order summary</h2>
                <Button variant="ghost" size="sm">
                  Edit cart
                </Button>
              </div>

              {/* Order Totals */}
              <div className="mb-6 space-y-3 border-b pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estimated Tax</span>
                  <span className="font-medium">${tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Promo code</span>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Enter code</button>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sale</span>
                  <span className="font-medium text-red-600">{sale}</span>
                </div>
                <div className="flex justify-between border-t pt-3 text-base font-semibold">
                  <span>Total</span>
                  <span>USD ${total}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">Color: {item.color}</p>
                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                        )}
                        <span className={item.originalPrice ? "text-red-600" : "text-gray-900"}>${item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex items-center justify-between border-t pt-6">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          {/* Progress Indicator */}
          <div className="flex gap-2">
            <div className="h-1 w-24 rounded-full bg-blue-600" />
            <div className="h-1 w-24 rounded-full bg-blue-600" />
            <div className="h-1 w-24 rounded-full bg-gray-200" />
          </div>

          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            Continue
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
