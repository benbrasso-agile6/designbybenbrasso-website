"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Renders the scenic footer image on the /read-me page.
 * If the Cloudinary asset 404s or fails for any reason, we render nothing.
 */
export default function FooterImage() {
  const [errored, setErrored] = useState(false)

  if (errored) return null

  return (
    <div className="w-full flex justify-center mt-16">
      <img
        src="https://res.cloudinary.com/dpl6apspp/image/upload/v1748743572/1299427_gdw03z.jpg"
        alt="Tropical sunset with calm water and warm colors"
        loading="lazy"
        className={cn("max-w-4xl w-full h-auto rounded-lg shadow-lg", "object-cover")}
        onError={() => setErrored(true)}
      />
    </div>
  )
}
