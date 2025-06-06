import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
// Add import for the new component
import ProjectDetailsTable from "../components/project-details-table"

export const metadata: Metadata = {
  title: "Case Study: AI scribe KPI dashboard | Ben Brasso",
  description: "Detailed case study of the AI Scribe KPI Dashboard project by Ben Brasso.",
}

// Define project details data
const projectDetails = [
  { label: "Client Type", value: "Healthcare Technology (B2B SaaS)" },
  { label: "Role", value: ["UX Strategist", "Lead Product Designer"] },
  { label: "Timeline", value: "4 Months" },
  { label: "Tools", value: ["Figma", "Miro", "UserTesting.com", "Amplitude"] },
]

export default function SaasDashboardOptimizationPage() {
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
        <h1>AI scribe pilot KPI dashboard</h1>
        <Image
          src="/placeholder.svg?width=800&height=450"
          alt="AI Scribe KPI Dashboard project showcase"
          width={800}
          height={450}
          className="rounded-lg my-6 w-full object-cover"
          priority
        />
        <p className="lead">
          Revamped a complex B2B AI Scribe KPI dashboard to enhance data visualization, improve user workflow efficiency
          for medical scribes and administrators, and provide more actionable insights into scribe performance and
          documentation quality.
        </p>

        <h2>The Challenge</h2>
        <p>
          The existing dashboard for AI scribe performance was data-rich but suffered from information overload and a
          lack of clear hierarchy. Users found it difficult to quickly identify key performance indicators, track
          documentation accuracy, and perform essential administrative tasks, leading to underutilization of the
          platform’s capabilities.
        </p>

        <h2>My Role & Process</h2>
        <p>As the UX strategist and designer, my responsibilities included:</p>
        <ul>
          <li>
            <strong>Data Analysis & User Feedback:</strong> Analyzed usage data and collected feedback from existing
            clients to understand their primary goals and pain points.
          </li>
          <li>
            <strong>Workflow Optimization:</strong> Mapped out existing user workflows and identified areas for
            improvement and simplification.
          </li>
          <li>
            <strong>Information Prioritization:</strong> Worked with product managers to define key performance
            indicators (KPIs) and prioritize information display.
          </li>
          <li>
            <strong>Data Visualization Design:</strong> Explored various charting and data visualization techniques to
            present complex data in an understandable and actionable manner.
          </li>
          <li>
            <strong>Iterative Design & Prototyping:</strong> Created wireframes and interactive prototypes, iterating
            based on stakeholder and user feedback.
          </li>
        </ul>

        <h2>Key Features & Solutions</h2>
        <ul>
          <li>
            <strong>Customizable Dashboard Widgets:</strong> Allowed users to personalize their dashboard view by
            selecting and arranging relevant data widgets.
          </li>
          <li>
            <strong>Improved Data Visualization:</strong> Implemented clearer charts, graphs, and data tables with
            better labeling and context.
          </li>
          <li>
            <strong>Actionable Insights:</strong> Highlighted key trends, anomalies, and provided contextual
            recommendations.
          </li>
          <li>
            <strong>Streamlined Reporting:</strong> Simplified the process for generating and exporting custom reports.
          </li>
          <li>
            <strong>Scribe Performance Metrics:</strong> Clear visualization of individual and team scribe efficiency
            and accuracy.
          </li>
        </ul>

        <h2>Results & Impact</h2>
        <p>The optimized dashboard resulted in:</p>
        <ul>
          <li>30% increase in user engagement with key dashboard features.</li>
          <li>Significant reduction in time taken to complete common tasks.</li>
          <li>Improved oversight of AI scribe operations and documentation quality.</li>
          <li>Positive feedback on the clarity and usefulness of the new data visualizations.</li>
        </ul>

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
