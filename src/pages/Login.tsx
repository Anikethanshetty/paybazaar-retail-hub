"use client"

import { useState } from "react"
import { CreditCard, Eye, EyeOff, Mail, Phone, MapPin, Building2 } from "lucide-react"
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
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-primary/10 via-white to-primary/5 p-12 relative">
        <img
          src="/login-page.png"
          alt="Payment Illustration"
          className="w-80 h-80 object-contain mb-8"
        />
        <h2 className="text-3xl font-bold text-primary text-center">
          Paybazaar: Lightning Speed Gleaming Service
        </h2>
        <p className="text-muted-foreground text-center mt-4 max-w-md leading-relaxed">
          Effortlessly handle payments with our secure, all-in-one Payment Gateway solution.
        </p>
        <ul className="mt-6 text-sm text-muted-foreground space-y-2 text-left">
          <li>✔ Do not provide your username and password anywhere else.</li>
          <li>✔ Never share your password with anyone.</li>
        </ul>

        {/* Company Info Card */}
        <Card className="mt-10 bottom-6 w-full max-w-md shadow-lg border-0 bg-white/90 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-paybazaar-navy flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Company Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> paybazaartechnologies@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> +91 9319187762
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1" />
              PAYBAZAAR TECHNOLOGIES PRIVATE LIMITED,
              5054 Office No-304, Plot No 2, T/F Netaji Subhash Marg, Darya Ganj, New Delhi,
              Central Delhi - 110002, Delhi
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Right Login Section */}
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="text-center mb-8 lg:hidden">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mb-4 shadow-lg">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">PayBazaar</h1>
            <p className="text-muted-foreground mt-1">Retailer Portal</p>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8 hidden lg:block">
            <h2 className="text-3xl font-bold text-paybazaar-navy mb-2">Welcome Back!</h2>
            <p className="text-muted-foreground">Please sign in to your account</p>
          </div>

          {/* Login Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-2xl font-bold text-paybazaar-navy">Sign In</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 transition-all duration-300"
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
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 pr-12"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-12 w-12 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, rememberMe: !!checked })
                      }
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="remember" className="text-sm text-slate-600 font-medium">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Sign In to Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
