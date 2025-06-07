import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from "next/link" // Import Link for internal navigation

export default function DesignContributionsPage() {
  const resumeUrl =
    "https://www.dropbox.com/scl/fi/shwx97aarjojfuihfjk85/Ben-Brasso-Resume-2025.pdf?rlkey=f8y8kjg2jqfxvo4xgsc5qc4fv&st=d89477ve&dl=1"

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main id="main-content" className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
          Design Contributions
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none lg:prose-lg">
          <p>
            This section is currently under construction. I&apos;m excited to share more about my specific design
            contributions and processes soon.
          </p>
          <p>
            In the meantime, please feel free to explore my <Link href="/read-me">README</Link>, check out my{" "}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume/CV
            </a>
            , or browse my featured work on the <Link href="/">homepage</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
