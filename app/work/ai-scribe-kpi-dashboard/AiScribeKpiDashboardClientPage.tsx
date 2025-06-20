"use client"

import type React from "react"
import Image from "next/image"
import { aiScribeKpiDashboardData } from "@/app/data/case-studies/ai-scribe-kpi-dashboard-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import BackToHomeLink from "@/app/components/back-to-home-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import NextProjectLink from "@/app/components/next-project-link"
import { useEffect } from "react"

const renderContentItem = (item: CaseStudyContentItem, index: number) => {
  switch (item.type) {
    case "heading":
      return (
        <h2 key={index} className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {item.content}
        </h2>
      )
    case "paragraph":
      return (
        <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
          {item.content}
        </p>
      )
    case "image":
      return (
        <Image
          key={index}
          src={item.src || "/placeholder.svg"}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="rounded-lg object-cover"
        />
      )
    case "list":
      return (
        <ul key={index} className="my-6 ml-6 list-disc [&:not(:first-child)]:mt-6">
          {item.items.map((listItem, i) => (
            <li key={i}>{listItem}</li>
          ))}
        </ul>
      )
    case "video":
      return (
        <div key={index} className="relative aspect-video">
          <video src={item.src} controls className="absolute inset-0 rounded-lg object-cover" />
        </div>
      )
    default:
      return null
  }
}

const AiScribeKpiDashboardClientPage: React.FC = () => {
  useEffect(() => {
    document.title = aiScribeKpiDashboardData.title
  }, [])

  return (
    <>
      <ProjectOverviewBanner {...aiScribeKpiDashboardData} />

      <div className="container max-w-5xl py-12">
        <div className="mb-8 flex justify-between items-start print:hidden">
          <BackToHomeLink />
          <NextProjectLink href="/work/patient-check-in" text="Visit next project" className="text-sm sm:text-base" />
        </div>

        {aiScribeKpiDashboardData.content.map((item, index) => renderContentItem(item, index))}

        <div className="mt-12 flex justify-between items-center print:hidden">
          <BackToHomeLink />
          <NextProjectLink href="/work/patient-check-in" text="Visit next project" className="text-sm sm:text-base" />
        </div>
      </div>
    </>
  )
}

export default AiScribeKpiDashboardClientPage
