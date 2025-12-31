export interface ProjectStat {
  label: string
  value: string
}

export interface Project {
  title: string
  description: string
  slug: string
  tags: string[]
  imageUrl: string
  hasCaseStudy: boolean
  caseStudyStatusText?: string
  caseStudyUrlOverride?: string
  stats?: ProjectStat[]
}

export const projectsData: Project[] = [
  {
    title: "Ambient scribe KPI dashboard",
    description:
      "Prototyped an Ambient Scribe Pilot KPI Dashboard <strong>using AI to inform VA Digital Health Office's AI investments.</strong>",
    slug: "ai-scribe-kpi-dashboard",
    tags: ["AI", "Healthcare", "Product Design"],
    imageUrl:
      "https://res.cloudinary.com/dpl6apspp/image/upload/v1748741837/ChatGPT_Image_May_31_2025_09_30_33_PM_rujlow.png",
    hasCaseStudy: true,
    stats: [
      {
        label: "AI-workflow efficiencies identified",
        value: "9 in the care encounter",
      },
      {
        label: "Projected appointments with ambient scribe",
        value: "50 million annually",
      },
    ],
  },
  {
    title: "Mobile patient check-in",
    description:
      "Re-imagined patient check-in on VA.gov, <strong>increasing usage 4x in one month, while adding travel reimbursement.</strong>",
    slug: "patient-check-in",
    tags: ["Healthcare", "Product Design", "Accessibility"],
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749261703/Frame_535_mcx97r.png",
    hasCaseStudy: true,
    stats: [
      {
        label: "Staff time saved",
        value: "64k minutes per month",
      },
      {
        label: "Veterans benefited",
        value: "110k per month",
      },
    ],
  },
  {
    title: "Provider online scheduling",
    description:
      "Designed the scheduling experience for referrals on VA.gov and <strong>streamlined the process from weeks to minutes.</strong>",
    slug: "provider-online-scheduling",
    tags: ["Healthcare", "Product Design", "Service Design"],
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749400918/Frame_532_ofw0ui.png",
    hasCaseStudy: true,
    stats: [
      {
        label: "Projected staff time saved",
        value: "700k hours per month",
      },
      {
        label: "Projected Veterans benefited",
        value: "250k per month",
      },
    ],
  },
  {
    title: "Streamlining NOFO authoring and workflows",
    description:
      "Designed and validated a new approach to <strong>reduce administrative burden in creating federal funding opportunities at HHS</strong>.",
    slug: "streamlining-nofo-authoring-and-workflows",
    tags: ["Government", "Product Design", "Service Design"],
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1767143023/Frame_684_vv4k8a.png",
    hasCaseStudy: true,
    stats: [
      {
        label: "Users showing adoption readiness",
        value: "87%",
      },
      {
        label: "Users likely to use Composer",
        value: "100%",
      },
    ],
  },
]
