"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { PlusIcon, MinusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationSection {
  id: string
  title: string
}

interface StickyReadMeNavigationProps {
  sections: NavigationSection[]
  currentPagePath: string
  originalNavId: string
}

const INACTIVITY_TIMEOUT_MS = 3000 // 3 seconds
const STICKY_NAV_TOP_OFFSET = 74 // Approx. calc(4rem + 10px) -> 64px + 10px

export default function StickyReadMeNavigation({
  sections,
  currentPagePath,
  originalNavId,
}: StickyReadMeNavigationProps) {
  const [isBaseVisible, setIsBaseVisible] = useState(false)
  const [isUserActive, setIsUserActive] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPastContentEndTrigger, setIsPastContentEndTrigger] = useState(false)

  const [originalNavInfo, setOriginalNavInfo] = useState<{ top: number; height: number } | null>(null)
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null)
  const stickyNavRef = useRef<HTMLDivElement>(null)
  const prevUserActiveRef = useRef<boolean>()
  const prevIsPastContentEndTriggerRef = useRef<boolean>()
  const contentEndTriggerElementRef = useRef<HTMLElement | null>(null)
  const prevScrollYRef = useRef<number>(0)

  useEffect(() => {
    const originalNavElement = document.getElementById(originalNavId)
    if (originalNavElement) {
      setOriginalNavInfo({
        top: originalNavElement.offsetTop,
        height: originalNavElement.offsetHeight,
      })
    }
    // Cache the content end trigger element
    contentEndTriggerElementRef.current = document.getElementById("navigating-the-nebulous-audio")
  }, [originalNavId])

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Auto-close expanded menu when user scrolls
    if (isExpanded && Math.abs(currentScrollY - prevScrollYRef.current) > 10) {
      setIsExpanded(false)
    }

    prevScrollYRef.current = currentScrollY

    // Original nav visibility
    if (originalNavInfo) {
      const shouldBeBaseVisible = window.scrollY > originalNavInfo.top + originalNavInfo.height
      if (isBaseVisible !== shouldBeBaseVisible) {
        setIsBaseVisible(shouldBeBaseVisible)
        if (!shouldBeBaseVisible) {
          setIsExpanded(false)
        }
      }
    }

    // User activity
    setIsUserActive(true)
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current)
    }
    inactivityTimerRef.current = setTimeout(() => {
      setIsUserActive(false)
    }, INACTIVITY_TIMEOUT_MS)

    // Content end trigger detection
    const triggerElement = contentEndTriggerElementRef.current
    if (triggerElement) {
      const triggerTop = triggerElement.getBoundingClientRect().top
      const pastTrigger = triggerTop <= STICKY_NAV_TOP_OFFSET
      // Only update state if it actually changed to prevent unnecessary re-renders
      setIsPastContentEndTrigger((currentVal) => (currentVal === pastTrigger ? currentVal : pastTrigger))
    } else {
      setIsPastContentEndTrigger((currentVal) => (currentVal === false ? currentVal : false))
    }
  }, [originalNavInfo, isBaseVisible, isExpanded])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial checks
    if (originalNavInfo) {
      const shouldBeBaseVisible = window.scrollY > originalNavInfo.top + originalNavInfo.height
      setIsBaseVisible(shouldBeBaseVisible)
      if (!shouldBeBaseVisible) setIsExpanded(false)
    }

    const triggerElement = contentEndTriggerElementRef.current
    if (triggerElement) {
      const triggerTop = triggerElement.getBoundingClientRect().top
      setIsPastContentEndTrigger(triggerTop <= STICKY_NAV_TOP_OFFSET)
    } else {
      setIsPastContentEndTrigger(false)
    }

    prevScrollYRef.current = window.scrollY

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
    }
  }, [handleScroll, originalNavInfo])

  // Collapse the menu when it reappears after inactivity
  useEffect(() => {
    const wasInactive = prevUserActiveRef.current === false
    const isNowActive = isUserActive === true

    if (wasInactive && isNowActive) {
      setIsExpanded(false)
    }
    prevUserActiveRef.current = isUserActive
  }, [isUserActive])

  // Collapse the menu when scrolling up from the content end trigger point
  useEffect(() => {
    const wasPastTrigger = prevIsPastContentEndTriggerRef.current === true
    const isNoLongerPastTrigger = isPastContentEndTrigger === false

    if (wasPastTrigger && isNoLongerPastTrigger) {
      setIsExpanded(false)
    }
    prevIsPastContentEndTriggerRef.current = isPastContentEndTrigger
  }, [isPastContentEndTrigger])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const headerHeight = 64
      const stickyNavCurrentHeight = stickyNavRef.current?.offsetHeight || 0
      const extraOffset = 20

      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight - (isExpanded ? stickyNavCurrentHeight : 0) - extraOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsExpanded(false)
      setIsUserActive(true)
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current)
      inactivityTimerRef.current = setTimeout(() => setIsUserActive(false), INACTIVITY_TIMEOUT_MS)
    }
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setIsUserActive(true)
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current)
    inactivityTimerRef.current = setTimeout(() => setIsUserActive(false), INACTIVITY_TIMEOUT_MS)
  }

  const ExpandIcon = isExpanded ? MinusIcon : PlusIcon
  const showStickyNav = !isPastContentEndTrigger && isBaseVisible && (isUserActive || isExpanded)

  return (
    <div
      ref={stickyNavRef}
      className={cn(
        "fixed z-40 print:hidden transition-opacity duration-300 ease-in-out",
        "left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-60 lg:w-[480px] xl:w-[700px]",
        "top-[calc(4rem+10px)]", // This is STICKY_NAV_TOP_OFFSET (approx 74px)
        showStickyNav ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className={cn(
          "backdrop-blur-sm",
          "bg-neutral-100/90 dark:bg-neutral-800/90",
          "border border-neutral-300 dark:border-neutral-700",
          "rounded-xl shadow-xl",
        )}
      >
        <button
          onClick={toggleExpanded}
          className={cn(
            "flex items-center justify-between w-full text-left",
            "px-4 py-3",
            "text-neutral-700 dark:text-neutral-200 font-medium",
            "hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-800",
            "rounded-t-xl",
            isExpanded && "rounded-b-none border-b border-neutral-300 dark:border-neutral-700",
          )}
          aria-expanded={isExpanded}
          aria-controls="sticky-nav-list"
        >
          <span>On this page</span>
          <ExpandIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </button>
        {isExpanded && (
          <ul
            id="sticky-nav-list"
            className={cn(
              "py-2 px-2 max-h-[calc(100vh-200px)] overflow-y-auto",
              "bg-neutral-100/90 dark:bg-neutral-800/90 rounded-b-xl",
            )}
          >
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`${currentPagePath}#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md",
                    "text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400",
                    "hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70",
                    "focus-visible:outline-none focus-visible:bg-neutral-200/70 dark:focus-visible:bg-neutral-700/70",
                  )}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
