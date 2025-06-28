import Link from "next/link"
import { ArrowRightIcon, ArrowUpLeftIcon } from "lucide-react"

interface NextProjectLinkProps {
  href: string
  text: string
  isPrevious?: boolean
}

export default function NextProjectLink({ href, text, isPrevious = false }: NextProjectLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 underline group"
    >
      {isPrevious && (
        <ArrowUpLeftIcon className="mr-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
      )}
      {text}
      {!isPrevious && (
        <ArrowRightIcon className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
      )}
    </Link>
  )
}
