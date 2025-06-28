"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import Lightbox from "@/app/components/lightbox"
import { patientCheckInData } from "@/app/data/case-studies/patient-check-in-data"

export default function PatientCheckInClientPage() {
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
            <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/provider-online-scheduling" text="Visit next project" />
          </div>

          {/* Project Overview Banner */}
          <ProjectOverviewBanner
            title={patientCheckInData.title}
            description={patientCheckInData.description}
            heroImage={patientCheckInData.heroImage}
            details={patientCheckInData.details}
          />

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Challenge</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Traditional patient check-in processes were time-consuming and created bottlenecks in healthcare
                facilities. Patients often waited in long lines, filled out redundant paperwork, and experienced delays
                that affected their overall care experience. Healthcare providers needed a streamlined digital solution
                that could reduce wait times while maintaining accuracy and compliance.
              </p>
            </div>
          </section>

          {/* Action Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Action</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I designed and developed a comprehensive digital patient check-in system that transforms the traditional
                arrival experience. The solution prioritizes user experience while ensuring HIPAA compliance and
                seamless integration with existing healthcare management systems.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Created an intuitive mobile-first interface for patient self-service</li>
                <li>Implemented secure patient data handling and verification processes</li>
                <li>Designed real-time queue management and notification systems</li>
                <li>Developed integration APIs for existing practice management software</li>
                <li>Built administrative dashboards for staff workflow optimization</li>
              </ul>
            </div>
          </section>

          {/* Key Outcomes Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Outcomes</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                The digital patient check-in system significantly improved operational efficiency and patient
                satisfaction across multiple healthcare facilities, creating a more streamlined and modern healthcare
                experience.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reduced Wait Times</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Average patient check-in time decreased by 60%, with most patients completing the process in under 3
                    minutes through the digital interface.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Improved Patient Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Patient satisfaction scores increased significantly, with users praising the convenience and
                    efficiency of the digital check-in process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Images</h2>
            <div className="grid gap-8">
              {patientCheckInData.images.map((image, index) => (
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
