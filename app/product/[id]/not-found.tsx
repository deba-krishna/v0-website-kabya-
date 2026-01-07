import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SearchX, Home, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <SearchX className="h-10 w-10 md:h-12 md:h-12 text-muted-foreground" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Product Not Found</h1>
          <p className="text-xl text-muted-foreground mb-12 text-balance">
            Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be
            incorrect.
          </p>

          <Card className="p-6 md:p-8 mb-8 border-primary/20 bg-card/50 backdrop-blur">
            <h2 className="text-xl font-semibold mb-4">What you can do:</h2>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Check if the product URL is correct</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Browse our complete collection of templates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Contact us if you need help finding a specific product</span>
              </li>
            </ul>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50">
              <Link href="/shop">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Browse All Templates
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
