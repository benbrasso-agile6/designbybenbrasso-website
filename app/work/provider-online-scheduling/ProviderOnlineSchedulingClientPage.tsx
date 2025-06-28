"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import BackToHomeLink from "@/app/components/back-to-home-link"
import Lightbox from "@/app/components/lightbox"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import { useMobile } from "@/hooks/use-mobile"

const caseStudy = providerOnlineSchedulingData

export default function ProviderOnlineSchedulingClientPage() {
  /* -------------------- state & helpers -------------------- */
  const isMobile = useMobile()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string | null>(null)

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src)
    setLightboxAlt(alt)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)

  /* -------------------- rendering helpers -------------------- */
  const renderItem = (item: CaseStudyContentItem, idx: number) => {
    switch (item.type) {
      case "paragraph":
        return <p key={idx} dangerouslySetInnerHTML={{ __html: item.text ?? "" }} />
      case "list":
        return (
          <ul key={idx} className="list-disc pl-5 space-y-1">
            {item.items?.map((li, liIdx) => (
              <li key={liIdx} dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ul>
        )
      case "image":
        if (!item.src || !item.alt) return null
        const Img = (
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            width={item.width ?? 800}
            height={item.height ?? 450}
            className={item.className ?? "rounded-lg w-full object-cover"}
            unoptimized
            priority={item.priority}
          />
        )
        return (
          <div key={idx} className="my-0 cursor-pointer" onClick={() => openLightbox(item.src!, item.alt!)}>
            {isMobile ? Img : <>{Img}</>}
          </div>
        )
      case "h3":
        return (
          <h3 key={idx} className="text-2xl font-semibold mt-8 mb-3">
            {item.text}
          </h3>
        )
      default:
        return null
    }
  }

  /* -------------------- scroll to top on load -------------------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  /* -------------------- github link data (optional banner prop) --- */
  const githubLink = {
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling",
    text: "Visit VA's Community Care Self-Scheduling repo on GitHub",
  }

  /* -------------------- component markup -------------------- */
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* top nav row */}
      <div className="hidden md:flex justify-between items-center mt-6 mb-10">
        <BackToHomeLink />
        <NextProjectLink href="/work/patient-check-in" text="Visit next project" />
      </div>

      {/* page title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
        {caseStudy.pageTitle}
      </h1>

      {/* hero image (sticky) */}
      {caseStudy.mainImage && (
        <div className="sticky top-16 z-0 mb-12">
          <Image
            {...caseStudy.mainImage}
            className="rounded-lg w-full object-cover border border-neutral-300 dark:border-neutral-700"
            unoptimized
            priority
          />
        </div>
      )}

      {/* overview banner */}
      {caseStudy.projectOverviewBanner && (
        <ProjectOverviewBanner bannerData={caseStudy.projectOverviewBanner} githubLink={githubLink} />
      )}

      {/* sections */}
      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
        {caseStudy.sections.map((section, i) => (
          <section key={i} id={section.title.toLowerCase().replace(/\s+/g, "-")} className="mb-14">
            <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
            {section.content.map(renderItem)}
          </section>
        ))}
      </article>

      {/* bottom nav row */}
      <div className="flex justify-between items-center mt-16 mb-10">
        <BackToHomeLink />
        <NextProjectLink href="/work/patient-check-in" text="Visit next project" />
      </div>

      {/* lightbox */}
      {lightboxOpen && lightboxSrc && lightboxAlt && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} isOpen={lightboxOpen} onClose={closeLightbox} />
      )}
    </main>
  )
}
