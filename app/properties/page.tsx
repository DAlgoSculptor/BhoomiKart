"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Bath,
  Bed,
  Building2,
  MapPin,
  Maximize,
  Search,
  SlidersHorizontal,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

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
    category: "Residential",
    image: "/placeholder.svg?height=400&width=600",
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
    category: "Residential",
    image: "/placeholder.svg?height=400&width=600",
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
    category: "Commercial",
    image: "/placeholder.svg?height=400&width=600",
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
    category: "Residential",
    image: "/placeholder.svg?height=400&width=600",
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
    category: "Commercial",
    image: "/placeholder.svg?height=400&width=600",
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
    category: "Residential",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 7,
    title: "Industrial Warehouse",
    location: "Ahmedabad, Gujarat",
    price: 22000000,
    bedrooms: 0,
    bathrooms: 1,
    area: 8000,
    type: "For Sale",
    category: "Industrial",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 8,
    title: "Farmhouse with Large Land",
    location: "Jaipur, Rajasthan",
    price: 35000000,
    bedrooms: 6,
    bathrooms: 5,
    area: 12000,
    type: "For Sale",
    category: "Land",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 9,
    title: "Budget Friendly 2BHK",
    location: "Kolkata, West Bengal",
    price: 4500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "For Sale",
    category: "Residential",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export default function PropertiesPage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [filters, setFilters] = useState({
    propertyType: [],
    priceRange: [0, 50000000],
    bedrooms: [],
    location: "",
    category: [],
  })

  // Format price to Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    })
  }

  const handleCheckboxFilterChange = (filterType, value) => {
    const currentFilters = filters[filterType]

    if (currentFilters.includes(value)) {
      handleFilterChange(
        filterType,
        currentFilters.filter((item) => item !== value),
      )
    } else {
      handleFilterChange(filterType, [...currentFilters, value])
    }
  }

  // Filter properties based on selected filters
  const filteredProperties = properties.filter((property) => {
    // Filter by property type
    if (filters.propertyType.length > 0 && !filters.propertyType.includes(property.type)) {
      return false
    }

    // Filter by category
    if (filters.category.length > 0 && !filters.category.includes(property.category)) {
      return false
    }

    // Filter by price range
    if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
      return false
    }

    // Filter by bedrooms
    if (filters.bedrooms.length > 0 && !filters.bedrooms.includes(property.bedrooms.toString())) {
      return false
    }

    // Filter by location
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }

    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Find Your Perfect Property</h1>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Browse through our extensive collection of properties across India
            </p>
          </div>

          <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="City, State or ZIP"
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <Select onValueChange={(value) => handleFilterChange("propertyType", [value])}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="For Sale">For Sale</SelectItem>
                    <SelectItem value="For Rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <Select onValueChange={(value) => handleFilterChange("category", [value])}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential">Residential</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden md:block w-64 bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                <Accordion type="single" collapsible className="w-full" defaultValue="category">
                  <AccordionItem value="category">
                    <AccordionTrigger className="text-base">Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Residential", "Commercial", "Industrial", "Land"].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`category-${category}`}
                              checked={filters.category.includes(category)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleCheckboxFilterChange("category", category)
                                } else {
                                  handleCheckboxFilterChange("category", category)
                                }
                              }}
                            />
                            <Label htmlFor={`category-${category}`}>{category}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>{formatPrice(filters.priceRange[0])}</span>
                          <span>{formatPrice(filters.priceRange[1])}</span>
                        </div>
                        <Slider
                          defaultValue={[0, 50000000]}
                          max={50000000}
                          step={500000}
                          value={filters.priceRange}
                          onValueChange={(value) => handleFilterChange("priceRange", value)}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="bedrooms">
                    <AccordionTrigger className="text-base">Bedrooms</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2">
                        {["1", "2", "3", "4", "5+"].map((bedroom) => (
                          <Button
                            key={bedroom}
                            variant={filters.bedrooms.includes(bedroom) ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleCheckboxFilterChange("bedrooms", bedroom)}
                            className={filters.bedrooms.includes(bedroom) ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                          >
                            {bedroom}
                          </Button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="property-type">
                    <AccordionTrigger className="text-base">Property Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["For Sale", "For Rent"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={`type-${type}`}
                              checked={filters.propertyType.includes(type)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleCheckboxFilterChange("propertyType", type)
                                } else {
                                  handleCheckboxFilterChange("propertyType", type)
                                }
                              }}
                            />
                            <Label htmlFor={`type-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  setFilters({
                    propertyType: [],
                    priceRange: [0, 50000000],
                    bedrooms: [],
                    location: "",
                    category: [],
                  })
                }
              >
                Reset Filters
              </Button>
            </div>

            {/* Filters - Mobile */}
            <div className="md:hidden w-full mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your property search</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <Accordion type="single" collapsible className="w-full" defaultValue="category">
                      <AccordionItem value="category">
                        <AccordionTrigger className="text-base">Category</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["Residential", "Commercial", "Industrial", "Land"].map((category) => (
                              <div key={category} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`mobile-category-${category}`}
                                  checked={filters.category.includes(category)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleCheckboxFilterChange("category", category)
                                    } else {
                                      handleCheckboxFilterChange("category", category)
                                    }
                                  }}
                                />
                                <Label htmlFor={`mobile-category-${category}`}>{category}</Label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="price">
                        <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span>{formatPrice(filters.priceRange[0])}</span>
                              <span>{formatPrice(filters.priceRange[1])}</span>
                            </div>
                            <Slider
                              defaultValue={[0, 50000000]}
                              max={50000000}
                              step={500000}
                              value={filters.priceRange}
                              onValueChange={(value) => handleFilterChange("priceRange", value)}
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="bedrooms">
                        <AccordionTrigger className="text-base">Bedrooms</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-wrap gap-2">
                            {["1", "2", "3", "4", "5+"].map((bedroom) => (
                              <Button
                                key={bedroom}
                                variant={filters.bedrooms.includes(bedroom) ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleCheckboxFilterChange("bedrooms", bedroom)}
                                className={
                                  filters.bedrooms.includes(bedroom) ? "bg-emerald-600 hover:bg-emerald-700" : ""
                                }
                              >
                                {bedroom}
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="property-type">
                        <AccordionTrigger className="text-base">Property Type</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["For Sale", "For Rent"].map((type) => (
                              <div key={type} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`mobile-type-${type}`}
                                  checked={filters.propertyType.includes(type)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      handleCheckboxFilterChange("propertyType", type)
                                    } else {
                                      handleCheckboxFilterChange("propertyType", type)
                                    }
                                  }}
                                />
                                <Label htmlFor={`mobile-type-${type}`}>{type}</Label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => document.querySelector("[data-radix-collection-item]")?.click()}
                    >
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        setFilters({
                          propertyType: [],
                          priceRange: [0, 50000000],
                          bedrooms: [],
                          location: "",
                          category: [],
                        })
                      }
                    >
                      Reset Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Properties Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{filteredProperties.length} Properties</h2>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <Card key={property.id} className="overflow-hidden group">
                      <div className="relative">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
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
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <Building2 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters to see more results</p>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setFilters({
                        propertyType: [],
                        priceRange: [0, 50000000],
                        bedrooms: [],
                        location: "",
                        category: [],
                      })
                    }
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {filteredProperties.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
