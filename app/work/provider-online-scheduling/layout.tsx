import type React from "react"
import type { Metadata } from "next"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export const metadata: Metadata = {
  title: providerOnlineSchedulingData.metaTitle,
  description: providerOnlineSchedulingData.metaDescription,
}

export default function ProviderOnlineSchedulingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
