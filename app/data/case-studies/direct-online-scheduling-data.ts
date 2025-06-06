import type { CaseStudyData } from "../case-study-types"

export const directOnlineSchedulingData: CaseStudyData = {
  slug: "direct-online-scheduling",
  pageTitle: "Provider Online Scheduling",
  metaTitle: "Case Study: Provider Online Scheduling | Ben Brasso",
  metaDescription:
    "Case study on designing a direct online scheduling system for healthcare providers, improving user access and booking efficiency by Ben Brasso.",
  leadParagraph:
    "This project involved a comprehensive UX design for a direct online scheduling system, focusing on enhancing user access and improving booking efficiency for community care referrals on VA.gov.",
  projectDetails: [
    { label: "Client Type", value: "Government Agency (Healthcare)" },
    { label: "Role", value: ["Lead UX Designer", "User Researcher"] },
    { label: "Timeline", value: "Ongoing (Multiple Phases)" },
    { label: "Tools", value: ["Figma", "Optimal Workshop", "VA.gov Design System", "GitHub"] },
  ],
  mainImage: {
    src: "/placeholder.svg?width=800&height=450",
    alt: "Direct Online Scheduling project showcase",
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
          text: "Veterans needing community care faced a cumbersome, manual process for scheduling appointments, often involving phone calls and long wait times. The primary challenge was to design a user-friendly online system that would streamline appointment booking, reduce administrative burden, and integrate seamlessly with existing VA systems.",
        },
      ],
    },
    {
      title: "My Role & Process",
      content: [
        {
          type: "paragraph",
          text: "As the lead UX designer, I was responsible for the end-to-end design process. This included:",
        },
        {
          type: "list",
          items: [
            "User Research: Conducted interviews with Veterans and VA staff, usability testing on existing tools, and journey mapping to identify pain points and opportunities.",
            "Ideation & Wireframing: Facilitated design sprints and created low-fidelity wireframes for key user flows, focusing on simplicity and accessibility.",
            "Prototyping & Design: Developed high-fidelity mockups and interactive prototypes in Figma, adhering to the VA.gov design system and accessibility standards.",
            "Usability Testing: Iteratively tested prototypes with Veterans of varying technical abilities to gather feedback and refine the design.",
            "Collaboration: Worked closely with product managers, engineers, and VA stakeholders to ensure alignment and feasibility.",
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
            "Intuitive Scheduling Interface: Simplified the process for Veterans to find and book appointments with community care providers.",
            "Clear Appointment Management: Easy-to-understand views for upcoming and past appointments, with options to cancel or reschedule.",
            "Automated Eligibility Checks: Seamless integration with VA systems to confirm eligibility for community care.",
            "Accessible Design: Ensured WCAG AA compliance for all components and user flows.",
            "Mobile-First Approach: Designed for a responsive experience across all devices.",
          ],
        },
      ],
    },
    {
      title: "Results & Impact",
      content: [
        {
          type: "paragraph",
          text: "The direct online scheduling system dramatically improved the experience for Veterans:",
        },
        {
          type: "list",
          items: [
            "Reduced average time to book an appointment from weeks (via phone) to minutes online.",
            "Significant increase in Veteran satisfaction with the scheduling process.",
            "Decreased call volume to VA staff regarding appointment scheduling.",
            "Positive feedback on the ease of use and accessibility of the online tool.",
          ],
        },
      ],
    },
  ],
}
