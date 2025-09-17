import { useState } from "react"
import { Eye, EyeOff, Shield, Zap, CreditCard } from "lucide-react"
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
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-gradient-light">
      {/* Left Illustration Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-slate-800/30 opacity-30"></div>
        
        <div className="relative z-10 text-center max-w-lg">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mb-4 shadow-2xl">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">PayBazaar</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Image */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <img
              src="/login-page.png"
              alt="Payment Illustration"
              className="w-80 h-80 object-contain mx-auto relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* Title & Description */}
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Lightning Speed <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Gleaming</span> Service
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Effortlessly handle payments with our secure, all-in-one Payment Gateway solution.
          </p>

          {/* Features */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-sm">Secure & encrypted transactions</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-sm">Lightning fast processing</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-sm">Multi-payment gateway support</span>
            </div>
          </div>
        </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back!</h2>
            <p className="text-muted-foreground">Please sign in to your account</p>
          </div>

          {/* Login Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-2xl font-bold text-slate-900">
                Sign In
              </CardTitle>
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
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
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

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground font-medium">New to PayBazaar?</span>
                </div>
              </div>

              {/* Register */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Create an account to get started
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center w-full h-11 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm rounded-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Create New Account
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold">Security Guidelines:</p>
                <p>• Never share your login credentials with anyone</p>
                <p>• Always log out when using shared devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}