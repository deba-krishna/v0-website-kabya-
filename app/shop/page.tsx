"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { GSAPWrapper } from "@/components/gsap-wrapper"
import { useState, useEffect, Suspense } from "react"
import { createBrowserClient } from "@/lib/supabase/client"
import type { Product } from "@/lib/products"
import { useSearchParams } from "next/navigation"

type Category =
  | "All"
  | "Special"
  | "Anniversary"
  | "Sorry"
  | "Birthday"
  | "Proposal"
  | "Friendship"
  | "Thank You"
  | "Confession"
  | "Miss You"

function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createBrowserClient()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q")

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

        if (error) throw error

        setProducts(data as Product[])
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [supabase])

  const filteredProducts = (() => {
    if (!searchQuery) {
      return selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)
    }

    const query = searchQuery.toLowerCase()
    const matches = products.filter(
      (p) => p.category?.toLowerCase().includes(query) || p.name?.toLowerCase().includes(query),
    )

    return matches.length > 0 ? matches : products
  })()

  const categories: Category[] = [
    "All",
    "Special",
    "Anniversary",
    "Sorry",
    "Birthday",
    "Proposal",
    "Friendship",
    "Thank You",
    "Confession",
    "Miss You",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop Templates</h1>
        <p className="text-muted-foreground text-lg">
          {searchQuery ? `Search results for "${searchQuery}"` : "Choose the perfect template for your special moment"}
        </p>
      </div>

      <GSAPWrapper animation="stagger" className="mb-12">
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap ${
                selectedCategory === category ? "bg-primary hover:bg-primary/90 purple-glow" : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </GSAPWrapper>

      {loading ? (
        <div className="text-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">Loading products...</p>
        </div>
      ) : (
        <GSAPWrapper animation="stagger">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </GSAPWrapper>
      )}
    </div>
  )
}

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-12">
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground text-lg">Loading...</p>
            </div>
          </div>
        }
      >
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  )
}
