"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Dialog, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface LightboxProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function Lightbox({ images, isOpen, currentIndex, onClose, onNext, onPrevious }: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden"

      // Focus the close button on mobile for better accessibility
      const isMobile = window.innerWidth < 768
      if (isMobile && closeButtonRef.current) {
        // Small delay to ensure the lightbox is fully rendered
        setTimeout(() => {
          closeButtonRef.current?.focus()
          // Add the force-focus-visible class for mobile Safari
          closeButtonRef.current?.classList.add("force-focus-visible")
        }, 100)
      }
    } else {
      // Restore body scroll when lightbox is closed
      document.body.style.overflow = "unset"
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
  }

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed inset-0 z-50 w-screen h-screen bg-transparent border-0 p-0 shadow-none",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            "duration-200",
          )}
        >
          {/* Close button */}
          <DialogClose
            ref={closeButtonRef}
            // Remove the programmatic class on blur to allow normal focus-visible behavior if user tabs away and back
            onBlur={(e) => e.currentTarget.classList.remove("force-focus-visible")}
            className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white hover:bg-black/40 hover:border-white/40 transition-colors focus:outline-none focus:shadow-none focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)] force-focus-visible:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)]"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:bg-white/20"
                onClick={onPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:bg-white/20"
                onClick={onNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* Image container */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {isLoading && (
              <div className="flex h-64 w-64 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
              </div>
            )}
            <div className="relative max-h-full max-w-full">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                unoptimized
                priority
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              {currentImage.caption && (
                <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center text-white">
                  {currentImage.caption}
                </p>
              )}
            </div>
          </div>

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {currentIndex + 1} of {images.length}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  )
}
