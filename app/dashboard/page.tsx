"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  Building2,
  ChevronDown,
  Heart,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Settings,
  User,
  X,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    location: "Mumbai, Maharashtra",
    price: 12500000,
    status: "Active",
    type: "For Sale",
    image: "/placeholder.svg?height=400&width=600",
    views: 245,
    inquiries: 12,
    date: "2023-12-15",
  },
  {
    id: 2,
    title: "Luxury Apartment with Sea View",
    location: "Bangalore, Karnataka",
    price: 8900000,
    status: "Under Review",
    type: "For Sale",
    image: "/placeholder.svg?height=400&width=600",
    views: 120,
    inquiries: 5,
    date: "2023-12-10",
  },
  {
    id: 3,
    title: "Commercial Space in Business District",
    location: "Delhi, NCR",
    price: 15000000,
    status: "Active",
    type: "For Sale",
    image: "/placeholder.svg?height=400&width=600",
    views: 189,
    inquiries: 8,
    date: "2023-12-05",
  },
]

// Sample saved properties
const savedProperties = [
  {
    id: 4,
    title: "Spacious Family Home",
    location: "Pune, Maharashtra",
    price: 7500000,
    type: "For Sale",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-12-12",
  },
  {
    id: 5,
    title: "Modern Office Space",
    location: "Hyderabad, Telangana",
    price: 9800000,
    type: "For Rent",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-12-08",
  },
]

// Sample messages
const messages = [
  {
    id: 1,
    from: "Rahul Sharma",
    avatar: "/placeholder.svg?height=100&width=100",
    message: "I'm interested in your property in Mumbai. Is it still available?",
    date: "2023-12-15",
    unread: true,
  },
  {
    id: 2,
    from: "Priya Patel",
    avatar: "/placeholder.svg?height=100&width=100",
    message: "Can I schedule a viewing for the apartment in Bangalore this weekend?",
    date: "2023-12-14",
    unread: false,
  },
  {
    id: 3,
    from: "Amit Singh",
    avatar: "/placeholder.svg?height=100&width=100",
    message: "What's the best price you can offer for the commercial space?",
    date: "2023-12-12",
    unread: false,
  },
]

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Format price to Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r h-screen sticky top-0">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">BhoomiKart</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 px-3 py-2 rounded-md bg-emerald-50 text-emerald-600"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/properties"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Building2 className="h-5 w-5" />
              <span>My Properties</span>
            </Link>
            <Link
              href="/dashboard/saved"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Heart className="h-5 w-5" />
              <span>Saved Properties</span>
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
              <Badge className="ml-auto bg-emerald-600">3</Badge>
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
              <span>My Profile</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-4 border-b">
              <Link href="/" className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-emerald-600" />
                <span className="text-xl font-bold">BhoomiKart</span>
              </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 px-3 py-2 rounded-md bg-emerald-50 text-emerald-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/properties"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Building2 className="h-5 w-5" />
                <span>My Properties</span>
              </Link>
              <Link
                href="/dashboard/saved"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Heart className="h-5 w-5" />
                <span>Saved Properties</span>
              </Link>
              <Link
                href="/dashboard/messages"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(false)}
              >
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
                <Badge className="ml-auto bg-emerald-600">3</Badge>
              </Link>
              <Link
                href="/dashboard/profile"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>My Profile</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>

            <div className="p-4 border-t">
              <Button
                variant="outline"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <header className="bg-white border-b sticky top-0 z-10">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setIsSidebarOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=100&width=100" alt="User" />
                        <AvatarFallback>RS</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline-block">Rahul Sharma</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Properties</p>
                      <h3 className="text-3xl font-bold mt-1">3</h3>
                    </div>
                    <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    <span className="text-emerald-500">↑ 12%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Views</p>
                      <h3 className="text-3xl font-bold mt-1">554</h3>
                    </div>
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    <span className="text-emerald-500">↑ 24%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Inquiries</p>
                      <h3 className="text-3xl font-bold mt-1">25</h3>
                    </div>
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    <span className="text-emerald-500">↑ 8%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Saved Properties</p>
                      <h3 className="text-3xl font-bold mt-1">2</h3>
                    </div>
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    <span className="text-emerald-500">↑ 5%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Tabs */}
            <Tabs defaultValue="properties" className="space-y-6">
              <TabsList>
                <TabsTrigger value="properties">My Properties</TabsTrigger>
                <TabsTrigger value="saved">Saved Properties</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="properties" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">My Properties</h2>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Property
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <Card key={property.id} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <Badge
                          className={`absolute top-4 left-4 ${
                            property.status === "Active"
                              ? "bg-emerald-600"
                              : property.status === "Under Review"
                                ? "bg-amber-500"
                                : "bg-gray-500"
                          }`}
                        >
                          {property.status}
                        </Badge>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{property.location}</p>
                        <p className="text-emerald-600 font-bold text-lg mb-4">{formatPrice(property.price)}</p>

                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Views: {property.views}</span>
                          <span>Inquiries: {property.inquiries}</span>
                        </div>

                        <div className="flex space-x-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="saved" className="space-y-6">
                <h2 className="text-xl font-semibold">Saved Properties</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedProperties.map((property) => (
                    <Card key={property.id} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-emerald-600">{property.type}</Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
                        >
                          <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                        </Button>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{property.location}</p>
                        <p className="text-emerald-600 font-bold text-lg mb-4">{formatPrice(property.price)}</p>

                        <div className="flex space-x-2 mt-4">
                          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                          <Button variant="outline" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <h2 className="text-xl font-semibold">Messages</h2>

                <div className="space-y-4">
                  {messages.map((message) => (
                    <Card key={message.id} className={`${message.unread ? "bg-emerald-50" : ""}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.from} />
                            <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold">{message.from}</h3>
                              <span className="text-xs text-gray-500">{message.date}</span>
                            </div>
                            <p className="text-gray-700 mt-1">{message.message}</p>

                            <div className="flex space-x-2 mt-4">
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                Reply
                              </Button>
                              <Button variant="outline" size="sm">
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
