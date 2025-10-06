export default function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 2,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 3,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 4,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 5,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 6,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 7,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
    {
      id: 8,
      name: "SONY HT-S20R 400W",
      description: "Bluetooth Home Theatre...",
      price: 4756,
      image: "/sony-home-theatre.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">My wishlist</h1>

        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center gap-6 border-b border-border pb-6">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-muted">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-16 w-16 object-contain" />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <p className="mb-1 text-sm text-muted-foreground">Name</p>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              {/* Price */}
              <div className="flex-shrink-0">
                <p className="mb-1 text-sm text-muted-foreground">Price:</p>
                <p className="text-xl font-semibold">${item.price.toLocaleString()}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-shrink-0 gap-3">
                <button className="rounded-lg border border-red-500 px-6 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50">
                  Remove
                </button>
                <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Move To BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
