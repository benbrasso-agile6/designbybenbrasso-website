"use client"

import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import BackToHomeLink from "@/app/components/back-to-home-link"
import ProjectOverviewBanner from "@/app/components/project-overview-banner"
import NextProjectLink from "@/app/components/next-project-link"
import ScrollToTop from "@/app/components/scroll-to-top"

export default function ProviderOnlineSchedulingClientPage() {
  const data = providerOnlineSchedulingData

  return (
    <div className="space-y-16">
      <BackToHomeLink />

      <ProjectOverviewBanner
        title={data.title}
        subtitle={data.subtitle}
        role={data.role}
        timeline={data.timeline}
        team={data.team}
        tools={data.tools}
        heroImage={data.heroImage}
        heroImageAlt={data.heroImageAlt}
      />

      {/* Background Section */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Background</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            {data.backgroundContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Challenge</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            {data.challengeContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Action</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            {data.actionContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes Section */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Key Outcomes</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            {data.keyOutcomesContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <NextProjectLink nextProject={data.nextProject} nextProjectSlug={data.nextProjectSlug} />

      <ScrollToTop />
    </div>
  )
}
