"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowDownIcon } from "lucide-react"
import ProjectDetailsTable from "../components/project-details-table"
import { getCaseStudyData } from "@/app/data/case-studies-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import type React from "react" // Add React for MouseEvent type

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
            <li key={liIndex}>{li}</li>
          ))}
        </ul>
      )
    case "image":
      if (item.src && item.alt) {
        return (
          <div key={index} className={`my-6 ${item.className || ""}`}>
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={800} // Default width, can be overridden by item.width if added to type
              height={450} // Default height, can be overridden by item.height if added to type
              className="rounded-lg w-full object-cover"
              priority={item.priority}
            />
          </div>
        )
      }
      return null
    case "h3": // Added case for h3
      return <h3 key={index}>{item.text}</h3>
    default:
      return null
  }
}

export default function CaseStudyClientPage({ params }: Props) {
  const slug = params.slug
  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    notFound()
  }

  const handleAnchorScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId.substring(1)) // Remove '#' from targetId
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      <Button
        asChild
        variant="outline"
        className="mb-8 print:hidden border-sky-600 text-sky-600 hover:bg-sky-100 hover:text-sky-700 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400"
      >
        <Link href="/#work">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to All Projects
        </Link>
      </Button>

      <ProjectDetailsTable details={caseStudy.projectDetails} />

      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
        <h1>{caseStudy.pageTitle}</h1>

        {caseStudy.mainImage && (
          <Image
            src={caseStudy.mainImage.src || "/placeholder.svg"}
            alt={caseStudy.mainImage.alt}
            width={caseStudy.mainImage.width}
            height={caseStudy.mainImage.height}
            className={caseStudy.mainImage.className || "rounded-lg my-6 w-full object-cover"}
            priority={caseStudy.mainImage.priority}
          />
        )}

        <p className="lead">{caseStudy.leadParagraph}</p>

        {/* Updated anchor link rendering */}
        {caseStudy.anchorLink && (
          <div className="mt-4 mb-8 not-prose">
            {" "}
            {/* Added not-prose to allow custom flex styling */}
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
            {" "}
            {/* Ensure section.id is correctly passed if it exists */}
            <h2>{section.title}</h2>
            {section.content.map(renderContentItem)}
          </section>
        ))}

        <div className="mt-12 print:hidden">
          <Button asChild className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white">
            <Link href="/#work">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              See Other Projects
            </Link>
          </Button>
        </div>
      </article>
    </>
  )
}
