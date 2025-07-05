"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Dialog, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

/**
 * A simple, single-image lightbox.
 * – Locks body scroll while open
 * – Gives the close button programmatic focus on mobile (with a yellow ring)
 * – No slideshow/navigation logic
 */
interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  /* -------------------------------------------------------------------------- */
  /*                           Body-scroll lock / focus                         */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const { body } = document
    const originalOverflow = body.style.overflow

    if (isOpen) {
      body.style.overflow = "hidden"

      // On small screens give programmatic focus so iOS users can dismiss w/ keyboard
      if (window.innerWidth < 768) {
        setTimeout(() => {
          closeButtonRef.current?.focus()
          closeButtonRef.current?.classList.add("force-focus-visible")
        }, 100)
      }
    } else {
      body.style.overflow = originalOverflow
    }

    return () => {
      body.style.overflow = originalOverflow
    }
  }, [isOpen])

  /* -------------------------------------------------------------------------- */
  /*                              Render dialog                                 */
  /* -------------------------------------------------------------------------- */
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <DialogPrimitive.Content
          className={cn(
            "fixed inset-0 z-50 h-screen w-screen border-0 p-0 shadow-none bg-transparent",
            "data-[state=open]:animate-in data-[state=closed]:animate-out duration-200",
          )}
        >
          {/* Close button */}
          <DialogClose
            ref={closeButtonRef}
            onBlur={(e) => e.currentTarget.classList.remove("force-focus-visible")}
            className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white hover:bg-black/40 hover:border-white/40 transition-colors focus:outline-none focus:shadow-none focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)] force-focus-visible:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)]"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative max-h-full max-w-full">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={1200}
                height={800}
                className="max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] object-contain"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  )
}
