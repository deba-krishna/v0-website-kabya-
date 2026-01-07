"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { Trash2, Plus, Minus, ShoppingBag, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const [showMockPayment, setShowMockPayment] = useState(false)
  const router = useRouter()

  const handleCheckout = () => {
    setShowMockPayment(true)
  }

  const handleMockPayment = (success: boolean) => {
    setShowMockPayment(false)
    if (success) {
      router.push("/success")
    } else {
      router.push("/error")
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-md mx-auto space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
            <p className="text-muted-foreground">{"Add some beautiful templates to get started!"}</p>
            <Link href="/shop">
              <Button className="bg-primary hover:bg-primary/90">Browse Templates</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Your Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-6 border-border/40 bg-card/50 backdrop-blur">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">💝</span>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3 border border-border/40 rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="text-xl font-bold text-primary">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 border-border/40 bg-card/50 backdrop-blur sticky top-20">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Hosting (1 year)</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="border-t border-border/40 pt-4 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{getTotalPrice()}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold purple-glow"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">Secure mock payment for testing</p>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {showMockPayment && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 md:p-8 space-y-6 border-primary/20 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/40">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mock Payment</h3>
              <p className="text-muted-foreground mb-4">Test the checkout flow</p>
              <div className="text-3xl font-bold text-primary mb-2">₹{getTotalPrice()}</div>
              <p className="text-sm text-muted-foreground">{items.length} item(s)</p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => handleMockPayment(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <CheckCircle2 className="h-5 w-5 mr-2" />
                Simulate Success
              </Button>
              <Button onClick={() => handleMockPayment(false)} variant="destructive" className="w-full" size="lg">
                Simulate Failure
              </Button>
              <Button onClick={() => setShowMockPayment(false)} variant="outline" className="w-full">
                Cancel
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              This is a test payment modal. No actual transaction will occur.
            </p>
          </Card>
        </div>
      )}
    </>
  )
}
