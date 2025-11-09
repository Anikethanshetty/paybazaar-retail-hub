"use client";

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  Activity,
  PersonStanding,
  Key,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const retailerNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: ArrowLeftRight,
  },
  {
    title: "Services",
    href: "/services",
    icon: CreditCard,
  },  
  {
    title:"Funds Request",
    href:"/funds-request",
    icon:CreditCard,
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
  {
    title: "Commission",
    href: "/commission",
    icon: Activity,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: PersonStanding,
  },
  {
    title: "Change Password",
    href: "/change-password",
    icon: Key,
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

export function AppSidebar() {
  const [userRole] = useState<"retailer" | "admin">("retailer");
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = userRole === "admin" ? adminNavItems : retailerNavItems;
  const isCollapsed = state === "collapsed";

  const isExpanded = navItems.some((item) => currentPath === item.href);

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-md px-1.5 py-2 text-sm transition-colors ${
      isActive
        ? "border-b border-2 border-muted-foreground text-primary-foreground font-semibold"
        : "hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <Sidebar className="border-r border-sidebar-border" collapsible="icon">
      <SidebarContent>
        {/* Logo Section */}
        <SidebarGroup>
          <div className="flex h-16 items-center px-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <img
                src="/paybazaar-logo.png"
                alt="PayBazaar"
                className="h-8 w-8 shrink-0"
              />
              {!isCollapsed && (
                <span className="text-lg font-semibold text-sidebar-foreground">
                  PayBazaar
                </span>
              )}
            </div>
          </div>
        </SidebarGroup>

        {/* Navigation Section */}
        <SidebarGroup>
          <SidebarGroupLabel>
            {userRole === "admin" ? "Admin Panel" : "Services"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <NavLink to={item.href} className={getNavClassName}>
                    <item.icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Info Section */}
        {!isCollapsed && (
          <SidebarGroup className="mt-auto">
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
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
