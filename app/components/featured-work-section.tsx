import ProjectCard from "./project-card"
import { projectsData } from "@/app/data/projects-data"

export default function FeaturedWorkSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neutral-800 dark:text-neutral-200">
              Featured Work
            </h2>
            <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
              A selection of my projects that demonstrate my skills in user experience design, product strategy, and
              front-end development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-1">
          <div className="grid grid-cols-1 gap-12">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                slug={project.slug}
                hasCaseStudy={project.hasCaseStudy}
                caseStudyStatusText={project.caseStudyStatusText}
                imageMarginTopClass={project.imageMarginTopClass}
                footerPaddingTopClass={project.footerPaddingTopClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
