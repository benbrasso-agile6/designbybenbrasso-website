"use client"

import { MapPinIcon } from "lucide-react"
import { readMeSectionsData } from "./read-me-data"
import ReadMeContentSection from "./components/read-me-content-section"
import FooterImage from "./components/footer-image"
import YoutubeAudioPlayer from "./components/youtube-audio-player"
import ReadMeNavigation from "./components/read-me-navigation"
import StickyReadMeNavigation from "./components/sticky-read-me-navigation"

export default function ReadMePage() {
  const youtubeVideoId = "UDVtMYqUAyw"
  const currentPagePath = "/read-me"
  const originalNavId = "readme-page-navigation"

  const mainContentNavSections = readMeSectionsData.map((sec) => ({
    title: sec.title,
    id: sec.id,
  }))

  const customNavSections = [{ title: "Navigating the nebulous", id: "navigating-the-nebulous-audio" }]

  const allNavigationSections = [...mainContentNavSections, ...customNavSections]

  return (
    <>
      <StickyReadMeNavigation
        sections={allNavigationSections}
        currentPagePath={currentPagePath}
        originalNavId={originalNavId}
      />
      <article id="readme-top" className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
        <h1 className="leading-normal">
          Ben Brasso’s <span className="uppercase">ReadMe</span>
        </h1>
        <p className="lead !mb-0 text-neutral-700 dark:text-neutral-300">bras • soh</p>
        <p className="!mt-1 text-neutral-700 dark:text-neutral-300 flex items-center">
          <MapPinIcon className="h-5 w-5 mr-2 text-sky-600 dark:text-sky-500 flex-shrink-0" /> Melbourne Beach, FL
        </p>

        <p className="mt-6">
          This is my personal README doc. Its purpose is to give my colleagues, partners, and maybe even myself a sense
          of who I am and how I like to work. Always a work in progress.
        </p>

        <ReadMeNavigation sections={allNavigationSections} currentPagePath={currentPagePath} navId={originalNavId} />

        {readMeSectionsData.map((section) => (
          <ReadMeContentSection key={section.id} section={section} />
        ))}
      </article>

      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8">
        <YoutubeAudioPlayer videoId={youtubeVideoId} />
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-[-48px] md:mb-[-64px] lg:mb-[-80px]">
        <div className="max-w-[1400px] mx-auto">
          <FooterImage
            src="https://res.cloudinary.com/dpl6apspp/image/upload/1299427_gdw03z.jpg"
            alt="Astronaut from Interstellar walking on an alien planet surface, representing the journey of navigating the nebulous"
            imgWidth={1400}
            imgHeight={700}
          />
        </div>
      </div>
    </>
  )
}
