import type { CaseStudyData } from "../case-study-types"

export const patientCheckInData: CaseStudyData = {
  slug: "patient-check-in",
  pageTitle: "Mobile Patient Check-in",
  metaTitle: "Mobile Patient Check-in | Work | designbybenbrasso",
  metaDescription:
    "UX design case study for a mobile patient check-in application, focusing on accessibility and ease of use by Ben Brasso.",
  projectOverviewBanner: {
    description:
      "The goal of this project was to create a self-service mobile check-in experience on the VA.gov platform that works for all Veterans. It aimed to be easy to use, reduce wait times and staff workload, improve Veteran satisfaction, and support seamless delivery of care.",
    skills:
      "HCD and product leadership, UX product design, UX research and synthesis, storytelling, service design, testing with assistive technology, information architecture, prototyping",
    tools:
      "Figma, VA.gov Design System, UserZoom, Axe DevTools, Optimal Workshop, Mural, GitHub, CodePen, Datadog, GA4, Medallia, SankeyMATIC, Mermaid Chart",
    date: "March 2022 - March 2024",
  },
  projectDetails: [
    { label: "Client Type", value: "Government Agency (Healthcare)" },
    { label: "Role", value: ["Lead UX/UI Designer", "Accessibility Advocate"] },
    { label: "Timeline", value: "8 Months" },
    { label: "Tools", value: ["Figma", "VA.gov Design System", "Storybook", "UserZoom"] },
  ],
   mainImage: {
     src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1752269146/Frame_680_epfz6b.png",
     alt: "Mobile check-in workflow detailing new arrived status for VA staff",
     width: 800,
     height: 450,
     priority: true,
     className: "rounded-lg mt-12 mb-6 w-full object-cover", 
    },
  sections: [
    {
      title: "Background",
      content: [
        {
          type: "paragraph",
          text: 'The <a href="https://www.congress.gov/bill/115th-congress/senate-bill/2372" target="_blank" rel="noopener noreferrer">MISSION Act</a> (Maintaining Internal Systems and Strengthening Integrated Outside Networks) aimed to expand Veterans\' access to community care and modernize health care delivery at the VA. This required deploying new technologies, such as mobile check-in, to simplify access, reduce wait times, and improve the overall experience for Veterans.',
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
          text: "<strong>Our Scrum Team self-organized and adopted a rigorous human-centered, mobile-first design approach that emphasized extensive, and iterative, user research to inform design decisions,</strong> feature improvements, and product releases.",
        },
        {
          type: "paragraph",
          text: "Initially, we conducted generative research, including clinic staff interviews, in-person Veteran intercepts, and detailed observational studies at multiple VA health facilities across the nation. This research uncovered significant challenges, such as poor cellular connectivity inside facilities and difficulty Veterans faced when signing into existing patient portals.",
        },
        {
          type: "paragraph",
          text: "To address these challenges, we <strong>created a proof of concept and sketched the new mobile check-in experience to communicate our vision and north star</strong>—all guided by our human-centered, mobile-first design approach.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750374324/Frame_6_uwjugt.png",
          alt: "Mobile check-in proof of concept detailing the new two-step process",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
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
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750377831/Frame_185_knnsut.png",
          alt: "Mobile check-in's Low Risk One Time Authorization (LoROTA) designs",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "paragraph",
          text: "We conducted iterative design and usability testing cycles, including specific user acceptance tests (UAT) at VA Bay Pines Health Care, VA St. Louis Healthcare System, and VA Wilkes-Barre Healthcare System. This continuous cycle of collecting and incorporating real-time feedback from Veterans and clinical staff significantly improved the mobile check-in experience.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751847389/Frame_595_zvrvea.png",
          alt: "Photographs of mobile check-in posters at VA health facilities",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "paragraph",
          text: "Thematic analysis across studies helped identify patterns and shape the product roadmap. A recurring insight was that Veterans wanted travel reimbursement integrated into the check-in process. <strong>We developed a plan to support this without adding barriers to mobile check-in, while also providing alternative modalities to the existing portal—which many Veterans found frustrating.</strong>",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750448834/CleanShot2025-06-20at15.29.50-ezgif.com-optimize_vwycge.gif",
          alt: "Beneficiary travel reimbursement product roadmap and impact vs feasibility matrix",
          width: 800,
          height: 450,
          className: "rounded-lg w-full object-cover border-2 border-neutral-700 dark:border-neutral-600",
        },
        {
          type: "paragraph",
          text: "<strong>To increase the number of travel reimbursement claims that could be auto-adjudicated—reducing manual work for staff and speeding up payments to Veterans—we explored adding an eligibility check before Veterans started a claim through service mapping.</strong> Although 77.5% of claims filed through mobile check-in were already auto-adjudicated during January and February 2025, this improvement offered a more seamless experience for Veterans and helped staff process claims more efficiently.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750450207/CleanShot_2025-06-20_at_16.08.01_tunhrm.gif",
          alt: "Beneficiary travel reimbursement with eligibity check endpoint service maps",
          width: 800,
          height: 450,
          className: "rounded-lg w-full object-cover border-2 border-neutral-700 dark:border-neutral-600",
        },
        {
          type: "paragraph",
          text: "Based on moderated usability testing with Veterans and post-care Medallia survey responses, <strong>we introduced key innovations to support continuous improvement like integrating beneficiary travel reimbursement and text reminders to Veterans when it’s to check in.</strong>",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750439818/CleanShot_2025-06-20_at_13.12.22_xsp0fh.gif",
          alt: "Mobile check-in user interface demonstration showing the check-in process",
          width: 400,
          height: 225,
          className: "rounded-lg mt-12 mb-6 mx-auto object-cover",
        },
        {
          type: "paragraph",
          text: 'By supporting travel reimbursements directly within mobile check-in, we paved the way for additional convenient options for Veterans to submit travel reimbursement claims. <strong>In April 2025, Veterans gained the ability to <a href="https://www.va.gov/health-care/file-travel-pay-reimbursement/" target="_blank" rel="noopener noreferrer">file travel claims through My HealtheVet on VA.gov</a>, and soon they’ll have the same easy experience on the VA Health and Benefits mobile app.</strong>',
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750877985/Frame_583_nx7txu.png",
          alt: "Screenshots of online travel reimbursement modalities on VA.gov and the VA Health and Benefits mobile app",
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
            "Iterative improvements to mobile check-in dramatically streamlined the process, significantly reducing administrative workloads. <strong>In August 2022 alone, approximately 63,890 staff minutes were saved—averaging two minutes per Veteran previously spent on manual check-ins—which staff redirected to critical patient care tasks.</strong>",
            "<strong>From June 26 to July 31, 2023, 96% of travel reimbursement claims submitted via mobile check-in were successfully processed or were being actively reviewed,</strong> demonstrating strong integration with operational workflows and systems.",
            "Continuous research led to simpler, faster, and more valuable interactions, significantly boosting adoption. <strong>By early 2025, 77.5% of travel reimbursement claims submitted through mobile check-in were auto-adjudicated, drastically cutting processing times from weeks to mere hours or days.</strong>",
            "Veterans themselves validated the project's success: <strong>18 Veterans praised mobile check-in's ease of use and expressed strong interest in broader availability at VA health facilities, as indicated in post-visit surveys from March and April 2024.</strong>",
            "<strong>Usage of mobile check-in increased more than 4x in just one month following the introduction of user-centered features</strong>—such as integrated beneficiary travel reimbursement and timely text reminders—demonstrating how small, meaningful improvements can drive rapid adoption at scale.",
          ],
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750450718/Frame_186_adgv4u.png",
          alt: "Line chart of the amount of mobile check-ins and travel claims filed overtime",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
      ],
    },
    // {
    //   id: "applicable-law",
    //   title: "Most applicable law this work supports",
    //   content: [
    //     {
    //       type: "h3",
    //       text: "Which law supports this work the most?",
    //     },
    //     {
    //       type: "paragraph",
    //       text: '<a href="https://www.congress.gov/bill/115th-congress/senate-bill/2372" target="_blank" rel="noopener noreferrer">Review the VA MISSION Act of 2018 on the congress.gov website</a>',
    //     },
    //     {
    //       type: "h3",
    //       text: "How is this work related to the law?",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "The MISSION Act (Maintaining Internal Systems and Strengthening Integrated Outside Networks) did more than expand access to community care. It also called for the VA to modernize how it delivers health care. This means using new tools—like smartphone check-in—to make it easier for veterans to access services, reduce wait times, and improve the overall experience at VA facilities.",
    //     },
    //   ],
    // },
  ],
}
