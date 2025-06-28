import type { CaseStudyData } from "../case-study-types"

export const providerOnlineSchedulingData: CaseStudyData = {
  slug: "provider-online-scheduling",
  title: "Provider online scheduling",
  subtitle: "Designing the scheduling experience for referrals on VA.gov",
  description: "Streamlined the process from weeks to minutes",
  heroImage: "/images/work/provider-online-scheduling/provider-scheduling-hero.png",
  projectDetails: {
    role: "Lead UX Designer",
    timeline: "6 months",
    team: "Product Manager, Engineers, Researchers",
    tools: ["Figma", "Miro", "UserTesting", "Analytics"],
  },
  sections: [
    {
      type: "text",
      title: "Background",
      content: `The Cleland-Dole Act, 2022, expanding the Consolidated Appropriations Act, 2023, addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology, and more.

Requirements under this federal law allow Veterans seeking primary care, specialty care, and mental health care under the Veteranʼs Community Care Program to self-schedule, modify, and cancel appointments directly online, and requires VA to expand its capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology.

In January 2025, Veterans self-scheduled 18,166 appointments with VA providers on the VA.gov platform, whereas 0 were self-scheduled online with community care providers.

According to Community Care Referral and Authorization (CCRA) Managed Services and the Office of Integrated Veteran Care (IVC), Veterans requesting community care appointments requires VA staff intervention to schedule: a process that varies in time to complete from days to weeks.

And, most recently, Veterans Affairs Secretary Doug Collins testified before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies on May 15, 2025 that "the External Provider Scheduling (EPS) tool rollout will continue without disruption under the current administration."`,
    },
  ],
}
