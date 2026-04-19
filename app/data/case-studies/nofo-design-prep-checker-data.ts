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
      "GitHub, Claude.ai, Claude Code, GitHub Copilot, browser-based architecture, document parsing libraries, Cloudflare, US Web Design System, TypeScript",
    date: "March - April 2026",
    disclaimer:
      "Disclaimer: This case study reflects open, research-driven process and system-level learnings from work supporting the Simpler NOFO initiative. It does not include or disclose draft, unpublished, or sensitive NOFO content. All examples and findings are presented at an abstracted level and do not represent the U.S. Department of Health and Human Services.",
  },
  // projectDetails: [
  //   { label: "Client Type", value: "[TODO: Client type]" },
  //   { label: "Role", value: ["[TODO: Role 1]", "[TODO: Role 2]"] },
  //   { label: "Timeline", value: "[TODO: Timeline]" },
  //   { label: "Tools", value: ["[TODO: Tool 1]", "[TODO: Tool 2]"] },
  // ],
  // mainImage: {
  //   src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1774197261/Frame_685_yvvihx.png",
  //   alt: "NOFO Design Prep Checker project showcase",
  //   width: 800,
  //   height: 450,
  //   priority: true,
  //   className: "rounded-lg mt-12 mb-6 w-full object-cover",
  //   showBorder: false,
  // },
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
          text: "Every NOFO entering the design phase introduced variability. Before design could begin, I observed that teams needed to:",
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
          text: "<strong>This process typically took 3 to 4 hours per document.</strong> But the deeper issue wasn’t just time. This step introduced friction, inconsistency, and cognitive load at a critical transition point in the workflow.",
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
          text: "Rather than focusing on improving the manual process itself, I stepped back to understand how NOFOs moved through the system. What I saw was a pattern:",
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
          text: "I asked a simple but important question: <strong>what if we could automate the predictable parts of design preparation?</strong> From that point, the direction became clear. The solution needed to:",
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
          text: "<strong>I designed the NOFO Design Prep Checker as a simple, guided workflow that mirrors how teams already think about document preparation.</strong> Users upload a document, the tool analyzes its structure and formatting, and then surfaces issues that need attention before design can begin. From there, users can download a cleaned, design-ready version.",
        },
        {
          type: "paragraph",
          text: "What mattered most to me was not the technical complexity, but how clearly the tool communicated its output. <strong>I focused on making feedback understandable, actionable, and directly tied to design readiness.</strong>",
        },
        {
          type: "h3",
          text: "Key design decisions",
        },
        {
          type: "paragraph",
          text: "As I developed the tool, <strong>I made a few deliberate decisions to ensure it would be trusted and adopted:</strong>",
        },
        {
          type: "list",
          items: [
            "I prioritized clarity over technical detail so users could quickly understand what needed to be fixed.",
            "I made it explicit that the tool does not alter policy content, only structure and formatting.",
            "I designed the application to run entirely in the browser to avoid privacy concerns.",
            "I treated speed as a core feature, ensuring results were returned in seconds.",
          ],
        },
        {
          type: "paragraph",
          text: "These decisions helped position the tool as both useful and reliable within an existing workflow.",
        },
        {
          type: "h3",
          text: "Prototyping and delivery",
        },
        {
          type: "paragraph",
          text: "<strong>This was a true 0 → 1 effort, and I led it end-to-end from concept through release.</strong>",
        },
        {
          type: "paragraph",
          text: "I designed, built, and deployed the application independently, using AI-assisted development tools to accelerate both design and implementation. This allowed me to move quickly from idea to working product while continuously refining the experience. <strong>Instead of separating design and development into phases, I worked in a more integrated way.</strong> I would define an interaction, implement it, test it against real documents, and refine it immediately. This created a tight feedback loop where usability and functionality evolved together.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1776624916/NOFO_Design_Prep_Checker_main_ysy1ou.png",
          alt: "Community care appointment scheduling user interface process",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "h3",
          text: "Timeline and delivery approach",
        },
        {
          type: "paragraph",
          text: "<strong>I took this project from initial idea to internal release in 40 days, with approximately 80 hours of active work.</strong>",
        },
        {
          type: "paragraph",
          text: "I began by defining a clear architectural approach: a browser-based application with no backend, built using React and TypeScript, with mammoth.js handling document parsing and a custom rules engine running checks against the output. This upfront clarity allowed me to move quickly once development began.",
        },
        {
          type: "paragraph",
          text: "From there, the project became highly iterative. I merged over 180 pull requests, continuously expanding the rules engine, refining the interface, and addressing edge cases across multiple NOFO formats from different agencies.",
        },
        {
          type: "paragraph",
          text: "<strong>One of the more interesting aspects of the project was how the design process evolved. Rather than producing a full wireframe upfront, I used AI-assisted tools to prototype and refine the interface alongside development.</strong> Design and implementation informed each other in real time, creating a more fluid and responsive workflow.",
        },
        {
          type: "paragraph",
          text: "In the final phase, I focused on refining edge cases, improving reliability, and preparing the tool for release. I introduced it to internal teams along with guidance on how to incorporate it into their workflow.",
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "paragraph",
          text: "The impact of the tool was immediate.",
        },
        {
          type: "paragraph",
          text: "<strong>What previously took 3 to 4 hours per document was reduced to minutes,</strong> significantly accelerating the transition from content to design. This time savings scaled quickly across the program, allowing teams to move faster without sacrificing quality. Just as importantly, the tool improved the consistency of document structure and formatting before design even began. By catching issues earlier in the workflow, it reduced errors and rework downstream.",
        },
        {
          type: "paragraph",
          text: "<strong>As a result, coaches and designers were able to spend less time on manual preparation and more time focused on higher-value work.</strong>",
        },
        {
          type: "h3",
          text: "Extending impact beyond efficiency",
        },
        {
          type: "paragraph",
          text: "Beyond time savings, this work expanded the scope of the SimplerNOFOs initiative and demonstrated how targeted improvements can influence the broader system. By addressing a single point of friction, the work:",
        },
        {
          type: "list",
          items: [
            "Improved both speed and quality across the workflow.",
            "Strengthened the connection between content creation and design execution.",
            "Reinforced a broader principle that the most impactful improvements come from fixing the connections between systems, not just the systems themselves.",
            "Surfaced important considerations for future platforms, particularly around validation and content quality.",
          ],
        },
      ],
    },
    {
      title: "Adoption and future direction",
      content: [
        {
          type: "paragraph",
          text: "After introducing the tool, teams quickly incorporated it into their workflow as a standard step between document approval and design. Rather than relying on designers to manually prepare documents, program teams could now run documents through the tool themselves, identify issues earlier, and enter the design phase with cleaner inputs.",
        },
        {
          type: "paragraph",
          text: "<strong>This shift enabled a more scalable and efficient workflow while redistributing ownership across teams.</strong>",
        },
        {
          type: "h3",
          text: "Informing future systems",
        },
        {
          type: "paragraph",
          text: "This work took place alongside a broader effort to modernize grants management into a unified platform. While that platform aims to streamline workflows, this project highlighted an important reality: even in integrated systems, human error in content creation will persist. Because of this, there is continued value in:",
        },
        {
          type: "list",
          items: [
            "Validation layers that ensure quality before content moves downstream.",
            'Lightweight “middleware” approaches that improve transitions between steps.',
            "Feedback loops that strengthen upstream content quality.",
          ],
        },
        {
          type: "paragraph",
          text: "The Design Prep Checker serves as a practical example of how these capabilities can deliver immediate value while also informing how they might be built into future systems.",
        },
      ],
    },
    {
      title: "Reflection",
      content: [
        {
          type: "paragraph",
          text: "This project stands out because it addressed a problem that was widely experienced but not clearly owned. By focusing on a narrow but high-impact opportunity, I was able to deliver meaningful value quickly without requiring large system changes. At the same time, the work contributed to broader thinking about how systems should be designed moving forward.",
        },
        {
          type: "paragraph",
          text: "If I were to extend this work, I would focus on integrating validation earlier in the workflow, expanding accessibility checks, and creating feedback loops that improve content quality upstream. Ultimately, this project reinforced a core idea that continues to shape my work: <strong>meaningful system improvements often come from simplifying transitions, not just optimizing individual tools.</strong>",
        },
      ],
    },
  ],
}
