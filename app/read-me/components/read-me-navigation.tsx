"use client"

import type React from "react"
import { ArrowDownIcon } from "lucide-react"
// Removed useState, PlusIcon, MinusIcon, useMediaQuery

interface NavigationSection {
  id: string
  title: string
}

interface ReadMeNavigationProps {
  sections: NavigationSection[]
  currentPagePath: string
  navId?: string
  titleId?: string
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
      <div className="flex justify-between items-center mb-4">
        <h2 id={titleId} className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 !my-0">
          On this page
        </h2>
        {/* Removed toggle button */}
      </div>
      <ul id="readme-nav-list" className="space-y-2 columns-1 md:columns-2">
        {sections.map((section) => (
          <li key={section.id} className="break-inside-avoid">
            <a
              href={`${currentPagePath}#${section.id}`}
              className="text-sm sm:text-base text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 flex items-center group"
              onClick={(e) => handleSmoothScroll(e, section.id)}
            >
              {section.title}
              <ArrowDownIcon className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
