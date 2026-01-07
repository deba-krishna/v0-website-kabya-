"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  image_url: string
  created_at: string
}

export function TestimonialsGallery() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      const supabase = createClient()
      const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("[v0] Error fetching testimonials:", error)
      } else {
        setTestimonials(data || [])
      }
      setLoading(false)
    }

    fetchTestimonials()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading customer testimonials...</p>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-3xl">💬</span>
          </div>
          <h3 className="text-xl font-semibold">Real results from real customers coming soon!</h3>
          <p className="text-muted-foreground">
            {"We're collecting amazing feedback from our happy customers. Check back soon to see their testimonials."}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            onClick={() => setSelectedImage(testimonial.image_url)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group bg-card/50 border border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <Image
              src={testimonial.image_url || "/placeholder.svg"}
              alt="Customer testimonial"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Click to view full size</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-primary/20">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Customer testimonial full view"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
