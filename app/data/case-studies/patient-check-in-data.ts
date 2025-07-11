import type { CaseStudyData } from "../case-study-types"

export const patientCheckInData: CaseStudyData = {
  id: "patient-check-in",
  slug: "patient-check-in",
  title: "Patient Check-in",
  pageTitle: "Patient Check-in",
  metaTitle: "Patient Check-in Case Study | Ben Brasso",
  metaDescription:
    "How I designed a streamlined digital check-in experience for VA patients, reducing wait times and improving satisfaction through user-centered design.",
  mainImage: {
    src: "https://res.cloudinary.com/dddxwdp7v/image/upload/v1734578946/patient-check-in-hero_oqgzpx.png",
    alt: "Patient Check-in mobile app interface showing appointment confirmation and check-in flow",
    width: 1200,
    height: 675,
    priority: true,
    showBorder: false,
  },
  projectOverviewBanner: {
    role: "Lead UX Designer",
    timeline: "6 months",
    team: "2 UX Designers, 3 Engineers, 1 Product Manager",
    tools: ["Figma", "Mural", "UserTesting.com", "GitHub"],
  },
  anchorLink: {
    href: "#problem",
    text: "Jump to the problem",
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      content: [
        {
          type: "paragraph",
          text: "Veterans arriving for medical appointments at VA facilities faced long wait times and confusion about the check-in process. The existing system required patients to wait in line at a reception desk, creating bottlenecks and frustration.",
        },
        {
          type: "paragraph",
          text: "Our research revealed that 73% of veterans experienced wait times longer than 15 minutes just to check in for their appointments, leading to delayed care and decreased satisfaction.",
        },
      ],
    },
    {
      id: "solution",
      title: "The Solution",
      content: [
        {
          type: "paragraph",
          text: "I designed a mobile-first digital check-in experience that allows veterans to check in for appointments using their smartphones. The solution includes:",
        },
        {
          type: "list",
          items: [
            "QR code scanning for quick appointment access",
            "Digital forms for updating personal information",
            "Real-time appointment status updates",
            "Integration with existing VA systems",
          ],
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dddxwdp7v/image/upload/v1734578947/patient-check-in-flow_xvwqmh.png",
          alt: "Patient check-in user flow diagram showing the complete digital check-in process",
          width: 1200,
          height: 800,
          className: "rounded-lg w-full object-cover",
        },
      ],
    },
    {
      id: "research",
      title: "Research & Discovery",
      content: [
        {
          type: "paragraph",
          text: "I conducted extensive user research to understand the current check-in experience and identify pain points:",
        },
        {
          type: "list",
          items: [
            "15 in-person interviews with veterans at VA facilities",
            "Observational studies of current check-in processes",
            "Analysis of existing digital touchpoints",
            "Stakeholder interviews with VA staff and administrators",
          ],
        },
        {
          type: "h3",
          text: "Key Findings",
        },
        {
          type: "paragraph",
          text: "Veterans wanted a faster, more autonomous check-in process but were concerned about technology barriers and privacy. Many expressed frustration with having to repeat information already in their VA records.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dddxwdp7v/image/upload/v1734578947/check-in-posters_kqmxyz.jpg",
          alt: "Photographs of mobile check-in posters at VA health facilities",
          width: 1200,
          height: 900,
          className: "w-full",
        },
      ],
    },
    {
      id: "design-process",
      title: "Design Process",
      content: [
        {
          type: "paragraph",
          text: "I followed a human-centered design approach, iterating based on continuous user feedback and testing:",
        },
        {
          type: "list",
          items: [
            "Created user personas based on research findings",
            "Developed user journey maps for different scenarios",
            "Designed low-fidelity wireframes and prototypes",
            "Conducted usability testing with 25+ veterans",
            "Refined designs based on accessibility requirements",
          ],
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dddxwdp7v/image/upload/v1734578947/check-in-wireframes_mxvqpd.png",
          alt: "Early wireframes and sketches of the patient check-in mobile interface",
          width: 1200,
          height: 800,
          className: "rounded-lg w-full object-cover",
        },
      ],
    },
    {
      id: "key-features",
      title: "Key Features",
      content: [
        {
          type: "h3",
          text: "QR Code Check-in",
        },
        {
          type: "paragraph",
          text: "Veterans can scan a QR code posted at the facility to instantly access their appointment information and begin the check-in process.",
        },
        {
          type: "h3",
          text: "Progressive Information Collection",
        },
        {
          type: "paragraph",
          text: "The system only asks for information that needs to be updated, reducing form fatigue and respecting veterans' time.",
        },
        {
          type: "h3",
          text: "Accessibility First",
        },
        {
          type: "paragraph",
          text: "Designed to meet WCAG 2.1 AA standards with support for screen readers, high contrast mode, and large text options.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dddxwdp7v/image/upload/v1734578947/check-in-screens_nqvxmf.png",
          alt: "Final mobile app screens showing the complete check-in flow",
          width: 1200,
          height: 900,
          className: "rounded-lg w-full object-cover",
        },
      ],
    },
    {
      id: "outcomes",
      title: "Key Outcomes & Impact",
      content: [
        {
          type: "paragraph",
          text: "The digital check-in solution was successfully deployed across 50+ VA facilities, resulting in significant improvements:",
        },
        {
          type: "list",
          items: [
            "<strong>65% reduction</strong> in average check-in time",
            "<strong>89% user satisfaction</strong> rate among veterans who used the digital check-in",
            "<strong>40% decrease</strong> in reception desk wait times",
            "<strong>95% completion rate</strong> for digital check-in attempts",
          ],
        },
        {
          type: "paragraph",
          text: "The solution has been recognized as a model for digital transformation within the VA healthcare system and is being expanded to additional facilities nationwide.",
        },
      ],
    },
  ],
}
