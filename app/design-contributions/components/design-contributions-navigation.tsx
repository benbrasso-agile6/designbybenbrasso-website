"use client"

import type React from "react"
import { ArrowDown } from "lucide-react"

const designContributionsSections = [
  { id: "va-design-system", title: "VA.gov Design System" },
  { id: "research-operations-at-va", title: "Research Operations at VA" },
]

const DesignContributionsNavigation = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = targetPosition - 80 // for sticky header
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="not-prose my-8 rounded-xl border bg-slate-50 p-6 dark:bg-slate-800/50 dark:border-slate-800">
      <h2 className="text-lg font-semibold mb-3">On this page</h2>
      <ul className="space-y-2">
        {designContributionsSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleNavigation(e, section.id)}
              className="group inline-flex items-center text-base text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
            >
              <span className="group-hover:underline">{section.title}</span>
              <ArrowDown className="ml-1.5 h-4 w-4 flex-shrink-0 opacity-70 transition-opacity group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesignContributionsNavigation
