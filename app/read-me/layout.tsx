import type React from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ben Brasso’s Read Me | Ben Brasso",
  description: "Learn more about Ben Brasso, his design philosophy, process, and how he likes to work.", // Ensured no outer curly quotes
}

export default function ReadMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-8">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
