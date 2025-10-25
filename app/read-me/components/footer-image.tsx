"use client"

import { useState } from "react"

/**
 * Scenic image shown at the bottom of the /read-me page.
 * A plain <img> element is used so the asset loads directly
 * (avoiding Next.js image optimisation proxies).
 *
 * Falls back to /placeholder.jpg if the primary image fails.
 * Added bottom padding to create space between image and footer navigation.
 */
export default function FooterImage() {
  const PRIMARY_SRC = "/images/design-mode/1299427_gdw03z.jpg"
  const FALLBACK_SRC = "/placeholder.jpg"

  const [src, setSrc] = useState(PRIMARY_SRC)

  return (
    <img
      src={src || "/placeholder.svg"}
      onError={() => setSrc(FALLBACK_SRC)}
      alt="Scenic illustration used in the footer"
      loading="lazy"
      className="w-full h-auto object-cover rounded-md mb-8" // Added mb-8 for bottom margin
    />
  )
}
