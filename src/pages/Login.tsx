"use client";

import { useState } from "react";
import axios from "axios";
import {
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Login() {
  const { toast } = useToast();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);

  // --- Step 1: Send OTP ---
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://64.227.165.232:8080/user/login/send/otp",
        {
          user_phone: formData.phone,
        }
      );

      if (response.data.status === "success") {
        toast({
          title: "OTP Sent",
          description: "Please check your phone for the OTP.",
        });
        setStep("otp");
      } else {
        throw new Error(response.data.message || "Failed to send OTP");
      }
    } catch (error: any) {
      toast({
        title: "Error sending OTP",
        description: error.response?.data?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // --- Step 2: Validate OTP ---
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://64.227.165.232:8080/user/login/validate/otp",
        {
          user_phone: formData.phone,
          user_otp: formData.otp,
        }
      );

      if (response.data.status === "success") {
        const token = response.data.data?.token;
        if (token) localStorage.setItem("authToken", token);

        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard...",
        });
        window.location.href = "/dashboard";
      } else {
        throw new Error(response.data.message || "Invalid OTP");
      }
    } catch (error: any) {
      toast({
        title: "OTP Verification Failed",
        description: error.response?.data?.message || "Please check your OTP.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center bg-[#0d3154] px-12 text-white ">
        <div className="flex flex-col items-center max-w-lg ">
          <img
            src="/login-page.png"
            alt="PayBazaar Illustration"
            className="w-64 h-54 object-contain"
          />

          <div className="text-center mt-14">
            <h2 className="text-3xl font-bold">
              PayBazaar: Secure & Reliable Payment Service
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              At PAYBAZAAR, we are more than just a financial institution; we
              are a catalyst for inclusive growth.
            </p>
            <ul className="flex justify-center gap-8 text-sm text-slate-200 mt-6">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" /> Quick settlement in 1
                hour
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-white" /> 24/7 Available
              </li>
            </ul>
          </div>

          <Card className="w-full shadow-lg border-0 rounded-xl bg-white/90 backdrop-blur-md mt-16">
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
                Paybazaar Technologies Pvt Ltd, Office No-304, Plot No.-2 T/F
                Netaji Subhash Marg, Delhi
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center px-6 lg:px-16 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0d3154] rounded-xl shadow-lg">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome to PayBazaar!
            </h1>
            <p className="text-slate-500 text-sm">
              {step === "phone"
                ? "Enter your phone number to receive OTP"
                : "Enter OTP to verify"}
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-[#0d3154]">
                {step === "phone" ? "Sign In" : "Verify OTP"}
              </CardTitle>
              <CardDescription className="text-slate-500">
                {step === "phone"
                  ? "We’ll send you an OTP to login"
                  : "Check your SMS for the OTP"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {step === "phone" ? (
                <form onSubmit={handleSendOtp} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12 bg-slate-50 border-slate-200 focus:border-[#0d3154] focus:ring-[#0d3154]/40"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-[#0d3154] to-blue-900 text-white font-semibold text-base shadow-md hover:opacity-90"
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="otp"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Enter OTP
                    </Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({ ...formData, otp: e.target.value })
                      }
                      className="h-12 bg-slate-50 border-slate-200 focus:border-[#0d3154] focus:ring-[#0d3154]/40"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-[#0d3154] to-blue-900 text-white font-semibold text-base shadow-md hover:opacity-90"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
