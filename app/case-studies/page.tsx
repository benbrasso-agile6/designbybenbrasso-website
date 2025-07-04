import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import ProjectCard from "@/app/components/project-card"
import { projects } from "@/app/lib/data"

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
              <h1 className="leading-normal text-center">Featured <span className="text-sky-600 dark:text-sky-500">case studies</span></h1>
            </article>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center mt-8">
              <p>Behind every design is a story. These case studies highlight the thinking, collaboration, and decisions that shaped each project—from early research to delivery. You’ll review how I’ve worked across health care and government, using AI-powered tools to help turn complex problems into accessible, impactful solutions.</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
