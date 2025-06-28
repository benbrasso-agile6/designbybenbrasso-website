"use client"

import { useEffect } from "react"

import { useState } from "react"

import type React from "react"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import NextProjectLink from "@/app/components/next-project-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import Lightbox from "@/app/components/lightbox"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import { useMobile } from "@/hooks/use-mobile"

type ProviderOnlineSchedulingClientPageProps = {
  // Add any props if needed
}

export default function ProviderOnlineSchedulingClientPage({}: ProviderOnlineSchedulingClientPageProps) {
  const isMobile = useMobile()
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

  const renderContentItem = (item: CaseStudyContentItem, index: number) => {
    switch (item.type) {
      case "paragraph":
        return <p key={index} dangerouslySetInnerHTML={{ __html: item.text || "" }} />
      case "list":
        return (
          <ul key={index} className="list-disc pl-5 space-y-1">
            {item.items?.map((li, liIndex) => (
              <li key={liIndex} dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ul>
        )
      case "image":
        if (item.src && item.alt) {
          const isPng = item.src.toLowerCase().endsWith(".png")
          if (isMobile && isPng) {
            return (
              <div key={index} className="my-0 cursor-pointer" onClick={() => openLightbox(item.src!)}>
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={item.width || 800}
                  height={item.height || 450}
                  className={item.className || "rounded-lg w-full object-cover"}
                  priority={item.priority}
                  unoptimized
                />
              </div>
            )
          }
          return (
            <div key={index} className="my-0">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={item.width || 800}
                height={item.height || 450}
                className={item.className || "rounded-lg w-full object-cover"}
                priority={item.priority}
                unoptimized
              />
            </div>
          )
        }
        return null
      case "h3":
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-3">
            {item.text}
          </h3>
        )
      default:
        return null
    }
  }

  const handleAnchorScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId.substring(1))
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />

      <main className="flex-1">
        {/* Project Overview Banner */}
        <ProjectOverviewBanner
          title={providerOnlineSchedulingData.title}
          description={providerOnlineSchedulingData.description}
          imageSrc={providerOnlineSchedulingData.heroImage}
          imageAlt={providerOnlineSchedulingData.imageAlt}
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          {/* Navigation Links */}
          <div className="flex justify-between items-center">
            <NextProjectLink href="/work/patient-check-in" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
          </div>

          {/* Project Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Role</h3>
                <p className="text-gray-600 dark:text-gray-400">{providerOnlineSchedulingData.role}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">{providerOnlineSchedulingData.timeline}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Tools</h3>
                <p className="text-gray-600 dark:text-gray-400">{providerOnlineSchedulingData.tools}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Team</h3>
                <p className="text-gray-600 dark:text-gray-400">{providerOnlineSchedulingData.team}</p>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Challenge</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {providerOnlineSchedulingData.challenge}
              </p>
            </div>
          </section>

          {/* Action */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Action</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{providerOnlineSchedulingData.action}</p>
            </div>
          </section>

          {/* Key Outcomes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Key Outcomes</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {providerOnlineSchedulingData.keyOutcomes}
              </p>
            </div>
          </section>

          {/* Project Images */}
          {providerOnlineSchedulingData.projectImages && providerOnlineSchedulingData.projectImages.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {providerOnlineSchedulingData.projectImages.map((image, index) => (
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

          {/* Sections */}
          {providerOnlineSchedulingData.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} id={section.id || `section-${sectionIndex}`} className="mb-12">
              <h2 className="text-3xl font-semibold mt-10 mb-4">{section.title}</h2>
              {section.content.map(renderContentItem)}
            </section>
          ))}

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
            <NextProjectLink href="/work/patient-check-in" text="Visit previous project" isPrevious={true} />
            <NextProjectLink href="/work/ai-scribe-kpi-dashboard" text="Visit next project" />
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxImage && <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />}
    </div>
  )
}
