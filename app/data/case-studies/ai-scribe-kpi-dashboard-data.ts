import type { CaseStudyData } from "../case-study-types"

export const aiScribeKpiDashboardData: CaseStudyData = {
  slug: "ai-scribe-kpi-dashboard",
  pageTitle: "Ambient Scribe KPI Dashboard",
  metaTitle: "Ambient Scribe KPI Dashboard - Ben Brasso",
  metaDescription:
    "Prototyped an Ambient Scribe Pilot KPI Dashboard using AI to inform the U.S. Veteran Affairs Digital Health Office's AI investments.",
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1748741837/ChatGPT_Image_May_31_2025_09_30_33_PM_rujlow.png",
    alt: "Ambient Scribe KPI Dashboard interface showing analytics and metrics",
    width: 1200,
    height: 800,
    priority: true,
  },
  projectOverviewBanner: {
    role: "Lead UX Designer",
    timeline: "6 months",
    team: "Cross-functional team of 8",
    tools: ["Figma", "Miro", "UserTesting", "Analytics"],
    overview:
      "Designed and prototyped a comprehensive KPI dashboard to track the success of the VA's Ambient Scribe AI pilot program, helping inform future AI investments in healthcare.",
  },
  anchorLink: {
    text: "Jump to the solution",
    href: "#solution",
  },
  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      content: [
        {
          type: "paragraph",
          text: "The U.S. Department of Veterans Affairs was piloting an AI-powered ambient scribe technology to reduce administrative burden on healthcare providers. However, they lacked a centralized way to track key performance indicators and measure the pilot's success.",
        },
        {
          type: "paragraph",
          text: "Without proper metrics and visualization, it was difficult to:",
        },
        {
          type: "list",
          items: [
            "Measure the impact on provider efficiency and satisfaction",
            "Track adoption rates across different VA facilities",
            "Identify areas for improvement in the AI technology",
            "Make data-driven decisions about scaling the program",
          ],
        },
      ],
    },
    {
      id: "solution",
      title: "The Solution",
      content: [
        {
          type: "paragraph",
          text: "I designed a comprehensive KPI dashboard that provided real-time insights into the ambient scribe pilot program. The dashboard featured:",
        },
        {
          type: "list",
          items: [
            "Real-time usage metrics and adoption rates",
            "Provider satisfaction scores and feedback",
            "Time savings and efficiency improvements",
            "AI accuracy and performance indicators",
            "Facility-level comparisons and benchmarking",
          ],
        },
        {
          type: "paragraph",
          text: "The dashboard was designed with different user personas in mind, from C-level executives needing high-level summaries to program managers requiring detailed operational metrics.",
        },
      ],
    },
    {
      id: "impact",
      title: "Impact & Results",
      content: [
        {
          type: "paragraph",
          text: "The KPI dashboard became a critical tool for the VA's Digital Health Office, enabling them to:",
        },
        {
          type: "list",
          items: [
            "Make informed decisions about expanding the AI pilot program",
            "Identify top-performing facilities and best practices",
            "Optimize the ambient scribe technology based on usage patterns",
            "Secure additional funding for AI initiatives based on demonstrated ROI",
          ],
        },
        {
          type: "paragraph",
          text: "The project demonstrated the value of data-driven design in healthcare technology adoption and helped establish a framework for future AI pilot programs at the VA.",
        },
      ],
    },
  ],
}
