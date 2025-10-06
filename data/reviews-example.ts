export type Review = {
  id: string
  author: string
  date: string
  rating: number // 1-5
  verified?: boolean
  body: string
  photoUrl?: string
  helpfulYes?: number
  helpfulNo?: number
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Micheal Gough",
    date: "Nov 18, 2023 at 15:35",
    rating: 5,
    verified: true,
    body: "My old iMac was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly.",
    photoUrl: "/customer-photo.jpg",
    helpfulYes: 3,
    helpfulNo: 0,
  },
  {
    id: "r2",
    author: "Jese Leos",
    date: "Nov 18, 2023 at 15:35",
    rating: 5,
    verified: true,
    body: "Amazing keyboard, matching accessories. Super fast, batteries last more than usual. Everything runs perfect.",
    helpfulYes: 1,
    helpfulNo: 0,
  },
  {
    id: "r3",
    author: "Bonnie Green",
    date: "Nov 18, 2023 at 15:35",
    rating: 4,
    verified: true,
    body: "Very fast, and the colour matches my office. Display is out of this world—very happy with this purchase.",
    helpfulYes: 0,
    helpfulNo: 0,
  },
  {
    id: "r4",
    author: "Roberta Casas",
    date: "Nov 18, 2023 at 15:35",
    rating: 4,
    verified: true,
    body: "Straight out-of-the-box, superb definition from the screen. Built-in apps are enough for my work without extra subscriptions.",
    helpfulYes: 1,
    helpfulNo: 0,
  },
  {
    id: "r5",
    author: "Neil Sims",
    date: "Nov 18, 2023 at 15:35",
    rating: 5,
    verified: true,
    body: "Upgrading from my 11 year old iMac with the new chip—super reliable. Setup was simple and fast. Great experience.",
    helpfulYes: 1,
    helpfulNo: 0,
  },
]

export const histogram = (() => {
  const map = new Map<number, number>([
    [5, 0],
    [4, 0],
    [3, 0],
    [2, 0],
    [1, 0],
  ])
  for (const r of reviews) {
    map.set(r.rating, (map.get(r.rating) || 0) + 1)
  }
  return map
})()

export const average =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length + Number.EPSILON) * 100) / 100

export const totalCount = reviews.length
