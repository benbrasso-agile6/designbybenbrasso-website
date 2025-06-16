import type { CaseStudyData } from "../case-study-types"

export const patientCheckInData: CaseStudyData = {
  slug: "patient-check-in",
  pageTitle: "Mobile Patient Check-in",
  metaTitle: "Case Study: Mobile Patient Check-in | Ben Brasso",
  metaDescription:
    "UX design case study for a mobile patient check-in application, focusing on accessibility and ease of use by Ben Brasso.",
  projectOverviewBanner: {
    description:
      "Designed a new mobile patient check-in application from the ground up, focusing on accessibility, ease of use for all age groups, and a seamless pre-appointment experience for VA medical centers.",
    skills: "Mobile UX/UI Design, Accessibility Design, User Research, Information Architecture, Usability Testing",
    tools: "Figma, VA.gov Design System, Storybook, UserZoom, Axe DevTools",
    date: "March 2022 - November 2022",
  },
  projectDetails: [
    { label: "Client Type", value: "Government Agency (Healthcare)" },
    { label: "Role", value: ["Lead UX/UI Designer", "Accessibility Advocate"] },
    { label: "Timeline", value: "8 Months" },
    { label: "Tools", value: ["Figma", "VA.gov Design System", "Storybook", "UserZoom"] },
  ],
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749261703/Frame_535_mcx97r.png",
    alt: "Mobile Patient Check-in project showcase showing mobile interface design",
    width: 800,
    height: 450,
    priority: true,
    className: "rounded-lg my-6 w-full object-cover",
  },
  sections: [
    {
      title: "Background",
      content: [
        {
          type: "paragraph",
          text: "Traditional patient check-in processes at VA medical centers relied heavily on paper forms and manual data entry, creating bottlenecks and potential for errors. Veterans often experienced long wait times and frustration with outdated systems.",
        },
        {
          type: "paragraph",
          text: "The COVID-19 pandemic accelerated the need for contactless solutions, making mobile check-in not just a convenience but a necessity for safe healthcare delivery.",
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "How might we create a mobile check-in experience that serves Veterans of all ages and technical abilities while maintaining strict security standards and integrating seamlessly with existing VA systems?",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "<strong>We conducted extensive user research including on-site observations at VA medical centers, interviews with Veterans and clinic staff, and accessibility testing with assistive technologies.</strong>",
        },
        {
          type: "paragraph",
          text: "The design process emphasized accessibility-first principles, ensuring WCAG AA compliance throughout. We created large tap targets, high contrast options, and full screen reader compatibility.",
        },
        {
          type: "paragraph",
          text: "<strong>Key innovations included one-tap check-in, integrated travel reimbursement filing, and real-time appointment status updates.</strong>",
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "list",
          items: [
            "<strong>Increased usage by 4x within the first month</strong> of pilot launch across participating VA medical centers.",
            "<strong>Reduced average check-in time from 15 minutes to under 2 minutes</strong> for most appointments.",
            "<strong>Decreased waiting room congestion by 35%</strong> improving social distancing and overall clinic flow.",
            "<strong>Achieved 95% user satisfaction score</strong> in post-implementation surveys.",
            "<strong>Improved data accuracy by 60%</strong> through digital verification processes.",
            "<strong>Successfully integrated travel reimbursement filing</strong> saving Veterans additional trips and paperwork.",
          ],
        },
      ],
    },
    {
      id: "applicable-law",
      title: "Most applicable law this work supports",
      content: [
        {
          type: "h3",
          text: "Which law supports this work the most?",
        },
        {
          type: "paragraph",
          text: '<a href="https://www.congress.gov/bill/115th-congress/senate-bill/2372" target="_blank" rel="noopener noreferrer">Review the VA MISSION Act of 2018 on the congress.gov website</a>',
        },
        {
          type: "h3",
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
