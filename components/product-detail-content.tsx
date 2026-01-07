"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Check,
  Clock,
  Shield,
  Mail,
  Calendar,
  Monitor,
  Smartphone,
  Tablet,
  Zap,
  CheckCircle2,
} from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

interface ProductDetailContentProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
  const { addToCart, items } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  const [showMockPayment, setShowMockPayment] = useState(false)
  const router = useRouter()

  const isInCart = items.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  const handleBuyNow = () => {
    if (!isInCart) {
      handleAddToCart()
    }
    // Show mock payment modal
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

  const features = Array.isArray(product.features)
    ? product.features
    : [
        "Fully customizable design",
        "Mobile-responsive layout",
        "Fast loading speed",
        "Secure hosting included",
        "Easy to share via link",
      ]

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
            {product.image_url ? (
              <Image
                src={product.image_url || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/40">
                    <span className="text-6xl">💝</span>
                  </div>
                  <Badge className="text-base px-4 py-2">{product.category}</Badge>
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{product.name}</h1>
              <p className="text-lg text-muted-foreground text-pretty">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-primary">₹{product.price}</span>
              <span className="text-muted-foreground">one-time</span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                onClick={handleBuyNow}
                size="lg"
                className="w-full text-lg h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50"
              >
                <Zap className="h-5 w-5 mr-2" />
                Buy It Now
              </Button>
              <Button
                onClick={handleAddToCart}
                size="lg"
                variant="outline"
                className="w-full text-lg h-14 bg-transparent"
                disabled={justAdded}
              >
                {justAdded ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>12-24 hr delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Receive */}
        <Card className="p-6 md:p-8 mb-8 bg-card/50 backdrop-blur border-primary/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What You'll Receive</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Customization Form Access</h3>
                <p className="text-muted-foreground text-sm">
                  Fill in your details, upload photos/videos, and share your special message
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Custom Website Link</h3>
                <p className="text-muted-foreground text-sm">
                  {product.delivery_info || "Delivered within 12-24 hours to your registered email"}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Free Hosting & Maintenance</h3>
                <p className="text-muted-foreground text-sm">
                  Valid for {product.validity_period || "1 Year"} - no hidden costs
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Choose & Pay",
                desc: "Select your template and complete secure checkout",
                icon: <ShoppingCart className="h-6 w-6" />,
              },
              {
                step: "2",
                title: "Share Content",
                desc: "Upload photos, videos, and write your message via the form we send",
                icon: <Mail className="h-6 w-6" />,
              },
              {
                step: "3",
                title: "We Build",
                desc: "Our team crafts your personalized website within 12-24 hours",
                icon: <Monitor className="h-6 w-6" />,
              },
              {
                step: "4",
                title: "Receive & Share",
                desc: "Get your unique link and share it instantly with your special person",
                icon: <Zap className="h-6 w-6" />,
              },
            ].map((item) => (
              <Card key={item.step} className="p-6 text-center border-border/40 bg-card/30 backdrop-blur">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/40">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-primary mb-2">STEP {item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <Card className="p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About This Product</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Trust Sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-primary/20 bg-card/30">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Money-Back Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              {product.guarantee_text || "100% satisfaction or your money back within 7 days"}
            </p>
          </Card>

          <Card className="p-6 border-primary/20 bg-card/30">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm text-muted-foreground mb-2">Need help? We're here for you at:</p>
            <a
              href={`mailto:${product.support_email || "bringuouthere@gmail.com"}`}
              className="text-sm text-primary hover:underline"
            >
              {product.support_email || "bringuouthere@gmail.com"}
            </a>
          </Card>

          <Card className="p-6 border-primary/20 bg-card/30">
            <Calendar className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Website Validity</h3>
            <p className="text-sm text-muted-foreground">
              Your website stays live for {product.validity_period || "1 Year"} with free hosting
            </p>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="p-6 md:p-8 mb-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <h2 className="text-2xl font-bold mb-6">Technical Details</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Monitor className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Fully Responsive Design</h4>
                <p className="text-sm text-muted-foreground">
                  {product.technical_details ||
                    "Optimized for all devices - mobile, tablet, and desktop. Works perfectly on all modern browsers."}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Smartphone className="h-4 w-4 text-primary" />
                <span>Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Tablet className="h-4 w-4 text-primary" />
                <span>Tablet</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Monitor className="h-4 w-4 text-primary" />
                <span>Desktop</span>
              </div>
            </div>
          </div>
        </Card>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mock Payment Modal */}
      {showMockPayment && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 md:p-8 space-y-6 border-primary/20 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/40">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mock Payment</h3>
              <p className="text-muted-foreground mb-4">Test the checkout flow</p>
              <div className="text-3xl font-bold text-primary mb-6">₹{product.price}</div>
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
