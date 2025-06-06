import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"

// Add import for the new component
import ProjectDetailsTable from "../components/project-details-table"

export const metadata: Metadata = {
  title: "Case Study: Direct online scheduling | Ben Brasso",
  description: "Detailed case study of the Direct Online Scheduling project by Ben Brasso.",
}

// Define project details data
const projectDetails = [
  { label: "Client Type", value: "Government Agency (Healthcare)" },
  { label: "Role", value: ["Lead UX Designer", "User Researcher"] },
  { label: "Timeline", value: "Ongoing (Multiple Phases)" },
  { label: "Tools", value: ["Figma", "Optimal Workshop", "VA.gov Design System", "GitHub"] },
]

export default function EcommercePlatformRedesignPage() {
  return (
    <>
      <Button
        asChild
        variant="outline"
        className="mb-8 print:hidden border-sky-600 text-sky-600 hover:bg-sky-100 hover:text-sky-700 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400"
      >
        <Link href="/#work">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to All Projects
        </Link>
      </Button>

      {/* Add the ProjectDetailsTable component here */}
      <ProjectDetailsTable details={projectDetails} />

      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
        <h1>Provider online scheduling</h1>
        <Image
          src="/placeholder.svg?width=800&height=450"
          alt="Direct Online Scheduling project showcase"
          width={800}
          height={450}
          className="rounded-lg my-6 w-full object-cover"
          priority
        />
        <p className="lead">
          This project involved a comprehensive UX design for a direct online scheduling system, focusing on enhancing
          user access and improving booking efficiency.
        </p>

        <h2>The Challenge</h2>
        <p>
          The existing platform suffered from an outdated user interface, complex navigation, and a cumbersome checkout
          process. This led to high bounce rates and low customer satisfaction. The primary challenge was to modernize
          the platform while ensuring a seamless transition for existing users.
        </p>

        <h2>My Role & Process</h2>
        <p>As the lead UX designer, I was responsible for the end-to-end design process. This included:</p>
        <ul>
          <li>
            <strong>User Research:</strong> Conducted user interviews, surveys, and usability testing on the existing
            platform to identify pain points and opportunities. Developed user personas and journey maps.
          </li>
          <li>
            <strong>Ideation & Wireframing:</strong> Facilitated brainstorming sessions and sketched initial concepts.
            Created low-fidelity wireframes for key user flows.
          </li>
          <li>
            <strong>Prototyping & Design:</strong> Developed high-fidelity mockups and interactive prototypes using
            Figma. Focused on a clean, intuitive UI and a streamlined navigation system.
          </li>
          <li>
            <strong>Usability Testing:</strong> Iteratively tested prototypes with users to gather feedback and refine
            the design.
          </li>
          <li>
            <strong>Collaboration:</strong> Worked closely with product managers, developers, and stakeholders
            throughout the project lifecycle.
          </li>
        </ul>

        <h2>Key Features & Solutions</h2>
        <ul>
          <li>
            <strong>Intuitive Scheduling Interface:</strong> Simplified the process for users to find and book
            appointments.
          </li>
          <li>
            <strong>Simplified Navigation:</strong> Implemented a clear and intuitive information architecture.
          </li>
          <li>
            <strong>Efficient Booking Flow:</strong> Minimized steps required to complete an appointment booking.
          </li>
          <li>
            <strong>Clear Appointment Details:</strong> Provided comprehensive information for each available slot and
            provider.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ensured a seamless experience across desktop, tablet, and mobile
            devices.
          </li>
        </ul>

        <h2>Results & Impact</h2>
        <p>The redesigned platform led to significant improvements:</p>
        <ul>
          <li>Significant increase in successful online bookings.</li>
          <li>Notable reduction in incomplete scheduling attempts.</li>
          <li>25% increase in user engagement metrics (e.g., time on site, pages per visit).</li>
          <li>Positive feedback from users on the improved usability and modern design.</li>
        </ul>
        <div className="mt-12 print:hidden">
          <Button asChild className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white">
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
