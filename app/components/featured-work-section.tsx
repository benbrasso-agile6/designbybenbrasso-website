import { projectsData } from "@/app/data/projects-data"
import ProjectCard from "./project-card"

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-900">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100">
            My <span className="text-sky-600 dark:text-sky-500">work</span>
          </h2>
          <p className="max-w-[700px] text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of projects that showcase my skills in UX design, product strategy, user research, and using AI.
          </p>
        </div>
        <div className="flex flex-col items-center gap-16 md:gap-20 px-4 sm:px-6 md:px-8">
          {projectsData.map((project) => {
            let specificImageMarginTopClass = "mt-6" // Default for image margin
            let specificFooterPaddingTopClass = "pt-6" // Default for footer padding

            if (project.slug === "direct-online-scheduling") {
              specificImageMarginTopClass = "mt-3" // Smaller margin above image
              specificFooterPaddingTopClass = "pt-3" // Smaller padding above footer text
            }
            // You can add else if blocks here for other specific cards if needed

            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                projectUrl={`/work/${project.slug}`}
                caseStudyStatusText={project.caseStudyStatusText}
                imageMarginTopClass={specificImageMarginTopClass}
                footerPaddingTopClass={specificFooterPaddingTopClass} // Pass the new prop
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
