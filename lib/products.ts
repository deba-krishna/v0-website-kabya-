export interface Product {
  id: string
  name: string
  price: number
  category: "Love" | "Sorry" | "Birthday" | "Anniversary"
  description: string
  image_url?: string
  features?: string[]
  guarantee_text?: string
  support_email?: string
  validity_period?: string
  delivery_info?: string
  technical_details?: string
  created_at?: string
  updated_at?: string
}

export const products: Product[] = [
  {
    id: "proposal-1",
    name: "Proposal",
    price: 149,
    category: "Love",
    description: "Perfect for popping the question with style",
  },
  {
    id: "birthday-1",
    name: "Birthday Celebration",
    price: 199,
    category: "Birthday",
    description: "Make their special day unforgettable",
  },
  {
    id: "apology-1",
    name: "Apology",
    price: 149,
    category: "Sorry",
    description: "Say sorry in the most heartfelt way",
  },
  {
    id: "anniversary-1",
    name: "Anniversary Love",
    price: 249,
    category: "Anniversary",
    description: "Celebrate your journey together",
  },
  {
    id: "love-letter-1",
    name: "Love Letter",
    price: 179,
    category: "Love",
    description: "Express your feelings beautifully",
  },
  {
    id: "birthday-surprise-1",
    name: "Birthday Surprise",
    price: 229,
    category: "Birthday",
    description: "Create a magical birthday experience",
  },
  {
    id: "forgiveness-1",
    name: "Forgiveness Request",
    price: 169,
    category: "Sorry",
    description: "Mend relationships with sincerity",
  },
  {
    id: "anniversary-memories-1",
    name: "Anniversary Memories",
    price: 299,
    category: "Anniversary",
    description: "A timeline of your beautiful moments",
  },
  {
    id: "valentine-special-1",
    name: "Valentine Special",
    price: 199,
    category: "Love",
    description: "Perfect for expressing your love",
  },
  {
    id: "milestone-birthday-1",
    name: "Milestone Birthday",
    price: 349,
    category: "Birthday",
    description: "For those extra special birthdays",
  },
  {
    id: "heartfelt-apology-1",
    name: "Heartfelt Apology",
    price: 189,
    category: "Sorry",
    description: "Show genuine remorse beautifully",
  },
  {
    id: "golden-anniversary-1",
    name: "Golden Anniversary",
    price: 399,
    category: "Anniversary",
    description: "Celebrate decades of love",
  },
]
