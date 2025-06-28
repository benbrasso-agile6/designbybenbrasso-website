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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
