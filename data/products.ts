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

// Product data is now fetched from backend API
