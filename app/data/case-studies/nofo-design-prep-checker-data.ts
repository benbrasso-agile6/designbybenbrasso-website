import type { CaseStudyData } from "../case-study-types"

export const nofoDesignPrepCheckerData: CaseStudyData = {
  slug: "nofo-design-prep-checker",
  pageTitle: "NOFO Design Prep Checker",
  metaTitle: "NOFO Design Prep Checker | Work | designbybenbrasso",
  metaDescription:
    "Case study on designing and shipping the NOFO Design Prep Checker, an AI-assisted tool that streamlines document prep and improves efficiency in federal grants workflows.",
  projectOverviewBanner: {
    description:
      "I designed and shipped a browser-based tool in 40 days as a solo contributor, using AI-assisted development to automate NOFO document prep and reduce a 3–4 hour manual workflow to minutes. The tool addresses a key gap between content creation and design execution within the HHS SimplerNOFOs initiative, improving both efficiency and consistency.",
    role: "Principal Product Designer leading product design end-to-end, including problem framing, workflow definition, UX design, prototyping, and delivery. I independently designed, built, and released the application, leveraging AI-assisted development tools such as Claude.ai, Claude Code, and GitHub Copilot to accelerate implementation and iteration.",
    skills:
      "Human-centered design, product strategy, UX design, UX writing, systems thinking, workflow optimization, AI-assisted development, rapid prototyping, front-end development, end-to-end product development",
    tools:
      "GitHub, Claude.ai, Claude Code, GitHub Copilot, browser-based architecture, document parsing libraries, Cloudflare, US Web Design System",
    date: "March - April 2026",
    disclaimer:
      "Disclaimer: This case study reflects open, research-driven process and system-level learnings from work supporting the Simpler NOFO initiative. It does not include or disclose draft, unpublished, or sensitive NOFO content. All examples and findings are presented at an abstracted level and do not represent the U.S. Department of Health and Human Services.",
  },
  projectDetails: [
    { label: "Client Type", value: "[TODO: Client type]" },
    { label: "Role", value: ["[TODO: Role 1]", "[TODO: Role 2]"] },
    { label: "Timeline", value: "[TODO: Timeline]" },
    { label: "Tools", value: ["[TODO: Tool 1]", "[TODO: Tool 2]"] },
  ],
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749843970/placeholder_case_study_nofo_prep_checker.gif",
    alt: "NOFO Design Prep Checker project showcase",
    width: 800,
    height: 450,
    priority: true,
    className: "rounded-lg mt-12 mb-6 w-full object-cover",
    showBorder: false,
  },
  sections: [
    {
      title: "Background",
      content: [
        {
          type: "paragraph",
          text: "As part of the SimplerNOFOs initiative at HHS, I was focused on improving how federal funding opportunities are authored, structured, and delivered to the public.",
        },
        {
          type: "paragraph",
          text: "This work builds on a broader effort to modernize how Notices of Funding Opportunity (NOFOs) are created and managed at HHS, including the introduction of structured authoring tools and a roadmap toward a unified grants management platform. Improving the applicant experience requires addressing not just individual tools, but the full system of how content is created, governed, and delivered.",
        },
        {
          type: "paragraph",
          text: "As that work matured, I began to notice a recurring issue during handoff: Even with improved authoring workflows, <strong>NOFO writing, coaches, and design teams were still spending hours manually preparing documents before any design work could begin.</strong>",
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "Every NOFO entering the design phase introduced variability.",
        },
        {
          type: "paragraph",
          text: "Before design could begin, I observed that teams needed to:",
        },
        {
          type: "list",
          items: [
            "Review document structure and heading hierarchy.",
            "Identify formatting inconsistencies.",
            "Check for missing or misapplied styles.",
            "Verify links and references.",
            "Prepare content for structured design systems.",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>This process typically took 3 to 4 hours per document.</strong>",
        },
        {
          type: "paragraph",
          text: "But the deeper issue wasn’t just time. <strong>This step introduced friction, inconsistency, and cognitive load at a critical transition point in the workflow.</strong>",
        },
        {
          type: "paragraph",
          text: "I reframed the problem as a system gap between steps, not just a task inefficiency. <strong>The workflow between authoring and design lacked a reliable, scalable way to ensure quality and consistency.</strong>",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "h3",
          text: "Reframing the problem",
        },
        {
          type: "paragraph",
          text: "Rather than focusing on improving the manual process itself, I stepped back to understand how NOFOs moved through the system.",
        },
        {
          type: "paragraph",
          text: "What I saw was a pattern:",
        },
        {
          type: "list",
          items: [
            "Authoring was improving.",
            "Design systems were improving.",
            "But the connection between them remained fragile.",
          ],
        },
        {
          type: "paragraph",
          text: "This shifted my focus from optimizing a task to strengthening a transition.",
        },
        {
          type: "h3",
          text: "Defining a focused solution",
        },
        {
          type: "paragraph",
          text: "I asked a simple but important question: <strong>what if we could automate the predictable parts of design preparation?</strong>",
        },
        {
          type: "paragraph",
          text: "From that point, the direction became clear. The solution needed to:",
        },
        {
          type: "list",
          items: [
            "Remove repetitive, manual checks.",
            "Standardize how documents are evaluated before design.",
            "Provide clear, actionable feedback.",
            "Fit into existing workflows without disruption.",
          ],
        },
        {
          type: "paragraph",
          text: "Instead of introducing a heavy system, I chose to design something lightweight and immediately usable.",
        },
        {
          type: "h3",
          text: "Designing the experience",
        },
        {
          type: "paragraph",
          text: "<strong>I designed the NOFO Design Prep Checker as a simple, guided workflow that mirrors how teams already think about document preparation.</strong>",
        },
        {
          type: "paragraph",
          text: "Users upload a document, the tool analyzes its structure and formatting, and then surfaces issues that need attention before design can begin. From there, users can download a cleaned, design-ready version.",
        },
        {
          type: "paragraph",
          text: "Users upload a document, the tool analyzes its structure and formatting, and then surfaces issues that need attention before design can begin. From there, users can download a cleaned, design-ready version.",
        },
        {
          type: "paragraph",
          text: "What mattered most to me was not the technical complexity, but how clearly the tool communicated its output. <strong>I focused on making feedback understandable, actionable, and directly tied to design readiness.</strong>",
        },
      ],
    },
