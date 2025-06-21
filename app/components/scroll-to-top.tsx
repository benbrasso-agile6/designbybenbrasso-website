"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Defer scroll to top slightly to allow Safari to settle
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0) // A delay of 0 pushes it to the end of the execution queue

    return () => clearTimeout(timer) // Cleanup the timer
  }, [pathname])

  return null
}
