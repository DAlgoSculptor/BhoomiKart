"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building2, Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  userType: z.enum(["buyer", "seller", "agent"], {
    required_error: "Please select a user type",
  }),
})

const phoneRegisterSchema = z.object({
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  userType: z.enum(["buyer", "seller", "agent"], {
    required_error: "Please select a user type",
  }),
})

type RegisterFormData = z.infer<typeof registerSchema>
type PhoneRegisterFormData = z.infer<typeof phoneRegisterSchema>

export default function RegisterPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email")

  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
    setValue: setEmailValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const {
    register: registerPhone,
    handleSubmit: handlePhoneSubmit,
    formState: { errors: phoneErrors },
    setValue: setPhoneValue,
  } = useForm<PhoneRegisterFormData>({
    resolver: zodResolver(phoneRegisterSchema),
  })

  const onSubmitEmail = async (data: RegisterFormData) => {
    try {
      setIsLoading(true)
      // TODO: Implement actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API call
      toast({
        title: "Success",
        description: "Your account has been created successfully.",
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmitPhone = async (data: PhoneRegisterFormData) => {
    try {
      setIsLoading(true)
      // TODO: Implement actual phone registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API call
      toast({
        title: "Success",
        description: "Your account has been created successfully.",
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold">BhoomiKart</span>
          </Link>
          <h1 className="text-2xl font-bold text-center">Create your account</h1>
          <p className="text-gray-500 mt-2 text-center">Join BhoomiKart to find your perfect property</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <Tabs defaultValue="email" className="mb-6" onValueChange={(value) => setActiveTab(value as "email" | "phone")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email" className="pt-4">
              <form onSubmit={handleEmailSubmit(onSubmitEmail)} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...registerEmail("email")}
                    className={emailErrors.email ? "border-red-500" : ""}
                  />
                  {emailErrors.email && (
                    <p className="text-sm text-red-500 mt-1">{emailErrors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      {...registerEmail("password")}
                      className={emailErrors.password ? "border-red-500" : ""}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                  {emailErrors.password && (
                    <p className="text-sm text-red-500 mt-1">{emailErrors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>I am a</Label>
                  <RadioGroup
                    defaultValue="buyer"
                    className="flex space-x-4"
                    onValueChange={(value) => setEmailValue("userType", value as "buyer" | "seller" | "agent")}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="buyer" id="buyer" />
                      <Label htmlFor="buyer">Buyer/Tenant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="seller" id="seller" />
                      <Label htmlFor="seller">Seller/Owner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="agent" id="agent" />
                      <Label htmlFor="agent">Agent</Label>
                    </div>
                  </RadioGroup>
                  {emailErrors.userType && (
                    <p className="text-sm text-red-500 mt-1">{emailErrors.userType.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="phone" className="pt-4">
              <form onSubmit={handlePhoneSubmit(onSubmitPhone)} className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    {...registerPhone("phone")}
                    className={phoneErrors.phone ? "border-red-500" : ""}
                  />
                  {phoneErrors.phone && (
                    <p className="text-sm text-red-500 mt-1">{phoneErrors.phone.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="password-phone">Password</Label>
                  <div className="relative">
                    <Input
                      id="password-phone"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      {...registerPhone("password")}
                      className={phoneErrors.password ? "border-red-500" : ""}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                  {phoneErrors.password && (
                    <p className="text-sm text-red-500 mt-1">{phoneErrors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>I am a</Label>
                  <RadioGroup
                    defaultValue="buyer"
                    className="flex space-x-4"
                    onValueChange={(value) => setPhoneValue("userType", value as "buyer" | "seller" | "agent")}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="buyer" id="buyer-phone" />
                      <Label htmlFor="buyer-phone">Buyer/Tenant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="seller" id="seller-phone" />
                      <Label htmlFor="seller-phone">Seller/Owner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="agent" id="agent-phone" />
                      <Label htmlFor="agent-phone">Agent</Label>
                    </div>
                  </RadioGroup>
                  {phoneErrors.userType && (
                    <p className="text-sm text-red-500 mt-1">{phoneErrors.userType.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="relative my-6">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" disabled={isLoading}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full" disabled={isLoading}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
