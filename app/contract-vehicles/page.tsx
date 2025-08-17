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

            <h3>Schedule 70 - IT Services</h3>
            <ul>
              <li>User Experience Design Services</li>
              <li>Digital Strategy and Consulting</li>
              <li>Accessibility Compliance and Testing</li>
              <li>Design System Development</li>
            </ul>

            <h3>Schedule 541 - Professional Services</h3>
            <ul>
              <li>Research and Analysis</li>
              <li>Strategic Planning</li>
              <li>Process Improvement</li>
              <li>Training and Development</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none dark:prose-invert prose-neutral mt-12 md:mt-16">
            <h2 id="us-department-of-veterans-affairs-va" className="scroll-mt-20">
              U.S. Department of Veterans Affairs (VA)
            </h2>

            <h3>VA T4NG</h3>
            <ul>
              <li>Technology Transformation Services</li>
              <li>Digital Modernization</li>
              <li>User Experience Enhancement</li>
            </ul>

            <h3>DHS EAGLE II</h3>
            <ul>
              <li>Enterprise Application Services</li>
              <li>IT Infrastructure Support</li>
              <li>Cybersecurity Services</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
