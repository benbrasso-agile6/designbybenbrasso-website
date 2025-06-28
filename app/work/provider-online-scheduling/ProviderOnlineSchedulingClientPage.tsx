"use client"

import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import BackToHomeLink from "../../components/back-to-home-link"
import NextProjectLink from "../../components/next-project-link"
import ProjectDetailsTable from "../../components/project-details-table"
import ProjectOverviewBanner from "../../components/project-overview-banner"
import Lightbox from "../../components/lightbox"
import ScrollToTop from "../../components/scroll-to-top"
import { providerOnlineSchedulingData } from "../../data/case-studies/provider-online-scheduling-data"

export default function ProviderOnlineSchedulingClientPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const projectDetails = {
    role: providerOnlineSchedulingData.projectDetails.role,
    timeline: providerOnlineSchedulingData.projectDetails.timeline,
    team: providerOnlineSchedulingData.projectDetails.team,
    tools: providerOnlineSchedulingData.projectDetails.tools,
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <BackToHomeLink />
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {providerOnlineSchedulingData.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">{providerOnlineSchedulingData.subtitle}</p>
                <ProjectDetailsTable projectDetails={projectDetails} />
              </div>
              <div className="relative">
                <img
                  src={providerOnlineSchedulingData.heroImage || "/placeholder.svg"}
                  alt="Provider Online Scheduling Hero"
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(providerOnlineSchedulingData.heroImage)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Banner */}
        <ProjectOverviewBanner
          title={providerOnlineSchedulingData.title}
          description={providerOnlineSchedulingData.description}
        />

        {/* Content Sections */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {providerOnlineSchedulingData.sections.map((section, index) => (
              <div key={index} className="mb-16">
                {section.type === "text" && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                      {section.content.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-6">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Link */}
        <NextProjectLink
          nextProject={{
            title: "Mobile patient check-in",
            slug: "patient-check-in",
            caseStudyUrlOverride: "/work/patient-check-in",
          }}
        />
      </main>
      <Footer />
      <ScrollToTop />

      {/* Lightbox */}
      {lightboxImage && <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />}
    </div>
  )
}
