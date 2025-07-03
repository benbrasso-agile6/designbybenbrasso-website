"use client"

import { useState } from "react"

/**
 * Remote footer photo (Cloudinary)
 * If the request fails we render nothing (no broken-image icon).
 */
const CLOUDINARY_URL = "https://res.cloudinary.com/dpl6apspp/image/upload/v1748743572/1299427_gdw03z.jpg"

export default function FooterImage() {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <img
      src={CLOUDINARY_URL || "/placeholder.svg"}
      alt=""
      loading="lazy"
      className="w-full h-auto mt-12 rounded-lg"
      onError={() => setFailed(true)}
    />
  )
}
