import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Provider Online Scheduling | Ben Brasso",
  description:
    "Designing the scheduling experience for referrals on VA.gov and streamlined the process from weeks to minutes.",
}

export default function ProviderOnlineSchedulingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
