"use client"

import type React from "react"
import { ArrowDownIcon } from "lucide-react"
import { nofoDesignPrepCheckerData } from "@/app/data/case-studies/nofo-design-prep-checker-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import { useEffect, useState } from "react"
import NextProjectLink from "@/app/components/next-project-link"
import { useMobile } from "@/hooks/use-mobile"
import Lightbox from "@/app/components/lightbox"
import BackToAllCaseStudiesLink from "@/app/components/back-to-all-case-studies-link"
import { cn } from "@/lib/utils"

const caseStudy = nofoDesignPrepCheckerData

export default function NofoDesignPrepCheckerClientPage() {
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
      case "image":
        if (item.src && item.alt) {
          const isPng = item.src.toLowerCase().endsWith(".png")
          if (isMobile && isPng) {
            return (
              <div key={index} className="my-0 cursor-pointer" onClick={() => handleOpenLightbox(item.src!, item.alt!)}>
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={item.width || 800}
                  height={item.height || 450}
                  className={item.className || "rounded-lg w-full object-cover"}
                />
              </div>
            )
          }
          return (
            <div key={index} className="my-0">
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={item.width || 800}
                height={item.height || 450}
                className={item.className || "rounded-lg w-full object-cover"}
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
      case "video":
        return (
          <div key={index} className="my-0">
            <video src={item.src} controls className="rounded-lg w-full" poster={item.poster}>
              Your browser does not support the video tag.
            </video>
            {item.caption && (
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">{item.caption}</figcaption>
            )}
          </div>
        )
      case "quote":
        return (
          <blockquote key={index} className={cn("border-l-4 border-primary pl-4 italic my-6", item.className)}>
            <p>{item.text}</p>
            {item.attribution && <cite className="block mt-2 text-sm text-muted-foreground">— {item.attribution}</cite>}
          </blockquote>
        )
      case "callout":
        return (
          <div key={index} className={cn("bg-muted p-4 rounded-lg my-6", item.className)}>
            <p dangerouslySetInnerHTML={{ __html: item.text || "" }} />
          </div>
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
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = "auto"
        document.body.style.scrollBehavior = "auto"

        window.scrollTo(0, 0)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        document.body.offsetHeight

        requestAnimationFrame(() => {
          window.scrollTo(0, 0)
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        })
      }
    }

    scrollToTopPrecise()

    const timeouts = [0, 10, 50, 100, 200].map((delay) => setTimeout(scrollToTopPrecise, delay))

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  const githubLinkData = {
    url: "https://github.com/agilesix/nofo-design-prep-checker",
    text: "Visit the NOFO Design Prep Checker repo on GitHub",
  }

  return (
    <>
      <div className="flex mb-8 print:hidden">
        <BackToAllCaseStudiesLink />
      </div>

      <h1 className="leading-tight text-4xl sm:text-5xl font-bold mb-7 text-neutral-900 dark:text-neutral-100">
        {caseStudy.pageTitle}
      </h1>

      <div className="relative mt-12">
        {caseStudy.mainImage && (
          <div className="sticky top-16 z-0">
            <img
              src={caseStudy.mainImage.src || "/placeholder.svg"}
              alt={caseStudy.mainImage.alt}
              width={caseStudy.mainImage.width}
              height={caseStudy.mainImage.height}
              className={cn(
                "rounded-lg w-full object-cover",
                caseStudy.mainImage.showBorder !== false && "border-2 border-neutral-700 dark:border-neutral-600",
              )}
            />
          </div>
        )}

        <div className="relative z-10 bg-background dark:bg-neutral-950 transform-gpu">
          {caseStudy.projectOverviewBanner && (
            <ProjectOverviewBanner bannerData={caseStudy.projectOverviewBanner} githubLink={githubLinkData} />
          )}

          <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
            <style jsx>{`
              article a strong,
              article strong a {
                font-weight: 700 !important;
              }
            `}</style>

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
              return (
                <section
                  key={sectionIndex}
                  id={section.id || `section-${sectionIndex}`}
                  className={cn("mb-12", isKeyOutcomes && "key-outcomes-section")}
                >
                  <h2 className="text-3xl font-semibold mt-10 mb-4">{section.title}</h2>
                  {section.content.map(renderContentItem)}
                </section>
              )
            })}
          </article>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 print:hidden">
        <NextProjectLink href="/work/streamlining-nofo-authoring-and-workflows" text="Visit previous project" isPrevious={true} />
        <NextProjectLink href="/work/patient-check-in" text="Visit next project" />
      </div>

      {lightboxOpen && lightboxSrc && lightboxAlt && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} isOpen={lightboxOpen} onClose={handleCloseLightbox} />
      )}
    </>
  )
}
