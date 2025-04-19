import Link from "next/link"
import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Building2 className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">BhoomiKart</span>
            </Link>
            <p className="mb-4">Simplifying real estate transactions for buyers and sellers across India.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Properties", href: "/properties" },
                { label: "Agents", href: "/agents" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-emerald-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Property Types</h3>
            <ul className="space-y-3">
              {[
                { label: "Residential", href: "/properties?category=residential" },
                { label: "Commercial", href: "/properties?category=commercial" },
                { label: "Land", href: "/properties?category=land" },
                { label: "Industrial", href: "/properties?category=industrial" },
                { label: "Luxury", href: "/properties?category=luxury" },
                { label: "New Projects", href: "/properties?category=new-projects" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-emerald-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest property updates.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} BhoomiKart. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm hover:text-emerald-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm hover:text-emerald-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/faq" className="text-sm hover:text-emerald-500 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
