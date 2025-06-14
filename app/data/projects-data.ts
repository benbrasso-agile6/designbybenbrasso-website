export interface Project {
  title: string
  slug: string
  description: string
  imageUrl: string
  tags: string[]
  caseStudyStatusText?: string
  imageMarginTopClass?: string // Retaining this from previous changes
  footerPaddingTopClass?: string // Retaining this from previous changes
}

export const projectsData: Project[] = [
  {
    title: "Ambient scribe pilot KPI dashboard",
    slug: "ai-scribe-kpi-dashboard",
    description:
      "Prototyped an Ambient Scribe Pilot KPI Dashboard <strong>using AI to inform the U.S. Veteran Affairs Digital Health Office’s AI investments.</strong>",
    imageUrl:
      "https://res.cloudinary.com/dpl6apspp/image/upload/v1748741837/ChatGPT_Image_May_31_2025_09_30_33_PM_rujlow.png",
    tags: ["SaaS", "Dashboard", "Data Visualization", "AI", "Healthcare Analytics"],
  },
  {
    title: "Mobile patient check-in",
    slug: "patient-check-in",
    description:
      "Re-imagined patient check-in on VA.gov, <strong>increasing usage 4x in 1 month, while adding travel reimbursement.</strong>",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749261703/Frame_535_mcx97r.png",
    tags: ["Mobile App", "Healthcare", "Accessibility", "UI Design", "Patient Experience"],
  },
  {
    title: "Provider online scheduling",
    slug: "direct-online-scheduling",
    description:
      "Designed the scheduling experience for referrals on VA.gov and <strong>streamlined the process from weeks to minutes.</strong>",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749400918/Frame_532_ofw0ui.png",
    tags: ["UX Design", "Healthcare", "User Research", "Prototyping", "Scheduling"],
    // Retain specific margins if needed, or they'll use defaults from ProjectCard/FeaturedWorkSection
  },
]
