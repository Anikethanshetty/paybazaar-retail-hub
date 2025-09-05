import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  ArrowLeftRight,
  Smartphone,
  Receipt,
  Shield,
  History,
  Wallet,
  Settings,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const retailerNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "DMT",
    href: "/dmt",
    icon: ArrowLeftRight,
  },
  {
    title: "Bank Transfer",
    href: "/bank-transfer",
    icon: CreditCard,
  },
  {
    title: "Bill Payments",
    href: "/bill-payments",
    icon: Receipt,
  },
  {
    title: "Recharge",
    href: "/recharge",
    icon: Smartphone,
  },
  {
    title: "eKYC",
    href: "/ekyc",
    icon: Shield,
  },
  {
    title: "Transaction History",
    href: "/transactions",
    icon: History,
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: Wallet,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const adminNavItems = [
  {
    title: "Admin Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Retailer Management",
    href: "/admin/retailers",
    icon: Users,
  },
  {
    title: "Transaction Monitor",
    href: "/admin/transactions",
    icon: BarChart3,
  },
  {
    title: "Service Management",
    href: "/admin/services",
    icon: Settings,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: Receipt,
  },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [userRole] = useState<"retailer" | "admin">("retailer"); // This will come from auth context

  const navItems = userRole === "admin" ? adminNavItems : retailerNavItems;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-sidebar border-r border-sidebar-border transition-transform duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isOpen ? "w-64" : "lg:w-16"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
            {isOpen && (
              <div className="flex items-center gap-3">
                <img
                  src="/paybazaar-logo.png"
                  alt="PayBazaar"
                  className="h-8 w-8"
                />
                <span className="text-lg font-semibold text-sidebar-foreground">
                  PayBazaar
                </span>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {isOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive &&
                      "bg-sidebar-primary text-sidebar-primary-foreground"
                  )
                }
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {isOpen && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>

          {/* User info */}
          {isOpen && (
            <div className="border-t border-sidebar-border p-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center">
                  <span className="text-sm font-medium text-sidebar-primary-foreground">
                    JD
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-sidebar-foreground/70 truncate">
                    {userRole === "admin" ? "Administrator" : "Retailer"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
