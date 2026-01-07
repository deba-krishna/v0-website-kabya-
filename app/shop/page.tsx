"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { GSAPWrapper } from "@/components/gsap-wrapper"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import type { Product } from "@/lib/products"

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

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const supabase = createClient()
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching products:", error)
      } else {
        setProducts(data || [])
      }
      setLoading(false)
    }

    fetchProducts()
  }, [])

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

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
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop Templates</h1>
          <p className="text-muted-foreground text-lg">{"Choose the perfect template for your special moment"}</p>
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
          <>
            <GSAPWrapper animation="stagger">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </GSAPWrapper>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No products found in this category.</p>
                <p className="text-sm text-muted-foreground">
                  {"Try selecting a different category or check back soon for new templates!"}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
