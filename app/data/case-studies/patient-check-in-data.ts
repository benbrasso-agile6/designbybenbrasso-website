import type { CaseStudyData } from "../case-study-types"

export const patientCheckInData: CaseStudyData = {
  slug: "patient-check-in",
  pageTitle: "Mobile Patient Check-in",
  metaTitle: "Mobile Patient Check-in | Work | designbybenbrasso",
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
          text: 'The <a href="https://www.congress.gov/bill/115th-congress/senate-bill/2372" target="_blank" rel="noopener noreferrer">MISSION Act</a> (Maintaining Internal Systems and Strengthening Integrated Outside Networks) aimed to expand Veterans’ access to community care and modernize health care delivery at the VA. This required deploying new technologies, such as mobile check-in, to simplify access, reduce wait times, and improve the overall experience for Veterans.',
        },
        {
          type: "paragraph",
          text: "Historically, patient check-in and other pre-appointment activities at VA heavily relied on manual, paper-based processes. Veterans frequently experienced dissatisfaction with long waits, and staff faced bottlenecks and errors. The COVID-19 pandemic further accelerated the need for digital, contactless solutions to ensure safe and efficient health care delivery.",
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "As a human-centered designer and researcher within VA's Office of the Chief Technology Officer (OCTO), the challenge was to create a mobile check-in experience inclusive of all Veterans—regardless of age, technical proficiency, or physical capability—while meeting stringent federal security standards and ensuring seamless integration with existing VA systems.",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "<strong>Our Scrum Team self-organized and adopted a rigorous human-centered, mobile-first design approach that emphasized extensive, and iterative, user research to inform design decisions, feature improvements, and product releases.<strong>",
        },
        {
          type: "paragraph",
          text: "Initially, we conducted generative research, including clinic staff interviews, in-person Veteran intercepts, and detailed observational studies at multiple VA health facilities. This research uncovered significant challenges, such as poor cellular connectivity inside facilities and difficulty Veterans faced when signing into existing patient portals.",
        },
        {
          type: "paragraph",
          text: 'We found that the traditional <a href="https://design.va.gov/templates/forms/" target="_blank" rel="noopener noreferrer">VA form template</a> from the VA.gov Design System was not ideal for a quick, easy mobile check-in. To address this, we developed a new design pattern focused on presenting one clear task per screen and using simplified page titles that directly matched each task. We shared this "<a href="https://design.va.gov/patterns/help-users-to/complete-a-sub-task" target="_blank" rel="noopener noreferrer">complete a sub-task</a>" design pattern, along with insights from Veterans, back to the broader VA.gov design community.',
        },
        {
          type: "paragraph",
          text: "One significant technical achievement was introducing the Low Risk One Time Authorization (LoROTA), a simpler yet secure alternative to existing log in processes on VA.gov. LoROTA allowed Veterans to authenticate using only their last name and date of birth, eliminating the need to remember passwords or create new accounts.",
        },
        {
          type: "paragraph",
          text: "We conducted iterative design and usability testing cycles, including specific user acceptance tests (UAT) at VA Bay Pines Health Care. This continuous cycle of collecting and incorporating real-time feedback from Veterans and clinical staff significantly improved the mobile check-in experience.",
        },
        {
          type: "paragraph",
          text: "Based on moderated usability testing with Veterans and post-care Medallia survey responses, we introduced key innovations like integrating beneficiary travel reimbursement and text reminders to Veterans for when to check in.",
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "list",
          items: [
            "Iterative improvements to mobile check-in dramatically streamlined the process, significantly reducing administrative workloads. In August 2022 alone, approximately 63,890 staff minutes were saved—averaging two minutes per Veteran previously spent on manual check-ins—which staff redirected to critical patient care tasks.",
            "From June 26 to July 31, 2023, 96% of travel reimbursement claims submitted via mobile check-in were successfully processed or were being actively reviewed, demonstrating strong integration with operational workflows and systems.",
            "Continuous research led to simpler, faster, and more valuable interactions, significantly boosting adoption. By early 2025, 77.5% of travel reimbursement claims submitted through mobile check-in were auto-adjudicated, drastically cutting processing times from weeks to mere hours or days.",
            "Veterans themselves validated the project's success: 18 Veterans praised mobile check-in’s ease of use and expressed strong interest in broader availability at VA health facilities, as indicated in post-visit surveys from March and April 2024.",
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
