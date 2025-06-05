import type React from "react"

export interface ReadMeSectionItem {
  id: string
  title: string
  icon: React.ElementType // Lucide icon component
  content: {
    type: "list" | "paragraph" | "custom"
    items?: string[] // For list type
    text?: string // For paragraph type
    component?: React.ReactNode // For custom React node content
    subheadings?: {
      // Optional subheadings within a section
      title: string
      items: string[]
    }[]
  }
}
