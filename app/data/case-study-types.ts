import type { ProjectDetailLabelKey } from "./project-detail-labels"

export interface ProjectDetailItem {
  label: ProjectDetailLabelKey
  value: string | string[]
  valueAriaLabel?: string | string[] // Added for ARIA labels
}

export interface CaseStudyContentItem {
  type: "paragraph" | "list" | "image" | "h3" | "videoDemo"
  text?: string
  items?: string[]
  src?: string
  alt?: string
  width?: number // Added for image
  height?: number // Added for image
  priority?: boolean
  className?: string
  videoUrl?: string
  wrapperImageUrl?: string
  altText?: string
}

export interface CaseStudySection {
  id?: string
  title: string
  content: CaseStudyContentItem[]
}

export interface CaseStudyData {
  slug: string
  pageTitle: string
  metaTitle: string
  metaDescription: string
  leadParagraph: string
  anchorLink?: {
    text: string
    href: string
  }
  projectDetails: ProjectDetailItem[]
  mainImage?: {
    src: string
    alt: string
    width: number
    height: number
    priority?: boolean
    className?: string
  }
  sections: CaseStudySection[]
}
