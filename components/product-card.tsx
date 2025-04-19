"use client"

import Image from "next/image"
import { useCart } from "./cart-context"
import { toast } from "@/components/ui/use-toast"

type ProductCardProps = {
  product: {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    stock: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    })

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    })
  }

  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={product.imageUrl || "/placeholder.svg?height=400&width=400"}
          alt={product.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium">R{product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
