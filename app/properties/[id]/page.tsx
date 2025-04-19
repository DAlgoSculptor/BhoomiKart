"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Bath,
  Bed,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Home,
  MapPin,
  Maximize,
  Phone,
  Share2,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    description:
      "This stunning modern villa offers luxurious living with a private pool, spacious interiors, and premium finishes throughout. Located in a prestigious neighborhood, it provides easy access to schools, shopping centers, and entertainment venues.",
    location: "Mumbai, Maharashtra",
    address: "123 Luxury Lane, Bandra West, Mumbai, Maharashtra 400050",
    price: 12500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "For Sale",
    category: "Residential",
    features: [
      "Private Swimming Pool",
      "Modular Kitchen",
      "24/7 Security",
      "Power Backup",
      "Garden",
      "Parking",
      "Air Conditioning",
      "Gym",
      "Children's Play Area",
      "Close to Schools",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    agent: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@bhoomikart.com",
      image: "/placeholder.svg?height=200&width=200",
    },
    featured: true,
    yearBuilt: 2020,
    parkingSpaces: 2,
  },
]

export default function PropertyDetailPage({ params }) {
  const property = properties.find((p) => p.id === Number.parseInt(params.id)) || properties[0]
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Format price to Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % property.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Property Images */}
      <section className="relative bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src={property.images[activeImageIndex] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === activeImageIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge className="mb-2 bg-emerald-600">{property.type}</Badge>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{property.title}</h1>
                    <div className="flex items-center text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.address}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                      <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 py-4 border-t border-b">
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Property Type</p>
                      <p className="font-medium">{property.category}</p>
                    </div>
                  </div>
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Bedrooms</p>
                        <p className="font-medium">{property.bedrooms}</p>
                      </div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-emerald-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Bathrooms</p>
                        <p className="font-medium">{property.bathrooms}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Maximize className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="font-medium">{property.area} sq.ft</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Year Built</p>
                      <p className="font-medium">{property.yearBuilt}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Price</h2>
                  <p className="text-3xl font-bold text-emerald-600">{formatPrice(property.price)}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <Tabs defaultValue="description">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="pt-4">
                    <h2 className="text-xl font-semibold mb-4">Property Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
                  </TabsContent>
                  <TabsContent value="features" className="pt-4">
                    <h2 className="text-xl font-semibold mb-4">Property Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-emerald-600 mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="location" className="pt-4">
                    <h2 className="text-xl font-semibold mb-4">Property Location</h2>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-gray-400" />
                      <span className="ml-2 text-gray-500">Map view would be displayed here</span>
                    </div>
                    <p className="mt-4 text-gray-700">{property.address}</p>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Agent</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      placeholder="I'm interested in this property. Please contact me with more information."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-gray-500">Property Agent</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-emerald-600 mr-2" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-emerald-600 mr-2" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Call Agent</Button>
                    <Button variant="outline" className="w-full">
                      Email Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Similar Properties</h3>
                  <div className="space-y-4">
                    {properties.slice(0, 3).map((similarProperty) => (
                      <Link
                        href={`/properties/${similarProperty.id}`}
                        key={similarProperty.id}
                        className="flex space-x-3 group"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={similarProperty.images[0] || "/placeholder.svg"}
                            alt={similarProperty.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-emerald-600 transition-colors line-clamp-1">
                            {similarProperty.title}
                          </h4>
                          <p className="text-sm text-gray-500">{similarProperty.location}</p>
                          <p className="text-emerald-600 font-semibold">{formatPrice(similarProperty.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
