import Link from "next/link"
import { CornerUpLeft } from "lucide-react"

export default function BackToAllCaseStudiesLink({ className }: { className?: string }) {
  return (
    <Link
      href="/case-studies"
      className={`inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 group transition-colors duration-150 ${className}`}
    >
      <CornerUpLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
      Back to all case studies
    </Link>
  )
}
