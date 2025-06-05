"use client"

import type React from "react"
import { ArrowUpIcon } from "lucide-react"
import type { ReadMeSectionItem } from "../read-me-types"

const SectionHeadingWithIcon = ({
  icon: Icon,
  title,
  id, // This 'id' is passed from ReadMeContentSection (e.g., "energizes-me")
}: {
  icon: React.ElementType
  title: string
  id: string
}) => (
  <div className="flex items-center mb-3 mt-12">
    <span className="mr-3 text-sky-600 dark:text-sky-500">
      <Icon className="h-6 w-6" />
    </span>
    {/* The id attribute and scroll-mt-20 are applied directly to the h2 */}
    <h2 id={id} className="!mt-0 !mb-0 text-2xl font-semibold scroll-mt-20">
      {title}
    </h2>
  </div>
)

const BackToTopLink = () => {
  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById("readme-top")
    if (target) {
      // Use a custom smooth scroll with better easing and slightly faster duration
      const startPosition = window.pageYOffset
      const targetPosition = target.offsetTop
      const distance = targetPosition - startPosition
      const duration = 950 // Reduced from 1200ms to 950ms for slightly faster scroll
      let start: number | null = null

      function animation(currentTime: number) {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      // Smoother easing function (cubic ease-in-out)
      function easeInOutCubic(t: number, b: number, c: number, d: number) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t * t + b
        t -= 2
        return (c / 2) * (t * t * t + 2) + b
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <div className="mt-8 text-right not-prose">
      <a
        href="#readme-top"
        className="text-sm text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 inline-flex items-center group cursor-pointer"
        onClick={handleBackToTop}
      >
        Back to Top
        <ArrowUpIcon className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
      </a>
    </div>
  )
}

interface ReadMeContentSectionProps {
  section: ReadMeSectionItem
}

export default function ReadMeContentSection({ section }: ReadMeContentSectionProps) {
  return (
    <section aria-labelledby={section.id + "-heading"}>
      {/* section.id is passed as the 'id' prop to SectionHeadingWithIcon */}
      <SectionHeadingWithIcon icon={section.icon} title={section.title} id={section.id} />
      {section.content.type === "list" && section.content.items && (
        <ul>
          {section.content.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {section.content.type === "paragraph" && section.content.text && <p>{section.content.text}</p>}
      {section.content.type === "custom" && section.content.subheadings && (
        <>
          {section.content.subheadings.map((sub, subIndex) => (
            <div key={subIndex}>
              <h3 className="text-lg font-semibold !mt-6 !mb-3">{sub.title}</h3>
              <ul>
                {sub.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
      {section.content.type === "custom" && section.content.component && section.content.component}
      <BackToTopLink />
    </section>
  )
}
