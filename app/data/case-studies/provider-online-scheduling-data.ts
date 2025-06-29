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
          text: 'Requirements under this federal law allow Veterans seeking primary care, specialty care, and mental health care under the <a href="https://www.va.gov/resources/about-our-va-community-care-network-and-covered-services/" target="_blank" rel="noopener noreferrer">Veteran\'s Community Care Program</a> to self-schedule, modify, and cancel appointments directly online, and <strong>requires VA to expand its capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology.</strong>',
        },
        {
          type: "paragraph",
          text: "In January 2025, Veterans self-scheduled 18,166 appointments with VA providers on the VA.gov platform, whereas 0 were self-scheduled online with community care providers.",
        },
        {
          type: "paragraph",
          text: "According to the Community Care Referral and Authorization (CCRA) Managed Services team and the Office of Integrated Veteran Care (IVC), <strong>scheduling community care appointments for Veterans requires VA staff intervention—a process that can take anywhere from several days to a few weeks to complete.</strong>",
        },
        {
          type: "paragraph",
          text: 'Most recently, on May 15, 2025, testifying before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies about the technology linking agency scheduling systems to community providers, <a href="https://fedscoop.com/va-secretary-promises-progress-on-ehr-rollout-amid-major-workforce-cuts/" target="_blank" rel="noopener noreferrer">Veterans Affairs Secretary Doug Collins pledged "that the rollout of the External Provider Scheduling (EPS) tool would continue without disruption"</a>.',
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "<strong>How might we take an existing staff-oriented process that takes days or weeks down to minutes and empower Veterans to self-schedule appointments for their own community care authorized referrals on the VA.gov platform?</strong>",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "Understanding the current state of the community care appointment request and referral ecosystem was the first order of business:",
        },
        {
          type: "list",
          items: [
            "How do Veterans request an appointment with a community care provider?",
            "What are the required steps for VHA clinical and support staff to authorize a referral?",
          ],
        },
        {
          type: "paragraph",
          text: "Admittedly, the existing workflow didn’t appear overly complex. However, <strong>the real challenge was navigating a technology and process shift—from a mostly offline system that relied on phone tag between the Veteran, VA staff, and community care providers, to an online solution</strong> that empowered Veterans to schedule appointments with eligible community providers in real time, with those appointments written back into VA systems to ensure continuity.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751162919/Frame_584_kfpnnc.png",
          alt: "Workflow of the existing process for requesting and scheduling a community care appointment",
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
            "Conservatively, if we use 7 days as the current baseline for how long it takes staff to manually schedule a community care appointment for a Veteran, that's roughly 10,080 minutes. At one pilot site using the External Provider Scheduling (EPS) platform, staff are completing the same task in just 7 minutes on average—<strong>a potential time savings of 10,073 minutes per appointment. When applied to approximately 250,000 community care authorized referrals per month, that translates to a potential savings of over 41 million minutes—or nearly 700,000 hours—each month.</strong>",
            "<strong>(Placeholder) Increase Veteran satisfaction:</strong> Improve the overall experience and satisfaction for Veterans seeking community care.",
            "<strong>(Placeholder) Reduce staff workload:</strong> Automate the scheduling process to free up VA staff from manual coordination.",
            "<strong>(Placeholder) Achieve feature parity:</strong> Provide an online scheduling experience for community care that is as seamless as the existing one for VA-based care.",
          ],
        },
      ],
    },
  ],
}
