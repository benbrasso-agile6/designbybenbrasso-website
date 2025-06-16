import type { CaseStudyData } from "../case-study-types"

export const patientCheckInData: CaseStudyData = {
  slug: "patient-check-in",
  pageTitle: "Mobile Patient Check-in",
  metaTitle: "Mobile Patient Check-in - Ben Brasso",
  metaDescription:
    "Re-imagined patient check-in on VA.gov, increasing usage 4x in 1 month, while adding travel reimbursement.",
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749261703/Frame_535_mcx97r.png",
    alt: "Mobile patient check-in interface on VA.gov",
    width: 1200,
    height: 800,
    priority: true,
  },
  projectOverviewBanner: {
    role: "Lead UX Designer",
    timeline: "4 months",
    team: "Cross-functional team of 6",
    tools: ["Figma", "UserTesting", "Analytics", "Sketch"],
    overview:
      "Redesigned the patient check-in experience for VA.gov mobile, resulting in a 4x increase in usage and seamless integration of travel reimbursement functionality.",
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
          text: "Veterans were struggling with the existing check-in process on VA.gov, leading to low adoption rates and frustrated users. The process was cumbersome, especially on mobile devices, and didn't integrate with travel reimbursement claims.",
        },
        {
          type: "paragraph",
          text: "Key issues included:",
        },
        {
          type: "list",
          items: [
            "Poor mobile experience with difficult navigation",
            "Separate systems for check-in and travel reimbursement",
            "Confusing user flow that led to high abandonment rates",
            "Lack of clear feedback and confirmation for users",
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
          text: "I redesigned the entire patient check-in flow with a mobile-first approach, focusing on simplicity and integration. The new design featured:",
        },
        {
          type: "list",
          items: [
            "Streamlined mobile interface with large touch targets",
            "Integrated travel reimbursement claim submission",
            "Clear progress indicators and confirmation messages",
            "Accessibility improvements for veterans with disabilities",
            "Offline capability for areas with poor connectivity",
          ],
        },
        {
          type: "paragraph",
          text: "The solution prioritized user needs while maintaining compliance with VA accessibility standards and security requirements.",
        },
      ],
    },
    {
      id: "impact",
      title: "Impact & Results",
      content: [
        {
          type: "paragraph",
          text: "The redesigned check-in experience delivered significant improvements:",
        },
        {
          type: "list",
          items: [
            "4x increase in mobile check-in usage within the first month",
            "60% reduction in check-in abandonment rates",
            "Integrated travel reimbursement increased claims by 40%",
            "Improved accessibility scores and veteran satisfaction ratings",
          ],
        },
        {
          type: "paragraph",
          text: "The success of this project led to its adoption across multiple VA medical centers and became a model for other patient-facing digital services.",
        },
      ],
    },
  ],
}
