"use client"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@/lib/supabase/client"
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
  const supabase = createBrowserClient()

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) throw error

        setTestimonials(data as Testimonial[])
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [supabase])

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

  const midpoint = Math.ceil(testimonials.length / 2)
  const topRowTestimonials = testimonials.slice(0, midpoint)
  const bottomRowTestimonials = testimonials.slice(midpoint)

  return (
    <>
      <div className="space-y-8">
        {/* Top Row - Scrolls Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused]">
            {/* First set */}
            {topRowTestimonials.map((testimonial) => (
              <div
                key={`top-1-${testimonial.id}`}
                onClick={() => setSelectedImage(testimonial.image_url)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-card/50 border border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
              >
                <Image
                  src={testimonial.image_url || "/placeholder.svg"}
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {topRowTestimonials.map((testimonial) => (
              <div
                key={`top-2-${testimonial.id}`}
                onClick={() => setSelectedImage(testimonial.image_url)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-card/50 border border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
              >
                <Image
                  src={testimonial.image_url || "/placeholder.svg"}
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused]">
            {/* First set */}
            {bottomRowTestimonials.map((testimonial) => (
              <div
                key={`bottom-1-${testimonial.id}`}
                onClick={() => setSelectedImage(testimonial.image_url)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-card/50 border border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
              >
                <Image
                  src={testimonial.image_url || "/placeholder.svg"}
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {bottomRowTestimonials.map((testimonial) => (
              <div
                key={`bottom-2-${testimonial.id}`}
                onClick={() => setSelectedImage(testimonial.image_url)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-card/50 border border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
              >
                <Image
                  src={testimonial.image_url || "/placeholder.svg"}
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </>
  )
}
