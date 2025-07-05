"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export default function Lightbox({ isOpen, onClose, src, alt }: LightboxProps) {
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

  if (!isOpen) return null

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full h-full flex items-center justify-center p-4"
          onOpenAutoFocus={(e) => {
            e.preventDefault()
            // Focus the close button on mobile
            if (window.innerWidth < 768) {
              setTimeout(() => {
                const closeButton = document.querySelector("[data-lightbox-close]") as HTMLElement
                if (closeButton) {
                  closeButton.focus()
                }
              }, 100)
            }
          }}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <div className="relative max-w-full max-h-full">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[calc(100vh-2rem)] w-auto h-auto object-contain"
                priority
              />
            </div>
            <DialogPrimitive.Close
              data-lightbox-close
              className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-white/10 backdrop-blur-sm border border-white/20 p-2 focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)]"
              onClick={onClose}
            >
              <X className="h-4 w-4 text-white" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
