"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !src) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-black/90 border-0"
        onOpenAutoFocus={(e) => {
          e.preventDefault()
          // Focus the close button on mobile for better accessibility
          const closeButton = e.currentTarget.querySelector("[data-close-button]") as HTMLElement
          if (closeButton && window.innerWidth < 768) {
            setTimeout(() => closeButton.focus(), 100)
          }
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <button
            data-close-button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)] force-focus-visible"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" sizes="95vw" priority />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
