"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
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
  PenToolIcon,
  FileSearchIcon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isMenuOpen || typeof window === "undefined") return

    let closeTimeout: NodeJS.Timeout

    const handleScrollOrClick = (event: Event) => {
      if (window.innerWidth < 768) return

      if (event.type === "click") {
        const target = event.target as Node
        const isClickInDropdown = dropdownRef.current?.contains(target)
        const isClickInMenuButton = headerRef.current?.querySelector("button")?.contains(target)

        if (isClickInDropdown || isClickInMenuButton) return
      }

      if (closeTimeout) clearTimeout(closeTimeout)

      closeTimeout = setTimeout(() => {
        setIsMenuOpen(false)
      }, 150)
    }

    window.addEventListener("scroll", handleScrollOrClick, { passive: true })
    document.addEventListener("click", handleScrollOrClick)

    return () => {
      window.removeEventListener("scroll", handleScrollOrClick)
      document.removeEventListener("click", handleScrollOrClick)
      if (closeTimeout) clearTimeout(closeTimeout)
    }
  }, [isMenuOpen])

  const mainNavItems = [
    { name: "README", href: "/read-me", icon: <FileTextIcon className="h-5 w-5" /> },
    { name: "Case Studies", href: "/case-studies", icon: <FileSearchIcon className="h-5 w-5" /> },
    { name: "More Work", href: "/more-work", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { name: "Design Contributions", href: "/design-contributions", icon: <LayersIcon className="h-5 w-5" /> },
    { name: "Contract Vehicles", href: "/contract-vehicles", icon: <PenToolIcon className="h-5 w-5" /> },
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

  const MobileMenuOverlay = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-neutral-950 border-t border-border shadow-lg z-[999999] overflow-y-auto"
      style={{ pointerEvents: "auto" }}
    >
      <nav className="grid gap-4 text-base font-medium p-6">
        <Link
          key={resumeCvItem.name}
          href={resumeCvItem.href}
          className={`flex items-center gap-3 px-2.5 py-3 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none ${
            pathname === resumeCvItem.href && !resumeCvItem.isExternal
              ? "text-sky-700 dark:text-sky-400 font-semibold"
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

        {mainNavItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-2.5 py-3 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none ${
              pathname === item.href
                ? "text-sky-700 dark:text-sky-400 font-semibold"
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
  )

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full border-b border-border bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md z-50"
    >
      <div className="w-full mx-auto flex h-16 items-center justify-between px-6 relative">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <CompassIcon className="h-7 w-7 text-sky-700 dark:text-sky-400 group-hover:opacity-80 transition-opacity" />
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
                className="font-bold text-lg group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            key={resumeCvItem.name}
            href={resumeCvItem.href}
            className={`hidden md:flex items-center text-base font-semibold transition-colors hover:text-sky-700 dark:hover:text-sky-400 focus:text-sky-700 dark:focus:text-sky-400 focus:underline focus:outline-none ${
              pathname === resumeCvItem.href && !resumeCvItem.isExternal
                ? "text-sky-700 dark:text-sky-400"
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

          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className={`ml-0 md:ml-2 md:w-auto md:px-3 flex items-center md:gap-1.5 text-base font-semibold text-black dark:text-neutral-100 ${
                isMenuOpen ? "bg-neutral-100 dark:bg-neutral-800" : ""
              }`}
            >
              <span className="hidden md:inline-block w-12 text-left">{isMenuOpen ? "Close" : "Menu"}</span>
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  {mounted && typeof window !== "undefined" && window.innerWidth >= 768 && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute top-full left-auto right-0 bottom-auto mt-[22px] w-auto min-w-[250px] max-w-xs rounded-lg border shadow-xl p-4 overflow-visible bg-white dark:bg-neutral-950 z-50"
                    >
                      <nav className="grid gap-3 text-base font-medium">
                        {mainNavItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-2.5 py-2 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none ${
                              pathname === item.href
                                ? "text-sky-700 dark:text-sky-400 font-semibold"
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
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {mounted &&
        isMenuOpen &&
        typeof window !== "undefined" &&
        window.innerWidth < 768 &&
        createPortal(<MobileMenuOverlay />, document.body)}
    </header>
  )
}
