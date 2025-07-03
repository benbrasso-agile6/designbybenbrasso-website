"use client"

import { useState } from "react"

/**
 * Scenic image shown at the bottom of the /read-me page.
 * Uses a plain <img> element so that the file is loaded directly
 * (bypassing Next.js `next/image` optimisation, which can fail when
 * the asset is remote or blocked).
 *
 * If the primary image can’t be loaded, we fall back to the generic
 * `placeholder.jpg` that already exists in /public.
 */
export function FooterImage() {
  // Primary local asset (bundled in /public)
  const PRIMARY_SRC = "/images/readme-footer-scenic.png"
  const FALLBACK_SRC = "/placeholder.jpg"

  const [src, setSrc] = useState(PRIMARY_SRC)

  return (
    <img
      src={src || "/placeholder.svg"}
      onError={() => setSrc(FALLBACK_SRC)}
      alt="Scenic illustration used in the footer"
      loading="lazy"
      className="w-full h-auto object-cover rounded-md"
    />
  )
}
