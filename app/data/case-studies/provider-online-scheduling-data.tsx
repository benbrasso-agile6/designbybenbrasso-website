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
    role: "Lead product designer responsible for research strategy, defining the self-scheduling flow, stakeholder alignment, and leading design decision-making across product, engineering, and clinical partners.",
    skills:
      "HCD and product leadership, UX product design, UX research and synthesis, executive communication, data storytelling, stakeholder advocate, consensus-builder, service design, information architecture, prototyping, accessibility specialist",
    tools:
      "Figma, Mural, GitHub, CodePen, Visio, VA.gov Design System, UserZoom, Axe DevTools, Optimal Workshop, WellHive Care Navigation API-Docs",
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
          text: 'Requirements under this federal law allow Veterans seeking primary care, specialty care, and mental health care under the <a href="https://www.va.gov/resources/about-our-va-community-care-network-and-covered-services/" target="_blank" rel="noopener noreferrer">Veteran’s Community Care Program</a> to self-schedule, modify, and cancel appointments directly online, and <strong>requires VA to expand its capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology.</strong>',
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
          text: 'Most recently, on May 15, 2025, testifying before the House Appropriations Subcommittee on Military Construction, Veterans Affairs, and Related Agencies about the technology linking agency scheduling systems to community providers, <a href="https://fedscoop.com/va-secretary-promises-progress-on-ehr-rollout-amid-major-workforce-cuts/" target="_blank" rel="noopener noreferrer">Veterans Affairs Secretary Doug Collins pledged “that the rollout of the External Provider Scheduling (EPS) tool would continue without disruption”</a>.',
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "How might we take an existing staff-oriented process that takes days or weeks down to minutes and empower Veterans to self-schedule appointments for their own community care authorized referrals on the VA.gov platform?",
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
          text: "Veterans prioritized appointment availability and the ability to sort providers by distance or last name (A–Z), which gave us a clear North Star when exploring userflow options.",
        },
        {
          type: "paragraph",
          text: "While most participants were able to use the provider availability filter successfully, testing surfaced an accessibility issue for a screen reader user that we needed to address before moving forward.",
        },
        {
          type: "paragraph",
          text: "At the same time, <strong>we had to balance several competing priorities to define our minimum viable product (MVP). These included aligning with existing VA.gov scheduling design patterns, keeping the experience low in cognitive load, ensuring timely access to accurate data, and accounting for how much information the EPS and VA system APIs could return</strong> in one or multiple calls—factors that could directly affect page load performance.",
        },
        {
          type: "paragraph",
          text: "<strong>We made a “big bet” that Veterans would prefer a userflow with fewer steps and provider availability accessible as early as possible.</strong> However, because we were designing in parallel with technical discovery around API capabilities, we had to remain flexible. This meant preparing for multiple userflows in case our preferred approach wasn't technically feasible.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751499549/CleanShot_2025-07-02_at_19.37.28_boqvds.gif",
          alt: "Userflow options for the community care provider scheduling process",
          width: 800,
          height: 450,
          className: "rounded-lg w-full object-cover border-2 border-neutral-700 dark:border-neutral-600",
        },
        {
          type: "paragraph",
          text: "Our research goal was to understand how Veterans navigated referrals and where the biggest pain points were in the scheduling journey — particularly for accessibility users and first-time schedulers.",
        },
        {
          type: "paragraph",
          text: "We chose usability testing, contextual inquiry, and prototype concept testing to ensure we could both validate task flows and uncover mental-model mismatches.",
        },
        {
          type: "paragraph",
          text: '<strong>We conducted a <a href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/research/2024-06%20Community%20Care%20Self-Scheduling%20-%20Usability%20and%20Concept%20Testing" target="_blank" rel="noopener noreferrer">remote, moderated research study with Veterans</a> that included 3 methods of collecting feedback:</strong>',
        },
        {
          type: "numeric-list",
          items: [
            "<strong>Contextual inquiry through a semi-structured interview</strong> to obtain information on how Veterans schedule community care appointments, how they think about referrals, and where they access or would access referrals online.",
            "<strong>Usability testing</strong> for self-scheduling a VA approved community care appointment using a Figma prototype for sighted users and a CodePen prototype for assistive technology (AT) users.",
            "<strong>Concept testing to obtain feedback on a prototype</strong> for finding VA approved community care referrals on VA.gov that need to be self-scheduled and accessing referrals from past appointments.",
          ],
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751573044/CleanShot_2025-07-03_at_16.01.57_wszt2p.gif",
          alt: "Community care appointment scheduling user interface process",
          width: 400,
          height: 225,
          className: "rounded-lg mt-12 mb-6 mx-auto object-cover",
        },
        {
          type: "paragraph",
          text: "15 Veterans—including four who used assistive technology—participated in remote, moderated concept and usability testing of the community care self-scheduling prototype. <strong>Veterans were generally able to complete all tasks and navigate the scheduling process with ease,</strong> though a few friction points emerged. Despite this, many offered unprompted positive feedback about the tool.",
        },
        {
          type: "label",
          text: "Accessibility finding → design decision",
        },
        {
          type: "paragraph",
          text: "12 of the 13 participants were able to find the call to action to review provider availability. However, one screen reader user (using JAWS) encountered significant issues navigating the provider list page and was unable to proceed.",
        },
        {
          type: "paragraph",
          text: "<strong>Because a screen reader participant was blocked by the provider availability pattern during testing, I simplified the provider list interaction and deprioritized advanced filtering for MVP</strong> to ensure all Veterans could complete scheduling without assistive-technology blockers.",
        },
        {
          type: "paragraph",
          text: 'In parallel, Veterans responded positively to the filter and sort interface. Based on this feedback, <a href="https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3185" target="_blank" rel="noopener noreferrer">the filter and sort design pattern was contributed to the VA.gov Design System</a>, where it later <a href="https://design.va.gov/templates/search-results" target="_blank" rel="noopener noreferrer">helped shape a new experimental search results component</a>.',
        },
        {
          type: "paragraph",
          text: "<strong>Key takeaways:</strong>",
        },
        {
          type: "list",
          items: [
            "Veterans don’t have a strong mental model for finding referrals on VA.gov and benefit from multiple access points.",
            "The self-scheduling process—from referral notification to booking—generally met expectations but could be improved by clarifying content, enhancing filter value, and improving some screen reader accessibility.",
            "Veterans expect VA to follow up with timely reminders to schedule, even when they choose to self-schedule.",
          ],
        },
        {
          type: "paragraph",
          text: "While the Veteran-facing experience was being rapidly designed and tested, we also <strong>created an ecosystem map to give leadership, engineers, product managers, privacy officers, VA scheduling staff, and external partners a shared understanding of all the moving parts.</strong> The map helped visualize the people, systems, tools, environments, and dependencies involved in delivering a high-quality care experience for Veterans.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751586617/CleanShot_2025-07-03_at_19.47.21_rmviky.gif",
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
            "<strong>Enabled a first-of-its-kind digital experience on VA.gov,</strong> allowing Veterans to self-schedule community care appointments online—replacing a previously manual, staff-driven process that often took days or weeks",
            "<strong>Dramatically reduced scheduling time through the External Provider Scheduling (EPS) platform,</strong> from an estimated 7 days (10,080 minutes) to just 7 minutes per appointment. If scaled across 250,000 referrals per month, this improvement could save over 41 million minutes—or nearly 700,000 staff hours—each month.",
            "<strong>Improved Veteran satisfaction with the scheduling experience,</strong> as evidenced by high task completion rates, low cognitive load, and unprompted positive feedback during usability testing",
            '<strong>Designed and tested an accessible userflow and prototype,</strong> incorporating feedback from Veterans using assistive technologies to ensure an inclusive experience. In addition, we <a href="https://depo-platform-documentation.scrollhelp.site/research-design/accessible-prototyping-with-codepen" target="_blank" rel="noopener noreferrer">contributed guidance on accessible prototyping with CodePen to the VA Platform research community,</a> helping other teams adopt more inclusive design and testing practices.',
            "<strong>Contributed a new filter and sort design pattern to the VA.gov Design System,</strong> based on successful usability findings, which was later used to inform the platform’s experimental search results component—demonstrating platform reusability and cross-team impact",
            "<strong>Created and shared a comprehensive ecosystem map</strong> that helped align engineers, product teams, privacy officers, and scheduling stakeholders—serving as a foundational artifact for cross-functional collaboration and future decision-making",
          ],
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751852095/CleanShot_2025-07-06_at_21.33.20_lfgfui.gif",
          alt: "Community care appointment scheduling user interface process from Referrals and Requests page",
          width: 400,
          height: 225,
          className: "rounded-lg mt-12 mb-6 mx-auto object-cover",
        },
      ],
    },
  ],
}
