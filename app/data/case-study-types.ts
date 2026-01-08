export interface ProjectDetailItem {
  label: string
  value: string | string[] // string for single value, string[] for list
}

export interface CaseStudyContentItem {
  type: "paragraph" | "list" | "numeric-list" | "image" | "h3" | "label" // Added "numeric-list" and "label"
  text?: string // For paragraph, h3, and label
  items?: string[] // For list and numeric-list
  src?: string // For image
  alt?: string // For image
  priority?: boolean // For image
  className?: string // Optional className for images or other elements
}

export interface CaseStudySection {
  id?: string // Optional ID for anchor linking
  title: string
  content: CaseStudyContentItem[]
}

export interface ProjectOverviewBannerData {
  description: string
  skills: string
  tools: string
  date: string
  disclaimer?: string // Added optional disclaimer field for case-study-specific disclaimers
}

export interface CaseStudyData {
  slug: string
  pageTitle: string // For H1 and potentially <title>
  metaTitle: string // Specifically for <title> tag
  metaDescription: string
  leadParagraph?: string // Made optional as it might be replaced by banner
  projectOverviewBanner?: ProjectOverviewBannerData // New banner data
  anchorLink?: {
    // Optional anchor link definition
    text: string
    href: string
  }
  projectDetails: ProjectDetailItem[]
  mainImage?: {
    // Optional: if different from project card or needs specific alt/priority for case study
    src: string
    alt: string
    width: number
    height: number
    priority?: boolean
    className?: string
    showBorder?: boolean
  }
  sections: CaseStudySection[]
}
