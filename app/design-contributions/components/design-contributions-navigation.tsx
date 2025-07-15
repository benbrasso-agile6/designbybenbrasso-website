"use client"

import type React from "react"

const designContributionsSections = [
  { id: "va-design-system", title: "VA.gov Design System" },
  { id: "research-at-va", title: "Research at VA" },
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
    <nav className="not-prose my-8 border-t border-b py-6 border-slate-200 dark:border-slate-800">
      <h2 className="text-lg font-semibold mb-3">On this page</h2>
      <ul className="space-y-2">
        {designContributionsSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleNavigation(e, section.id)}
              className="text-base text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-500 transition-colors duration-200"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesignContributionsNavigation
