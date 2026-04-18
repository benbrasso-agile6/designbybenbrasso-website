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

const githubLinkData = {
  url: "https://github.com/agilesix/nofo-design-prep-checker",
  text: "Visit the NOFO Design Prep Checker repo on GitHub",
}

export default function NofoDesignPrepCheckerClientPage() {
  const isMobile = useMobile()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string>("")

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src)
    setLightboxAlt(alt)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxSrc(null)
    setLightboxAlt("")
  }

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  const renderContent = (item: CaseStudyContentItem, idx: number) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p
            key={idx}
            className={cn("text-base sm:text-lg leading-relaxed", item.className)}
            dangerouslySetInnerHTML={{ __html: item.text || "" }}
          />
        )
      case "list":
        return (
          <ul key={idx} className={cn("list-disc pl-5 space-y-2", item.className)}>
            {item.items?.map((li, i) => (
              <li key={i} className="text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ul>
        )
      case "image":
        return (
          <figure key={idx} className={cn("my-6", item.className)}>
            <img
              src={item.src}
              alt={item.alt || ""}
              className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(item.src!, item.alt || "")}
            />
            {item.caption && (
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">{item.caption}</figcaption>
            )}
          </figure>
        )
      case "video":
        return (
          <figure key={idx} className={cn("my-6", item.className)}>
            <video src={item.src} controls className="rounded-lg w-full" poster={item.poster}>
              Your browser does not support the video tag.
            </video>
            {item.caption && (
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">{item.caption}</figcaption>
            )}
          </figure>
        )
      case "quote":
        return (
          <blockquote key={idx} className={cn("border-l-4 border-primary pl-4 italic my-6", item.className)}>
            <p className="text-base sm:text-lg">{item.text}</p>
            {item.attribution && <cite className="block mt-2 text-sm text-muted-foreground">— {item.attribution}</cite>}
          </blockquote>
        )
      case "callout":
        return (
          <div key={idx} className={cn("bg-muted p-4 rounded-lg my-6", item.className)}>
            <p className="text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: item.text || "" }} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <article className="min-h-screen">
      {/* Back link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <BackToAllCaseStudiesLink />
      </div>

      {/* Project Overview Banner */}
      <ProjectOverviewBanner bannerData={caseStudy.projectOverviewBanner} githubLink={githubLinkData} />

      {/* Main Image */}
      {caseStudy.mainImage && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <img
            src={caseStudy.mainImage.src}
            alt={caseStudy.mainImage.alt}
            className={cn(
              "w-full rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity",
              caseStudy.mainImage.className,
            )}
            onClick={() => openLightbox(caseStudy.mainImage!.src, caseStudy.mainImage!.alt)}
          />
        </div>
      )}

      {/* Scroll indicator */}
      <div className="flex justify-center my-8">
        <ArrowDownIcon className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>

      {/* Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {caseStudy.sections.map((section, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{section.title}</h2>
            <div className="space-y-4">{section.content.map((item, idx) => renderContent(item, idx))}</div>
          </section>
        ))}
      </div>

      {/* Next Project Link */}
      <div className="flex justify-between items-center mt-12 print:hidden">
        <NextProjectLink href="/work/streamlining-nofo-authoring-and-workflows" text="Visit previous project" isPrevious={true} />
        <NextProjectLink href="/work/patient-check-in" text="Visit next project" />
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxSrc && <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />}
    </article>
  )
}
