"use client"

import { useState } from "react"
import {
  CreditCard,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    window.location.href = "/dashboard"
  }

  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center bg-[#0d3154] px-12 text-white">
        <div className="flex flex-col items-center space-y-12 max-w-lg">
          {/* Illustration */}
          <img
            src="/login-page.png"
            alt="PayBazaar Illustration"
            className="w-64 h-64 object-contain"
          />

          {/* Heading & Description */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">PayBazaar: Secure & Reliable Payment Service</h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              At PAYBAZAAR, we are more than just a financial institution; we are a catalyst for
              inclusive growth and empowerment. We harness technology to democratize financial
              services, making them reachable to every corner of the nation.
            </p>

            {/* Features */}
            <ul className="flex justify-center gap-8 text-sm text-slate-200 mt-4">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" /> Quick settlement in 1 hour
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-white" /> 24/7 Available
              </li>
            </ul>
          </div>

          {/* Company Info Card */}
          <Card className="w-full shadow-lg border-0 rounded-xl bg-white/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#0d3154] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0d3154]" /> Company Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0d3154]" /> info@paybazaar.in
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0d3154]" /> +91 9319187762
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0d3154] mt-1" />
                Paybazaar Technologies Pvt Ltd, Office No-304, Plot No.-2 T/F Netaji Subhash Marg,
                Delhi
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Section - Login */}
      <div className="flex justify-center items-center px-6 lg:px-16 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="text-center md:hidden space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0d3154] rounded-xl shadow-lg">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome to PayBazaar!</h1>
            <p className="text-slate-500 text-sm">Sign in to manage your payments</p>
          </div>

          {/* Desktop Heading */}
          <div className="hidden md:block text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#0d3154]">Welcome to PayBazaar!</h2>
            <p className="text-slate-500 text-sm">Sign in to manage your payments</p>
          </div>

          {/* Login Form */}
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center pb-6">
              <CardTitle className="text-2xl font-bold text-[#0d3154]">Sign In</CardTitle>
              <CardDescription className="text-slate-500">
                Enter your email and password to continue
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-slate-50 border-slate-200 focus:border-[#0d3154] focus:ring-[#0d3154]/40"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-slate-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="h-12 bg-slate-50 border-slate-200 focus:border-[#0d3154] focus:ring-[#0d3154]/40 pr-12"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-12 w-12 text-slate-500 hover:text-[#0d3154]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, rememberMe: !!checked })
                      }
                      className="data-[state=checked]:bg-[#0d3154] data-[state=checked]:border-[#0d3154]"
                    />
                    <Label htmlFor="remember" className="text-sm text-slate-600">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#0d3154] hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#0d3154] to-blue-900 hover:from-[#0b2946] hover:to-blue-950 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
