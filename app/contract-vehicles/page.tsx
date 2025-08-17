import Header from "../components/header"
import Footer from "../components/footer"

export default function ContractVehiclesPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-white dark:bg-neutral-950">
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-8">
          <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
            <h1 className="leading-normal">
              Contract <span className="text-sky-600 dark:text-sky-500">Vehicles</span>
            </h1>
            <p>
              I have experience working with various government contract vehicles and procurement mechanisms that enable
              efficient delivery of design and technology services to federal agencies.
            </p>

            <p>
              Through these contract vehicles, I've helped organizations streamline their procurement processes while
              ensuring compliance with federal regulations and delivering high-quality user-centered design solutions.
            </p>
          </article>

          <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
            <h2 id="us-department-of-health-and-human-services-hhs" className="scroll-mt-20">
              US Department of Health and Human Services (HHS)
            </h2>

            <h3>HHS - Office of Grants (OG) Software Integration and Frontend Technology (SWIFT) BPA</h3>
            <ul>
              <li>HHS's Simpler Notice of Funding Opportunities (NOFOs)</li>
              <li>Start Date: June 2025</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
            <h2 id="us-department-of-veterans-affairs-va" className="scroll-mt-20">
              U.S. Department of Veterans Affairs (VA)
            </h2>

            <h3>Department of Veterans Affairs Digital Health Office (DHO) Program Development Staffing Services</h3>
            <ul>
              <li>Start Date: July 2024</li>
            </ul>

            <h3>GSA Multiple Award Schedule (MAS)</h3>
            <ul>
              <li>Veteran Appointments and Check-In Experience (CIE)</li>
              <li>Start Date: January 2024</li>
            </ul>

            <h3>Product and Technology Ecosystem Management Services (PTEMS)</h3>
            <ul>
              <li>Technology for Next Generation (T4NG)</li>
              <li>Task Order: CTO Health Products - Check-In Experience (CIE)</li>
              <li>Start Date: April 2022</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
