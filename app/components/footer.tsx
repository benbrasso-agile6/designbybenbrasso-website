import Link from "next/link"
import { CompassIcon, LinkedinIcon, GithubIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-sky-600/30 dark:border-sky-500/30 bg-white dark:bg-neutral-950">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between gap-6 py-8 md:py-6 px-6">
        {/* Left Group - Aligned Left */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:gap-3">
          {" "}
          {/* Aligns children: centered on mobile, start (left) on desktop */}
          <Link href="/" className="flex items-center gap-2 group/logo mb-1.5 md:mb-0">
            {" "}
            {/* Site name link, margin bottom on small screens, none on medium+ */}
            <CompassIcon className="h-6 w-6 text-sky-600 dark:text-sky-500 group-hover/logo:opacity-80 transition-opacity" />
            <p className="text-sm font-medium group-hover/logo:text-sky-600 dark:group-hover/logo:text-sky-500 transition-colors text-center md:text-left">
              designbybenbrasso
            </p>
          </Link>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left">
            Built using v0 for rapid prototyping, extended with custom components.{" "}
            <Link
              href="https://github.com/benbrasso-agile6/designbybenbrasso-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-500 transition-colors underline"
              aria-label="Repository for designbybenbrasso website on GitHub"
            >
              Check out the code on GitHub.
            </Link>
          </p>
        </div>

        {/* Right Group - Aligned Right */}
        <div className="flex flex-col items-center text-center md:items-end md:text-right md:flex-row md:items-center md:gap-6">
          <p className="text-sm leading-loose text-muted-foreground text-center md:text-right">
            &copy; {currentYear} Ben Brasso. All rights reserved.
          </p>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Link
              href="https://github.com/benbrasso-agile6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Brasso's GitHub Profile"
              className="rounded-full bg-neutral-800 dark:bg-neutral-700 p-2 group transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-600"
            >
              <GithubIcon className="h-5 w-5 text-white dark:text-neutral-100 group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/benbrasso/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Brasso's LinkedIn Profile"
              className="rounded-full bg-neutral-800 dark:bg-neutral-700 p-2 group transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-600"
            >
              <LinkedinIcon className="h-5 w-5 text-white dark:text-neutral-100 group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
