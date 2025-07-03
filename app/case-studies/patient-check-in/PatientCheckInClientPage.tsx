"use client"

import { useEffect } from "react"
import { patientCheckInData } from "@/app/data/case-studies/patient-check-in-data"
import ProjectDetailsTable from "@/app/components/project-details-table"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import NextProjectLink from "@/app/components/next-project-link"
import Lightbox from "@/app/components/lightbox"

export default function PatientCheckInClientPage() {
  const caseStudy = patientCheckInData
  const previousProjectUrl = "/case-studies/ai-scribe-kpi-dashboard"
  const nextProjectUrl = "/case-studies/provider-online-scheduling"

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
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}
          {section.images && section.images.length > 0 && (
            <div className="grid grid-cols-1 gap-6 pt-4">
              {section.images.map((item, imgIndex) => (
                <div key={imgIndex} className="bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden">
                  <Lightbox
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    caption={item.caption}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
