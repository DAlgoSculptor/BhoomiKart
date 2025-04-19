import { Building, Home, Users, Zap } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose BhoomiKart</h2>
          <p className="mt-4 text-lg text-gray-600">India's fastest growing real estate platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Home,
              stat: "20,000+",
              label: "Properties Listed",
              description: "A wide range of verified properties to choose from",
            },
            {
              icon: Users,
              stat: "15,000+",
              label: "Happy Customers",
              description: "Satisfied users who found their perfect property",
            },
            {
              icon: Building,
              stat: "500+",
              label: "Cities Covered",
              description: "Extensive coverage across India's major cities",
            },
            {
              icon: Zap,
              stat: "98%",
              label: "Success Rate",
              description: "High success rate in property transactions",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{item.stat}</h3>
              <p className="text-emerald-600 font-medium">{item.label}</p>
              <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
