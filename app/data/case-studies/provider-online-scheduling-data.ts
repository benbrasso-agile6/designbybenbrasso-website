import type { CaseStudyData } from "../case-study-types"

export const providerOnlineSchedulingData: CaseStudyData = {
  metaTitle: "Provider Online Scheduling | Ben Brasso",
  metaDescription:
    "Designing the scheduling experience for referrals on VA.gov and streamlined the process from weeks to minutes.",

  title: "Provider online scheduling",
  subtitle: "Designing the scheduling experience for referrals on VA.gov",
  heroImage: "/images/work/provider-online-scheduling/provider-scheduling-hero.png",

  projectDetails: {
    role: "Lead UX Designer",
    timeline: "6 months",
    team: "Product Manager, Engineers, Researchers",
    tools: ["Figma", "Miro", "UserTesting", "Analytics"],
  },

  sections: [
    {
      id: "background",
      title: "Background",
      content: `The Cleland-Dole Act, 2022, expanding the Consolidated Appropriations Act, 2023, addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology, and more.

Requirements under this federal law allow Veterans seeking primary care, specialty care, and mental health care under the Veteranʼs Community Care Program to self-schedule, modify, and cancel appointments directly online, and requires VA to expand its capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology.

In January 2025, Veterans self-scheduled 18,166 appointments with VA providers on the VA.gov platform, whereas 0 were self-scheduled online with community care providers. 

According to Community Care Referral and Authorization (CCRA) Managed Services and the Office of Integrated Veteran Care (IVC), Veterans requesting community care appointments requires VA staff intervention to schedule: a process that varies in time to complete from days to weeks. 

And, most recently, Veterans Affairs Secretary Doug Collins testified before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies on May 15, 2025 that "the External Provider Scheduling (EPS) tool rollout will continue without disruption under the current administration."`,
    },
    {
      id: "challenge",
      title: "Challenge",
      content: `Veterans face significant barriers when trying to schedule appointments with community care providers. The current process requires multiple touchpoints with VA staff, creating delays that can extend from days to weeks. This manual intervention creates bottlenecks and frustration for Veterans who need timely access to healthcare services.

Key challenges included:
• Manual scheduling processes requiring VA staff intervention
• Inconsistent wait times ranging from days to weeks
• Zero self-scheduled appointments with community care providers
• Lack of transparency in the scheduling process
• Veterans unable to modify or cancel appointments independently

The challenge was to design a self-service scheduling system that would meet federal requirements while providing Veterans with the autonomy and efficiency they deserve.`,
    },
    {
      id: "action",
      title: "Action",
      content: `Our approach focused on creating a seamless, self-service scheduling experience that would integrate with existing VA systems while meeting the requirements of the Cleland-Dole Act.

Research & Discovery:
• Conducted user interviews with Veterans to understand current pain points
• Analyzed existing VA.gov scheduling patterns and user behavior
• Collaborated with CCRA Managed Services and IVC teams
• Reviewed federal compliance requirements

Design Process:
• Created user journey maps for the current and future state
• Developed wireframes and prototypes for the scheduling flow
• Designed responsive interfaces for desktop and mobile
• Established design patterns consistent with VA.gov design system

Key Features Designed:
• Self-service appointment scheduling interface
• Appointment modification and cancellation capabilities
• Provider search and filtering functionality
• Integration with existing VA authentication systems
• Real-time availability display`,
    },
    {
      id: "key-outcomes",
      title: "Key Outcomes",
      content: `The provider online scheduling solution is designed to transform how Veterans access community care appointments, with projected outcomes based on current VA.gov scheduling data.

Expected Impact:
• Reduce scheduling time from weeks to minutes
• Enable 100% self-service scheduling for community care
• Decrease VA staff workload for manual scheduling tasks
• Improve Veteran satisfaction with the scheduling process

Success Metrics:
• Target: Match the 18,166+ monthly self-scheduled appointments seen with VA providers
• Reduce average scheduling time by 90%
• Achieve 85%+ user satisfaction scores
• Decrease support tickets related to scheduling by 70%

The External Provider Scheduling (EPS) tool rollout continues as planned, ensuring Veterans will have the self-service capabilities required by federal law while improving their overall healthcare experience.`,
    },
  ],

  images: [
    {
      src: "/images/work/provider-online-scheduling/provider-scheduling-hero.png",
      alt: "Provider online scheduling interface design",
      caption: "The new self-service scheduling interface for community care providers",
    },
  ],

  nextProject: {
    title: "Patient check-in",
    slug: "patient-check-in",
    url: "/work/patient-check-in",
  },
}
