import type { CaseStudyData } from "../case-study-types"
import { ProjectDetailLabelKey } from "../project-detail-labels"

export const patientCheckInData: CaseStudyData = {
  slug: "patient-check-in",
  pageTitle: "Mobile Patient Check-in",
  metaTitle: "Case Study: Mobile Patient Check-in | Ben Brasso",
  metaDescription:
    "UX design case study for a mobile patient check-in application, focusing on accessibility and ease of use by Ben Brasso.",
  leadParagraph:
    "Designed a new mobile patient check-in application from the ground up, focusing on accessibility, ease of use for all age groups, and a seamless pre-appointment experience for VA medical centers.",
  projectDetails: [
    { label: ProjectDetailLabelKey.CLIENT, value: "U.S. Department of Veteran Affairs" },
    { label: ProjectDetailLabelKey.AGENCY, value: "Office of the CTO" },
    {
      label: ProjectDetailLabelKey.ROLE,
      value: ["UX Lead"],
      valueAriaLabel: ["User Experience Lead"],
    },
    { label: ProjectDetailLabelKey.PLATFORM, value: "Mobile web" },
    {
      label: ProjectDetailLabelKey.CONTRACT_DURATION,
      value: "2 YRS 8 MOS",
      valueAriaLabel: "Two years and eight months",
    },
  ],
  anchorLink: {
    text: "Most applicable law this work supports",
    href: "#applicable-law",
  },
  sections: [
    {
      title: "The Challenge",
      content: [
        {
          type: "paragraph",
          text: '<a href="https://www.va.gov/vhapublications/ViewPublication.asp?pub_ID=11628" target="_blank" rel="noopener noreferrer">VHA Directive 1604</a>, titled Data Entry Requirements for Administrative Data, emphasizes the importance of consistently and accurately entering administrative data into systems like VistA, VHA Enrollment System (VES), and Oracle Cerner Electronic Health Record (EHR). This directive underscores the necessity of maintaining up-to-date patient information to ensure appropriate medical care and services.',
        },
        {
          type: "paragraph",
          text: "With an expiring kiosk contract that enabled Veterans to check in to their appointments at VA facilities, the Veteran Health Administration (VHA) needed to find a new check-in solution while adhering to CDC's isolation guidelines during the height of the COVID-19 pandemic.",
        },
        {
          type: "paragraph",
          text: "As a result, VA needed a digital modality to support VHA Directive 1604 and replace the kiosks from their expiring contract, while also meeting VA's Integrated Veteran Care (IVC) business needs to reduce waiting lines at clinics and reduce staff administrative workload.",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "Generative research with clinic staff, interviewing Veterans at VA facilities, and observing the check-in experience in person led to the realization that the norm needed to be reset.",
        },
        {
          type: "paragraph",
          text: "In addition, VA's Form Template didn't fit well for the need, i.e., the process for completing check in from a mobile device needed to be fast and easy to complete.",
        },
        {
          type: "paragraph",
          text: "To make the check-in process less daunting to users, it was hypothesized that asking one thing per page would be successful. In addition, creating a new VA.gov design pattern that positioned the question as the page heading would help place more emphasis on completing a subtask rather than repeating the name of the form as the heading on each question within the form.",
        },
        {
          type: "videoDemo",
          videoUrl: "/videos/patient-check-in-demo.mp4",
          wrapperImageUrl: "/images/simple-tablet-wrapper.png",
          altText: "Tablet device frame showing patient check-in application demo",
        },
        {
          type: "paragraph",
          text: "And to increase adoption, i.e., pivoting away from the sign in process for My HealtheVet, there was a need to create an simpler, but secure authentication method. eCheck-in introduced Low Risk One Time Authorization (LoROTA) to VA.gov, which relied on collaboration between engineers, designers, and researchers.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749414600/Frame_599_znqsfn.png",
          alt: "Low Risk One Time Authorization (LoROTA) flow diagram for VA.gov eCheck-in",
          width: 1152,
          height: 700,
          priority: false,
          className: "max-w-[768px]",
        },
        {
          type: "paragraph",
          text: "After numerous iterations and releases to eCheck-in, it was time, again, to do user acceptance testing (UAT) through Veteran intercepts, observation, and interviews at a VA facility, while also conducting generative research for increasing the value of eCheck-in to Veterans in order to increase adoption.",
        },
        {
          type: "paragraph",
          text: "We created an accessible prototype for eCheck-in to include travel reimbursement and tested it with 17 Veterans and 38 VA staff members.",
        },
      ],
    },
    {
      title: "Results & Impact", // Renamed from "Success"
      content: [
        {
          type: "paragraph",
          text: "Ultimately, the eCheck-in product, through many iterative releases--building upon insights from usage analysis (e.g., GA4, DataDog, etc.) or user research studies--successfully introduced a new, lower authentication method for checking in to a medical appointment, while saving staff time and enabling Veterans to access another benefit (i.e., beneficiary travel reimbursement) through a new channel.",
        },
        {
          type: "paragraph",
          text: "<strong>In August 2022, 63,890 minutes of staff time was saved (i.e., ~2 minutes avg. for in-person check-ins) that could be redirected to other critical patient tracking responsibilities.</strong>",
          className:
            "bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg border border-sky-200 dark:border-sky-700 my-6 text-base md:text-lg font-medium shadow-lg",
        },
        {
          type: "paragraph",
          text: "And while eCheck-in (also known as PCI) accounted for far fewer travel reimbursement claims compared to other modalities during its pilot, ~96% of its claims were paid or were still in review with travel assistants during June 26 - July 31, 2023.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749415375/c5a8813d-ccee-49f6-af22-7780d73842f3_oryro5.png",
          alt: "Chart showing eCheck-in travel reimbursement claim status: Paid, In Review, Denied.",
          width: 1024,
          height: 576,
          priority: false,
          className: "max-w-[850px]", // Increased size
        },
        {
          type: "paragraph",
          text: "But conducting continuous generative research to understand how value could be injected into eCheck-in, while also keeping the process of checking in simple and transactional, really, paid dividends to Veterans and increasing adoption for VHA overtime.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749415424/206138d1-60b5-41ab-8318-eca208bc8514_zpgs8h.png",
          alt: "Chart showing increased adoption of eCheck-in over time.",
          width: 1024,
          height: 576,
          priority: false,
          className: "max-w-[850px]", // Increased size
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
