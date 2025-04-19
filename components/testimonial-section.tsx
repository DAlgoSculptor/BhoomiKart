import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "BhoomiKart made finding my dream home incredibly easy. The platform's user-friendly interface and detailed property listings helped me make an informed decision without any hassle.",
    author: "Priya Sharma",
    position: "Homeowner",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "As a real estate agent, BhoomiKart has been a game-changer for my business. The platform connects me with serious buyers and has significantly improved my conversion rate.",
    author: "Rajesh Kumar",
    position: "Real Estate Agent",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "I was able to sell my property within weeks of listing it on BhoomiKart. The verification process ensured that only genuine buyers contacted me, saving me a lot of time.",
    author: "Ananya Patel",
    position: "Property Seller",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from our satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-emerald-100 mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
