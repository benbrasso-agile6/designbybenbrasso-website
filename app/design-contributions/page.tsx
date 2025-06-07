import Link from "next/link"

export default function DesignContributionsPage() {
  const resumeUrl =
    "https://www.dropbox.com/scl/fi/shwx97aarjojfuihfjk85/Ben-Brasso-Resume-2025.pdf?rlkey=f8y8kjg2jqfxvo4xgsc5qc4fv&st=d89477ve&dl=1"

  return (
    <>
      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
        <h1>Design Contributions</h1>
        <p>
          This section is currently under construction. I&apos;m excited to share more about my specific design
          contributions and processes soon.
        </p>
        <p>
          In the meantime, please feel free to explore my{" "}
          <Link href="/read-me" className="text-sky-600 dark:text-sky-500">
            README
          </Link>
          , check out my{" "}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-500">
            Resume/CV
          </a>
          , or browse my featured work on the{" "}
          <Link href="/" className="text-sky-600 dark:text-sky-500">
            homepage
          </Link>
          .
        </p>
      </article>

      <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
        <h2>VA.gov Design System</h2>
        <p>
          <a
            href="https://design.va.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 dark:text-sky-500"
          >
            Check out the VA.gov Design System on design.va.gov
          </a>
          .
        </p>

        <h3>Components</h3>
        <ul>
          <li>
            <a
              href="https://design.va.gov/components/card#appointment-large-with-icon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Card - Appointment, large with icon variation
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/components/search-filter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Search filter
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/components/header/header-minimal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Header - Minimal
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/components/footer/footer-minimal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Footer - Minimal
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/components/form/memorable-date"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Memorable date
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/components/language-toggle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Language toggle
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/components/link/action#primary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Link - Action - Primary
            </a>
          </li>
        </ul>

        <h3>Patterns</h3>
        <ul>
          <li>
            <a
              href="https://design.va.gov/patterns/help-users-to/complete-a-sub-task"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Complete a sub task
            </a>
          </li>
          <li>
            <a
              href="https://design.va.gov/patterns/help-users-to/navigate-a-long-list"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Navigate a long list
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
