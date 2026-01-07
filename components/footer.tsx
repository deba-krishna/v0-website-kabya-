import Link from "next/link"
import { Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Deba</h3>
            <p className="text-sm text-muted-foreground">
              {"Turning your special moments into beautiful, shareable websites."}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop Templates
              </Link>
              <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/review" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="flex flex-col gap-2">
              <Link href="/legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </Link>
              <a
                href="mailto:support@deba.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:hello@deba.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Deba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
