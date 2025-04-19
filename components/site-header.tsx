"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/properties?type=buy" },
    { label: "Rent", href: "/properties?type=rent" },
    { label: "Sell", href: "/sell" },
    { label: "Agents", href: "/agents" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">BhoomiKart</span>
          </Link>

          <nav className="hidden ml-10 space-x-6 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <Building2 className="h-6 w-6 text-emerald-600" />
                    <span className="text-xl font-bold">BhoomiKart</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <Link key={index} href={item.href} className="text-base font-medium py-2">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t flex flex-col space-y-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">Log in</Link>
                  </Button>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/register">Sign up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
