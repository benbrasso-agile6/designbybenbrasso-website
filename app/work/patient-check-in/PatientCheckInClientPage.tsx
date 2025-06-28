"use client"

import { useEffect } from "react"

import { useState } from "react"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import Lightbox from "@/app/components/lightbox"
import { patientCheckInData } from "@/app/data/case-studies/patient-check-in-data"

type PatientCheckInClientPageProps = {
  // Add any props if needed
}

export default function PatientCheckInClientPage({}: PatientCheckInClientPageProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />

      <main className="flex-1">
        {/* Project Overview Banner */}
        <ProjectOverviewBanner
          title={patientCheckInData.title}
          description={patientCheckInData.description}
          imageSrc={patientCheckInData.heroImage}
          imageAlt={patientCheckInData.imageAlt}
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          {/* Navigation Links */}
          <div className="flex justify-between items-center">
            <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/provider-online-scheduling" text="Visit next project" />
          </div>

          {/* Project Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Role</h3>
                <p className="text-gray-600 dark:text-gray-400">{patientCheckInData.role}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">{patientCheckInData.timeline}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Tools</h3>
                <p className="text-gray-600 dark:text-gray-400">{patientCheckInData.tools}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Team</h3>
                <p className="text-gray-600 dark:text-gray-400">{patientCheckInData.team}</p>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Challenge</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{patientCheckInData.challenge}</p>
            </div>
          </section>

          {/* Action */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Action</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{patientCheckInData.action}</p>
            </div>
          </section>

          {/* Key Outcomes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Key Outcomes</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{patientCheckInData.keyOutcomes}</p>
            </div>
          </section>

          {/* Project Images */}
          {patientCheckInData.projectImages && patientCheckInData.projectImages.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {patientCheckInData.projectImages.map((image, index) => (
                  <div key={index} className="group cursor-pointer" onClick={() => openLightbox(image.src)}>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{image.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
            <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/provider-online-scheduling" text="Visit next project" />
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxImage && <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />}
    </div>
  )
}
