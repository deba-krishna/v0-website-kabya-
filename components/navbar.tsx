"use client"

import type React from "react"

import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function Navbar() {
  const { getTotalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const totalItems = getTotalItems()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">Deba</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/shop" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Shop
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            How It Works
          </Link>
          <Link href="/review" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Reviews
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground/80 hover:text-primary"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative text-foreground/80 hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground/80"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/40 bg-background/98 backdrop-blur">
          <div className="container mx-auto px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates by category or name..."
                className="flex-1 h-10 px-4 rounded-lg bg-secondary text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">
                Search
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/98 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/shop"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/review"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/legal"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Legal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
