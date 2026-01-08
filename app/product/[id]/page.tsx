import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetailContent } from "@/components/product-detail-content"
import { createServerClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const supabase = await createServerClient()

  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error || !product) {
    notFound()
  }

  const { data: relatedProducts } = await supabase
    .from("products")
    .select("*")
    .eq("category", product.category)
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
