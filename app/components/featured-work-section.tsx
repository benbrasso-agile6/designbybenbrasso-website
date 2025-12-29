import { projectsData, type Project } from "@/app/data/projects-data"
import ProjectCard from "./project-card"
import ActionLink from "./action-link"

interface FeaturedWorkSectionProps {
  projectsToDisplay?: Project[]
  showHeading?: boolean
  showMoreWorkLink?: boolean
  sectionClassName?: string
  statsHeadingLevel?: 3 | 4
}

export default function FeaturedWorkSection({
  projectsToDisplay,
  showHeading = true,
  showMoreWorkLink = true,
  sectionClassName = "w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-900",
  statsHeadingLevel,
}: FeaturedWorkSectionProps) {
  const projects = projectsToDisplay ?? projectsData.filter((p) => p.slug !== "direct-online-scheduling").slice(0, 2)

  return (
    <section id="work" className={sectionClassName}>
      <div className="max-w-[1000px] mx-auto">
        {showHeading && (
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100">
              My <span className="text-sky-600 dark:text-sky-500">case studies</span>
            </h2>
            <p className="max-w-[700px] text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects—not always completed in a linear process—that showcase my skills in UX design,
              product management, user research, and using AI.
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-16 md:gap-20 px-4 sm:px-6 md:px-8">
          {projects.map((project) => {
            const imageMarginTopClass = project.slug === "direct-online-scheduling" ? "mt-3" : "mt-6"
            const footerPaddingTopClass = project.slug === "direct-online-scheduling" ? "pt-3" : "pt-6"

            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                slug={project.slug}
                hasCaseStudy={project.hasCaseStudy}
                caseStudyStatusText={project.caseStudyStatusText}
                imageMarginTopClass={imageMarginTopClass}
                footerPaddingTopClass={footerPaddingTopClass}
                caseStudyUrlOverride={project.caseStudyUrlOverride}
                stats={project.stats}
                statsHeadingLevel={statsHeadingLevel}
              />
            )
          })}
        </div>

        {showMoreWorkLink && (
          <div className="mt-16 md:mt-20 text-center px-8">
            <p className="max-w-[700px] mx-auto text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore more of my case studies to see how I think, collaborate, make informed decisions, and drive
              outcomes.
            </p>
            <div className="mt-8">
              <ActionLink href="/case-studies">Explore all case studies</ActionLink>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
