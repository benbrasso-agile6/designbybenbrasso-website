import type { CaseStudyData } from "../case-study-types"

export const providerOnlineSchedulingData: CaseStudyData = {
  slug: "provider-online-scheduling",
  pageTitle: "Community Care Provider Online Scheduling",
  metaTitle: "Community Care Provider Online Scheduling | Work | designbybenbrasso",
  metaDescription:
    "UX design case study for enabling Veterans to self-schedule community care appointments directly on VA.gov.",
  projectOverviewBanner: {
    description:
      "The goal of this project was to quickly design and build an appointment scheduling experience that allowed Veterans to choose a community care provider and time slot—a first for VA.gov. This solution enabled Veterans to self-schedule appointments directly and securely through the trusted VA.gov platform.",
    skills:
      "HCD and product leadership, UX product design, UX research and synthesis, executive communication, data storytelling, stakeholder advocate, consensus-builder, service design, information architecture, prototyping, accessibility design",
    tools: "Figma, Mural, GitHub, CodePen, Visio, VA.gov Design System, UserZoom, Axe DevTools, Optimal Workshop, WellHive Care Navigation API-Docs",
    date: "April 2024 – January 2025",
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
          text: "<strong>Understanding the current state of the community care appointment request and referral ecosystem was the first order of business:</strong>",
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
        {
          type: "paragraph",
          text: "However, as we continued discovery research, <strong>we uncovered even more VA and external systems, coordination steps, interdependencies, and people involved in the community care appointment scheduling process</strong>. What began as a small Scrum team quickly grew into a large, coordinated effort involving Veteran-facing product teams, care teams, clinical operations, API teams, project management groups, and our External Provider Scheduling (EPS) team.",
        },    
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751230124/Frame_586_wj3vbv.png",
          alt: "Workflow of the larger community care scheduling coordination activities and VA systems",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },   
        {
          type: "paragraph",
          text: "While cross-team coordination and project management functions were still being established, our team—responsible for the Veteran-facing experience on VA.gov—needed to act quickly. Based on what we had learned during discovery, <strong>we pivoted toward placing a prototype in front of Veterans to begin gathering feedback. This was especially important because direct scheduling with a provider would be a first for VA.gov.</strong>",
        },  
        {
          type: "paragraph",
          text: "<strong>We grounded our initial design swagger and approach in findings from prior user research</strong>, and we also drew inspiration from the private sector—where direct online scheduling for new patients became widely adopted in the mid-to-late 2010s. Epic’s Open Scheduling played a key role in driving that trend.",
        },        
        {
          type: "paragraph",
          text: '<a href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability" target="_blank" rel="noopener noreferrer">Prior research conducted by an adjacent Veteran-facing product team—focused on provider selection for community care appointments</a>—uncovered key insights from Veterans in late 2020:',
        },  
        {
          type: "list",
          items: [
            "Participants wanted a more personalized list of providers. Most hoped to schedule with someone they had seen before or had researched on their own.",
            "<strong>Appointment availability was top of mind. Veterans wanted to know how soon they could be seen,</strong> or whether a provider was available on specific dates.",
            "<strong>While distance was useful, some preferred an alphabetical list to easily find providers they already knew.</strong> Many said they would research providers ahead of time—often checking review sites to understand a provider’s reputation.",
          ],
        },  
        {
          type: "paragraph",
          text: "<strong>We grounded our initial design swagger and approach in findings from prior user research</strong>, and we also drew inspiration from the private sector—where direct online scheduling for new patients became widely adopted in the mid-to-late 2010s. Epic’s Open Scheduling played a key role in driving that trend.",
        },      
        {
          type: "paragraph",
          text: "<strong>We grounded our initial design swagger and approach in findings from prior user research</strong>, and we also drew inspiration from the private sector—where direct online scheduling for new patients became widely adopted in the mid-to-late 2010s. Epic’s Open Scheduling played a key role in driving that trend.",
        },
        {
          type: "paragraph",
          text: "<strong>We grounded our initial design swagger and approach in findings from prior user research</strong>, and we also drew inspiration from the private sector—where direct online scheduling for new patients became widely adopted in the mid-to-late 2010s. Epic’s Open Scheduling played a key role in driving that trend.",
        },                         
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751499549/CleanShot_2025-07-02_at_19.37.28_boqvds.gif",
          alt: "Userflow options for the community care provider scheduling process",
          width: 800,
          height: 450,
          className: "rounded-lg w-full object-cover border-2 border-neutral-700 dark:border-neutral-600",
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
