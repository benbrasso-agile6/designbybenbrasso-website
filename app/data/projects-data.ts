export interface Project {
  title: string
  slug: string
  description: string
  imageUrl: string
  tags: string[]
  hasCaseStudy?: boolean
  caseStudyStatusText?: string
  imageMarginTopClass?: string
  footerPaddingTopClass?: string
  caseStudyUrlOverride?: string // This property allows overriding the link
  stats?: { label: string; value: string }[]
}

export const projectsData: Project[] = [
  {
    title: "Ambient scribe KPI dashboard",
    slug: "ai-scribe-kpi-dashboard",
    description:
      "Prototyped an Ambient Scribe Pilot KPI Dashboard <strong>using AI to inform the VA Digital Health Office's AI investments.</strong>",
    imageUrl:
      "https://res.cloudinary.com/dpl6apspp/image/upload/v1748741837/ChatGPT_Image_May_31_2025_09_30_33_PM_rujlow.png",
    tags: ["SaaS", "Dashboard", "Data Visualization", "AI", "Healthcare Analytics"],
    hasCaseStudy: true,
    caseStudyUrlOverride: "/work/ai-scribe-kpi-dashboard",
    stats: [
      { label: "AI-workflow effencies identified", value: "9 in the care encounter" },
      { label: "Projected appointments impacted", value: "50 million annually" },
    ],
  },
  {
    title: "Mobile patient check-in",
    slug: "patient-check-in",
    description:
      "Re-imagined patient check-in on VA.gov, <strong>increasing usage 4x in one month, while adding travel reimbursement.</strong>",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749261703/Frame_535_mcx97r.png",
    tags: ["Mobile App", "Healthcare", "Accessibility", "UI Design", "Patient Experience"],
    hasCaseStudy: true,
    caseStudyUrlOverride: "/work/patient-check-in",
    stats: [
      { label: "Staff time saved", value: "64k minutes per month" },
      { label: "Veterans benefited", value: "110k per month" },
    ],
  },
  {
    title: "Provider online scheduling",
    slug: "direct-online-scheduling",
    description:
      "Designed the scheduling experience for referrals on VA.gov and <strong>streamlined the process from weeks to minutes.</strong>",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749400918/Frame_532_ofw0ui.png",
    tags: ["UX Design", "Healthcare", "User Research", "Prototyping", "Scheduling"],
    hasCaseStudy: true,
    // This override points the button to the correct static page
    caseStudyUrlOverride: "/work/provider-online-scheduling",
    stats: [
      { label: "Projected staff time saved", value: "700k hours per month" },
      { label: "Projected Veterans benefited", value: "250k per month" },
    ],
  },
];
