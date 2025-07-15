import DesignContributionsNavigation from "./components/design-contributions-navigation"

export default function DesignContributionsPage() {
  const resumeUrl =
    "https://www.dropbox.com/scl/fi/shwx97aarjojfuihfjk85/Ben-Brasso-Resume-2025.pdf?rlkey=f8y8kjg2jqfxvo4xgsc5qc4fv&st=d89477ve&dl=1"

  return (
    <>
      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
        <h1 className="leading-normal">
          Design System <span className="text-sky-600 dark:text-sky-500">Contributions</span>
        </h1>
        <p>
          I’m passionate about advancing the larger design community by contributing components, patterns, and research
          that strengthen and mature design systems.
        </p>

        <p>
          By giving back to shared systems like VA.gov’s, I aim to support scalable, accessible, and consistent user
          experiences—while helping teams build with greater confidence and efficiency. These are a selection of
          contributions I’ve made to support and grow design systems.
        </p>
        <DesignContributionsNavigation />
      </article>

      <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
        <h2 id="va-design-system" className="scroll-mt-20">
          VA.gov Design System
        </h2>

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

      <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
        <h2 id="research-at-va" className="scroll-mt-20">
          Research at VA
        </h2>

        <ul>
          <li>
            <a
              href="https://depo-platform-documentation.scrollhelp.site/research-design/accessible-prototyping-with-codepen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Accessible prototyping with CodePen
            </a>
          </li>
          <li>
            <a
              href="https://depo-platform-documentation.scrollhelp.site/research-design/conducting-on-site-intercept-interviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-500"
            >
              Conducting on-site intercept interviews
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
