"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Box, FileText, Home, MessageSquare, Settings, ShoppingBag, Users } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <Home className="h-5 w-5" /> },
    { name: "Products", path: "/admin/products", icon: <ShoppingBag className="h-5 w-5" /> },
    { name: "Services", path: "/admin/services", icon: <FileText className="h-5 w-5" /> },
    { name: "Orders", path: "/admin/orders", icon: <Box className="h-5 w-5" /> },
    { name: "Inquiries", path: "/admin/inquiries", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Customers", path: "/admin/customers", icon: <Users className="h-5 w-5" /> },
    { name: "Analytics", path: "/admin/analytics", icon: <BarChart className="h-5 w-5" /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r h-screen sticky top-0">
      <div className="p-6 border-b">
        <Link href="/admin" className="flex items-center">
          <span className="text-xl font-bold">Excel Admin</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive(item.path) ? "bg-green-50 text-green-600" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t">
        <Link
          href="/"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
        >
          <span className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </span>
          <span>Back to Website</span>
        </Link>
      </div>
    </div>
  )
}
