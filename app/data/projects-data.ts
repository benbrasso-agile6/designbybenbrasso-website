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
    title: "Mobile patient check-in",
    slug: "patient-check-in",
    description:
      "Re-imagined the mobile patient check-in experience for VA, <strong>increasing usage 4x in 1 month, while seamlessly adding travel reimbursement.</strong>",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1748809982/Frame_7_djaiys.png",
    tags: ["Mobile App", "Healthcare", "Accessibility", "UI Design", "Patient Experience"],
  },
  {
    title: "AI scribe pilot KPI dashboard",
    slug: "ai-scribe-kpi-dashboard",
    description:
      "Prototyped an Ambient Scribe Pilot KPI Dashboard using AI to <strong> inform VA Digital Health Office's AI investments.</strong>",
    imageUrl:
      "https://res.cloudinary.com/dpl6apspp/image/upload/v1748741837/ChatGPT_Image_May_31_2025_09_30_33_PM_rujlow.png",
    tags: ["SaaS", "Dashboard", "Data Visualization", "AI", "Healthcare Analytics"],
  },
  {
    title: "Provider online scheduling",
    slug: "direct-online-scheduling",
    description:
      "Designed the scheduling experience for community care referrals on VA.gov and <strong>streamlined the process from weeks to minutes to book an appointment.</strong>",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1748817338/Frame_532_b2uwxy.png",
    tags: ["UX Design", "Healthcare", "User Research", "Prototyping", "Scheduling"],
    // Retain specific margins if needed, or they'll use defaults from ProjectCard/FeaturedWorkSection
  },
]
