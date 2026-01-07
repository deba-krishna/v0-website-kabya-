import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Mail, Calendar, Heart } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 border-4 border-green-500/40 animate-in zoom-in duration-500">
            <CheckCircle2 className="h-10 w-10 md:h-12 md:h-12 text-green-500" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Payment Successful!
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Thank you for your order. Your special website is on its way!
          </p>

          {/* What Happens Next */}
          <Card className="p-6 md:p-8 mb-8 text-left border-primary/20 bg-card/50 backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border-2 border-primary/40">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Check Your Email (Within 5 Minutes)</h3>
                  <p className="text-muted-foreground text-sm">
                    You'll receive a confirmation email with a customization form link. Fill in your details, upload
                    photos/videos, and share your special message.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border-2 border-primary/40">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">We Build Your Website (12-24 Hours)</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team will craft your personalized website based on your content. We'll ensure everything looks
                    perfect and works flawlessly across all devices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border-2 border-primary/40">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Receive Your Link & Share</h3>
                  <p className="text-muted-foreground text-sm">
                    You'll get your unique website link via email. Share it with your special person and create a
                    memorable moment together!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Support Section */}
          <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-sm text-muted-foreground mb-3">Need help or have questions?</p>
            <p className="font-semibold mb-2">Contact us anytime:</p>
            <a href="mailto:bringuouthere@gmail.com" className="text-primary hover:underline text-lg font-medium">
              bringuouthere@gmail.com
            </a>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
