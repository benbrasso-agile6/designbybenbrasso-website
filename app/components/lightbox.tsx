"use client"

import Image from "next/image"
import { XIcon } from "lucide-react"
import { useEffect } from "react"

interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscKey)
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-image"
      aria-describedby={alt ? "lightbox-alt-text" : undefined}
    >
      <div
        className="relative max-w-full max-h-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image/container itself
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-10 p-2 bg-white/30 hover:bg-white/50 text-black dark:text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close lightbox"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="relative w-auto h-auto max-w-[90vw] max-h-[85vh] sm:max-h-[90vh]">
          <Image
            id="lightbox-image"
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="object-contain w-full h-full rounded-md"
            unoptimized
            priority
          />
        </div>
        {alt && (
          <p id="lightbox-alt-text" className="mt-2 text-sm text-white text-center bg-black/60 px-3 py-1.5 rounded">
            {alt}
          </p>
        )}
      </div>
    </div>
  )
}
