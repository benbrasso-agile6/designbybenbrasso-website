import type { CaseStudyData } from "../case-study-types"

export const patientCheckInData: CaseStudyData = {
  slug: "patient-check-in",
  pageTitle: "Mobile Patient Check-in",
  metaTitle: "Case Study: Mobile Patient Check-in | Ben Brasso",
  metaDescription:
    "UX design case study for a mobile patient check-in application, focusing on accessibility and ease of use by Ben Brasso.",
  leadParagraph:
    "Designed a new mobile patient check-in application from the ground up, focusing on accessibility, ease of use for all age groups, and a seamless pre-appointment experience for VA medical centers.",
  anchorLink: {
    text: "Most applicable law this work supports",
    href: "#applicable-law", // This ID must match the ID of the target section
  },
  projectDetails: [
    { label: "Client Type", value: "Government Agency (Healthcare)" },
    { label: "Role", value: ["Lead UX/UI Designer", "Accessibility Advocate"] },
    { label: "Timeline", value: "8 Months" },
    { label: "Tools", value: ["Figma", "VA.gov Design System", "Storybook", "UserZoom"] },
  ],
  mainImage: {
    src: "/placeholder.svg?width=800&height=450",
    alt: "Mobile Patient Check-in project showcase",
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
          text: "Traditional patient check-in processes at VA medical centers were often paper-based, leading to long wait times and potential data entry errors. The goal was to create a mobile application that would allow Veterans to check-in for appointments quickly and easily, verify their information, and even manage travel reimbursement claims, all while adhering to strict accessibility standards.",
        },
      ],
    },
    {
      title: "My Role & Process",
      content: [
        { type: "paragraph", text: "I led the UX/UI design efforts, which involved:" },
        {
          type: "list",
          items: [
            "User Research & Discovery: Conducted on-site observations, interviews with Veterans and clinic staff, and analyzed existing check-in workflows.",
            "Information Architecture & User Flows: Designed a clear and logical structure for the app, focusing on minimal steps and intuitive navigation.",
            "Wireframing & Prototyping: Created detailed wireframes and interactive prototypes in Figma, iterating based on user feedback and stakeholder reviews.",
            "UI Design & Accessibility: Developed a clean, modern visual identity aligned with the VA.gov design system, ensuring WCAG AA compliance throughout.",
            "Accessibility Testing: Collaborated with accessibility specialists and conducted testing with Veterans using assistive technologies.",
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
            "Simplified Check-in: One-tap check-in for confirmed appointments.",
            "Information Verification: Easy review and update of personal and insurance information.",
            "Travel Reimbursement Integration: Seamless process to file for travel pay benefits during check-in.",
            "Appointment Reminders & Details: Clear display of upcoming appointment information.",
            "Accessibility First: Designed with large tap targets, adjustable font sizes, high contrast options, and full screen reader compatibility.",
          ],
        },
      ],
    },
    {
      title: "Results & Impact",
      content: [
        {
          type: "paragraph",
          text: "The mobile patient check-in app significantly modernized the VA appointment experience:",
        },
        {
          type: "list",
          items: [
            "Increased usage by 4x within the first month of pilot launch.",
            "Drastic reduction in check-in times and clinic waiting room congestion.",
            "Improved data accuracy due to digital verification.",
            "Highly positive feedback from Veterans, particularly regarding ease of use and the integrated travel reimbursement feature.",
          ],
        },
      ],
    },
    {
      id: "applicable-law", // Added ID for the anchor link target
      title: "Most applicable law this work supports",
      content: [
        {
          type: "paragraph",
          text: "Which law supports this work the most?",
        },
        {
          type: "paragraph",
          // Ensure HTML is correctly escaped for the string, but will be rendered by dangerouslySetInnerHTML
          text: '<a href="https://www.congress.gov/bill/115th-congress/senate-bill/2372" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 underline">VA MISSION Act of 2018 <span aria-label="(opens in a new tab)" class="text-sm">&#x2197;</span></a>',
        },
        {
          type: "paragraph",
          text: "How is this work related to the law?",
        },
        {
          type: "paragraph",
          text: "The MISSION Act (Maintaining Internal Systems and Strengthening Integrated Outside Networks) did more than expand access to community care. It also called for the VA to modernize how it delivers health care. This means using new tools—like smartphone check-in—to make it easier for veterans to access services, reduce wait times, and improve the overall experience at VA facilities.",
        },
      ],
    },
  ],
}
