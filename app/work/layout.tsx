import type React from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-8">
          {" "}
          {/* Centered 1000px container with 32px L/R internal padding */}
          {/* Children will render in a 936px wide space */}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
