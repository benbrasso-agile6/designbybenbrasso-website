import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface MoreWorkProject {
  id: string
  title: string
  imageUrl: string
  imageAlt: string
  linkUrl: string
  linkText: string
  description: string
}

const moreWorkProjectsData: MoreWorkProject[] = [
  {
    id: "project-1",
    title: "Innovative Design System",
    imageUrl: "/placeholder.svg?width=600&height=400",
    imageAlt: "Abstract representation of a design system",
    linkUrl: "https://example.com/design-system-case-study",
    linkText: "View Design System Details",
    description:
      "A comprehensive design system built to streamline development and ensure brand consistency across multiple platforms.",
  },
  {
    id: "project-2",
    title: "E-commerce Platform Redesign",
    imageUrl: "/placeholder.svg?width=600&height=400",
    imageAlt: "Modern e-commerce interface",
    linkUrl: "https://example.com/ecommerce-redesign-portfolio",
    linkText: "Explore E-commerce Project",
    description:
      "Led the UX/UI redesign for a major e-commerce platform, resulting in improved user engagement and conversion rates.",
  },
  {
    id: "project-3",
    title: "Mobile Health App Concept",
    imageUrl: "/placeholder.svg?width=600&height=400",
    imageAlt: "Health app UI on a smartphone",
    linkUrl: "https://example.com/mobile-health-app",
    linkText: "See App Concept",
    description:
      "Conceptualized and designed a mobile application focused on promoting mental wellness and healthy habits.",
  },
]

export default function MoreWorkPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        {/* Introductory Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
              <h1 className="leading-normal text-center">
                <span className="text-sky-600 dark:text-sky-500">More</span> of my work
              </h1>
            </article>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center mt-8">
              <p>
                This section provides a space to showcase additional projects, case studies, or other professional
                endeavors that highlight different facets of my skills and experience.
              </p>
              <p>
                As this portfolio evolves, you'll find a growing collection of work here, offering deeper insights into
                my design process, problem-solving approaches, and the impact of my contributions.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Work Projects Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Additional Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreWorkProjectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden flex flex-col border border-neutral-200 dark:border-neutral-700"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 flex-grow">{project.description}</p>
                  <Link
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 dark:text-sky-500 hover:text-sky-700 dark:hover:text-sky-400 font-medium group mt-auto"
                  >
                    {project.linkText}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
