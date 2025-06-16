"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import { getCaseStudyData } from "@/app/data/case-studies-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import type React from "react"
import BackToHomeLink from "@/app/components/back-to-home-link"

type Props = {
  params: { slug: string }
}

const renderContentItem = (item: CaseStudyContentItem, index: number) => {
  switch (item.type) {
    case "paragraph":
      return <p key={index} dangerouslySetInnerHTML={{ __html: item.text || "" }} />
    case "list":
      return (
        <ul key={index}>
          {item.items?.map((li, liIndex) => (
            <li key={liIndex} dangerouslySetInnerHTML={{ __html: li }} />
          ))}
        </ul>
      )
    case "image":
      if (item.src && item.alt) {
        // This image rendering is for images within sections, not the main project image
        return (
          <div key={index} className={`my-6 ${item.className || ""}`}>
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={800}
              height={450}
              className="rounded-lg w-full object-cover"
              priority={item.priority}
              unoptimized
            />
          </div>
        )
      }
      return null
    case "h3":
      return <h3 key={index}>{item.text}</h3>
    default:
      return null
  }
}

export default function CaseStudyClientPage({ params }: Props) {
  const slug = params.slug
  console.log("CaseStudyClientPage: Looking for slug:", slug)

  const caseStudy = getCaseStudyData(slug)
  console.log("CaseStudyClientPage: Found case study:", caseStudy ? caseStudy.pageTitle : "NOT FOUND")

  if (!caseStudy) {
    console.log("CaseStudyClientPage: Case study not found, calling notFound()")
    notFound()
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

  return (
    <>
      <div className="mb-8 print:hidden">
        <BackToHomeLink />
      </div>

      {/* Page Title - Wrapped in article with prose classes for consistent H1 styling */}
      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
        <h1 className="leading-normal">{caseStudy.pageTitle}</h1>
      </article>

      {/* Added mt-8 here to increase space below H1 */}
      <div className="relative mt-8">
        {/* Sticky Main Project Image */}
        {caseStudy.mainImage && (
          <div className="sticky top-16 z-0">
            {" "}
            {/* top-16 assumes header height of 4rem (64px) */}
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

        {/* Content that scrolls over the sticky image */}
        <div className="relative z-10 bg-background">
          {caseStudy.projectOverviewBanner && <ProjectOverviewBanner bannerData={caseStudy.projectOverviewBanner} />}

          <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
            {caseStudy.anchorLink && !caseStudy.projectOverviewBanner && (
              <div className="mt-4 mb-8 not-prose">
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

            {caseStudy.sections.map((section, sectionIndex) => (
              <section key={sectionIndex} id={section.id || `section-${sectionIndex}`}>
                <h2>{section.title}</h2>
                {section.content.map(renderContentItem)}
              </section>
            ))}
          </article>
        </div>
      </div>

      <div className="mt-12 print:hidden">
        <BackToHomeLink />
      </div>
    </>
  )
}
