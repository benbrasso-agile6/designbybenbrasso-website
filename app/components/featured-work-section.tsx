import { caseStudiesData } from "@/app/data/case-studies-data"
import ProjectCard from "./project-card"
import ActionLink from "./action-link"

export default function FeaturedWorkSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My case studies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Detailed explorations of my design process and problem-solving approach
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {caseStudiesData.map((project) => {
            // Hide the provider online scheduling project for now
            if (project.slug === "direct-online-scheduling") {
              return null
            }

            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                href={`/work/${project.slug}`}
                tags={project.tags}
              />
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Explore more of my case studies to see how I think, collaborate, make informed decisions, and drive
            outcomes.
          </p>
          <ActionLink href="/case-studies">Explore featured case studies</ActionLink>
        </div>
      </div>
    </section>
  )
}
