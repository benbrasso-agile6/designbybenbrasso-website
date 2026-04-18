"use client"

import { nofoDesignPrepCheckerData } from "@/app/data/case-studies/nofo-design-prep-checker-data"
import ProjectOverviewBanner from "@/app/components/case-studies/ProjectOverviewBanner"
import CaseStudySection from "@/app/components/case-studies/CaseStudySection"
import type React from "react"

const caseStudy = nofoDesignPrepCheckerData

const githubLinkData = {
  url: "https://github.com/agilesix/nofo-design-prep-checker",
  text: "Visit the NOFO Design Prep Checker repo on GitHub",
}

export default function NofoDesignPrepCheckerClientPage() {
  return (
    <div className="space-y-16">
      <ProjectOverviewBanner bannerData={caseStudy.projectOverviewBanner} githubLink={githubLinkData} />

      {caseStudy.sections.map((section, index) => (
        <CaseStudySection key={index} section={section} />
      ))}
    </div>
  )
}
