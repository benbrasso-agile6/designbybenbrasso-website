import type { CaseStudy } from "@/app/data/case-study-types"

export const providerOnlineSchedulingData: CaseStudy = {
  pageTitle: "Provider online scheduling",
  mainImage: {
    src: "/images/work/provider-online-scheduling/provider-scheduling-hero.png",
    alt: "Provider online scheduling hero image",
    width: 1200,
    height: 600,
    priority: true,
  },
  projectOverviewBanner: {
    role: "Lead UX Designer",
    timeline: "2024 - Present",
    team: "Cross-functional team of 8",
    tools: ["Figma", "Miro", "UserZoom", "Analytics"],
    overview:
      "Designing self-scheduling capabilities for Veterans to book appointments with community care providers, addressing federal requirements and improving access to care.",
  },
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
          text: 'And, most recently, Veterans Affairs Secretary Doug Collins testified before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies on May 15, 2025 that "the External Provider Scheduling (EPS) tool rollout will continue without disruption under the current administration."',
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "This is placeholder content for the Challenge section. Replace this with the actual challenges faced in the provider online scheduling project, such as technical constraints, user needs, regulatory requirements, or system integration issues.",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "This is placeholder content for the Action section. Replace this with the specific actions taken to address the challenges, including research methods, design processes, stakeholder collaboration, and implementation strategies.",
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "paragraph",
          text: "This is placeholder content for the Key Outcomes section. Replace this with the actual results and impact of the project, including metrics, user feedback, and business outcomes.",
        },
      ],
    },
  ],
}
