import type { CaseStudyData } from "../case-study-types"
import { ProjectDetailLabelKey } from "../project-detail-labels"

export const aiScribeKpiDashboardData: CaseStudyData = {
  slug: "ai-scribe-kpi-dashboard",
  pageTitle: "AI Scribe Pilot KPI Dashboard",
  metaTitle: "Case Study: AI Scribe KPI Dashboard | Ben Brasso",
  metaDescription:
    "Detailed case study of the AI Scribe KPI Dashboard project, focusing on data visualization and UX strategy by Ben Brasso.",
  leadParagraph:
    "Revamped a complex B2B AI Scribe KPI dashboard to enhance data visualization, improve user workflow efficiency for medical scribes and administrators, and provide more actionable insights into scribe performance and documentation quality.",
  anchorLink: {
    text: "Learn about relevant data privacy considerations",
    href: "#data-privacy-considerations",
  },
  projectDetails: [
    { label: ProjectDetailLabelKey.CLIENT, value: "Healthcare Technology (B2B SaaS)" },
    { label: ProjectDetailLabelKey.AGENCY, value: "Placeholder Agency Name" },
    { label: ProjectDetailLabelKey.ROLE, value: ["UX Strategist", "Lead Product Designer"] },
    { label: ProjectDetailLabelKey.PLATFORM, value: "Web Application (Desktop)" },
    { label: ProjectDetailLabelKey.CONTRACT_DURATION, value: "4 Months" },
  ],
  mainImage: {
    src: "/placeholder.svg?width=800&height=450",
    alt: "AI Scribe KPI Dashboard project showcase",
    width: 800,
    height: 450,
    priority: true,
    className: "rounded-lg my-6 w-full object-cover",
  },
  sections: [
    {
      title: "The Challenge",
      content: [
        {
          type: "paragraph",
          text: "The existing dashboard for AI scribe performance was data-rich but suffered from information overload and a lack of clear hierarchy. Users found it difficult to quickly identify key performance indicators, track documentation accuracy, and perform essential administrative tasks, leading to underutilization of the platform’s capabilities.",
        },
      ],
    },
    {
      title: "My Role & Process",
      content: [
        { type: "paragraph", text: "As the UX strategist and designer, my responsibilities included:" },
        {
          type: "list",
          items: [
            "Data Analysis & User Feedback: Analyzed usage data and collected feedback from existing clients to understand their primary goals and pain points.",
            "Workflow Optimization: Mapped out existing user workflows and identified areas for improvement and simplification.",
            "Information Prioritization: Worked with product managers to define key performance indicators (KPIs) and prioritize information display.",
            "Data Visualization Design: Explored various charting and data visualization techniques to present complex data in an understandable and actionable manner.",
            "Iterative Design & Prototyping: Created wireframes and interactive prototypes, iterating based on stakeholder and user feedback.",
          ],
        },
      ],
    },
    {
      title: "Key Features & Solutions",
      content: [
        {
          type: "list",
          items: [
            "Customizable Dashboard Widgets: Allowed users to personalize their dashboard view by selecting and arranging relevant data widgets.",
            "Improved Data Visualization: Implemented clearer charts, graphs, and data tables with better labeling and context.",
            "Actionable Insights: Highlighted key trends, anomalies, and provided contextual recommendations.",
            "Streamlined Reporting: Simplified the process for generating and exporting custom reports.",
            "Scribe Performance Metrics: Clear visualization of individual and team scribe efficiency and accuracy.",
          ],
        },
      ],
    },
    {
      title: "Results & Impact",
      content: [
        { type: "paragraph", text: "The optimized dashboard resulted in:" },
        {
          type: "list",
          items: [
            "30% increase in user engagement with key dashboard features.",
            "Significant reduction in time taken to complete common tasks.",
            "Improved oversight of AI scribe operations and documentation quality.",
            "Positive feedback on the clarity and usefulness of the new data visualizations.",
          ],
        },
      ],
    },
    {
      id: "data-privacy-considerations", // Matches anchorLink.href
      title: "Most applicable law this work supports",
      content: [
        {
          type: "h3",
          text: "Key Data Privacy and Security Regulations",
        },
        {
          type: "paragraph",
          text: 'This AI Scribe KPI Dashboard handles sensitive patient information, and its design and operation are guided by data privacy and security regulations such as HIPAA (Health Insurance Portability and Accountability Act) in the United States. <a href="https://www.hhs.gov/hipaa/for-professionals/index.html" target="_blank" rel="noopener noreferrer">Learn more about HIPAA</a>.',
        },
        {
          type: "h3",
          text: "How this work aligns with data protection principles",
        },
        {
          type: "paragraph",
          text: "The dashboard was developed with a strong emphasis on data minimization, access controls, audit trails, and de-identification techniques where appropriate to ensure that insights are generated while protecting patient privacy and complying with relevant healthcare data laws.",
        },
      ],
    },
  ],
}
