import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetailContent } from "@/components/product-detail-content"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { id } = await params

  // Fetch the product
  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error || !product) {
    notFound()
  }

  // Fetch related products (same category, excluding current product)
  const { data: relatedProducts } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", product.category_id)
    .neq("id", id)
    .limit(4)

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductDetailContent product={product} relatedProducts={relatedProducts || []} />
      <Footer />
    </div>
  )
}
