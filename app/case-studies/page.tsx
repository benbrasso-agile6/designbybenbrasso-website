import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import FeaturedWorkSection from "@/app/components/featured-work-section"
import { projectsData } from "@/app/data/projects-data"
import { Analytics } from "@vercel/analytics/next"

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
                <strong>Behind every design is a story.</strong> These case studies highlight the thinking,
                collaboration, and decisions that shaped each project—from early research to delivery. You’ll review how
                I’ve worked across health care and government, using AI-powered tools, human-centered design
                methodologies, and data storytelling to help turn complex problems into accessible, impactful solutions.
              </p>
            </div>
          </div>
        </section>
        <FeaturedWorkSection
          projectsToDisplay={caseStudies}
          showHeading={false}
          showMoreWorkLink={false}
          sectionClassName="w-full pb-16 md:pb-24 lg:pb-32 bg-white dark:bg-neutral-900"
          statsHeadingLevel={3}
        />
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn more <span className="text-sky-600 dark:text-sky-400">about me</span>
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you’d like a glimpse behind the work, my{" "}
                <a href="/readme" className="text-sky-600 dark:text-sky-500 hover:text-sky-700 dark:hover:text-sky-400">
                  README
                </a>{" "}
                offers a more personal look at who I am and how I work. It’s a living document where I share what
                motivates me, how I approach collaboration, and the values that guide my design process.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
