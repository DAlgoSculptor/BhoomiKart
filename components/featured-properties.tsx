"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bath, Bed, Heart, MapPin, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    location: "Mumbai, Maharashtra",
    price: 12500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "For Sale",
    image: "/properties/villa-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Apartment with Sea View",
    location: "Bangalore, Karnataka",
    price: 8900000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "For Sale",
    image: "/properties/apartment-1.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Commercial Space in Business District",
    location: "Delhi, NCR",
    price: 15000000,
    bedrooms: 0,
    bathrooms: 2,
    area: 3500,
    type: "For Sale",
    image: "/properties/commercial-1.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Spacious Family Home",
    location: "Pune, Maharashtra",
    price: 7500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    type: "For Sale",
    image: "/properties/home-1.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Modern Office Space",
    location: "Hyderabad, Telangana",
    price: 9800000,
    bedrooms: 0,
    bathrooms: 2,
    area: 2500,
    type: "For Rent",
    image: "/properties/office-1.jpg",
    featured: true,
  },
  {
    id: 6,
    title: "Penthouse with Terrace Garden",
    location: "Chennai, Tamil Nadu",
    price: 18500000,
    bedrooms: 4,
    bathrooms: 4,
    area: 4000,
    type: "For Sale",
    image: "/properties/penthouse-1.jpg",
    featured: true,
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  // Format price to Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (isLoading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-48 mt-2" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="pt-6">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-8 w-1/2 mb-4" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="mt-2 text-lg text-gray-600">Handpicked properties for you</p>
          </div>
          <Link href="/properties">
            <Button variant="outline">View All Properties</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden group">
              <div className="relative">
                {imageErrors[property.id] ? (
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">Image not available</span>
                  </div>
                ) : (
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => handleImageError(property.id)}
                    priority={property.id <= 3} // Prioritize loading first 3 images
                  />
                )}
                <Badge className="absolute top-4 left-4 bg-emerald-600">{property.type}</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart
                    className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                  />
                </Button>
              </div>

              <CardContent className="pt-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <Link href={`/properties/${property.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                    {property.title}
                  </h3>
                </Link>
                <p className="text-emerald-600 font-bold text-xl mt-2">{formatPrice(property.price)}</p>

                <div className="flex items-center gap-4 mt-4">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center text-gray-500">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center text-gray-500">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bathrooms} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-500">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.area} sq.ft</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Link href={`/properties/${property.id}`} className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
