"use client"
import Image from "next/image"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import NextProjectLink from "@/app/components/next-project-link"

export default function ProviderOnlineSchedulingClientPage() {
  const data = providerOnlineSchedulingData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                {data.title}
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">{data.subtitle}</p>
            </div>
            <div className="relative">
              <Image
                src={data.heroImage || "/placeholder.svg"}
                alt={data.title}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Banner */}
      <ProjectOverviewBanner
        role={data.projectDetails.role}
        timeline={data.projectDetails.timeline}
        team={data.projectDetails.team}
        tools={data.projectDetails.tools}
      />

      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {data.sections.map((section) => (
            <section key={section.id} className="mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">{section.title}</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300">
                {section.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Next Project */}
      {data.nextProject && <NextProjectLink title={data.nextProject.title} url={data.nextProject.url} />}
    </div>
  )
}
