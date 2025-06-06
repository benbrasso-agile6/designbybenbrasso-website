import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"

// Add import for the new component
import ProjectDetailsTable from "../components/project-details-table"

export const metadata: Metadata = {
  title: "Case Study: Patient check-in | Ben Brasso",
  description: "Detailed case study of the Patient Check-in design project by Ben Brasso.",
}

// Define project details data
const projectDetails = [
  { label: "Client Type", value: "Government Agency (Healthcare)" },
  { label: "Role", value: ["Lead UX/UI Designer", "Accessibility Advocate"] },
  { label: "Timeline", value: "8 Months" },
  { label: "Tools", value: ["Figma", "VA.gov Design System", "Storybook", "UserZoom"] },
]

export default function MobileBankingAppPage() {
  return (
    <>
      <Button asChild variant="outline" className="mb-8 print:hidden">
        <Link href="/#work">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to All Projects
        </Link>
      </Button>

      {/* Add the ProjectDetailsTable component here */}
      <ProjectDetailsTable details={projectDetails} />

      <article className="prose prose-lg max-w-none dark:prose-invert">
        <h1>Mobile patient check-in</h1>
        <Image
          src="/placeholder.svg?width=800&height=450"
          alt="Patient Check-in project showcase"
          width={800}
          height={450}
          className="rounded-lg my-6 w-full object-cover"
          priority
        />
        <p className="lead">
          Designed a new patient check-in application from the ground up, focusing on accessibility, ease of use for all
          age groups, and a seamless pre-appointment experience.
        </p>

        <h2>The Challenge</h2>
        <p>
          Traditional patient check-in processes can be time-consuming and cumbersome, especially for patients with
          accessibility needs or those less familiar with digital tools. The goal was to create an app that is
          intuitive, efficient, and empowers patients to manage their check-in process effortlessly.
        </p>

        <h2>My Role & Process</h2>
        <p>I led the UX/UI design efforts, which involved:</p>
        <ul>
          <li>
            <strong>Competitive Analysis & User Research:</strong> Studied existing banking apps and conducted
            interviews with target users to understand their needs and frustrations.
          </li>
          <li>
            <strong>Information Architecture:</strong> Designed a clear and logical structure for the app’s features and
            content.
          </li>
          <li>
            <strong>Wireframing & Prototyping:</strong> Created detailed wireframes and interactive prototypes to
            visualize user flows and test concepts.
          </li>
          <li>
            <strong>UI Design & Style Guide:</strong> Developed a clean, modern visual identity and a comprehensive
            style guide, ensuring WCAG AA accessibility compliance.
          </li>
          <li>
            <strong>Accessibility Testing:</strong> Worked with accessibility experts to ensure the app was usable by
            people with diverse abilities.
          </li>
        </ul>

        <h2>Key Features & Solutions</h2>
        <ul>
          <li>
            <strong>Simplified Onboarding:</strong> Easy and secure account setup process.
          </li>
          <li>
            <strong>Intuitive Dashboard:</strong> Clear overview of accounts, recent transactions, and quick access to
            common actions.
          </li>
          <li>
            <strong>Quick Information Verification:</strong> Streamlined process for patients to confirm or update their
            details.
          </li>
          <li>
            <strong>Document Upload:</strong> Securely upload necessary documents prior to arrival.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Biometric authentication and customizable security alerts.
          </li>
          <li>
            <strong>Accessibility Features:</strong> Adjustable font sizes, high contrast themes, and screen reader
            compatibility.
          </li>
        </ul>

        <h2>Results & Impact</h2>
        <p>
          The app received positive feedback during user testing, with users praising its simplicity and intuitive
          design. It is aimed at significantly improving patient satisfaction and reducing administrative workload for
          clinic staff.
        </p>

        <div className="mt-12 print:hidden">
          <Button asChild>
            <Link href="/#work">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              See Other Projects
            </Link>
          </Button>
        </div>
      </article>
    </>
  )
}
