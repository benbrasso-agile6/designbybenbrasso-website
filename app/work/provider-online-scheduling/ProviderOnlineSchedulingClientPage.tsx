"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import Lightbox from "@/app/components/lightbox"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"

export default function ProviderOnlineSchedulingClientPage() {
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
            <NextProjectLink href="/work/patient-check-in" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
          </div>

          {/* Project Overview Banner */}
          <ProjectOverviewBanner
            title={providerOnlineSchedulingData.title}
            description={providerOnlineSchedulingData.description}
            heroImage={providerOnlineSchedulingData.heroImage}
            details={providerOnlineSchedulingData.details}
          />

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Challenge</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Healthcare providers were struggling with inefficient appointment scheduling processes that relied
                heavily on phone calls and manual coordination. This led to scheduling conflicts, missed appointments,
                and frustrated patients who couldn't easily book appointments outside of business hours. The existing
                system lacked real-time availability updates and integration with provider calendars.
              </p>
            </div>
          </section>

          {/* Action Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Action</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I designed and developed a comprehensive online scheduling platform that enables patients to book
                appointments directly with healthcare providers. The solution focuses on creating a seamless user
                experience while providing powerful administrative tools for healthcare staff.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Built an intuitive patient-facing booking interface with real-time availability</li>
                <li>Developed provider dashboard for schedule management and patient communication</li>
                <li>Implemented automated appointment reminders and confirmation systems</li>
                <li>Created integration APIs for existing practice management systems</li>
                <li>Designed responsive layouts optimized for both desktop and mobile devices</li>
              </ul>
            </div>
          </section>

          {/* Key Outcomes Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Outcomes</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                The online scheduling platform transformed how healthcare providers manage appointments, resulting in
                improved operational efficiency and enhanced patient satisfaction across multiple healthcare practices.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Increased Booking Efficiency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Online appointment bookings increased by 75%, with patients able to schedule appointments 24/7
                    without phone calls or waiting for office hours.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reduced No-Shows</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated reminder systems and easy rescheduling options led to a 40% reduction in missed
                    appointments and improved practice revenue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Images</h2>
            <div className="grid gap-8">
              {providerOnlineSchedulingData.images.map((image, index) => (
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
