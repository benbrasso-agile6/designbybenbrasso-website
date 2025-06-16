import type { CaseStudyData } from "./case-study-types"
import { aiScribeKpiDashboardData } from "./case-studies/ai-scribe-kpi-dashboard-data"
import { directOnlineSchedulingData } from "./case-studies/direct-online-scheduling-data"
import { patientCheckInData } from "./case-studies/patient-check-in-data"

// Ensure all imported data files are used here
const allCaseStudies: CaseStudyData[] = [aiScribeKpiDashboardData, directOnlineSchedulingData, patientCheckInData]

export function getCaseStudyData(slug: string): CaseStudyData | undefined {
  console.log("Looking for case study with slug:", slug)
  console.log(
    "Available case studies:",
    allCaseStudies.map((study) => study.slug),
  )
  return allCaseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): { slug: string }[] {
  const slugs = allCaseStudies.map((study) => ({ slug: study.slug }))
  console.log("Generated static params:", slugs)
  return slugs
}
