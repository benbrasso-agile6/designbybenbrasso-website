"use client"

import { useState } from "react"

/**
 * Scenic image shown at the bottom of the /read-me page.
 * Uses a plain <img> element to load a remote image directly.
 *
 * If the image fails to load, the component renders nothing.
 */
export default function FooterImage() {
  const [isError, setIsError] = useState(false)

  const remoteImageUrl = "https://res.cloudinary.com/dpl6apspp/image/upload/v1748743572/1299427_gdw03z.jpg"

  if (isError) {
    return null
  }

  return (
    <img
      src={remoteImageUrl || "/placeholder.svg"}
      onError={() => setIsError(true)}
      alt="A scenic, abstract, colorful landscape."
      loading="lazy"
      className="w-full h-auto object-cover rounded-md"
    />
  )
}
