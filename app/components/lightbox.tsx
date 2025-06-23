"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { useEffect } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    // This effect can remain to manage body overflow,
    // though Dialog might also attempt to manage it.
    // Explicitly managing it here ensures consistency.
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // The Dialog component handles the Escape key press by default for onOpenChange.

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 z-50 w-screen h-screen bg-transparent border-0 p-0 shadow-none rounded-none max-w-none left-0 top-0 translate-x-0 translate-y-0 data-[state=open]:animate-none data-[state=closed]:animate-none opacity-100">
        {/* Custom Close Button - using DialogClose for consistency and focus management */}
        <DialogClose className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white hover:bg-black/40 hover:border-white/40 focus:outline-none focus:shadow-none transition-colors focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)]">
          <X className="h-4 w-4" strokeWidth={1.5} />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Image Container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {/* Ensure src is valid before rendering Image to prevent errors if lightbox is briefly open without src */}
          {src && (
            <div className="relative w-full h-full max-w-7xl max-h-full">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt} // Alt text is important for accessibility, even if not displayed
                fill
                className="object-contain"
                sizes="100vw" // Appropriate for a full-screen modal
                unoptimized // If you are using external image URLs not configured in next.config.js
                priority // If the lightbox image is considered high priority when opened
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
