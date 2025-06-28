import { aiScribeKpiDashboardData } from "./case-studies/ai-scribe-kpi-dashboard-data"
import { patientCheckInData } from "./case-studies/patient-check-in-data"
import { providerOnlineSchedulingData } from "./case-studies/provider-online-scheduling-data"

export const caseStudiesData = {
  "ai-scribe-kpi-dashboard": aiScribeKpiDashboardData,
  "patient-check-in": patientCheckInData,
  "provider-online-scheduling": providerOnlineSchedulingData,
}

export type CaseStudySlug = keyof typeof caseStudiesData
