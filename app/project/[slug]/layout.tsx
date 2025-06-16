// app/project/[slug]/layout.tsx

import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

import type React from "react"

interface Props {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-8">{children}</div>
      </main>
      <Footer />
    </>
  )
}
