"use client"

import { useEffect } from "react"

export function TawkToChat() {
  useEffect(() => {
    // Only load in production environments (not localhost, v0.app, or development)
    const isV0Preview = typeof window !== "undefined" && window.location.hostname.includes("v0.app")
    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1"))
    const isDevelopment = process.env.NODE_ENV === "development"

    if (isV0Preview || isLocalhost || isDevelopment) {
      console.log("[v0] Tawk.to chat disabled in preview/dev environment")
      return
    }

    // Only proceed with loading if we're in production
    const Tawk_API = (window as any).Tawk_API || {}
    const Tawk_LoadStart = new Date()
    ;(window as any).Tawk_API = Tawk_API
    ;(window as any).Tawk_LoadStart = Tawk_LoadStart

    const script = document.createElement("script")
    script.async = true
    script.src = "https://embed.tawk.to/695e47e0aad9c019814f9d49/default"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    script.onerror = () => {
      console.error("[v0] Failed to load Tawk.to chat widget")
    }

    const firstScript = document.getElementsByTagName("script")[0]
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
