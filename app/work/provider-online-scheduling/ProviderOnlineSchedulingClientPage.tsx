"use client"

import { useState } from "react"
import Image from "next/image"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import ProjectDetailsTable from "@/app/components/project-details-table"
import Lightbox from "@/app/components/lightbox"

export default function ProviderOnlineSchedulingClientPage() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string
    alt: string
    width: number
    height: number
  } | null>(null)

  const caseStudy = providerOnlineSchedulingData

  const openLightbox = (image: { src: string; alt: string; width: number; height: number }) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="space-y-16">
      {/* Navigation Links */}
      <div className="flex justify-between items-center">
        <NextProjectLink href="/work/patient-check-in" text="Visit previous project" isPrevious={true} />
        <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
      </div>

      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 page-title-spacing">
          {caseStudy.title}
        </h1>
      </div>

      {/* Hero Image */}
      {caseStudy.mainImage && (
        <div className="w-full">
          <Image
            src={caseStudy.mainImage.src || "/placeholder.svg"}
            alt={caseStudy.mainImage.alt}
            width={caseStudy.mainImage.width}
            height={caseStudy.mainImage.height}
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={() => openLightbox(caseStudy.mainImage!)}
          />
        </div>
      )}

      {/* Project Overview Banner */}
      <ProjectOverviewBanner
        challenge={caseStudy.challenge}
        action={caseStudy.action}
        keyOutcomes={caseStudy.keyOutcomes}
      />

      {/* Project Details Table */}
      <ProjectDetailsTable
        duration={caseStudy.duration}
        role={caseStudy.role}
        team={caseStudy.team}
        tools={caseStudy.tools}
        deliverables={caseStudy.deliverables}
      />

      {/* Additional Images */}
      {caseStudy.additionalImages && caseStudy.additionalImages.length > 0 && (
        <div className="space-y-8">
          {caseStudy.additionalImages.map((item, index) => (
            <div key={index} className="w-full">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(item)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Navigation Links */}
      <div className="flex justify-between items-center pt-8">
        <NextProjectLink href="/work/patient-check-in" text="Visit previous project" isPrevious={true} />
        <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          width={lightboxImage.width}
          height={lightboxImage.height}
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}
