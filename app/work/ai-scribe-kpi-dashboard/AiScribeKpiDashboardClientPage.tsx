"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import Lightbox from "@/app/components/lightbox"
import { aiScribeKpiDashboardData } from "@/app/data/case-studies/ai-scribe-kpi-dashboard-data"

export default function AiScribeKpiDashboardClientPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Navigation Links */}
          <div className="flex justify-between items-center mb-8">
            <NextProjectLink href="/work/provider-online-scheduling" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/patient-check-in" text="Visit next project" />
          </div>

          {/* Project Overview Banner */}
          <ProjectOverviewBanner
            title={aiScribeKpiDashboardData.title}
            description={aiScribeKpiDashboardData.description}
            heroImage={aiScribeKpiDashboardData.heroImage}
            details={aiScribeKpiDashboardData.details}
          />

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Challenge</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Healthcare providers needed a comprehensive dashboard to monitor and analyze AI scribe performance
                metrics. The existing system lacked visual clarity and real-time insights, making it difficult for
                administrators to track key performance indicators and make data-driven decisions about their AI scribe
                implementation.
              </p>
            </div>
          </section>

          {/* Action Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Action</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I designed and developed a comprehensive KPI dashboard that transforms complex AI scribe data into
                actionable insights. The solution focused on creating an intuitive interface that allows healthcare
                administrators to quickly assess performance metrics and identify areas for improvement.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Created interactive data visualizations using modern charting libraries</li>
                <li>Implemented real-time data updates and filtering capabilities</li>
                <li>Designed responsive layouts that work across all device sizes</li>
                <li>Developed custom components for metric cards and trend analysis</li>
                <li>Integrated with existing healthcare management systems</li>
              </ul>
            </div>
          </section>

          {/* Key Outcomes Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Outcomes</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                The AI Scribe KPI Dashboard significantly improved how healthcare organizations monitor and optimize
                their AI scribe implementations, leading to better decision-making and improved operational efficiency.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Administrators gained clear visibility into AI scribe accuracy rates, processing times, and usage
                    patterns across different departments and providers.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Operational Efficiency</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time monitoring capabilities enabled proactive identification of issues and optimization
                    opportunities, reducing manual oversight requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Images</h2>
            <div className="grid gap-8">
              {aiScribeKpiDashboardData.images.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div
                    className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(image.src)}
                  >
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxImage && <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />}
    </div>
  )
}
