"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GSAPWrapper } from "@/components/gsap-wrapper"
import { ShoppingCart, Check, Zap } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  category: string
  description?: string
  image_url?: string
}

export function ProductCard({ id, name, price, category, description, image_url }: ProductCardProps) {
  const { addToCart, items } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const isInCart = items.some((item) => item.id === id)

  const handleAddToCart = () => {
    addToCart({ id, name, price, category })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <GSAPWrapper animation="fadeUp">
      <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300 group">
        <Link href={`/product/${id}`} className="block">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
            {image_url ? (
              <Image
                src={image_url || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40">
                  <span className="text-2xl">💝</span>
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{category}</span>
              </div>
            )}
          </div>
        </Link>
        <div className="p-5 space-y-3">
          <Link href={`/product/${id}`}>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{name}</h3>
            {description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>}
          </Link>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">₹{price}</span>
          </div>
          <div className="flex gap-2">
            <GSAPWrapper animation="magnetic" className="flex-1">
              <Link href={`/product/${id}`} className="block">
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50 purple-glow"
                >
                  <Zap className="h-4 w-4 mr-1" />
                  Buy Now
                </Button>
              </Link>
            </GSAPWrapper>
            <Button
              onClick={handleAddToCart}
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent"
              disabled={justAdded}
            >
              {justAdded ? (
                <>
                  <Check className="h-4 w-4 mr-1" />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </GSAPWrapper>
  )
}
