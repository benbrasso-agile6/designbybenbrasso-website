import type React from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Ben Brasso",
  description: "Get in touch with Ben Brasso for UX design and product strategy inquiries.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh bg-white dark:bg-neutral-950">
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20 flex flex-col items-center">
        <div className="max-w-[1000px] mx-auto px-8">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
