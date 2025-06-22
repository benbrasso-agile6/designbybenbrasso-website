import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function MoreWorkPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      {/* Main content */}
      <main id="main-content" className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-950">
          <div className="mx-auto max-w-[1000px] px-8">
            {/* Typography container – matches design-contributions page */}
            <article className="prose prose-neutral dark:prose-invert mx-auto text-center">
              <h1>
                More of my <span className="text-sky-600 dark:text-sky-500">work</span>
              </h1>

              <p>
                Here you’ll soon find additional case studies and side projects that showcase my experience in UX
                design, product strategy, and applied AI. I’m gathering artifacts and narrative—check back shortly!
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
