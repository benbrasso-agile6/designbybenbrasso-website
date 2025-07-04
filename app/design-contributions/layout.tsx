import type React from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design Contributions - Ben Brasso",
  description:
    "Discover Ben Brasso's contributions to design systems, featuring components and patterns developed for VA.gov. Learn about his commitment to scalable and accessible user experiences.",
}

export default function DesignContributionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh bg-white dark:bg-neutral-950">
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-8">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
