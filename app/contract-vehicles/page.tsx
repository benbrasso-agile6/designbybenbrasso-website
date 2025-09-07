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
              Contracts and <span className="text-sky-600 dark:text-sky-500">Contract Vehicles</span>
            </h1>
            <p>
              My work with federal agencies has come through roles at technology companies that held government contract vehicles and technical partnerships. These roles gave me insight into how federal contracts support the delivery of modern, human-centered digital services.
            </p>

            <p>
              As an employee on these contracts, I’ve contributed to delivering high-quality, user-centered design solutions that help agencies improve accessibility, efficiency, and impact.
            </p>
          </article>

          <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
            <h2 id="us-department-of-health-and-human-services-hhs" className="scroll-mt-20">
              US Department of Health and Human Services (HHS)
            </h2>

            <h3>HHS - Office of Grants (OG) Software Integration and Frontend Technology (SWIFT) BPA</h3>
            <ul>
              <li>HHS’s Simpler Notice of Funding Opportunities (NOFOs)</li>
              <li>Start Date: June 2025</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
            <h2 id="us-department-of-veterans-affairs-va" className="scroll-mt-20">
              US Department of Veterans Affairs (VA)
            </h2>
          
            <h3>VA Secure, Performant, Reliable, and User-Centered Design Experiences (SPRUCE) Indefinite Delivery Indenfinite Quantity (IDIQ) Contract</h3>
            <ul>
              <li>Proposal involvement: 7-day code challenge team</li>
              <li>Start date: October 2024</li>
            </ul>

            <h3>Department of Veterans Affairs Digital Health Office (DHO) Program Development Staffing Services</h3>
            <ul>
              <li>Start Date: July 2024</li>
            </ul>

            <h3>GSA Multiple Award Schedule (MAS)</h3>
            <ul>
              <li>Veteran Appointments and Check-In Experience (CIE)</li>
              <li>Proposal involvement: Technical factors, case study writer</li>
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
