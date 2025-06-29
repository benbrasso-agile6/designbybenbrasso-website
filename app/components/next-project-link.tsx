import type React from "react"
import Link from "next/link"
import { CornerUpRight, CornerUpLeft } from "lucide-react"

interface NextProjectLinkProps {
  href: string
  children: React.ReactNode
  isPrevious?: boolean
}

export function NextProjectLink({ href, children, isPrevious = false }: NextProjectLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
    >
      {isPrevious && (
        <CornerUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
      )}
      {children}
      {!isPrevious && (
        <CornerUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </Link>
  )
}
