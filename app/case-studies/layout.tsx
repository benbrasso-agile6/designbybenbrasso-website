import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - Ben Brasso",
  description: "Explore featured case studies by Ben Brasso, a UX Product Designer.",
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
