import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function MoreWorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="leading-normal text-center mb-8">
              More of my <span className="text-sky-600 dark:text-sky-500">work</span>
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center">
              <p>
                This section provides a space to showcase additional projects, case studies, or other professional
                endeavors that highlight different facets of my skills and experience.
              </p>
              <p>
                As this portfolio evolves, you'll find a growing collection of work here, offering deeper insights into
                my design process, problem-solving approaches, and the impact of my contributions.
              </p>
              {/* You can add more specific content, project listings, or links here */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
