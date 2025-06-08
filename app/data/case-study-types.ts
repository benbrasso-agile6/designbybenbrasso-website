export interface ProjectDetailItem {
  label: string
  value: string | string[] // string for single value, string[] for list
}

export interface CaseStudyContentItem {
  type: "paragraph" | "list" | "image" | "h3" | "videoDemo" // Added "videoDemo"
  text?: string // For paragraph and h3
  items?: string[] // For list
  src?: string // For image
  alt?: string // For image
  priority?: boolean // For image
  className?: string // Optional className for images or other elements
  // Props for videoDemo
  videoUrl?: string
  wrapperImageUrl?: string
  altText?: string // Alt text for the wrapper image
}

export interface CaseStudySection {
  id?: string // Optional ID for anchor linking
  title: string
  content: CaseStudyContentItem[]
}

export interface CaseStudyData {
  slug: string
  pageTitle: string // For H1 and potentially <title>
  metaTitle: string // Specifically for <title> tag
  metaDescription: string
  leadParagraph: string
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
  }
  sections: CaseStudySection[]
}
