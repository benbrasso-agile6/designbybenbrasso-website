"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { useEffect, useRef } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Dialog, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // This effect handles the body scroll lock.
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    // When the lightbox is closed (isOpen becomes false), restore the original overflow.
    else {
      document.body.style.overflow = originalOverflow
    }

    // Cleanup function to ensure scrolling is re-enabled when the component unmounts.
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // When dialog closes, remove the programmatic focus class and call the parent onClose
      closeButtonRef.current?.classList.remove("force-focus-visible")
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault()
            // A timeout is necessary to ensure the element is in the DOM and visible
            // before we try to focus it, especially on mobile browsers.
            const timer = setTimeout(() => {
              const button = closeButtonRef.current
              if (button) {
                button.focus()
                // Programmatically add a class to ensure the focus ring is visible on all devices
                button.classList.add("force-focus-visible")
              }
            }, 100)
            // No need for a cleanup function here as this handler runs only once on open.
          }}
          className={cn(
            "fixed inset-0 z-50 w-screen h-screen bg-transparent border-0 p-0 shadow-none",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            "duration-200",
          )}
        >
          {/* Custom Close Button */}
          <DialogClose
            ref={closeButtonRef}
            // Remove the programmatic class on blur to allow normal focus-visible behavior if user tabs away and back
            onBlur={(e) => e.currentTarget.classList.remove("force-focus-visible")}
            className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white hover:bg-black/40 hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Image Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {src && (
              <div className="relative w-full h-full max-w-7xl max-h-full">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  unoptimized
                  priority
                />
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  )
}
