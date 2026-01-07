"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { XCircle, RefreshCcw, Home, Mail } from "lucide-react"
import Link from "next/link"

export default function ErrorPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6 border-4 border-destructive/40 animate-in zoom-in duration-500">
            <XCircle className="h-10 w-10 md:h-12 md:h-12 text-destructive" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Payment Failed
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Oops! Something went wrong with your payment. Don't worry, no charges were made.
          </p>

          {/* Common Reasons */}
          <Card className="p-6 md:p-8 mb-8 text-left border-destructive/20 bg-card/50 backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-2xl font-bold mb-6 text-center">Common Reasons & Solutions</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <span className="font-semibold">Insufficient Balance:</span> Check your account balance and try again
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <span className="font-semibold">Incorrect Card Details:</span> Verify your card number, expiry date,
                  and CVV
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <span className="font-semibold">Network Issue:</span> Check your internet connection and retry
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <span className="font-semibold">Bank Restrictions:</span> Contact your bank if you continue facing
                  issues
                </div>
              </li>
            </ul>
          </Card>

          {/* Support Card */}
          <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-2">Still having trouble?</p>
            <p className="font-semibold mb-2">We're here to help!</p>
            <a href="mailto:bringuouthere@gmail.com" className="text-primary hover:underline text-lg font-medium">
              bringuouthere@gmail.com
            </a>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button
              onClick={() => window.history.back()}
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50"
            >
              <RefreshCcw className="h-5 w-5 mr-2" />
              Try Again
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
