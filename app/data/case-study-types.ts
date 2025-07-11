export interface CaseStudyImage {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  showBorder?: boolean
}

export interface CaseStudyContentItem {
  type: "paragraph" | "list" | "image" | "h3"
  text?: string
  items?: string[]
  src?: string
  alt?: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export interface CaseStudySection {
  id?: string
  title: string
  content: CaseStudyContentItem[]
}

export interface ProjectOverviewBannerData {
  role: string
  timeline: string
  team: string
  tools: string[]
}

export interface AnchorLink {
  href: string
  text: string
}

export interface CaseStudyData {
  id: string
  slug: string
  title: string
  pageTitle: string
  metaTitle: string
  metaDescription: string
  mainImage?: CaseStudyImage
  projectOverviewBanner?: ProjectOverviewBannerData
  anchorLink?: AnchorLink
  sections: CaseStudySection[]
}
