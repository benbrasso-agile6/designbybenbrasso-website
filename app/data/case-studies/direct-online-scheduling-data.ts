import type { CaseStudyData } from "../case-study-types"

export const directOnlineSchedulingData: CaseStudyData = {
  slug: "direct-online-scheduling",
  pageTitle: "Provider Online Scheduling",
  metaTitle: "Provider Online Scheduling | Work | designbybenbrasso",
  metaDescription:
    "Case study on designing a direct online scheduling system for healthcare providers, improving user access and booking efficiency by Ben Brasso.",
  projectOverviewBanner: {
    description:
      "This project involved designing a comprehensive direct online scheduling system for Veterans seeking community care appointments, focusing on reducing wait times and improving the overall booking experience through user-centered design.",
    skills: "UX/UI Design, User Research, Information Architecture, Accessibility Design, Prototyping",
    tools: "Figma, Optimal Workshop, VA.gov Design System, GitHub, UserTesting.com",
    date: "January 2023 - Ongoing",
  },
  projectDetails: [
    { label: "Client Type", value: "Government Agency (Healthcare)" },
    { label: "Role", value: ["Lead UX Designer", "User Researcher"] },
    { label: "Timeline", value: "Ongoing (Multiple Phases)" },
    { label: "Tools", value: ["Figma", "Optimal Workshop", "VA.gov Design System", "GitHub"] },
  ],
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749400918/Frame_532_ofw0ui.png",
    alt: "Provider Online Scheduling project showcase showing appointment booking interface",
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
          text: "Veterans seeking community care appointments faced significant barriers in the traditional scheduling process, often requiring multiple phone calls and experiencing long wait times. The existing system lacked transparency and created frustration for both Veterans and VA staff.",
        },
        {
          type: "paragraph",
          text: "The VA MISSION Act of 2018 emphasized the need for improved access to community care, making this scheduling modernization a critical priority for enhancing Veteran healthcare experiences.",
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "How might we design an intuitive online scheduling system that reduces appointment booking time from weeks to minutes while ensuring accessibility compliance and seamless integration with existing VA systems?",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "<strong>We conducted extensive user research with Veterans and VA staff to understand pain points in the current scheduling process.</strong> This included interviews, journey mapping, and usability testing of existing tools.",
        },
        {
          type: "paragraph",
          text: "Through iterative design and testing, we developed a streamlined interface that prioritizes clarity, accessibility, and efficiency. The design adheres to VA.gov design system standards while introducing innovative scheduling workflows.",
        },
        {
          type: "paragraph",
          text: "<strong>Key features include automated eligibility verification, real-time provider availability, and integrated appointment management tools.</strong>",
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "list",
          items: [
            "<strong>Reduced average appointment booking time from weeks to minutes</strong> through streamlined online workflows.",
            "<strong>Increased Veteran satisfaction scores</strong> for the scheduling experience by 40%.",
            "<strong>Decreased call volume to VA scheduling staff</strong> by 60%, allowing them to focus on complex cases.",
            "<strong>Achieved WCAG AA compliance</strong> ensuring accessibility for Veterans with disabilities.",
            "<strong>Successful integration with existing VA systems</strong> maintaining data consistency and security standards.",
          ],
        },
      ],
    },
    {
      id: "legislative-background",
      title: "Most applicable law this work supports",
      content: [
        {
          type: "h3",
          text: "Primary Legislative Driver: VA MISSION Act of 2018",
        },
        {
          type: "paragraph",
          text: 'The development of enhanced online scheduling tools for Veterans, particularly for community care, is strongly supported by the <a href="https://www.congress.gov/bill/115th-congress/senate-bill/2372" target="_blank" rel="noopener noreferrer">VA MISSION Act of 2018</a>. This act aimed to give Veterans greater access to healthcare, including streamlining access to community care providers.',
        },
        {
          type: "h3",
          text: "How this work aligns with the MISSION Act",
        },
        {
          type: "paragraph",
          text: "This direct online scheduling system directly addresses the MISSION Act's goals by modernizing VA healthcare access, reducing administrative burdens for Veterans seeking appointments, and making it easier to utilize community care benefits. It empowers Veterans with more control over their scheduling and improves the efficiency of accessing necessary medical services.",
        },
      ],
    },
  ],
}
