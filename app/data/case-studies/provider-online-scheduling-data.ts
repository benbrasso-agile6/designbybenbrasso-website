import type { CaseStudyData } from "../case-study-types"

export const providerOnlineSchedulingData: CaseStudyData = {
  slug: "provider-online-scheduling",
  pageTitle: "Provider Online Scheduling for Community Care",
  metaTitle: "Case Study: Provider Online Scheduling for Community Care - Ben Brasso",
  metaDescription:
    "A case study on designing and implementing a direct online scheduling solution for Veterans seeking community care providers.",
  projectOverviewBanner: {
    description:
      "A project focused on enabling Veterans to self-schedule, modify, and cancel appointments directly online with community care providers, as mandated by the Cleland-Dole Act.",
    skills: "Product Design, UX Research, UX/UI Design, Prototyping, User Testing",
    tools: "Figma, Mural, GitHub, Slack, Zoom",
    date: "2025 – Present",
  },
  mainImage: {
    src: "/images/work/provider-online-scheduling/provider-scheduling-hero.png",
    alt: "Hero image for the Provider Online Scheduling project.",
    width: 1200,
    height: 630,
    priority: true,
  },
  projectDetails: [],
  sections: [
    {
      title: "Background",
      content: [
        {
          type: "paragraph",
          text: "The Cleland-Dole Act, 2022, expanding the Consolidated Appropriations Act, 2023, addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology, and more.",
        },
        {
          type: "paragraph",
          text: "Requirements under this federal law allow Veterans seeking primary care, specialty care, and mental health care under the Veteranʼs Community Care Program to self-schedule, modify, and cancel appointments directly online, and requires VA to expand its capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology.",
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
          text: "And, most recently, Veterans Affairs Secretary Doug Collins testified before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies on May 15, 2025 that “the External Provider Scheduling (EPS) tool rollout will continue without disruption under the current administration.”",
        },
      ],
    },
  ],
}
