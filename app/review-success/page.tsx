"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"
import Image from "next/image"

export default function ReviewSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#8B5CF6", "#A78BFA", "#C4B5FD", "#FFFFFF"],
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#8B5CF6", "#A78BFA", "#C4B5FD", "#FFFFFF"],
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-[#0f0f0f]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-2xl relative animate-in fade-in zoom-in duration-500">
        <div className="mb-6">
          <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/e6ae25ca50d897f86a651fc8c196086c.jpg"
              alt="Happy celebration dog"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thanks for the Love! 🎉</h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Your feedback is incredibly valuable and helps me build a better experience for you! 💜
        </p>

        <Button
          onClick={() => router.push("/")}
          className="w-full h-14 text-lg font-semibold bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Done
        </Button>
      </div>
    </div>
  )
}
