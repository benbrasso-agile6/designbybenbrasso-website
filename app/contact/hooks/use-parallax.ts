"use client"

import { useState, useEffect } from "react"

interface UseParallaxOptions {
  intensity?: number
  enabled?: boolean
}

export function useParallax({ intensity = 0.15, enabled = true }: UseParallaxOptions = {}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!enabled) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [enabled])

  const parallaxOffset = enabled ? scrollY * intensity : 0

  return { parallaxOffset }
}
