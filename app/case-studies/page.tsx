import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
              <h1 className="leading-normal text-center text-4xl font-bold tracking-tight lg:text-5xl">
                Featured Case Studies
              </h1>
            </article>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center mt-8">
              <p className="text-lg text-muted-foreground">This page is under construction. Please check back soon.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
