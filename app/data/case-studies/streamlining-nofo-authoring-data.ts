import type { CaseStudyData } from "../case-study-types"

export const streamliningNofoAuthoringData: CaseStudyData = {
  slug: "streamlining-nofo-authoring-and-workflows",
  pageTitle: "Streamlining NOFO Authoring and Workflows",
  metaTitle: "Streamlining NOFO Authoring and Workflows | Work | designbybenbrasso",
  metaDescription:
    "Detailed case study of the NOFO Composer MVP project, focusing on reducing administrative burden in the creation of Notices of Funding Opportunity at HHS.",
  projectOverviewBanner: {
    description:
      "The goal of this project was to reduce administrative burden in the creation of Notices of Funding Opportunity (NOFOs) by improving how they are authored, governed, and maintained across HHS. As part of the Simpler NOFO initiative, the work resulted in a user-validated NOFO Composer MVP that established a research-backed foundation for fast-follow releases and informs ongoing improvements and prioritization within the HHS Office of Grants' broader technology modernization effort, known as Simpler Grants Management.",
    skills:
      "HCD and product leadership, UX product design, UX research and AI-assisted synthesis, executive communication, storytelling, leadership and constituent advocacy, service design, user acceptance testing, prototyping, change management",
    tools:
      "Figma, FigJam, GitHub, VS Code, GitHub Copilot Chat, US Web Design System, ChatGPT, Gemini's Nano Banana Pro, Python, Django CI, Airtable",
    date: "August – December 2025",
    disclaimer:
      "Disclaimer: This case study reflects open, research-driven process and system-level learnings from work supporting the Simpler NOFO initiative. It does not include or disclose draft, unpublished, or sensitive NOFO content. All examples and findings are presented at an abstracted level and do not represent the U.S. Department of Health and Human Services.",
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
          text: '<strong>The Simpler NOFO initiative was created to reduce applicant burden by making NOFOs clearer, more consistent, and more accessible</strong>. Through standardized content guides, simplified language, and an accessible design system, Simpler NOFOs helped applicants more easily find key information, understand requirements, and navigate the application process. <a href="https://simplergrants.hhs.gov/simplernofos/overview" target="_blank" rel="noopener noreferrer">Early research, prototypes, and pilots</a> demonstrated that these changes could meaningfully improve clarity and usability for applicants.',
        },
        {
          type: "paragraph",
          text: "As the initiative matured, <strong>the work expanded beyond improving individual NOFOs to supporting repeatable delivery at scale</strong>. Guidance for using NOFO Builder was documented and shared across teams, enabling consistent onboarding and day-to-day use.",
        },
        {
          type: "paragraph",
          text: "At the same time, the end-to-end production design workflow was formalized to ensure designed NOFOs could be produced, reviewed, and published reliably across agencies and timelines. This documentation made roles, handoffs, and quality checks explicit, supporting consistency and accessibility as volume increased.",
        },
        {
          type: "paragraph",
          text: "Together, these efforts made it possible to support multiple agencies, designers, and timelines while maintaining consistency and accessibility. At the same time, this growing maturity exposed the limits of existing authoring tools and workflows. Producing simpler and more accessible NOFOs increasingly depended on complex, manual coordination behind the scenes. <strong>Improving the applicant experience at scale now required addressing how NOFOs were authored, governed, and maintained upstream</strong>.",
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "NOFO authoring is a collaborative process involving agency-wide grant policy writers, Operating Division (OpDiv) policy administrators, and program-level writers. Each group has distinct responsibilities, but all rely heavily on Microsoft Word documents, email, and shared drives to manage policy language, updates, reviews, and HHS clearance.",
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
          text: "<strong>As a result, the same systems that supported document creation were now limiting the initiative's ability to scale</strong>. Without better tooling to manage content, permissions, and timing upstream, reducing applicant burden increasingly depended on manual coordination and institutional knowledge behind the scenes.",
        },
      ],
    },
  {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "To address these challenges, we explored a new approach to NOFO authoring that treated content as a governed system rather than a static document. <strong>This work led to NOFO Composer, a structured authoring and content management tool designed to support policy oversight, reuse, and program-level flexibility while fitting into existing review and clearance workflows</strong>.",
        },
        {
          type: "paragraph",
          text: "We conducted research with agency-wide grant policy writers, OpDiv policy administrators, and program-level writers to understand how NOFOs are authored in practice. <strong>Research focused on real-world constraints, including how content guides are created and maintained, how policy updates flow once drafting is underway, and where friction occurs during review and clearance</strong>.",
        },
        {
          type: "paragraph",
          text: "Across interviews and usability sessions, several clear themes emerged.",
        },
        {
          type: "paragraph",
          text: "<strong>Writers needed a strong, policy-aligned starting point that reduced setup and formatting work rather than replacing familiar tools</strong>.",
        },
        {
          type: "paragraph",
          text: "<strong>Policy administrators needed clear governance and visibility into what content was locked, who controlled it, and how updates affected work already in progress</strong>.",
        },
        {
          type: "paragraph",
          text: "<strong>Trust across roles depended on the ability to move drafts into Word for collaboration and clearance without losing policy alignment</strong>.",
        },
        {
          type: "paragraph",
          text: "Based on these insights, we designed and evaluated a NOFO Composer MVP focused on the most critical workflows. <strong>The MVP enabled administrators to centrally manage and validate policy-aligned content while allowing writers to draft customized NOFOs through a guided, step-by-step experience</strong>.",
        },
        {
          type: "paragraph",
          text: "Rather than attempting to replace familiar tools such as Microsoft Word and SharePoint, the experience was intentionally designed to work alongside existing workflows and clearance processes.",
        },
        {
          type: "paragraph",
          text: "<strong>Trust across roles depended on the ability to move drafts into Word for collaboration and clearance without losing policy alignment</strong>.",
        },
        {
          type: "paragraph",
          text: 'Findings from this research informed concrete recommendations for fast-follow releases. These <strong>recommendations prioritized reliable Word export, governance and workflow capabilities needed for scale, and a research-validated foundation that guides ongoing improvements to Composer and integration with HHS Office of Grants’ <a href="https://simpler.grants.gov/roadmap" target="_blank" rel="noopener noreferrer">broader Simpler Grants Management modernization effort</a></strong>.',
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "list",
          items: [
            "<strong>The NOFO Composer MVP met its defined success criteria as a validated starting point for improving NOFO authoring and governance workflows.</strong> Research demonstrated strong adoption readiness across both writers and administrators, confirming that the core problems identified in earlier discovery were being meaningfully addressed.",
            "<strong>87% of participants rated Composer a 4 or 5 (on a 5-point scale) for confidence that it could meet their agency or office’s needs.</strong> Participants consistently described the experience as intuitive and aligned with how NOFOs are structured today, reinforcing trust in the model even at an MVP stage.",
            "<strong>Ease of use and workflow improvement signals were similarly strong.</strong> 87% of participants rated Composer a 4 or 5 for ease of use, and 71% rated it a 4 or 5 for improving NOFO drafting compared to their current processes. These results reflected reduced time spent navigating long Word documents, removing irrelevant sections, and interpreting unclear guidance.",
            "<strong>Governance validation emerged as a critical outcome.</strong> HHS administrators confirmed that the MVP supported centralized content management and core OpDiv policy administration needs, establishing confidence that policy-aligned content could be managed and scaled without increasing manual oversight.",
            "<strong>Adoption intent was directly tied to Composer’s ability to work alongside existing tools.</strong> 100% of respondents rated their likelihood of using Composer in future NOFO cycles as a 4 or 5, with many emphasizing the importance of reliable Word export for review and clearance.",
            '<strong>Together, these outcomes demonstrated that the Composer MVP was not a one-off prototype, but a research-validated foundation for incremental release and scale.</strong> The work provided clear direction for fast-follow development, including Word export, governance and workflow scaling, and integration with the HHS Office of Grants’ <a href="https://simpler.grants.gov/roadmap" target="_blank" rel="noopener noreferrer">broader Simpler Grants Management modernization effort</a>.',
          ],
        },
      ],
    },
  ],
}
