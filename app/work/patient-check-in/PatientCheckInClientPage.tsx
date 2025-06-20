"use client"

import type React from "react"
import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"
import { patientCheckInData } from "@/app/data/case-studies/patient-check-in-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import BackToHomeLink from "@/app/components/back-to-home-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import { useEffect } from "react"
import NextProjectLink from "@/app/components/next-project-link"

const caseStudy = patientCheckInData

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

export default function PatientCheckInClientPage() {
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

  // Ensure page starts at top - robust solution for mobile Safari
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Immediate attempt
    scrollToTop()

    // Delayed attempt using requestAnimationFrame
    requestAnimationFrame(() => {
      scrollToTop()
    })

    // Additional delayed attempt for Safari
    const timer = setTimeout(() => {
      scrollToTop()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const githubLinkData = {
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin",
    text: "Visit VA's Mobile Check-in repo on GitHub",
  }

  return (
    <>
      <div className="hidden md:flex justify-between items-center mb-8 print:hidden">
        <BackToHomeLink />
        <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
      </div>

      <h1 className="leading-tight text-4xl sm:text-5xl font-bold mb-7 text-neutral-900 dark:text-neutral-100">
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
            <ProjectOverviewBanner
              bannerData={caseStudy.projectOverviewBanner}
              githubLink={githubLinkData} // Pass the GitHub link data here
            />
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

            {caseStudy.sections.map((section, sectionIndex) => (
              <section key={sectionIndex} id={section.id || `section-${sectionIndex}`} className="mb-12">
                <h2 className="text-3xl font-semibold mt-10 mb-4">{section.title}</h2>
                {section.content.map(renderContentItem)}
              </section>
            ))}
          </article>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 print:hidden">
        <BackToHomeLink />
        <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
      </div>
    </>
  )
}
