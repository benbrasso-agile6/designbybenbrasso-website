"use client"

import FooterImage from "./components/footer-image"
import ReadMeContentSection from "./components/read-me-content-section"
import StickyReadMeNavigation from "./components/sticky-read-me-navigation"

import { readMeSectionsData } from "./read-me-data"

/**
 * Top-level page for /read-me
 */
export default function ReadMePage() {
  return (
    <div className="relative lg:flex lg:space-x-10">
      {/* Sticky side navigation (desktop) */}
      <StickyReadMeNavigation sections={readMeSectionsData} />

      {/* Main content */}
      <main id="readme-top" className="prose max-w-3xl mx-auto lg:mx-0">
        {readMeSectionsData.map((section) => (
          <ReadMeContentSection key={section.id} section={section} />
        ))}

        {/* Scenic footer graphic (optional) */}
        <FooterImage />
      </main>
    </div>
  )
}
