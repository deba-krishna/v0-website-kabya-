"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPWrapperProps {
  children: React.ReactNode
  animation?: "fadeUp" | "stagger" | "magnetic"
  delay?: number
  className?: string
}

export function GSAPWrapper({ children, animation = "fadeUp", delay = 0, className = "" }: GSAPWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    switch (animation) {
      case "fadeUp":
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "bottom 8%",
              toggleActions: "play none none reverse",
            },
          },
        )
        break

      case "stagger":
        const children = element.children
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        )
        break

      case "magnetic":
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          const distance = Math.sqrt(x * x + y * y)

          if (distance < 180) {
            gsap.to(element, {
              x: x * 0.25,
              y: y * 0.25,
              duration: 0.4,
              ease: "power2.out",
            })
          }
        }

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
          })
        }

        element.addEventListener("mousemove", handleMouseMove)
        element.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          element.removeEventListener("mousemove", handleMouseMove)
          element.removeEventListener("mouseleave", handleMouseLeave)
        }

      default:
        break
    }
  }, [animation, delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
