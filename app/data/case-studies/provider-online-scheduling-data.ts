import type { CaseStudyData } from "../case-study-types"

export const providerOnlineSchedulingData: CaseStudyData = {
  slug: "provider-online-scheduling",
  pageTitle: "Provider Online Scheduling",
  metaTitle: "Provider Online Scheduling | Work | designbybenbrasso",
  metaDescription:
    "UX design case study for enabling Veterans to self-schedule community care appointments directly online.",
  projectOverviewBanner: {
    description:
      "The goal of this project is to design and build an online scheduling experience for community care providers that mirrors the success of VA-provider self-scheduling on VA.gov, enabling Veterans to self-schedule appointments directly online.",
    skills:
      "HCD and product leadership, UX product design, UX research and synthesis, storytelling, service design, information architecture, prototyping",
    tools: "Figma, FigJam, Mural, GitHub, CodePen, Playwright",
    date: "2024 – Present",
  },
  sections: [
    {
      title: "Background",
      content: [
        {
          type: "paragraph",
          text: 'The <a href="https://www.congress.gov/bill/117th-congress/senate-bill/3369" target="_blank" rel="noopener noreferrer">Cleland-Dole Act, 2022</a>, expanding the <a href="https://www.congress.gov/bill/117th-congress/house-bill/2617/text" target="_blank" rel="noopener noreferrer">Consolidated Appropriations Act, 2023</a>, addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology, and more.',
        },
        {
          type: "paragraph",
          text: "Requirements under this federal law allow Veterans seeking primary care, specialty care, and mental health care under the Veteran’s Community Care Program to self-schedule, modify, and cancel appointments directly online, and requires VA to expand its capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology.",
        },
        {
          type: "paragraph",
          text: "In January 2025, Veterans self-scheduled 18,166 appointments with VA providers on the VA.gov platform, whereas 0 were self-scheduled online with community care providers.",
        },
        {
          type: "paragraph",
          text: "According to Community Care Referral and Authorization (CCRA) Managed Services and the Office of Integrated Veteran Care (IVC), Veterans requesting community care appointments requires VA staff intervention to schedule: a process that varies in time to complete from days to weeks.",
        },
        {
          type: "paragraph",
          text: 'And, most recently, Veterans Affairs Secretary Doug Collins testified before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies on May 15, 2025 that "the External Provider Scheduling (EPS) tool rollout will continue without disruption under the current administration.”',
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "This is placeholder content for the Challenge section. The main challenge is to create a seamless and intuitive online scheduling experience for Veterans to book appointments with community care providers, addressing the complexities of integrating with various external provider systems while maintaining VA's security and accessibility standards.",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "This is placeholder content for the Action section. Our team is employing a human-centered design methodology, starting with foundational research to understand Veteran needs and pain points. We will proceed with iterative design, prototyping, and usability testing to develop a solution that is both effective and user-friendly.",
        },
        {
          type: "image",
          src: "/placeholder.svg?width=800&height=450&query=wireframe+of+a+scheduling+app",
          alt: "Placeholder image of wireframes for the scheduling tool.",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "list",
          items: [
            "<strong>(Placeholder) Reduce scheduling time:</strong> Aim to decrease the time it takes for a Veteran to schedule a community care appointment from weeks to minutes.",
            "<strong>(Placeholder) Increase Veteran satisfaction:</strong> Improve the overall experience and satisfaction for Veterans seeking community care.",
            "<strong>(Placeholder) Reduce staff workload:</strong> Automate the scheduling process to free up VA staff from manual coordination.",
            "<strong>(Placeholder) Achieve feature parity:</strong> Provide an online scheduling experience for community care that is as seamless as the existing one for VA-based care.",
          ],
        },
      ],
    },
  ],
}
