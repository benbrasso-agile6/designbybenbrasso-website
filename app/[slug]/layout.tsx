import type React from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh bg-white dark:bg-neutral-950">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
