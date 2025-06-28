import type React from "react"
import type { Metadata } from "next"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"

export const metadata: Metadata = {
  title: providerOnlineSchedulingData.metaTitle,
  description: providerOnlineSchedulingData.metaDescription,
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">{children}</div>
}
