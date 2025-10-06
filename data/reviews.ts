export type Review = {
  id: string
  productId: string
  author: string
  rating: number // 1-5
  dateISO: string
  verified: boolean
  body: string
  images?: string[]
  helpfulYes: number
  helpfulNo: number
}

export type RatingsHistogram = {
  5: number
  4: number
  3: number
  2: number
  1: number
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "imac-27",
    author: "Michael G.",
    rating: 5,
    dateISO: "2023-11-18T15:35:00.000Z",
    verified: true,
    body: "My old iMac was from 2013. This replacement was well needed. Very fast and the color matches my office set up perfectly. I'm very happy with this purchase.",
    images: [],
    helpfulYes: 3,
    helpfulNo: 0,
  },
  {
    id: "r2",
    productId: "imac-27",
    author: "Jese L.",
    rating: 5,
    dateISO: "2023-11-18T15:35:00.000Z",
    verified: true,
    body: "Amazing keyboard and matching accessories. Super fast, battery life beyond expectations. Highly recommend!",
    images: ["/product-review-photo.jpg", "/product-review-photo.jpg", "/product-review-photo.jpg"],
    helpfulYes: 1,
    helpfulNo: 0,
  },
  {
    id: "r3",
    productId: "imac-27",
    author: "Bonnie G.",
    rating: 5,
    dateISO: "2023-11-18T15:35:00.000Z",
    verified: true,
    body: "Set up was simple and fast. Transferring everything from my previous iMac worked perfectly.",
    images: [],
    helpfulYes: 0,
    helpfulNo: 0,
  },
  {
    id: "r4",
    productId: "imac-27",
    author: "Roberta C.",
    rating: 4,
    dateISO: "2023-11-18T15:35:00.000Z",
    verified: true,
    body: "Straight out of the box with superb display definition. Built‑in apps are great; overall a smooth experience.",
    images: [],
    helpfulYes: 1,
    helpfulNo: 0,
  },
  {
    id: "r5",
    productId: "imac-27",
    author: "Neil S.",
    rating: 5,
    dateISO: "2023-11-18T15:35:00.000Z",
    verified: true,
    body: "Upgraded from an older model and everything runs flawlessly. Reliable and fast—couldn't be happier.",
    images: [],
    helpfulYes: 1,
    helpfulNo: 0,
  },
]

export function getHistogram(list: Review[]): RatingsHistogram {
  const base: RatingsHistogram = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  for (const r of list) base[r.rating as 1 | 2 | 3 | 4 | 5]++
  return base
}

export function getAverage(list: Review[]): number {
  if (list.length === 0) return 0
  const sum = list.reduce((acc, r) => acc + r.rating, 0)
  return Math.round((sum / list.length) * 100) / 100
}
