import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Information</h1>
            <p className="text-muted-foreground text-lg">{"Terms, conditions, and policies for using Deba services"}</p>
          </div>

          {/* Terms & Conditions */}
          <Card className="p-8 border-border/40 bg-card/50 backdrop-blur space-y-6">
            <h2 className="text-3xl font-bold">Terms & Conditions</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">1. Service Agreement</h3>
                <p>
                  {
                    "By purchasing a template from Deba, you agree to provide all necessary content (photos, videos, text) within 7 days of purchase. We reserve the right to cancel orders if content is not provided within this timeframe."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">2. Delivery Timeline</h3>
                <p>
                  {
                    "Standard delivery is 24-48 hours after receiving all content. Rush delivery (12-24 hours) is available for an additional fee. Delays may occur during peak seasons (Valentine's Day, Diwali, etc.)."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">3. Content Ownership</h3>
                <p>
                  {
                    "You retain full ownership of all content (photos, videos, text) provided to us. We use this content solely for creating your website and will not share it with third parties or use it for marketing without your explicit permission."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">4. Hosting & Domain</h3>
                <p>
                  {
                    "All packages include 1 year of hosting on our servers. After the first year, hosting renewal is available for a nominal fee. We provide a subdomain (e.g., yourname.deba.site) at no extra cost. Custom domain integration is available for an additional fee."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">5. Revisions</h3>
                <p>
                  {
                    "Two free revisions are included within 7 days of delivery. Additional revisions after 7 days or beyond 2 revisions will incur additional charges. Major changes to the template structure are not considered revisions."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">6. Prohibited Content</h3>
                <p>
                  {
                    "We reserve the right to refuse service for content that is illegal, offensive, discriminatory, or violates intellectual property rights. This includes but is not limited to hate speech, explicit content, or copyrighted material."
                  }
                </p>
              </div>
            </div>
          </Card>

          {/* Refund Policy */}
          <Card className="p-8 border-border/40 bg-card/50 backdrop-blur space-y-6">
            <h2 className="text-3xl font-bold">Refund Policy</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Full Refund</h3>
                <p>{"You are eligible for a full refund if:"}</p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                  <li>{"We are unable to deliver your website within the promised timeframe"}</li>
                  <li>{"The final product significantly deviates from the chosen template"}</li>
                  <li>{"Technical issues prevent your website from functioning properly"}</li>
                  <li>{"You cancel within 24 hours of purchase before providing any content"}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Partial Refund</h3>
                <p>{"A 50% refund may be provided if:"}</p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                  <li>{"You cancel after providing content but before delivery"}</li>
                  <li>{"You are unsatisfied with the final product despite 2 free revisions"}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No Refund</h3>
                <p>{"Refunds will not be provided if:"}</p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                  <li>{"The website has been delivered and you've accepted the final version"}</li>
                  <li>{"You fail to provide content within 7 days of purchase"}</li>
                  <li>{"You request a refund after the 7-day delivery window"}</li>
                  <li>{"The content you provided violates our terms"}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Refund Process</h3>
                <p>
                  {
                    "To request a refund, contact us via WhatsApp or email with your order details. Approved refunds are processed within 5-7 business days. The refund will be credited to the original payment method."
                  }
                </p>
              </div>
            </div>
          </Card>

          {/* Privacy Policy */}
          <Card className="p-8 border-border/40 bg-card/50 backdrop-blur space-y-6">
            <h2 className="text-3xl font-bold">Privacy Policy</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Data Collection</h3>
                <p>
                  {
                    "We collect only the information necessary to provide our services: your name, contact information (WhatsApp/email), payment details, and the content you provide for your website."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Data Usage</h3>
                <p>
                  {
                    "Your data is used exclusively for creating and hosting your website. We do not sell, rent, or share your personal information with third parties except when required by law."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Data Security</h3>
                <p>
                  {
                    "We implement industry-standard security measures to protect your data. All websites are hosted with SSL encryption. However, no method of transmission over the internet is 100% secure."
                  }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Contact Us</h3>
                <p>{"For any questions about our terms, refund policy, or privacy practices, please contact us:"}</p>
                <ul className="list-none space-y-2 mt-2 ml-4">
                  <li>{"Email: support@deba.com"}</li>
                  <li>{"WhatsApp: +91 99999 99999"}</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
