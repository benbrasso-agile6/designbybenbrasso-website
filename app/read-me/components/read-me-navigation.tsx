"use client"

import type React from "react"
import { ArrowDownIcon } from "lucide-react"

interface NavigationSection {
  id: string
  title: string
}

interface ReadMeNavigationProps {
  sections: NavigationSection[]
  currentPagePath: string
  navId?: string // Optional ID for the nav element itself for ARIA
  titleId?: string // Optional ID for the h2 title for ARIA
}

export default function ReadMeNavigation({
  sections,
  currentPagePath,
  navId = "readme-page-navigation",
  titleId = "readme-navigation-title",
}: ReadMeNavigationProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <nav
      aria-labelledby={titleId}
      id={navId}
      className="my-12 p-6 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900 not-prose shadow-sm"
    >
      <h2 id={titleId} className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
        On this page
      </h2>
      <ul className="space-y-2 columns-1 sm:columns-2">
        {sections.map((section) => (
          <li key={section.id} className="break-inside-avoid">
            <a
              href={`${currentPagePath}#${section.id}`}
              className="text-sm sm:text-base text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 hover:underline flex items-center group cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, section.id)}
            >
              {section.title}
              <ArrowDownIcon className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
