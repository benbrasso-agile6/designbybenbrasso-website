"use client"

import { useState } from "react"
import Image from "next/image"

interface FooterImageProps {
  src: string
  alt: string
  imgWidth: number
  imgHeight: number
}

export default function FooterImage({ src, alt, imgWidth, imgHeight }: FooterImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    if (!hasError) {
      // Only set the fallback once to prevent infinite loops
      setHasError(true)
      setImageSrc("/placeholder.svg?width=1400&height=700")
    }
  }

  return (
    <div className="w-full">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        className="w-full h-auto object-cover"
        priority={false}
        onError={handleImageError}
      />
    </div>
  )
}
