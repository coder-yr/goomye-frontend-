import CartPageClient from "@/components/cart-page-client"

// demo items matching the Figma content and structure
const ITEMS = [
  {
    id: "nike-air-force-1",
    name: "Nike Air Force 1",
    price: 149,
    imageAlt: "Nike Air Force 1 product photo",
    imageUrl: "/placeholder.jpg",
    color: "White",
    size: "US 10",
    quantity: 1,
  },
  {
    id: "camo-blend-jacket",
    name: "Camo Blend Jacket",
    price: 60,
    salePrice: 40,
    imageAlt: "Camo blend jacket photo",
    imageUrl: "/placeholder-user.jpg",
    color: "Camo",
    size: "M",
    quantity: 1,
    lowStock: true,
  },
  {
    id: "mahabis-classic",
    name: "Mahabis Classic",
    price: 40,
    imageAlt: "Mahabis classic slippers photo",
    imageUrl: "/placeholder-logo.png",
    color: "White",
    size: "M",
    quantity: 1,
  },
] satisfies Parameters<typeof CartPageClient>[0]["initialItems"]

export default function Page() {
  return <CartPageClient initialItems={ITEMS} />
}
