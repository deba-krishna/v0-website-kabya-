import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, MessageSquare, Code, Rocket, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-muted-foreground">{"From selection to celebration in just 4 simple steps"}</p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Upload className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Choose Your Template</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "Browse through our collection of beautifully designed templates. Whether it's a birthday, proposal, apology, or anniversary, we have the perfect template for your special occasion. Each template is crafted with attention to detail and designed to create memorable experiences."
                    }
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Wide variety of categories: Love, Birthday, Sorry, Anniversary"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Mobile-responsive designs that look great on all devices"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Easy to customize with your personal content"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Send Us Your Content</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "After completing your purchase, you'll receive a WhatsApp message from us. Simply send us your photos, videos, text messages, and any special requests you have. We accept all common file formats and there's no limit on the number of photos you can send!"
                    }
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Photos: JPEG, PNG, or any image format"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Videos: MP4, MOV, or any video format (up to 5 minutes)"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Text: Your personal messages, quotes, or stories"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">We Build Your Website</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "Our expert team gets to work immediately, carefully crafting your personalized website. We optimize all your media, write engaging copy, and ensure everything looks perfect. The entire process typically takes 24-48 hours, though rush delivery is available for urgent occasions."
                    }
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Professional design implementation"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Image and video optimization for fast loading"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Quality check before delivery"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Rocket className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Launch & Share</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "Once your website is ready, we send you a custom link that you can share instantly on WhatsApp, social media, or via text. Your website is hosted on our fast, reliable servers and includes SSL security. We also provide basic analytics so you can see who's visiting your special page!"
                    }
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"Custom shareable URL (e.g., deba.site/yourname-birthday)"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"1 year of hosting included (renewable)"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{"2 free revisions within 7 days"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16 space-y-6">
            <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
            <p className="text-muted-foreground text-lg">
              {"Pick your perfect template and create something memorable today"}
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg font-semibold purple-glow">
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
