import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ActionLink({ href, children, className }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-lg font-semibold text-sky-600 dark:text-sky-500 transition-colors hover:text-sky-700 dark:hover:text-sky-400",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}
