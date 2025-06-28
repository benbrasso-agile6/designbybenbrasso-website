export interface Project {
  id: string
  title: string
  description: string
  image: string
  slug: string
  tags: string[]
  hasCaseStudy: boolean
  caseStudyUrlOverride?: string
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "AI Scribe KPI dashboard",
    description: "Designing data visualization and KPI tracking for AI-powered medical transcription services.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Scribe+Dashboard",
    slug: "ai-scribe-kpi-dashboard",
    tags: ["Dashboard", "Data Visualization", "Healthcare"],
    hasCaseStudy: true,
    caseStudyUrlOverride: "/work/ai-scribe-kpi-dashboard",
  },
  {
    id: "2",
    title: "Patient check-in",
    description: "Streamlining the patient check-in process through digital solutions and improved user experience.",
    image: "/placeholder.svg?height=300&width=400&text=Patient+Check-in",
    slug: "patient-check-in",
    tags: ["Mobile", "Healthcare", "User Experience"],
    hasCaseStudy: true,
    caseStudyUrlOverride: "/work/patient-check-in",
  },
  {
    id: "3",
    title: "Provider online scheduling",
    description:
      "Enabling Veterans to self-schedule appointments with community care providers through an intuitive online platform.",
    image: "/placeholder.svg?height=300&width=400&text=Provider+Scheduling",
    slug: "direct-online-scheduling",
    tags: ["Scheduling", "Healthcare", "Web Application"],
    hasCaseStudy: true,
    caseStudyUrlOverride: "/work/provider-online-scheduling",
  },
  {
    id: "4",
    title: "Design system",
    description: "Building a comprehensive design system to ensure consistency across all digital products.",
    image: "/placeholder.svg?height=300&width=400&text=Design+System",
    slug: "design-system",
    tags: ["Design System", "Components", "Documentation"],
    hasCaseStudy: false,
  },
  {
    id: "5",
    title: "Mobile app redesign",
    description: "Complete redesign of the mobile application to improve user engagement and accessibility.",
    image: "/placeholder.svg?height=300&width=400&text=Mobile+Redesign",
    slug: "mobile-app-redesign",
    tags: ["Mobile", "Redesign", "Accessibility"],
    hasCaseStudy: false,
  },
  {
    id: "6",
    title: "E-commerce platform",
    description: "Designing a modern e-commerce platform with focus on conversion optimization and user experience.",
    image: "/placeholder.svg?height=300&width=400&text=E-commerce",
    slug: "ecommerce-platform",
    tags: ["E-commerce", "Conversion", "Web Design"],
    hasCaseStudy: false,
  },
]
