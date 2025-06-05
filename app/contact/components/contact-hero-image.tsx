"use client"

import Image from "next/image"
import { useParallax } from "../hooks/use-parallax"

interface ContactHeroImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  enableParallax?: boolean
  parallaxIntensity?: number
}

export default function ContactHeroImage({
  src,
  alt,
  width = 300,
  height = 300,
  className = "",
  enableParallax = true,
  parallaxIntensity = 0.15,
}: ContactHeroImageProps) {
  const { parallaxOffset } = useParallax({
    intensity: parallaxIntensity,
    enabled: enableParallax,
  })

  return (
    <div className="flex justify-center my-8">
      <div
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover shadow-2xl border-4 border-sky-600/20 dark:border-sky-500/20 ${className}`}
          style={{ borderRadius: "100px" }}
          priority
        />
      </div>
    </div>
  )
}
