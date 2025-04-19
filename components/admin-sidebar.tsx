"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Package, ShoppingBag, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout")
      toast({
        title: "Logged out successfully",
      })
      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      toast({
        title: "Logout failed",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <span className="font-bold text-xl">ShopNow Admin</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-muted">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`
        ${isOpen ? "block" : "hidden"} 
        md:block md:w-64 border-r bg-muted/40 p-6 space-y-6
      `}
      >
        <div className="flex items-center mb-8">
          <span className="font-bold text-xl">ShopNow Admin</span>
        </div>

        <nav className="space-y-1">
          <Link
            href="/admin/dashboard"
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/admin/dashboard")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>

          <Link
            href="/admin/products"
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/admin/products")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Package className="mr-3 h-5 w-5" />
            Products
          </Link>

          <Link
            href="/admin/orders"
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/admin/orders")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <ShoppingBag className="mr-3 h-5 w-5" />
            Orders
          </Link>
        </nav>

        <div className="pt-8 mt-auto">
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  )
}
