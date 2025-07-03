"use client"

import { useEffect } from "react"
import { aiScribeKpiDashboardData } from "@/app/data/case-studies/ai-scribe-kpi-dashboard-data"
import ProjectDetailsTable from "@/app/components/project-details-table"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import NextProjectLink from "@/app/components/next-project-link"
import Lightbox from "@/app/components/lightbox"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"

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
      if (item.src && item.alt)
        return (
          <div key={index} className={`my-6 ${item.className || ""}`}>
            <Lightbox src={item.src} alt={item.alt} width={800} height={450} caption={item.alt} />
          </div>
        )
      return null
    case "h3":
      return <h3 key={index}>{item.text}</h3>
    default:
      return null
  }
}

export default function AiScribeKpiDashboardClientPage() {
  const caseStudy = aiScribeKpiDashboardData
  const previousProjectUrl = "/case-studies/provider-online-scheduling"
  const nextProjectUrl = "/case-studies/patient-check-in"

  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.focus()
    }
  }, [])

  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="space-y-4">
        <div className="flex justify-between items-center">
          <NextProjectLink href={previousProjectUrl} text="Visit previous project" isPrevious={true} />
          <NextProjectLink href={nextProjectUrl} text="Visit next project" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">{caseStudy.title}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">{caseStudy.summary}</p>
      </header>

      <ProjectDetailsTable details={caseStudy.details} />

      <ProjectOverviewBanner
        problem={caseStudy.problem}
        solution={caseStudy.solution}
        role={caseStudy.role}
        className="my-12 sm:my-16"
      />

      {caseStudy.sections.map((section, index) => (
        <section key={index} className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{section.title}</h2>
          {section.content.map(renderContentItem)}
        </section>
      ))}
    </div>
  )
}
