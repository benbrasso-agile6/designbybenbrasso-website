import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Page not found
            </h1>

            {/* Body content */}
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              We can't find the page you're looking for. The page may have been removed or made unavailable.
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Visit the homepage to get to the good stuff.
            </p>

            {/* Homepage link */}
            <Link
              href="/"
              className="text-neutral-900 dark:text-neutral-100 font-medium underline hover:no-underline transition-all duration-200"
            >
              Visit the homepage
            </Link>

            {/* Error code */}
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-12">
              <strong>Error code:</strong> 404
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
