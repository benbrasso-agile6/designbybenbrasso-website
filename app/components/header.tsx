"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  MenuIcon,
  FileTextIcon,
  CompassIcon,
  MailIcon,
  XIcon,
  DownloadIcon,
  LayersIcon,
  BriefcaseIcon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const mainNavItems = [
    { name: "README", href: "/read-me", icon: <FileTextIcon className="h-5 w-5" /> },
    { name: "More Work", href: "/more-work", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { name: "Design Contributions", href: "/design-contributions", icon: <LayersIcon className="h-5 w-5" /> },
    { name: "Contact", href: "/contact", icon: <MailIcon className="h-5 w-5" /> },
  ]

  const resumeCvItem = {
    name: "Resume/CV",
    href: "https://www.dropbox.com/scl/fi/shwx97aarjojfuihfjk85/Ben-Brasso-Resume-2025.pdf?rlkey=f8y8kjg2jqfxvo4xgsc5qc4fv&st=d89477ve&dl=1",
    icon: <DownloadIcon className="h-5 w-5" />,
    download: "Ben_Brasso_Resume_2025.pdf",
    isExternal: true,
  }

  const logoText = "designbybenbrasso"
  const letters = logoText.split("")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.body.style.overflow = "hidden" // Prevent scrolling of page content when menu is open
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.body.style.overflow = "" // Restore scrolling
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.body.style.overflow = "" // Ensure scrolling is restored on unmount
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-border/40 bg-white dark:bg-neutral-950">
      <div className="w-full mx-auto flex h-16 items-center justify-between px-6 relative">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <CompassIcon className="h-7 w-7 text-sky-600 dark:text-sky-500 group-hover:opacity-80 transition-opacity" />
          </motion.div>
          <div className="flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2 + index * 0.08,
                }}
                className="font-bold text-lg group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-colors"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </Link>

        {/* Right side navigation area */}
        <div className="flex items-center gap-3">
          {/* Resume/CV Link - always visible on md and up */}
          <Link
            key={resumeCvItem.name}
            href={resumeCvItem.href}
            className={`hidden md:flex items-center text-base font-semibold transition-colors hover:text-sky-600 dark:hover:text-sky-500 focus:text-sky-600 dark:focus:text-sky-500 focus:underline focus:outline-none ${
              pathname === resumeCvItem.href && !resumeCvItem.isExternal
                ? "text-sky-600 dark:text-sky-500"
                : "text-black dark:text-neutral-100"
            }`}
            aria-current={pathname === resumeCvItem.href && !resumeCvItem.isExternal ? "page" : undefined}
            {...(resumeCvItem.download && { download: resumeCvItem.download })}
            target={resumeCvItem.isExternal || resumeCvItem.download ? "_blank" : undefined}
            rel={resumeCvItem.isExternal || resumeCvItem.download ? "noopener noreferrer" : undefined}
          >
            {resumeCvItem.icon && <span className="mr-1.5">{resumeCvItem.icon}</span>}
            {resumeCvItem.name}
          </Link>

          {/* Navigation Menu Button - for all sizes */}
          <div className="relative">
            {/* This parent div needs to be relative for desktop dropdown positioning */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="ml-0 md:ml-2 md:w-auto md:px-3 flex items-center md:gap-1.5 text-base font-semibold text-black dark:text-neutral-100 [transform:translateZ(0)]" // Added transform here
            >
              <span className="hidden md:inline-block md:w-14 text-left">
                {" "}
                {/* Applied fixed width and text-left for md+ */}
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="fixed top-16 inset-x-0 bottom-0 p-6 bg-white dark:bg-neutral-950 border-t border-border/40 z-50 overflow-y-auto md:absolute md:top-full md:left-auto md:right-0 md:bottom-auto md:mt-[22px] md:w-auto md:min-w-[250px] md:max-w-xs md:rounded-lg md:border md:shadow-xl md:p-4 md:overflow-visible [transform:translateZ(0)]"
                >
                  <nav className="grid gap-3 text-base font-medium">
                    {/* Resume/CV link for mobile dropdown only */}
                    <div className="md:hidden">
                      <Link
                        key={resumeCvItem.name}
                        href={resumeCvItem.href}
                        className={`flex items-center gap-3 px-2.5 py-2 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none ${
                          pathname === resumeCvItem.href && !resumeCvItem.isExternal
                            ? "text-sky-600 dark:text-sky-500 font-semibold"
                            : "text-black dark:text-neutral-100"
                        }`}
                        aria-current={pathname === resumeCvItem.href && !resumeCvItem.isExternal ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                        {...(resumeCvItem.download && { download: resumeCvItem.download })}
                        target={resumeCvItem.isExternal || resumeCvItem.download ? "_blank" : undefined}
                        rel={resumeCvItem.isExternal || resumeCvItem.download ? "noopener noreferrer" : undefined}
                      >
                        {resumeCvItem.icon}
                        {resumeCvItem.name}
                      </Link>
                    </div>

                    {/* Main nav items for all dropdowns */}
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-2.5 py-2 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none ${
                          pathname === item.href
                            ? "text-sky-600 dark:text-sky-500 font-semibold"
                            : "text-black dark:text-neutral-100"
                        }`}
                        aria-current={pathname === item.href ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
