import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  ChevronRight,
  Edit,
  Heart,
  Home,
  LogOut,
  MapPin,
  Package,
  RefreshCw,
  Settings,
  ShoppingCart,
  Star,
  User,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1 hover:text-foreground">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/my-account" className="hover:text-foreground">
              My account
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Account</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-4">
            {/* User Profile Card */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Jese Leos" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">Jese Leos (Personal)</p>
                    <p className="text-xs text-muted-foreground truncate">jese@gmail.com</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card>
              <CardContent className="p-2">
                <nav className="space-y-1">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </Link>
                  <Link
                    href="/my-orders"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Package className="h-4 w-4" />
                    My orders
                  </Link>
                  <Link
                    href="/delivery-addresses"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <MapPin className="h-4 w-4" />
                    Delivery addresses
                  </Link>
                  <Link
                    href="/favourite-items"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Heart className="h-4 w-4" />
                    Favourite items
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </Link>
                </nav>
              </CardContent>
            </Card>

            {/* Settings & Logout */}
            <Card>
              <CardContent className="p-2">
                <nav className="space-y-1">
                  <Link
                    href="/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-50">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Favorite products</p>
                    <p className="text-2xl font-bold">455</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold">124</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-50">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Reviews added</p>
                    <p className="text-2xl font-bold">1,285</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50">
                    <RefreshCw className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Product returns</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Account Data */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-xl font-semibold">Account data</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Jese Leos" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <Badge className="absolute -top-1 -right-1 bg-cyan-100 text-cyan-700 hover:bg-cyan-100 text-xs px-2">
                        Essentials
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Jese Leos</h3>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-1 text-sm font-medium">Email Address</h4>
                      <p className="text-sm text-muted-foreground">yourname@example.com</p>
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-medium">Delivery Address</h4>
                      <p className="text-sm text-muted-foreground">
                        Miles Drive, Newark, NJ 07103, California, United States of America
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-medium">Phone Number</h4>
                      <p className="text-sm text-muted-foreground">+1234 567 890 / +12 345 678</p>
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-medium">Country</h4>
                      <p className="text-sm text-muted-foreground">United States of America</p>
                    </div>
                  </div>

                  <Button className="bg-green-600 hover:bg-green-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit your data
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Active Orders */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-6 flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Active orders</h2>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs">?</div>
                </div>

                <div className="space-y-4">
                  {/* Order 1 */}
                  <div className="grid gap-4 rounded-lg border p-4 sm:grid-cols-[1fr_auto]">
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Order ID:</p>
                        <p className="font-semibold">#FWB125467980</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Date:</p>
                        <p className="font-semibold">27.01.2024</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Price:</p>
                        <p className="font-semibold">$4,799</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Status:</p>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In transit</Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Actions
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Track order</DropdownMenuItem>
                        <DropdownMenuItem>Cancel order</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Order 2 */}
                  <div className="grid gap-4 rounded-lg border p-4 sm:grid-cols-[1fr_auto]">
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Order ID:</p>
                        <p className="font-semibold">#FWB125467971</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Date:</p>
                        <p className="font-semibold">11.12.2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Price:</p>
                        <p className="font-semibold">$964</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Status:</p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Pre-order</Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Actions
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Track order</DropdownMenuItem>
                        <DropdownMenuItem>Cancel order</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Order 3 */}
                  <div className="grid gap-4 rounded-lg border p-4 sm:grid-cols-[1fr_auto]">
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Order ID:</p>
                        <p className="font-semibold">#FWB125467665</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Date:</p>
                        <p className="font-semibold">05.04.2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Price:</p>
                        <p className="font-semibold">$230</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Status:</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Actions
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Track order</DropdownMenuItem>
                        <DropdownMenuItem>Cancel order</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <Button className="mt-6 bg-green-600 hover:bg-green-700">
                  <Package className="mr-2 h-4 w-4" />
                  See all orders
                </Button>
              </CardContent>
            </Card>

            {/* My Addresses and My Cards */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* My Addresses */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-xl font-semibold">My addresses</h2>

                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <Badge className="mb-3 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Preferred address</Badge>
                      <h3 className="mb-2 font-semibold">Bonnie Green</h3>
                      <p className="text-sm text-muted-foreground">
                        92 Miles Drive, Newark, NJ 07103, California, United States of America
                      </p>
                    </div>

                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* My Cards */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-xl font-semibold">My cards</h2>

                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <Badge className="mb-3 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Favorite card</Badge>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-14 items-center justify-center rounded bg-blue-600 text-white font-bold text-sm">
                            VISA
                          </div>
                          <div>
                            <p className="font-semibold">Visa ending in 7658</p>
                            <p className="text-sm text-muted-foreground">Expiry 10/2024</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground">
                          Delete
                        </Button>
                        <span className="text-muted-foreground">•</span>
                        <Button variant="link" className="h-auto p-0 text-sm">
                          Edit
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 sm:w-auto">Manage cards</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
