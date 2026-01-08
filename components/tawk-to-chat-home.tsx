"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function TawkToChatHome() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      return
    }

    if (typeof window !== "undefined" && window.location.hostname.includes("v0.app")) {
      return
    }

    if ((window as any).Tawk_API) {
      return
    }

    const Tawk_API = (window as any).Tawk_API || {}
    const Tawk_LoadStart = new Date()
    ;(window as any).Tawk_API = Tawk_API
    ;(window as any).Tawk_LoadStart = Tawk_LoadStart

    const script = document.createElement("script")
    const firstScript = document.getElementsByTagName("script")[0]

    script.async = true
    script.src = "https://embed.tawk.to/6958939479755a1983138d95/1je100vsp"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      // Remove tawk.to widget from DOM
      const tawkWidget = document.getElementById("tawkchat-container")
      if (tawkWidget) {
        tawkWidget.remove()
      }
      delete (window as any).Tawk_API
      delete (window as any).Tawk_LoadStart
    }
  }, [pathname])

  return null
}
