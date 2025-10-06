"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, MapPin, Star, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState("green")
  const [selectedCapacity, setSelectedCapacity] = useState("256GB")
  const [selectedWarranty, setSelectedWarranty] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [showMore, setShowMore] = useState(false)

  const images = [
    "/apple-imac-24-inch-front-view-silver.jpg",
    "/apple-imac-24-inch-side-view.jpg",
    "/apple-imac-24-inch-back-view.jpg",
    "/apple-imac-24-inch-accessories.jpg",
  ]

  const colors = [
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Pink", value: "pink", class: "bg-pink-400" },
    { name: "Silver", value: "silver", class: "bg-gray-300" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
  ]

  const capacities = ["256GB", "512GB", "1TB"]

  const warranties = [
    { label: "1 year - $39", value: "1year", price: 39 },
    { label: "2 years - $69", value: "2years", price: 69 },
    { label: "3 years - $991", value: "3years", price: 991 },
  ]

  const relatedProducts = [
    {
      name: "Xbox Series S 1TB SSD",
      description: "All-Digital Console, 1440p Gaming 4K Streaming Carbon Black.",
      price: 499,
      image: "/xbox-series-s-console.jpg",
      colors: ["black"],
      badge: "Buy in installments with Goomaye Wallet",
    },
    {
      name: "Apple iPhone 15 Pro Max",
      description: "256GB, Natural Titanium - 6.7 Inches - Unlocked (Renewed), Unlocked for All Carriers.",
      price: 1299,
      image: "/iphone-15-pro-max.png",
      colors: ["black", "purple", "silver", "gold"],
      badge: "Buy in installments with Goomaye Wallet",
    },
    {
      name: 'iMac 24" (2021)',
      description: "Retina 4.5K, 8GB, 256GB SSD, 8-core GPU, Orange, INT KB.",
      price: 1999,
      image: "/imac-24-inch-orange.jpg",
      colors: ["black", "blue", "orange", "cyan"],
      badge: "Buy in installments with Goomaye Wallet",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left side - Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImage === idx ? "border-primary" : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Product view ${idx + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-muted rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt="Product main view"
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold mb-2 text-balance">
                Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM
              </h1>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm text-muted-foreground">(We sell 2 products)</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-primary underline ml-1">345 Reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>
                  Deliver to <span className="text-green-600 font-medium">Bonnie Green</span> - Sacramento 23647
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">$1,249.99</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Quantity</span>
                <Select value={quantity.toString()} onValueChange={(v) => setQuantity(Number(v))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              <Heart className="w-4 h-4 mr-2" />
              Add to favorites
            </Button>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to cart
            </Button>

            <p className="text-sm text-muted-foreground">
              Also available at competitive prices from{" "}
              <span className="text-green-600 underline">authorized retailers</span>, with optional Premium delivery for
              expedited shipping.
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium mb-3">Colour</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`px-4 py-2 rounded-md border-2 text-sm transition-all ${
                      selectedColor === color.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* SSD Capacity */}
            <div>
              <h3 className="text-sm font-medium mb-3">SSD capacity</h3>
              <div className="flex gap-2">
                {capacities.map((capacity) => (
                  <button
                    key={capacity}
                    onClick={() => setSelectedCapacity(capacity)}
                    className={`px-4 py-2 rounded-md border-2 text-sm transition-all ${
                      selectedCapacity === capacity
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    {capacity}
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup Options */}
            <div>
              <h3 className="text-sm font-medium mb-3">Pickup</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <input type="radio" name="pickup" id="shipping" className="mt-1" defaultChecked />
                  <label htmlFor="shipping" className="flex-1">
                    <div className="font-medium text-sm">Shipping - $19</div>
                    <div className="text-xs text-muted-foreground">Arrives Dec 13</div>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="radio" name="pickup" id="pickup-fremont" className="mt-1" />
                  <label htmlFor="pickup-fremont" className="flex-1">
                    <div className="font-medium text-sm">Pickup from Fremont- $9</div>
                    <div className="text-xs text-green-600 underline">Pick a Fremont near you</div>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="radio" name="pickup" id="pickup-store" className="mt-1" />
                  <label htmlFor="pickup-store" className="flex-1">
                    <div className="font-medium text-sm">Pickup from our store</div>
                    <div className="text-xs text-muted-foreground">Not available</div>
                  </label>
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div>
              <h3 className="text-sm font-medium mb-3">Add extra warranty</h3>
              <div className="flex gap-2">
                {warranties.map((warranty) => (
                  <button
                    key={warranty.value}
                    onClick={() => setSelectedWarranty(warranty.value)}
                    className={`px-3 py-2 rounded-md border-2 text-xs transition-all ${
                      selectedWarranty === warranty.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    {warranty.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="questions"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Questions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1
                  processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural
                  Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.
                </p>
                <p>
                  This all is housed in a wafer thin aluminum case with flat edges that includes a 23.5" 4480×2520, 218
                  PPI, LED-backlit, "True Tone" Retina 4.5K display mounted on a svelte aluminum stand. This specific
                  model is offered in a two-tone Blue color. It also has an integrated 1080p FaceTime HD camera, a
                  "studio-quality three-mic array" and a "high-fidelity six-speaker system" that supports Spatial Audio
                  with Dolby Atmos.
                </p>
                <p>
                  Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all with a USB-C connector),
                  a 3.5 mm headphone jack conveniently mounted on the side of the display, Wi-Fi 6 (802.11ax), and
                  Gigabit Ethernet.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Brilliant 4.5K Retina display:</h4>
                  <p>
                    see the big picture and all the details—See it all in sharp, glorious detail on the immersive
                    24-inch 4.5K Retina display. The P3 wide color gamut brings what you're watching to life in over a
                    billion colors, and with a brilliant 500 nits of brightness.
                  </p>
                </div>
                <p>
                  A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly
                  improves image quality. So from collaborating with coworkers to catching up with friends and family,
                  you'll always look your best. And True Tone technology automatically adjusts the color temperature of
                  your display to the ambient light of your environment, for a more natural viewing experience.
                </p>
                <p>
                  So whether you're editing photos, working on presentations, or watching your favorite shows and
                  movies, everything looks incredible on iMac.
                </p>
                <p>
                  Your iMac comes with 90 days of complimentary technical support and a one-year limited warranty.
                  Purchase AppleCare+ for Mac to extend your coverage from your AppleCare+ purchase date and add
                  unlimited repairs for accidental damage from handling, each subject to a service fee of $99 for screen
                  damage or external enclosure damage, or $299 for other repairable accidental damage, plus applicable
                  tax.
                </p>
                <p>
                  Accessibility features help people with disabilities get the most out of their new iMac. With built-in
                  support for vision, hearing, mobility, and learning, you can create and do amazing and creative
                  things.
                </p>
                {showMore && (
                  <p className="text-muted-foreground">
                    Additional product information and specifications would appear here when expanded.
                  </p>
                )}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-green-600 font-medium flex items-center gap-1 hover:underline"
                >
                  {showMore ? "Show less" : "Show more"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Display Specs */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-4">Display</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Screen Type</span>
                      <span className="font-medium">light</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Diagonal</span>
                      <span className="font-medium">24 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Resolution</span>
                      <span className="font-medium">4480 × 2520</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format</span>
                      <span className="font-medium">4x</span>
                    </div>
                  </div>
                </Card>

                {/* Processor Specs */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-4">Processor</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processor Type</span>
                      <span className="font-medium">Apple M3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Model</span>
                      <span className="font-medium">M3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Physical cores</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Virtual Cores</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technology</span>
                      <span className="font-medium">3nm</span>
                    </div>
                  </div>
                </Card>

                {/* RAM Specs */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-4">RAM memory</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="font-medium">8GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maximum memory</span>
                      <span className="font-medium">64GB</span>
                    </div>
                  </div>
                </Card>

                {/* Storage Specs */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-4">Storage</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="font-medium">512GB</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <p className="text-muted-foreground">Reviews content would go here.</p>
          </TabsContent>

          <TabsContent value="questions" className="mt-6">
            <p className="text-muted-foreground">Questions content would go here.</p>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-primary">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="bg-muted p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 text-xs text-green-600">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
                    {product.badge}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <div className="flex gap-1">
                      {product.colors.map((color, colorIdx) => (
                        <div
                          key={colorIdx}
                          className={`w-6 h-6 rounded-full border-2 border-border ${
                            color === "black"
                              ? "bg-black"
                              : color === "blue"
                                ? "bg-blue-500"
                                : color === "orange"
                                  ? "bg-orange-500"
                                  : color === "cyan"
                                    ? "bg-cyan-400"
                                    : color === "purple"
                                      ? "bg-purple-500"
                                      : color === "silver"
                                        ? "bg-gray-300"
                                        : "bg-yellow-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Heart className="w-4 h-4" />
                      <span className="sr-only">Wishlist</span>
                    </Button>
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
