import type { CaseStudyData } from "../case-study-types"

export const directOnlineSchedulingData: CaseStudyData = {
  slug: "direct-online-scheduling",
  pageTitle: "Provider Online Scheduling",
  metaTitle: "Provider Online Scheduling - Ben Brasso",
  metaDescription:
    "Designed the scheduling experience for referrals on VA.gov and streamlined the process from weeks to minutes.",
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749400918/Frame_532_ofw0ui.png",
    alt: "Provider online scheduling interface for VA.gov",
    width: 1200,
    height: 800,
    priority: true,
  },
  projectOverviewBanner: {
    role: "Lead UX Designer",
    timeline: "5 months",
    team: "Cross-functional team of 10",
    tools: ["Figma", "Miro", "UserTesting", "Sketch"],
    overview:
      "Designed a comprehensive online scheduling system for VA provider referrals, reducing appointment scheduling time from weeks to minutes.",
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
          text: "Veterans faced significant delays when scheduling specialist appointments through referrals. The existing process required multiple phone calls, long wait times, and often resulted in scheduling conflicts or missed appointments.",
        },
        {
          type: "paragraph",
          text: "Major pain points included:",
        },
        {
          type: "list",
          items: [
            "Manual scheduling process taking weeks to complete",
            "Limited visibility into provider availability",
            "High rate of scheduling errors and conflicts",
            "Poor communication between primary care and specialists",
            "Veterans often gave up due to process complexity",
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
          text: "I designed an integrated online scheduling platform that connected veterans directly with specialist providers. The solution included:",
        },
        {
          type: "list",
          items: [
            "Real-time provider availability and calendar integration",
            "Automated referral processing and approval workflows",
            "Smart scheduling that considers veteran preferences and location",
            "Integrated communication system between care teams",
            "Mobile-responsive design for scheduling on any device",
          ],
        },
        {
          type: "paragraph",
          text: "The platform was designed to work seamlessly with existing VA systems while providing a modern, intuitive user experience.",
        },
      ],
    },
    {
      id: "impact",
      title: "Impact & Results",
      content: [
        {
          type: "paragraph",
          text: "The online scheduling system transformed the referral process:",
        },
        {
          type: "list",
          items: [
            "Reduced scheduling time from weeks to minutes",
            "85% reduction in scheduling-related phone calls",
            "40% decrease in missed appointments",
            "Improved veteran satisfaction scores by 60%",
            "Increased specialist appointment completion rates",
          ],
        },
        {
          type: "paragraph",
          text: "The success of this project led to its expansion across the VA healthcare system and served as a model for other government healthcare scheduling initiatives.",
        },
      ],
    },
  ],
}
