"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { LogOut, Plus, Trash2, Edit, UploadIcon, ImageIcon } from "lucide-react"
import type { Product } from "@/lib/products"
import Image from "next/image"

interface Testimonial {
  id: string
  image_url: string
  created_at: string
  customer_name: string
}

function generateSlug(name: string): string {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .trim() // Remove leading/trailing whitespace
}

export default function AdminPage() {
  const router = useRouter()
  const supabase = createBrowserClient()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  // Form state
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState<string>("")
  const [description, setDescription] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      router.push("/auth/login")
      return
    }

    setUser(session.user)
    console.log("[v0] Supabase user authenticated:", session.user.email)

    // Listen for auth changes
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.push("/auth/login")
      }
    })

    await Promise.all([fetchProducts(), fetchTestimonials()])
    setLoading(false)
  }

  async function fetchProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

      if (error) throw error

      console.log("[v0] Fetched products from Supabase:", data.length)
      setProducts(data as Product[])
    } catch (error) {
      console.error("[v0] Error fetching products:", error)
    }
  }

  async function fetchTestimonials() {
    try {
      const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false })

      if (error) throw error

      console.log("[v0] Fetched testimonials from Supabase:", data.length)
      setTestimonials(data as Testimonial[])
    } catch (error) {
      console.error("[v0] Error fetching testimonials:", error)
    }
  }

  function handleEdit(product: Product) {
    setEditingId(product.id)
    setName(product.name)
    setPrice(product.price.toString())
    setCategory(product.category)
    setDescription(product.description || "")
    setImagePreview(product.image_url || "")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function cancelEdit() {
    setEditingId(null)
    setName("")
    setPrice("")
    setCategory("")
    setDescription("")
    setImageFile(null)
    setImagePreview("")
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    setImageFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      let imageUrl = imagePreview

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop()
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
        const filePath = `${fileName}`

        const { error: uploadError } = await supabase.storage.from("product-images").upload(filePath, imageFile)

        if (uploadError) throw uploadError

        const {
          data: { publicUrl },
        } = supabase.storage.from("product-images").getPublicUrl(filePath)

        imageUrl = publicUrl
      }

      const productData = {
        name,
        slug: generateSlug(name),
        price: Number.parseFloat(price),
        category,
        description,
        image_url: imageUrl || null,
      }

      if (editingId) {
        const { error } = await supabase.from("products").update(productData).eq("id", editingId)

        if (error) throw error
        alert("Product updated successfully!")
      } else {
        const { error } = await supabase.from("products").insert(productData)

        if (error) throw error
        alert("Product added successfully!")
      }

      cancelEdit()
      await fetchProducts()
    } catch (error: any) {
      console.error("[v0] Error saving product:", error)
      alert("Error saving product: " + error.message)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this product?")) return

    try {
      const { error } = await supabase.from("products").delete().eq("id", id)

      if (error) throw error

      await fetchProducts()
      alert("Product deleted successfully!")
    } catch (error: any) {
      console.error("[v0] Error deleting product:", error)
      alert("Error deleting product: " + error.message)
    }
  }

  async function handleTestimonialUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    setUploading(true)

    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage.from("testimonials").upload(filePath, file)

      if (uploadError) throw uploadError

      const {
        data: { publicUrl },
      } = supabase.storage.from("testimonials").getPublicUrl(filePath)

      const { error: insertError } = await supabase.from("testimonials").insert({
        image_url: publicUrl,
        customer_name: "Verified Customer",
      })

      if (insertError) throw insertError

      alert("Testimonial uploaded successfully!")
      await fetchTestimonials()
      e.target.value = ""
    } catch (error: any) {
      console.error("[v0] Error uploading testimonial:", error)
      alert("Error uploading testimonial: " + error.message)
    } finally {
      setUploading(false)
    }
  }

  async function handleDeleteTestimonial(id: string, imageUrl: string) {
    if (!confirm("Are you sure you want to delete this testimonial?")) return

    try {
      // Extract file path from public URL
      const urlParts = imageUrl.split("/testimonials/")
      if (urlParts.length > 1) {
        const filePath = urlParts[1]
        await supabase.storage.from("testimonials").remove([filePath])
      }

      const { error } = await supabase.from("testimonials").delete().eq("id", id)

      if (error) throw error

      alert("Testimonial deleted successfully!")
      await fetchTestimonials()
    } catch (error: any) {
      console.error("[v0] Error deleting testimonial:", error)
      alert("Error deleting testimonial: " + error.message)
    }
  }

  async function handleLogout() {
    try {
      await supabase.auth.signOut()
      console.log("[v0] Logged out successfully")
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("[v0] Logout error:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your Deba products and testimonials</p>
            <p className="text-sm text-primary mt-1">Powered by Supabase</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="space-y-8">
          {/* Products Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Add/Edit Product Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {editingId ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  {editingId ? "Edit Product" : "Upload New Product"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Proposal Website"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="149"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Special">Special</SelectItem>
                        <SelectItem value="Anniversary">Anniversary</SelectItem>
                        <SelectItem value="Sorry">Sorry</SelectItem>
                        <SelectItem value="Birthday">Birthday</SelectItem>
                        <SelectItem value="Proposal">Proposal</SelectItem>
                        <SelectItem value="Friendship">Friendship</SelectItem>
                        <SelectItem value="Thank You">Thank You</SelectItem>
                        <SelectItem value="Confession">Confession</SelectItem>
                        <SelectItem value="Miss You">Miss You</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of the template"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thumbnail">Product Thumbnail</Label>
                    <div className="border-2 border-dashed border-border/40 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        id="thumbnail"
                        accept="image/*"
                        onChange={handleImageSelect}
                        className="hidden"
                      />
                      <label htmlFor="thumbnail" className="cursor-pointer">
                        {imagePreview ? (
                          <div className="relative w-full h-32">
                            <Image
                              src={imagePreview || "/placeholder.svg"}
                              alt="Preview"
                              fill
                              className="object-contain rounded"
                              sizes="300px"
                            />
                          </div>
                        ) : (
                          <>
                            <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm">Click to upload thumbnail</p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 purple-glow" disabled={submitting}>
                      {submitting ? "Saving..." : editingId ? "Update Product" : "Add Product"}
                    </Button>
                    {editingId && (
                      <Button type="button" variant="outline" onClick={cancelEdit}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Products List */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Products ({products.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {products.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No products yet. Add your first product!</p>
                  ) : (
                    products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-start justify-between gap-4 p-4 border border-border/40 rounded-lg bg-card/50"
                      >
                        <div className="flex gap-3 flex-1">
                          {product.image_url && (
                            <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={product.image_url || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                            <div className="flex items-center gap-3 text-sm">
                              <span className="text-primary font-bold">₹{product.price}</span>
                              <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs">
                                {product.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDelete(product.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Testimonial */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Upload Customer Proof
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border/40 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="testimonial-upload"
                      accept="image/*"
                      onChange={handleTestimonialUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                    <label htmlFor="testimonial-upload" className="cursor-pointer">
                      <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm font-medium mb-2">
                        {uploading ? "Uploading..." : "Click to upload screenshot"}
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG or WEBP (max 5MB)</p>
                    </label>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tip:</strong> Upload screenshots of customer messages,
                      reviews, or chat conversations to build trust with potential customers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonials Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Testimonials ({testimonials.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {testimonials.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      No testimonials yet. Upload your first proof!
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative group">
                          <div className="relative aspect-video rounded-lg overflow-hidden border border-border/40">
                            <Image
                              src={testimonial.image_url || "/placeholder.svg"}
                              alt="Customer testimonial"
                              fill
                              className="object-cover"
                              sizes="200px"
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleDeleteTestimonial(testimonial.id, testimonial.image_url)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
