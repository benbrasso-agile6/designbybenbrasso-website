"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationSection {
  id: string
  title: string
}

interface StickyReadMeNavigationProps {
  sections: NavigationSection[]
  currentPagePath: string
  originalNavId: string
}

export default function StickyReadMeNavigation({
  sections,
  currentPagePath,
  originalNavId,
}: StickyReadMeNavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const stickyNavRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollPositionRef = useRef(0)
  const scrollStartTimeRef = useRef<number | null>(null)

  // Auto-close on scroll functionality
  const handleAutoCloseOnScroll = useCallback(() => {
    if (!isExpanded) return

    const currentScrollPosition = window.pageYOffset
    const scrollDistance = Math.abs(currentScrollPosition - lastScrollPositionRef.current)
    const currentTime = Date.now()

    // If this is the start of a new scroll session
    if (scrollStartTimeRef.current === null) {
      scrollStartTimeRef.current = currentTime
      lastScrollPositionRef.current = currentScrollPosition
      return
    }

    const scrollDuration = currentTime - scrollStartTimeRef.current

    // Auto-close if user has scrolled for more than 1 second OR scrolled more than 200px
    if (scrollDuration > 1000 || scrollDistance > 200) {
      setIsExpanded(false)
      scrollStartTimeRef.current = null
    }

    lastScrollPositionRef.current = currentScrollPosition

    // Clear existing timeout and set a new one
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Reset scroll tracking after 100ms of no scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      scrollStartTimeRef.current = null
    }, 100)
  }, [isExpanded])

  useEffect(() => {
    // Function to check if the original nav is out of view
    const checkNavVisibility = () => {
      const originalNav = document.getElementById(originalNavId)
      if (!originalNav) return

      const rect = originalNav.getBoundingClientRect()
      // Show sticky nav when original nav is above the viewport
      const shouldBeVisible = rect.bottom < 0

      // Reset to collapsed state when sticky nav first appears
      if (shouldBeVisible && !isVisible) {
        setIsExpanded(false)
      }

      setIsVisible(shouldBeVisible)
    }

    // Combined scroll handler
    const handleScroll = () => {
      checkNavVisibility()
      handleAutoCloseOnScroll()
    }

    // Initial check
    checkNavVisibility()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [originalNavId, isVisible, handleAutoCloseOnScroll])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // Auto-close after selection
      setIsExpanded(false)
    }
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    // Reset scroll tracking when manually toggling
    scrollStartTimeRef.current = null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={stickyNavRef}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed left-4 right-4 z-40 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-lg rounded-lg floating-sticky-nav"
          style={{ top: "74px" }} // 64px header + 10px padding
        >
          <div className="max-w-[1000px] mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200">On this page</h3>
              <button
                onClick={toggleExpanded}
                className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-sky-600 dark:text-sky-500 expand-button text-lg leading-none font-medium"
                aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
              >
                {isExpanded ? "−" : "+"}
              </button>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-neutral-200 dark:border-neutral-700 mt-3 pt-3">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {sections.map((section) => (
                        <li key={section.id} className="break-inside-avoid">
                          <a
                            href={`${currentPagePath}#${section.id}`}
                            className="text-sm text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 hover:underline block py-1"
                            onClick={(e) => handleSmoothScroll(e, section.id)}
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
