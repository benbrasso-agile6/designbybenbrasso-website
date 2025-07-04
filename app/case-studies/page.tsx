import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import FeaturedWorkSection from "@/app/components/featured-work-section"
import { projectsData } from "@/app/data/projects-data"

export default function CaseStudiesPage() {
  const caseStudies = projectsData.filter((p) => p.hasCaseStudy)

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
              <h1 className="leading-normal text-center">
                Featured <span className="text-sky-600 dark:text-sky-500">case studies</span>
              </h1>
            </article>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center mt-8">
              <p>
                Behind every design is a story. These case studies highlight the thinking, collaboration, and decisions
                that shaped each project—from early research to delivery. You’ll review how I’ve worked across health
                care and government, using AI-powered tools to help turn complex problems into accessible, impactful
                solutions.
              </p>
            </div>
          </div>
        </section>
        <FeaturedWorkSection projects={caseStudies} title={null} className="bg-muted/40 py-12" />
      </main>
      <Footer />
    </div>
  )
}
