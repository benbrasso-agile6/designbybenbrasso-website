"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Delay scrolling to allow the page and elements to render
      const scrollTimeout = setTimeout(() => {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          const headerElement = document.querySelector("header") // Select your sticky header
          const headerHeight = headerElement ? headerElement.offsetHeight : 0 // Get header height, default to 0
          const extraPadding = 20 // Additional padding below the header

          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - headerHeight - extraPadding

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        } else {
          // Fallback if element not found after delay
          window.scrollTo(0, 0)
        }
      }, 150) // Increased delay slightly to 150ms

      return () => clearTimeout(scrollTimeout) // Cleanup timeout if component unmounts or pathname changes
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname]) // Rerun effect when pathname changes

  return null
}
