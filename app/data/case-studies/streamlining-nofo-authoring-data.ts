import type { CaseStudyData } from "../case-study-types"

export const streamliningNofoAuthoringData: CaseStudyData = {
  slug: "streamlining-nofo-authoring-and-workflows",
  pageTitle: "Streamlining NOFO authoring and workflows",
  metaTitle: "Streamlining NOFO Authoring and Workflows | Work | designbybenbrasso",
  metaDescription:
    "Detailed case study of the NOFO Composer MVP project, focusing on reducing administrative burden in the creation of Notices of Funding Opportunity at HHS.",
  projectOverviewBanner: {
    description:
      "The goal of this project was to reduce administrative burden in the creation of Notices of Funding Opportunity (NOFOs) by improving how they are authored, governed, and maintained across HHS. As part of the Simpler NOFO initiative, the work resulted in a user-validated NOFO Composer MVP that established a research-backed foundation for fast-follow releases and informs ongoing improvements and prioritization within the HHS Office of Grants’ broader technology modernization effort, known as Simpler Grants Management.",
    skills:
      "HCD and product leadership, UX product design, UX research and AI-assisted synthesis, executive communication, storytelling, leadership and constituent advocate, service design, user acceptance testing with Python web application, prototyping, change management specialist",
    tools:
      "Figma, GitHub, VS Code, GitHub Copilot Chat, GitHub Copilot code review, US Web Design System, Microsoft Teams, ChatGPT, Microsoft SharePoint, FigJam, Gemini's Nano Banana Pro, Python, Django CI, Airtable",
    date: "August 2025 – December 2025",
  },
  projectDetails: [
    { label: "Client Type", value: "Government / Public Sector" },
    { label: "Role", value: ["Product Lead", "UX Designer", "UX Researcher"] },
    { label: "Timeline", value: "5 Months" },
    { label: "Tools", value: ["Figma", "GitHub", "Python", "Django"] },
  ],
  mainImage: {
    src: "/images/image.png",
    alt: "Streamlining NOFO authoring and workflows project overview",
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
          text: "Notices of Funding Opportunity (NOFO) are the primary way HHS communicates how federal funding is awarded. These documents are dense, policy-driven, and historically difficult to understand, particularly for smaller organizations and those serving underserved communities. Confusing structure, inconsistent language, and inaccessible formatting have long created barriers for applicants trying to determine eligibility, requirements, and next steps.",
        },
        {
          type: "paragraph",
          text: "The Simpler NOFO initiative was created to reduce applicant burden by making NOFOs clearer, more consistent, and more accessible. Through standardized content guides, simplified language, and an accessible design system, Simpler NOFOs helped applicants more easily find key information, understand requirements, and navigate the application process. Early research, prototypes, and pilots demonstrated that these changes could meaningfully improve clarity and usability for applicants.",
        },
        {
          type: "paragraph",
          text: "As the initiative matured, the work expanded beyond improving individual documents to supporting repeatable delivery at scale. Guidance for using NOFO Builder was documented and shared across teams, enabling consistent onboarding and day-to-day use.",
        },
        {
          type: "paragraph",
          text: "At the same time, the end-to-end production design workflow was formalized to ensure designed NOFOs could be produced, reviewed, and published reliably across agencies and timelines. This documentation made roles, handoffs, and quality checks explicit, supporting consistency and accessibility as volume increased.",
        },
        {
          type: "paragraph",
          text: "Together, these efforts made it possible to support multiple agencies, designers, and timelines while maintaining consistency and accessibility. At the same time, this growing maturity exposed the limits of existing authoring tools and workflows. Producing simpler and more accessible NOFOs increasingly depended on complex, manual coordination behind the scenes. Improving the applicant experience at scale now required addressing how NOFOs were authored, governed, and maintained upstream.",
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "NOFO authoring is a collaborative process involving agency-wide grant policy writers, OpDiv policy administrators, and program-level writers. Each group has distinct responsibilities, but all rely heavily on Microsoft Word documents, email, and shared drives to manage policy language, updates, reviews, and HHS clearance.",
        },
        {
          type: "paragraph",
          text: "As Simpler NOFOs expanded, this approach became increasingly difficult to sustain. Policy updates had to be manually tracked and re-applied across multiple content guides, often after authoring and writing were already underway. These downstream updates created frustration for writers and administrators alike and led to longer review cycles as teams worked to ensure policy information remained accurate and consistent.",
        },
        {
          type: "paragraph",
          text: "The lack of centralized governance further compounded the problem. It was often unclear which content was standard, which was program-specific, and who had authority to make changes at different stages of the process. Writers spent time interpreting guidance instead of drafting, while policy administrators relied on manual checks to ensure required language had not been altered or omitted.",
        },
        {
          type: "paragraph",
          text: "As a result, the same systems that supported document creation were now limiting the initiative's ability to scale. Without better tooling to manage content, permissions, and timing upstream, reducing applicant burden increasingly depended on manual coordination and institutional knowledge behind the scenes.",
        },
      ],
    },
  ],
}
