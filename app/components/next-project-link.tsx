import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NextProjectLinkProps {
  href: string
  text: string
  className?: string
}

export default function NextProjectLink({ href, text, className }: NextProjectLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 group transition-colors duration-150 ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  )
}
