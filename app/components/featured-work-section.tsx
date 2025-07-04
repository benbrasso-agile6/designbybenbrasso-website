import { projectsData, type Project } from "@/app/data/projects-data"
import ProjectCard from "@/app/components/project-card"

interface FeaturedWorkSectionProps {
  projects?: Project[]
  title?: string | null
  className?: string
}

export default function FeaturedWorkSection({
  projects = projectsData,
  title = "Featured work",
  className = "bg-gray-100 dark:bg-gray-800 py-12 md:py-16",
}: FeaturedWorkSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl font-bold tracking-tight text-center mb-8">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
