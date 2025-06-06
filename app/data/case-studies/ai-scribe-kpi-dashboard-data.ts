import type { CaseStudyData } from "../case-study-types"

export const aiScribeKpiDashboardData: CaseStudyData = {
  slug: "ai-scribe-kpi-dashboard",
  pageTitle: "AI Scribe Pilot KPI Dashboard",
  metaTitle: "Case Study: AI Scribe KPI Dashboard | Ben Brasso",
  metaDescription:
    "Detailed case study of the AI Scribe KPI Dashboard project, focusing on data visualization and UX strategy by Ben Brasso.",
  leadParagraph:
    "Revamped a complex B2B AI Scribe KPI dashboard to enhance data visualization, improve user workflow efficiency for medical scribes and administrators, and provide more actionable insights into scribe performance and documentation quality.",
  projectDetails: [
    { label: "Client Type", value: "Healthcare Technology (B2B SaaS)" },
    { label: "Role", value: ["UX Strategist", "Lead Product Designer"] },
    { label: "Timeline", value: "4 Months" },
    { label: "Tools", value: ["Figma", "Miro", "UserTesting.com", "Amplitude"] },
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
  ],
}
