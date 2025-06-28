import type { CaseStudyData } from "./case-study-types"
import { aiScribeKpiDashboardData } from "./case-studies/ai-scribe-kpi-dashboard-data"
import { patientCheckInData } from "./case-studies/patient-check-in-data"
import { providerOnlineSchedulingData } from "./case-studies/provider-online-scheduling-data"

// Ensure all imported data files are used here
const allCaseStudies: CaseStudyData[] = [
  aiScribeKpiDashboardData,
  patientCheckInData,
  providerOnlineSchedulingData,
  // Add other imported case study data here
]

export function getCaseStudyData(slug: string): CaseStudyData | undefined {
  return allCaseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): { slug: string }[] {
  return allCaseStudies.map((study) => ({ slug: study.slug }))
}
