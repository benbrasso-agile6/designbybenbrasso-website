"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MenuIcon, FileTextIcon, CompassIcon, MailIcon, XIcon, DownloadIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const baseNavItems = [
    { name: "README", href: "/read-me", icon: <FileTextIcon className="h-5 w-5" /> },
    {
      name: "Resume/CV",
      href: "https://www.dropbox.com/scl/fi/shwx97aarjojfuihfjk85/Ben-Brasso-Resume-2025.pdf?rlkey=f8y8kjg2jqfxvo4xgsc5qc4fv&st=d89477ve&dl=1",
      icon: <DownloadIcon className="h-5 w-5" />,
      download: "Ben_Brasso_Resume_2025.pdf",
      isExternal: true,
    },
    { name: "Contact", href: "/contact", icon: <MailIcon className="h-5 w-5" /> },
  ]

  const logoText = "designbybenbrasso"
  const letters = logoText.split("")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden" // Prevent background scroll when mobile menu is open
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.body.style.overflow = ""
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    // z-50 ensures header is above most other content
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
        <nav className="hidden md:flex items-center gap-3">
          {baseNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center text-base font-semibold transition-colors hover:text-sky-600 dark:hover:text-sky-500 focus:text-sky-600 dark:focus:text-sky-500 focus:underline focus:outline-none ${
                pathname === item.href && !item.isExternal
                  ? "text-sky-600 dark:text-sky-500"
                  : "text-black dark:text-neutral-100"
              }`}
              aria-current={pathname === item.href && !item.isExternal ? "page" : undefined}
              {...(item.download && { download: item.download })}
              target={item.isExternal || item.download ? "_blank" : undefined}
              rel={item.isExternal || item.download ? "noopener noreferrer" : undefined}
            >
              {item.name === "Resume/CV" && item.icon && <span className="mr-1.5">{item.icon}</span>}
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            // Mobile menu also uses z-50 to ensure it's above other content, including sticky nav
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-border/40 shadow-md md:hidden p-6 z-50"
            >
              <nav className="grid gap-4 text-lg font-medium">
                {baseNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-2.5 py-2 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none ${
                      pathname === item.href && !item.isExternal
                        ? "text-sky-600 dark:text-sky-500 font-semibold"
                        : "text-black dark:text-neutral-100"
                    }`}
                    aria-current={pathname === item.href && !item.isExternal ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    {...(item.download && { download: item.download })}
                    target={item.isExternal || item.download ? "_blank" : undefined}
                    rel={item.isExternal || item.download ? "noopener noreferrer" : undefined}
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
    </header>
  )
}
