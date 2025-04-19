"use client"

import Link from "next/link"
import { ArrowRight, Building2, Home, MapPin, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FeaturedProperties from "@/components/featured-properties"
import TestimonialSection from "@/components/testimonial-section"
import StatsSection from "@/components/stats-section"
import { Suspense } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleSearch = (formData: FormData) => {
    const location = formData.get('location') as string
    const type = formData.get('type') as string
    const price = formData.get('price') as string
    
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (type) params.set('type', type)
    if (price) params.set('price', price)
    
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Find Your Perfect Property with BhoomiKart
              </h1>
              <p className="text-xl text-gray-600">
                Simplifying real estate transactions for buyers and sellers. Browse thousands of verified properties and
                connect directly with owners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/properties">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Browse Properties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sell">
                  <Button size="lg" variant="outline">
                    List Your Property
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-image.jpg"
                  alt="Modern home with garden"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-emerald-600">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">20k+ Properties Listed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10">
            <form action={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    name="location"
                    className="pl-10" 
                    placeholder="City, State or ZIP" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <Select name="type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <Select name="price">
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500000">₹0 - ₹50 Lakhs</SelectItem>
                    <SelectItem value="500000-1000000">₹50 Lakhs - ₹1 Crore</SelectItem>
                    <SelectItem value="1000000-2000000">₹1 Crore - ₹2 Crore</SelectItem>
                    <SelectItem value="2000000+">₹2 Crore+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search Properties
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Property Type</h2>
            <p className="mt-4 text-lg text-gray-600">Find the perfect property that suits your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, name: "Residential", count: 1245 },
              { icon: Building2, name: "Commercial", count: 873 },
              { icon: MapPin, name: "Land", count: 642 },
              { icon: Building2, name: "Industrial", count: 428 },
            ].map((category, index) => (
              <Link href={`/properties?category=${category.name.toLowerCase()}`} key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-gray-500 mt-2">{category.count} Properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <Suspense fallback={<div className="py-16 text-center">Loading featured properties...</div>}>
        <FeaturedProperties />
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<div className="py-16 text-center">Loading statistics...</div>}>
        <StatsSection />
      </Suspense>

      {/* Testimonials */}
      <Suspense fallback={<div className="py-16 text-center">Loading testimonials...</div>}>
        <TestimonialSection />
      </Suspense>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto mb-8">
            Join thousands of satisfied users who have found their perfect property through BhoomiKart.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/properties">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Browse Properties
              </Button>
            </Link>
            <Link href="/sell">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-emerald-700">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
