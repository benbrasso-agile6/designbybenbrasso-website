// Ensure this file exists or create it if it doesn't.
// This is a common implementation for such a hook.
"use client"

import { useState, useEffect } from "react"

/**
 * Custom hook to detect if the current viewport matches a mobile media query.
 * @param query The media query string to match against. Defaults to '(max-width: 768px)'.
 * @returns `true` if the media query matches, `false` otherwise.
 */
export const useMobile = (query = "(max-width: 768px)"): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Ensure window is defined (for SSR/Node.js environments)
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia(query)
    const handleChange = () => {
      setIsMobile(mediaQuery.matches)
    }

    // Initial check
    handleChange()

    // Listen for changes
    try {
      mediaQuery.addEventListener("change", handleChange)
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
    }

    return () => {
      try {
        mediaQuery.removeEventListener("change", handleChange)
      } catch (e) {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [query])

  return isMobile
}
