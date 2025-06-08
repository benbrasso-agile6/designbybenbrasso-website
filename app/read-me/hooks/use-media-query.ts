"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Ensure window is defined (for server-side rendering compatibility)
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia(query)
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Set the initial state
    setMatches(mediaQuery.matches)

    // Add listener for changes
    // Modern browsers use addEventListener
    try {
      mediaQuery.addEventListener("change", handler)
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(handler)
    }

    // Cleanup listener on component unmount
    return () => {
      try {
        mediaQuery.removeEventListener("change", handler)
      } catch (e) {
        mediaQuery.removeListener(handler)
      }
    }
  }, [query])

  return matches
}
