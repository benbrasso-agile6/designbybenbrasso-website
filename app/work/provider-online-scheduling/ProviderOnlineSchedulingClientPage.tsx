"use client"

import type React from "react"
import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import { useEffect, useState } from "react"
import NextProjectLink from "@/app/components/next-project-link"
import { useMobile } from "@/hooks/use-mobile"
import Lightbox from "@/app/components/lightbox"
import BackToAllCaseStudiesLink from "@/app/components/back-to-all-case-studies-link"
import { cn } from "@/lib/utils"

const caseStudy = providerOnlineSchedulingData

export default function ProviderOnlineSchedulingClientPage() {
  const isMobile = useMobile()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string | null>(null)

  const handleOpenLightbox = (src: string, alt: string) => {
    setLightboxSrc(src)
    setLightboxAlt(alt)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
    setTimeout(() => {
      setLightboxSrc(null)
      setLightboxAlt(null)
    }, 300)
  }

  const renderContentItem = (item: CaseStudyContentItem, index: number) => {
    switch (item.type) {
      case "paragraph":
        return <p key={index} dangerouslySetInnerHTML={{ __html: item.text || "" }} />
      case "list":
        return (
          <ul key={index} className="list-disc pl-5 space-y-1">
            {item.items?.map((li, liIndex) => (
              <li key={liIndex} dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ul>
        )
      case "numeric-list":
        return (
          <ol key={index} className="list-decimal pl-5 space-y-1">
            {item.items?.map((li, liIndex) => (
              <li key={liIndex} dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ol>
        )
      case "image":
        if (item.src && item.alt) {
          const isPng = item.src.toLowerCase().endsWith(".png")
          if (isMobile && isPng) {
            return (
              <div key={index} className="my-0 cursor-pointer" onClick={() => handleOpenLightbox(item.src!, item.alt!)}>
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={item.width || 800}
                  height={item.height || 450}
                  className={item.className || "rounded-lg w-full object-cover"}
                  priority={item.priority}
                  unoptimized
                />
              </div>
            )
          }
          return (
            <div key={index} className="my-0">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={item.width || 800}
                height={item.height || 450}
                className={item.className || "rounded-lg w-full object-cover"}
                priority={item.priority}
                unoptimized
              />
            </div>
          )
        }
        return null
      case "h3":
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-3">
            {item.text}
          </h3>
        )
      default:
        return null
    }
  }

  const handleAnchorScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId.substring(1))
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const scrollToTopPrecise = () => {
      // Force immediate scroll for iOS Safari
      if (typeof window !== "undefined") {
        // Disable smooth scrolling temporarily
        document.documentElement.style.scrollBehavior = "auto"
        document.body.style.scrollBehavior = "auto"

        // Multiple scroll methods for iOS Safari compatibility
        window.scrollTo(0, 0)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        // Force a reflow
        document.body.offsetHeight

        // Try again with requestAnimationFrame
        requestAnimationFrame(() => {
          window.scrollTo(0, 0)
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        })
      }
    }

    // Immediate scroll
    scrollToTopPrecise()

    // Additional attempts with delays for iOS Safari
    const timeouts = [0, 10, 50, 100, 200].map((delay) => setTimeout(scrollToTopPrecise, delay))

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  const githubLinkData = {
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling",
    text: "Visit VA's Community Care Self-Scheduling repo on GitHub",
  }

  return (
    <>
      <div className="flex mb-8 print:hidden">
        <BackToAllCaseStudiesLink />
      </div>

      <h1 className="provider-h1-leading text-4xl sm:text-5xl font-bold mb-7 text-neutral-900 dark:text-neutral-100">
        {caseStudy.pageTitle}
      </h1>

      <div className="relative mt-12">
        {caseStudy.mainImage && (
          <div className="sticky top-16 z-0">
            <Image
              src={caseStudy.mainImage.src || "/placeholder.svg"}
              alt={caseStudy.mainImage.alt}
              width={caseStudy.mainImage.width}
              height={caseStudy.mainImage.height}
              className="rounded-lg w-full object-cover border-2 border-neutral-700 dark:border-neutral-600"
              priority={caseStudy.mainImage.priority}
              unoptimized
            />
          </div>
        )}

        <div className="relative z-10 bg-background dark:bg-neutral-950 transform-gpu">
          {caseStudy.projectOverviewBanner && (
            <ProjectOverviewBanner bannerData={caseStudy.projectOverviewBanner} githubLink={githubLinkData} />
          )}

          <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
            {caseStudy.anchorLink && !caseStudy.projectOverviewBanner && (
              <div className="mt-6 mb-8 not-prose">
                <a
                  href={caseStudy.anchorLink.href}
                  onClick={(e) => handleAnchorScroll(e, caseStudy.anchorLink!.href)}
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 underline group"
                >
                  {caseStudy.anchorLink.text}
                  <ArrowDownIcon className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              </div>
            )}

            {caseStudy.sections.map((section, sectionIndex) => {
              const isKeyOutcomes = section.title === "Key Outcomes" || section.title === "Key Outcomes & Impact"

              // Filter out the gif from Key Outcomes content if it's the last item
              let sectionContent = section.content
              let extractedGif = null

              if (isKeyOutcomes) {
                const lastItem = section.content[section.content.length - 1]
                if (lastItem?.type === "image" && lastItem.src?.toLowerCase().includes(".gif")) {
                  extractedGif = lastItem
                  sectionContent = section.content.slice(0, -1)
                }
              }

              return (
                <div key={sectionIndex}>
                  <section
                    id={section.id || `section-${sectionIndex}`}
                    className={cn("mb-12", isKeyOutcomes && "key-outcomes-section")}
                  >
                    <h2 className="text-3xl font-semibold mt-10 mb-4">{section.title}</h2>
                    {sectionContent.map(renderContentItem)}
                  </section>

                  {/* Render extracted gif in its own container */}
                  {extractedGif && <div className="mb-12">{renderContentItem(extractedGif, 0)}</div>}
                </div>
              )
            })}
          </article>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 print:hidden">
        <NextProjectLink href="/work/patient-check-in" text="Visit previous project" isPrevious={true} />
        <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
      </div>

      {lightboxOpen && lightboxSrc && lightboxAlt && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} isOpen={lightboxOpen} onClose={handleCloseLightbox} />
      )}
    </>
  )
}
