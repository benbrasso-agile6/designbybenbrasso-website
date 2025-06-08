"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"
import ProjectDetailsTable from "@/app/components/project-details-table"
import { getCaseStudyData } from "@/app/data/case-studies-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import type React from "react"
import { useMediaQuery } from "../read-me/hooks/use-media-query"

type Props = {
  params: { slug: string }
}

const renderContentItem = (item: CaseStudyContentItem, index: number, isSmallScreen: boolean) => {
  switch (item.type) {
    case "paragraph":
      // Apply specific className for emphasized paragraphs
      if (item.className?.includes("bg-sky-50")) {
        // Check for a unique part of the emphasis class
        return (
          <div key={index} className={item.className}>
            <p dangerouslySetInnerHTML={{ __html: item.text || "" }} />
          </div>
        )
      }
      return <p key={index} dangerouslySetInnerHTML={{ __html: item.text || "" }} />
    case "list":
      return (
        <ul key={index}>
          {item.items?.map((li, liIndex) => (
            <li key={liIndex}>{li}</li>
          ))}
        </ul>
      )
    case "image":
      if (item.src && item.alt) {
        return (
          <div key={index} className="my-6 flex justify-center">
            {" "}
            {/* Outer div for centering */}
            <div className={item.className || ""}>
              {" "}
              {/* Inner div that gets max-width from item.className */}
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={item.width || 800}
                height={item.height || 450}
                className="rounded-lg object-cover w-full h-auto" // Image fills its parent
                priority={item.priority}
                unoptimized
              />
            </div>
          </div>
        )
      }
      return null
    case "h3":
      return <h3 key={index}>{item.text}</h3>
    case "videoDemo":
      if (item.videoUrl && item.wrapperImageUrl && item.altText) {
        const largeScreenStyle = {
          top: "9.1%",
          left: "6%",
          width: "88%",
          height: "77%",
          borderRadius: "18px",
        }
        const smallScreenStyle = {
          top: "9.1%",
          left: "6%",
          width: "88%",
          height: "74%",
          borderRadius: "16px",
        }
        const currentStyle = isSmallScreen ? smallScreenStyle : largeScreenStyle

        return (
          <div key={index} className="my-8 md:my-12 flex justify-center">
            <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl group">
              <Image
                src={item.wrapperImageUrl || "/placeholder.svg?query=tablet+frame"}
                alt={item.altText}
                width={1200}
                height={790}
                className="w-full h-auto"
                priority
                unoptimized
              />
              <div className="absolute overflow-hidden" style={currentStyle}>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={item.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )
      }
      return null
    default:
      return null
  }
}

export default function CaseStudyClientPage({ params }: Props) {
  const slug = params.slug
  const caseStudy = getCaseStudyData(slug)
  const isSmallScreen = useMediaQuery("(max-width: 1023px)")

  if (!caseStudy) {
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
      <article
        className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert 
                   prose-a:text-sky-600 dark:prose-a:text-sky-500 
                   hover:prose-a:text-sky-700 dark:hover:prose-a:text-sky-600"
      >
        <h1>{caseStudy.pageTitle}</h1>

        {caseStudy.mainImage && (
          <Image
            src={caseStudy.mainImage.src || "/placeholder.svg"}
            alt={caseStudy.mainImage.alt}
            width={caseStudy.mainImage.width}
            height={caseStudy.mainImage.height}
            className={caseStudy.mainImage.className || "rounded-lg my-6 w-full object-cover"}
            priority={caseStudy.mainImage.priority}
            unoptimized
          />
        )}

        <p className="lead">{caseStudy.leadParagraph}</p>

        {slug === "patient-check-in" && (
          <div className="my-6">
            <p>
              Check out the{" "}
              <a
                href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Patient Check-in project in the va.gov-team repo on GitHub
              </a>
              .
            </p>
          </div>
        )}

        <ProjectDetailsTable details={caseStudy.projectDetails} />

        {caseStudy.anchorLink && (
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
          <section key={sectionIndex} id={section.id}>
            <h2>{section.title}</h2>
            {section.content.map((contentItem, itemIndex) => renderContentItem(contentItem, itemIndex, isSmallScreen))}
          </section>
        ))}

        {/*
        <div className="mt-12 print:hidden">
          <Button asChild className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white">
            <Link href="/#work">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              See Other Projects
            </Link>
          </Button>
        </div>
        */}
      </article>
    </>
  )
}
