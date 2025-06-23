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
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="fixed inset-0 z-50 w-screen h-screen bg-transparent border-0 p-0 shadow-none rounded-none max-w-none left-0 top-0 translate-x-0 translate-y-0 
                              data-[state=open]:animate-in 
                              data-[state=open]:fade-in-0 
                              data-[state=open]:zoom-in-100 
                              data-[state=open]:slide-in-from-left-0 
                              data-[state=open]:slide-in-from-top-0 
                              data-[state=closed]:animate-out 
                              data-[state=closed]:fade-out-0 
                              data-[state=closed]:zoom-out-100 
                              data-[state=closed]:slide-out-to-left-0 
                              data-[state=closed]:slide-out-to-top-0
                              duration-200"
      >
        {/* Custom Close Button */}
        <DialogClose className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white hover:bg-black/40 hover:border-white/40 focus:outline-none focus:shadow-none transition-colors focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)]">
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
      </DialogContent>
    </Dialog>
  )
}
