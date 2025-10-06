export type Product = {
  id: string
  title: string
  subtitle?: string
  price: number
  badge?: string
  image: string
  colors?: string[] // tailwind color tokens or hex; used only for UI dots
  category: string
  rating?: number
  installmentsNote?: string
}

export const products: Product[] = [
  {
    id: "imac-27",
    title: "Apple iMac 27”",
    subtitle: "Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3 8‑Core, macOS Sonoma",
    price: 1199,
    badge: "New",
    image: "/apple-imac-27.jpg",
    colors: ["#0f172a", "#e5e7eb", "#38bdf8", "#ec4899"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "ps5-slim",
    title: "PlayStation 5 Slim Console",
    subtitle: "Up to 120fps with 120Hz output, 1TB HDD, 2 Controllers, Ray Tracing.",
    price: 499,
    image: "/playstation-5-slim.png",
    colors: ["#111827", "#6b7280", "#9ca3af"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "ipad-pro-13",
    title: "iPad Pro 13‑inch (M4): XDR Display",
    subtitle: "Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera/12MP.",
    price: 1199,
    image: "/ipad-pro-13.jpg",
    colors: ["#111827", "#e5e7eb", "#34d399", "#60a5fa"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "xbox-series-s-1tb",
    title: "Xbox Series S 1TB SSD",
    subtitle: "All‑Digital Gaming Console 1440p Gaming 4K Streaming Carbon Black.",
    price: 499,
    image: "/xbox-series-s.jpg",
    colors: ["#111827", "#6b7280"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "iphone-15-pro-max",
    title: "Apple iPhone 15 Pro Max",
    subtitle: "256GB, Natural Titanium, 6.7 inches - Unlocked (Renewed).",
    price: 1299,
    image: "/iphone-15-pro-max.png",
    colors: ["#0f172a", "#fbbf24", "#38bdf8"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "imac-24-2021",
    title: "iMac 24” (2021)",
    subtitle: "Retina 4.5K, 8GB, 256GB SSD, 8‑core GPU, Orange, INT KB.",
    price: 1999,
    image: "/imac-24-2021.jpg",
    colors: ["#fb923c", "#60a5fa", "#34d399", "#10b981"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  // duplicate a second row for visual density
  {
    id: "imac-27-b",
    title: "Apple iMac 27”",
    subtitle: "Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3 8‑Core, macOS Sonoma",
    price: 1199,
    badge: "New",
    image: "/apple-imac-27-alt.jpg",
    colors: ["#0f172a", "#e5e7eb", "#38bdf8", "#ec4899"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "ps5-slim-b",
    title: "PlayStation 5 Slim Console",
    subtitle: "Up to 120fps with 120Hz output, 1TB HDD, 2 Controllers, Ray Tracing.",
    price: 499,
    image: "/playstation-5-slim-b.jpg",
    colors: ["#111827", "#6b7280", "#9ca3af"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "ipad-pro-13-b",
    title: "iPad Pro 13‑inch (M4): XDR Display",
    subtitle: "Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera/12MP.",
    price: 1199,
    image: "/ipad-pro-13-b.jpg",
    colors: ["#111827", "#e5e7eb", "#34d399", "#60a5fa"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "xbox-series-s-1tb-b",
    title: "Xbox Series S 1TB SSD",
    subtitle: "All‑Digital Gaming Console 1440p Gaming 4K Streaming Carbon Black.",
    price: 499,
    image: "/xbox-series-s-b.jpg",
    colors: ["#111827", "#6b7280"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "iphone-15-pro-max-b",
    title: "Apple iPhone 15 Pro Max",
    subtitle: "256GB, Natural Titanium, 6.7 inches - Unlocked (Renewed).",
    price: 1299,
    image: "/iphone-15-pro-max-b.jpg",
    colors: ["#0f172a", "#fbbf24", "#38bdf8"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
  {
    id: "imac-24-2021-b",
    title: "iMac 24” (2021)",
    subtitle: "Retina 4.5K, 8GB, 256GB SSD, 8‑core GPU, Orange, INT KB.",
    price: 1999,
    image: "/imac-24-2021-b.jpg",
    colors: ["#fb923c", "#60a5fa", "#34d399", "#10b981"],
    category: "Electronics",
    installmentsNote: "Buy in installments with Gomoney Wallet",
  },
]
