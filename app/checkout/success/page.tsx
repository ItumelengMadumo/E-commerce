"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/components/cart-context"

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const { cart } = useCart()

  // Redirect to home if accessed directly without checkout
  useEffect(() => {
    if (cart.items.length > 0) {
      router.push("/checkout")
    }
  }, [cart.items.length, router])

  return (
    <div className="container py-16 max-w-2xl mx-auto text-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>
        </div>

        <div className="space-y-4 w-full pt-6">
          <div className="border rounded-lg p-6 text-left">
            <h2 className="font-medium mb-4">What happens next?</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium">
                  1
                </div>
                <div>
                  <p className="font-medium">Order processing</p>
                  <p className="text-sm text-muted-foreground">Your order will be processed within 24 hours.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium">
                  2
                </div>
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-sm text-muted-foreground">Your order will be shipped within 1-3 business days.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium">
                  3
                </div>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a shipping confirmation email with tracking information.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/products"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
