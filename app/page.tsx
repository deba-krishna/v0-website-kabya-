import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { TestimonialsGallery } from "@/components/testimonials-gallery"
import { GSAPWrapper } from "@/components/gsap-wrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Sparkles,
  Upload,
  Server,
  MousePointerClick,
  CreditCard,
  QrCode,
  ArrowRight,
  Palette,
  Share2,
} from "lucide-react"
import Link from "next/link"
import { createServerClient } from "@/lib/supabase/server"

export default async function HomePage() {
  const supabase = await createServerClient()
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6)
  const bestSelling = products || []

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <GSAPWrapper animation="fadeUp">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Transform Memories Into Digital Experiences</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Your Memories, <span className="text-gradient">Turned into a Website</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {"No coding headaches. We build, host, and deliver while you celebrate your special moments."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-medium">😍 No Coding Needed</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-medium">⚡ Shareable QR / Link</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-medium">🌐 Free Hosting</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-medium">💬 24/7 Support</span>
            </div>

            <GSAPWrapper animation="magnetic" className="pt-6 inline-block">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg font-semibold purple-glow"
                >
                  Shop Here
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </GSAPWrapper>
          </div>
        </GSAPWrapper>
      </section>

      {/* How It Works */}
      <section className="w-full py-20 bg-gradient-to-b from-background to-primary/5">
        <GSAPWrapper animation="fadeUp">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg">Four simple steps to your perfect website</p>
          </div>
        </GSAPWrapper>

        <div className="relative overflow-hidden">
          <div className="step-scroll-container">
            <div className="step-scroll-track">
              {/* First set of cards */}
              <div className="step-card-wrapper">
                <MousePointerClick className="step-icon" />
                <div className="step-text">1. Choose template</div>
              </div>

              <div className="step-card-wrapper">
                <CreditCard className="step-icon" />
                <div className="step-text">2. place Order</div>
              </div>

              <div className="step-card-wrapper">
                <Upload className="step-icon" />
                <div className="step-text">3. Send photos & text (customization)</div>
              </div>

              <div className="step-card-wrapper">
                <QrCode className="step-icon" />
                <div className="step-text">4. Get qr/Link</div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="step-card-wrapper">
                <MousePointerClick className="step-icon" />
                <div className="step-text">1. Choose template</div>
              </div>

              <div className="step-card-wrapper">
                <CreditCard className="step-icon" />
                <div className="step-text">2. place Order</div>
              </div>

              <div className="step-card-wrapper">
                <Upload className="step-icon" />
                <div className="step-text">3. Send photos & text (customization)</div>
              </div>

              <div className="step-card-wrapper">
                <QrCode className="step-icon" />
                <div className="step-text">4. Get qr/Link</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling */}
      <section className="container mx-auto px-4 py-20">
        <GSAPWrapper animation="fadeUp">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Best Selling</h2>
              <p className="text-muted-foreground text-lg">Most loved by our customers</p>
            </div>
            <Link href="/shop">
              <Button variant="outline" className="hidden md:inline-flex bg-transparent">
                View All Templates
              </Button>
            </Link>
          </div>
        </GSAPWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSelling.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/shop">
            <Button variant="outline" className="w-full bg-transparent">
              View All Templates
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <GSAPWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          </div>
        </GSAPWrapper>

        <GSAPWrapper animation="stagger">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Beautifully Crafted Websites</h3>
              <p className="text-muted-foreground">
                Every page is custom-designed using your photos, story, and details — not generic templates. Your
                website feels emotional, personal, and truly meaningful.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Instant Sharing — Link + QR Code</h3>
              <p className="text-muted-foreground">
                You receive a ready-to-share link and a custom QR code, so your special person can simply scan and open
                it instantly. No apps, no logins — just magic ✨
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Hosting Managed For You</h3>
              <p className="text-muted-foreground">
                No tools, no learning curve, no stress. Simply share your content, and everything is created and
                delivered for you — professionally and on time.
              </p>
            </div>
          </div>
        </GSAPWrapper>
      </section>

      {/* Customer Love */}
      <section className="container mx-auto px-4 py-20">
        <GSAPWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Customer Love</h2>
            <p className="text-muted-foreground text-lg">
              {
                "Every message below comes from a real customer who trusted us with their special moments. After receiving their website, they shared their honest experience — and those words mean everything to us."
              }
            </p>
          </div>
        </GSAPWrapper>

        <TestimonialsGallery />
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20">
        <GSAPWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
        </GSAPWrapper>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                What exactly do I get after placing an order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You get a beautiful website — plus a premium shareable link and a custom QR code for instant access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">Do you provide hosting?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Your website is securely hosted by us. You simply receive a shareable live link — nothing to
                install.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">Why Trust this Store?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We are building a long-term brand for creators. We value our reputation more than a single sale. If you
                have any concerns during development, you can reach us directly via the Help Center at any time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                How do I send my photos and text?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                After ordering, our team will contact you via WhatsApp / Telegram / Email to collect everything we need.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">Is the payment secure?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Payments are processed through trusted and verified gateways. Your details remain protected at all
                times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                How fast will I receive my website?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most orders are delivered within 1–6 hours depending on the template and details. Urgent delivery is
                also available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                Do I need any technical or coding knowledge?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Not at all 😊 Just send your content — we handle everything from design to hosting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                Is my data and photos kept private?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Your content is 100% private and only used to create your website. We never share or resell
                your data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                What if I am not happy with the final result?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your satisfaction matters. We provide revision support to ensure you love the final website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                Will the website work on all devices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Your website works smoothly on all phones, tablets, and computers — no app required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border border-border/40 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-left hover:text-primary">
                Is this service suitable for my occasion?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — it works beautifully for birthdays, proposals, anniversaries, weddings, farewells, best-friend
                surprises, parents, partners, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
