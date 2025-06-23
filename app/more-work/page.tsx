import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import Link from "next/link"

interface MoreWorkProject {
  id: string
  title: string
  imageUrl: string
  imageAlt: string
  linkUrl: string
  linkText: string
}

const moreWorkProjectsData: MoreWorkProject[] = [
  {
    id: "project-1",
    title: "Johns Hopkins School of Medicine",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635524/Frame_187_wyvifr.png",
    imageAlt: "Abstract representation of a design system",
    linkUrl: "https://www.hopkinsmedicine.org/som",
    linkText: "Visit https://www.hopkinsmedicine.org/som",
  },
  {
    id: "project-2",
    title: "Clinical Research and Trials at UI Health Care",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635522/Frame_191_mkiko9.png",
    imageAlt: "Modern e-commerce interface",
    linkUrl: "https://clinicaltrials.uihealthcare.org/",
    linkText: "Visit https://clinicaltrials.uihealthcare.org/",
  },
  {
    id: "project-3",
    title: "Rush Univeristy System for Health",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635525/Frame_190_bb1d2t.png",
    imageAlt: "Health app UI on a smartphone",
    linkUrl: "https://www.rush.edu/",
    linkText: "Visit https://www.rush.edu/",
  },
  {
    id: "project-4",
    title: "Valley Health System",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635526/Frame_189_yxkmy1.png",
    imageAlt: "Health app UI on a smartphone",
    linkUrl: "https://www.valleyhealth.com/",
    linkText: "Visit https://www.valleyhealth.com/",
  },
  {
    id: "project-5",
    title: "UMass Memorial Health",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635525/Frame_192_tgxh6x.png",
    imageAlt: "Health app UI on a smartphone",
    linkUrl: "https://www.ummhealth.org/",
    linkText: "Visit https://www.ummhealth.org/",
  },
  {
    id: "project-6",
    title: "Johns Hopkins Community Physicians",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635527/Frame_188_mqcmlw.png",
    imageAlt: "Health app UI on a smartphone",
    linkUrl: "https://www.hopkinsmedicine.org/community-physicians",
    linkText: "Visit https://www.hopkinsmedicine.org/community-physicians",
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
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-24">
          <div className="flex flex-col items-center gap-16">
            {moreWorkProjectsData.map((project) => (
              <div key={project.id} className="w-full max-w-6xl">
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-1 dark:text-white">{project.title}</h3>
                <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] p-4">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1152px"
                    className="object-contain"
                  />
                </div>
                <div className="text-center -mt-8">
                  <Link
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 dark:text-sky-500 hover:text-sky-700 dark:hover:text-sky-400 font-medium group text-lg underline hover:no-underline"
                  >
                    {project.linkText}
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
