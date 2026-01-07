import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The birthday website was absolutely stunning! My sister loved it. Worth every penny! The design was so beautiful and personal. Deba made her day truly special.",
      occasion: "Birthday",
      date: "January 2026",
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "Used it for my proposal and she said YES! The website made it so special and memorable. The team was super responsive and delivered exactly what I wanted.",
      occasion: "Proposal",
      date: "December 2025",
    },
    {
      name: "Ananya Patel",
      rating: 5,
      text: "Quick delivery, beautiful design, and amazing support. Highly recommended for special occasions! They responded to all my questions promptly.",
      occasion: "Anniversary",
      date: "November 2025",
    },
    {
      name: "Arjun Reddy",
      rating: 5,
      text: "I needed an apology website urgently and Deba delivered in less than 24 hours. The quality was outstanding and it really helped convey my feelings.",
      occasion: "Apology",
      date: "January 2026",
    },
    {
      name: "Kavya Menon",
      rating: 5,
      text: "The love letter template was perfect for our long-distance relationship. My boyfriend was so touched! The animations and music made it extra special.",
      occasion: "Love Letter",
      date: "December 2025",
    },
    {
      name: "Vikram Singh",
      rating: 5,
      text: "Best investment for my mom's 60th birthday. Everyone at the party was amazed by the website. Deba captured all our memories beautifully!",
      occasion: "Milestone Birthday",
      date: "November 2025",
    },
    {
      name: "Sneha Gupta",
      rating: 5,
      text: "Professional service, beautiful results. Used it for our anniversary and my husband loved it. The timeline feature was particularly touching.",
      occasion: "Anniversary",
      date: "October 2025",
    },
    {
      name: "Rohan Kapoor",
      rating: 5,
      text: "The Valentine special template was exactly what I needed. Fast delivery, great communication, and stunning design. My girlfriend was in tears!",
      occasion: "Valentine",
      date: "January 2026",
    },
    {
      name: "Meera Iyer",
      rating: 5,
      text: "I was skeptical at first but Deba exceeded my expectations. The website was professional, heartfelt, and easy to share. Worth every rupee!",
      occasion: "Birthday",
      date: "December 2025",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-muted-foreground">
              {"See what our happy customers are saying about their experiences"}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0 out of 5</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <Card key={i} className="p-6 space-y-4 border-border/40 bg-card/50 backdrop-blur">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.occasion}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">{`"${review.text}"`}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-12 border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-3xl font-bold mb-4">Want to share your experience?</h2>
              <p className="text-muted-foreground mb-6">
                {"We'd love to hear from you! Send us your feedback via WhatsApp."}
              </p>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold">
                  Send Feedback
                </button>
              </a>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
