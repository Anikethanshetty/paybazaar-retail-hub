import { Header } from "@/components/layout/Header";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeftRight,
  CreditCard,
  Receipt,
  Smartphone,
  Shield,
  Wallet,
  Building2,
  Banknote,
  ArrowLeft,
  Search,
  Settings,
  Activity,
} from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      id: "aeps",
      title: "AEPS",
      subtitle: "Aadhaar Enabled Payment",
      icon: Shield,
      status: "active" as const,
      description: "Withdraw cash using Aadhaar authentication",
      commission: "₹5-15 per transaction",
      gradient: "from-blue-500 to-blue-600",
      category: "Banking",
      route:"/aeps"
    },
    {
      id: "aeps-2",
      title: "AEPS-2",
      subtitle: "Enhanced AEPS Services",
      icon: Shield,
      status: "active" as const,
      description: "Advanced Aadhaar payment services",
      commission: "₹8-20 per transaction",
      gradient: "from-indigo-500 to-indigo-600",
      category: "Banking",
      route:"/aeps2"

    },
    {
      id: "utilities-bill",
      title: "UTILITIES BILL",
      subtitle: "Bill Payment Services",
      icon: Receipt,
      status: "active" as const,
      description: "Pay electricity, water, gas bills",
      commission: "0.5% - 2% commission",
      gradient: "from-green-500 to-green-600",
      category: "Bills",
      route:"/utility-payments"
    },
    {
      id: "digi-khata-ppi",
      title: "Digi Khata PPI",
      subtitle: "Digital Wallet Services",
      icon: Wallet,
      status: "active" as const,
      description: "Prepaid payment instrument services",
      commission: "₹2-10 per transaction",
      gradient: "from-purple-500 to-purple-600",
      category: "Wallet",
      route:"/digikatha"
    },
    {
      id: "dmt-1",
      title: "DMT-1",
      subtitle: "Domestic Money Transfer",
      icon: ArrowLeftRight,
      status: "active" as const,
      description: "Send money across India instantly",
      commission: "₹10-25 per transaction",
      gradient: "from-orange-500 to-orange-600",
      category: "Transfer",
      route:"/dmt1"
    },
    {
      id: "dmt-2",
      title: "DMT-2",
      subtitle: "Enhanced Money Transfer",
      icon: ArrowLeftRight,
      status: "active" as const,
      description: "Advanced money transfer services",
      commission: "₹15-30 per transaction",
      gradient: "from-red-500 to-red-600",
      category: "Transfer",
      route:"/dmt2"
    },
    {
      id: "payout",
      title: "PAYOUT",
      subtitle: "Business Payout",
      icon: CreditCard,
      status: "active" as const,
      description: "Bulk payment solutions for businesses",
      commission: "₹5-15 per transaction",
      gradient: "from-emerald-500 to-emerald-600",
      category: "Business",
    },
    {
      id: "aeps-settlement",
      title: "AEPS SETTLEMENT",
      subtitle: "Settlement Services",
      icon: Building2,
      status: "active" as const,
      description: "Settle AEPS transactions securely",
      commission: "₹2-8 per settlement",
      gradient: "from-cyan-500 to-cyan-600",
      category: "Banking",
    },
    {
      id: "mobile-recharge",
      title: "MOBILE RECHARGE",
      subtitle: "Mobile & DTH Recharge",
      icon: Smartphone,
      status: "active" as const,
      description: "Prepaid mobile and DTH recharge",
      commission: "1% - 3% commission",
      gradient: "from-pink-500 to-pink-600",
      category: "Recharge",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(services.map((s) => s.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background flex w-full">
      <AppSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="flex-1 overflow-auto">
          {/* Hero Section */}
          {/* <div className="paybazaar-gradient p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-3xl font-bold">Our Services</h1>
                  <p className="text-white/90 mt-2">
                    Comprehensive financial services to grow your business
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category 
                        ? "bg-white text-primary" 
                        : "text-white hover:bg-white/10"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* Services Grid */}
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Services
                      </p>
                      <p className="text-2xl font-bold">{services.length}</p>
                    </div>
                    <Activity className="h-8 w-8 text-primary" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Active Services
                      </p>
                      <p className="text-2xl font-bold text-success">
                        {services.filter((s) => s.status === "active").length}
                      </p>
                    </div>
                    <Shield className="h-8 w-8 text-success" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Categories
                      </p>
                      <p className="text-2xl font-bold">
                        {categories.length - 1}
                      </p>
                    </div>
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Revenue
                      </p>
                      <p className="text-2xl font-bold">₹2.45L</p>
                    </div>
                    <Banknote className="h-8 w-8 text-primary" />
                  </div>
                </Card>
              </div> */}

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card
                    key={service.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className={`h-2 `} />

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white`}
                        >
                          <service.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <h3 className="font-semibold text-lg">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.subtitle}
                        </p>
                        <p className="text-sm">{service.description}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">
                            Commission:
                          </span>
                          <span className="font-medium text-success">
                            {service.commission}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm" onClick={() => window.location.href = service.route}>
                            Use Service
                          </Button>
                          {/* <Button variant="outline" size="sm">
                            Details
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">
                    No services found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
