"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Upload, Heart, Smile, Meh, Sparkles, Smartphone, Monitor, Tablet } from "lucide-react"

type TabType = "product" | "website"

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState<TabType>("product")
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("/review-success")

  const [productRating, setProductRating] = useState(0)
  const [productHoverRating, setProductHoverRating] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [productReview, setProductReview] = useState("")
  const [personReaction, setPersonReaction] = useState("")
  const [shareAnonymously, setShareAnonymously] = useState(false)
  const [productName, setProductName] = useState("")
  const [productContact, setProductContact] = useState("")
  const [screenshot, setScreenshot] = useState<File | null>(null)

  const [websiteRating, setWebsiteRating] = useState(0)
  const [websiteHoverRating, setWebsiteHoverRating] = useState(0)
  const [likedFeatures, setLikedFeatures] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState("")
  const [device, setDevice] = useState("")
  const [websiteName, setWebsiteName] = useState("")
  const [websiteContact, setWebsiteContact] = useState("")

  const features = [
    "Fast Speed",
    "Clean Design",
    "Great Mobile UI",
    "Easy Checkout",
    "Secure & Safe",
    "Easy Navigation",
  ]

  const toggleFeature = (feature: string) => {
    setLikedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  const handleProductSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (productRating === 0) {
      e.preventDefault()
      alert("Please provide a rating before submitting.")
      return
    }
    console.log("[v0] Product form submitting with rating:", productRating)
    setSubmitting(true)
    // Form will submit naturally to Formspark
  }

  const handleWebsiteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (websiteRating === 0) {
      e.preventDefault()
      alert("Please provide a rating before submitting.")
      return
    }
    console.log("[v0] Website form submitting with rating:", websiteRating)
    setSubmitting(true)
    // Form will submit naturally to Formspark
  }

  const StarRating = ({
    rating,
    setRating,
    hoverRating,
    setHoverRating,
  }: {
    rating: number
    setRating: (rating: number) => void
    hoverRating: number
    setHoverRating: (rating: number) => void
  }) => (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`h-8 w-8 md:h-10 md:w-10 transition-colors ${
              star <= (hoverRating || rating) ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = `${window.location.protocol}//${window.location.host}/review-success`
      setRedirectUrl(fullUrl)
      console.log("[v0] Redirect URL set to:", fullUrl)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Share Your Feedback</h1>
            <p className="text-muted-foreground text-lg">Your opinion helps us create better experiences</p>
          </div>

          {submitSuccess && (
            <Card className="p-6 mb-8 bg-primary/10 border-primary/40">
              <div className="flex items-center gap-3 text-primary">
                <Sparkles className="h-6 w-6" />
                <p className="font-semibold text-lg">Thank you for your feedback!</p>
              </div>
            </Card>
          )}

          {/* Tab Toggle */}
          <div className="flex gap-2 mb-8 p-1 bg-muted/50 rounded-lg">
            <button
              onClick={() => setActiveTab("product")}
              className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                activeTab === "product"
                  ? "bg-primary text-primary-foreground purple-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Product Review
            </button>
            <button
              onClick={() => setActiveTab("website")}
              className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                activeTab === "website"
                  ? "bg-primary text-primary-foreground purple-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Website Feedback
            </button>
          </div>

          {/* Product Review Form */}
          {activeTab === "product" && (
            <Card className="p-6 md:p-8 border-border/40 bg-card/50 backdrop-blur">
              <form
                onSubmit={handleProductSubmit}
                action="https://submit-form.com/1LN2Cweq6"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_redirect" value={redirectUrl} />
                <input type="hidden" name="_append" value="false" />

                <div className="space-y-3">
                  <Label className="text-lg font-semibold">Rate Your Experience</Label>
                  <StarRating
                    rating={productRating}
                    setRating={setProductRating}
                    hoverRating={productHoverRating}
                    setHoverRating={setProductHoverRating}
                  />
                  <input type="hidden" name="rating" value={productRating} />
                  <input type="hidden" name="type" value="Product Review" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="template">Select Template</Label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose the template you purchased" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Proposal">Proposal</SelectItem>
                      <SelectItem value="Birthday">Birthday</SelectItem>
                      <SelectItem value="Apology">Apology</SelectItem>
                      <SelectItem value="Anniversary">Anniversary</SelectItem>
                      <SelectItem value="Love Letter">Love Letter</SelectItem>
                      <SelectItem value="Thank You">Thank You</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="template" value={selectedTemplate} />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="screenshot">Upload Screenshot (Optional)</Label>
                  <div className="border-2 border-dashed border-border/40 rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                    <input
                      type="file"
                      id="screenshot"
                      name="screenshot"
                      accept="image/*"
                      onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <label htmlFor="screenshot" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {screenshot ? screenshot.name : "Click to upload a screenshot"}
                      </p>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="review">Write a Review</Label>
                  <Textarea
                    id="review"
                    name="review"
                    placeholder="Tell us about your experience..."
                    value={productReview}
                    onChange={(e) => setProductReview(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Did your special person like it?</Label>
                  <input type="hidden" name="personReaction" value={personReaction} />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPersonReaction("loved")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        personReaction === "loved"
                          ? "border-primary bg-primary/10"
                          : "border-border/40 hover:border-primary/40"
                      }`}
                    >
                      <Heart className="h-6 w-6 mx-auto mb-2 text-red-500" />
                      <p className="text-sm font-medium">They loved it!</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPersonReaction("good")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        personReaction === "good"
                          ? "border-primary bg-primary/10"
                          : "border-border/40 hover:border-primary/40"
                      }`}
                    >
                      <Smile className="h-6 w-6 mx-auto mb-2 text-green-500" />
                      <p className="text-sm font-medium">Yes, it was good</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPersonReaction("okay")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        personReaction === "okay"
                          ? "border-primary bg-primary/10"
                          : "border-border/40 hover:border-primary/40"
                      }`}
                    >
                      <Meh className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                      <p className="text-sm font-medium">It was okay</p>
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
                  <Checkbox
                    id="anonymous"
                    checked={shareAnonymously}
                    onCheckedChange={(checked) => setShareAnonymously(checked as boolean)}
                  />
                  <input type="hidden" name="shareAnonymously" value={shareAnonymously.toString()} />
                  <label htmlFor="anonymous" className="text-sm cursor-pointer">
                    You can share my feedback (anonymously)
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="productName">Your Name *</Label>
                    <Input
                      id="productName"
                      name="name"
                      placeholder="Your name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="productContact">Email or Instagram *</Label>
                    <Input
                      id="productContact"
                      name="contact"
                      placeholder="@username or email"
                      value={productContact}
                      onChange={(e) => setProductContact(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold purple-glow"
                  disabled={submitting || productRating === 0}
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </Card>
          )}

          {/* Website Feedback Form */}
          {activeTab === "website" && (
            <Card className="p-6 md:p-8 border-border/40 bg-card/50 backdrop-blur">
              <form
                onSubmit={handleWebsiteSubmit}
                action="https://submit-form.com/1LN2Cweq6"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_redirect" value={redirectUrl} />
                <input type="hidden" name="_append" value="false" />

                <div className="space-y-3">
                  <Label className="text-lg font-semibold">How was your experience?</Label>
                  <StarRating
                    rating={websiteRating}
                    setRating={setWebsiteRating}
                    hoverRating={websiteHoverRating}
                    setHoverRating={setWebsiteHoverRating}
                  />
                  <input type="hidden" name="rating" value={websiteRating} />
                  <input type="hidden" name="type" value="Website Feedback" />
                </div>

                <div className="space-y-3">
                  <Label>What did you like most?</Label>
                  <input type="hidden" name="likedFeatures" value={likedFeatures.join(", ")} />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {features.map((feature) => (
                      <button
                        key={feature}
                        type="button"
                        onClick={() => toggleFeature(feature)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          likedFeatures.includes(feature)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border/40 hover:border-primary/40"
                        }`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="suggestions">Any suggestions?</Label>
                  <Textarea
                    id="suggestions"
                    name="suggestions"
                    placeholder="Help us improve..."
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="device">Device Used</Label>
                  <Select value={device} onValueChange={setDevice} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select device type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mobile">
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          Mobile
                        </div>
                      </SelectItem>
                      <SelectItem value="Desktop">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4" />
                          Desktop
                        </div>
                      </SelectItem>
                      <SelectItem value="Tablet">
                        <div className="flex items-center gap-2">
                          <Tablet className="h-4 w-4" />
                          Tablet
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="device" value={device} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="websiteName">Your Name *</Label>
                    <Input
                      id="websiteName"
                      name="name"
                      placeholder="Your name"
                      value={websiteName}
                      onChange={(e) => setWebsiteName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="websiteContact">Email or Instagram *</Label>
                    <Input
                      id="websiteContact"
                      name="contact"
                      placeholder="@username or email"
                      value={websiteContact}
                      onChange={(e) => setWebsiteContact(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold purple-glow"
                  disabled={submitting || websiteRating === 0}
                >
                  {submitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
