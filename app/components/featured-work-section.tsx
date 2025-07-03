import type React from "react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  slug: string
  title: string
  description: string
  imageUrl: string
  tags: string[]
  hasCaseStudy: boolean
  caseStudyStatusText?: string
  imageMarginTopClass?: string
  footerPaddingTopClass?: string
  caseStudyUrlOverride?: string
  stats?: {
    [key: string]: string
  }
}

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  imageUrl,
  tags,
  hasCaseStudy,
  caseStudyStatusText,
  imageMarginTopClass = "mt-8",
  footerPaddingTopClass = "pt-8",
  caseStudyUrlOverride,
  stats,
}) => {
  return (
    <div className="relative group">
      <div className={`relative overflow-hidden rounded-3xl ${imageMarginTopClass}`}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`px-6 ${footerPaddingTopClass}`}>
        <h3 className="text-2xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        {stats && (
          <div className="mt-3">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="text-sm text-gray-700">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        )}
        {hasCaseStudy ? (
          <Link
            href={caseStudyUrlOverride || `/case-studies/${slug}`}
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            {caseStudyStatusText || "View Case Study"}
          </Link>
        ) : null}
      </div>
    </div>
  )
}

interface FeaturedWorkSectionProps {
  projects: Project[]
}

const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({ projects }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              slug={project.slug}
              hasCaseStudy={project.hasCaseStudy}
              caseStudyStatusText={project.caseStudyStatusText}
              imageMarginTopClass={project.imageMarginTopClass}
              footerPaddingTopClass={project.footerPaddingTopClass}
              caseStudyUrlOverride={project.caseStudyUrlOverride}
              stats={project.stats}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorkSection
