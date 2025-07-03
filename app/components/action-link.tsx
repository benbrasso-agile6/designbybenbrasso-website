import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ActionLinkProps {
  href: string
  children: React.ReactNode
}

export default function ActionLink({ href, children }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-lg font-semibold text-sky-600 dark:text-sky-500 hover:text-sky-700 dark:hover:text-sky-400 transition-colors duration-200 group"
    >
      {children}
      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  )
}
