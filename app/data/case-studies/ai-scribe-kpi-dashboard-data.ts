import type { CaseStudyData } from "../case-study-types"

export const aiScribeKpiDashboardData: CaseStudyData = {
  slug: "ai-scribe-kpi-dashboard",
  pageTitle: "Ambient Scribe Pilot KPI Dashboard",
  metaTitle: "Ambient Scribe KPI Dashboard | Work | designbybenbrasso",
  metaDescription:
    "Detailed case study of the Ambient Scribe KPI Dashboard project, focusing on data visualization and UX strategy by Ben Brasso.",
  projectOverviewBanner: {
    description:
      "This project aimed to understand gaps and opportunities in the existing care encounter experience to inform the ambient scribe pilot plan and visualize a concept for measuring and reporting outcomes to executive leadership.",
    skills: "Human-centered design, UX research and synthesis, service design, AI-powered prototyping",
    tools: "v0 by Vercel, Vercel, Mural, Figma, ChatGPT, VA GPT (Beta), GitHub",
    date: "February - May 2025",
  },
  projectDetails: [
    // This data will be effectively replaced by the banner but kept for now
    { label: "Client Type", value: "Healthcare Technology (B2B SaaS)" },
    { label: "Role", value: ["UX Strategist", "Lead Product Designer"] },
    { label: "Timeline", value: "4 Months" },
    { label: "Tools", value: ["Figma", "Miro", "UserTesting.com", "Amplitude"] },
  ],
  mainImage: {
    src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1749843970/CleanShot_2025-06-13_at_15.38.32_jkb9y3.gif",
    alt: "Ambient Scribe KPI Dashboard project showcase", // Updated alt slightly for clarity
    width: 800, // Keeping original dimensions, object-cover will handle aspect ratio
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
          text: 'On March 13, 2024, <a href="https://news.va.gov/press-room/va-artificial-intelligence-tech-sprint-competition-finalists/" target="_blank" rel="noopener noreferrer">VA announced in a press release that it selected its finalists in their AI Tech Sprint to reduce health care provider burnout</a>.',
        },
        {
          type: "paragraph",
          text: "Reducing burnout among providers and care support staff has been a top priority for VA and executive orders from multiple White House administrations.",
        },
        {
          type: "paragraph",
          text: 'The amount of administrative work for providers often shifted into "pajama time" and cited as one of the number one causes of burnout.',
        },
        {
          type: "paragraph",
          text: 'In <a href="https://department.va.gov/ai/ai-use-case-inventory/" target="_blank" rel="noopener noreferrer">VA\'s AI Use Case Inventory</a>, last updated as of December 2024, use case <i>VA-708 Ambient AI Scribe\'s</i> purpose is to transcribe and summarize recorded clinical encounters using AI and to produce written summaries for humans to later review, edit, and enter into patient records.',
        },
        {
          type: "paragraph",
          text: 'And on June 24, 2025, the <a href="https://govtribe.com/opportunity/federal-contract-opportunity/modification-to-a-previous-notice-ambient-scribe-sole-source-36c10g25q00882" target="_blank" rel="noopener noreferrer">Department of Veterans Affairs Strategic Acquisition Center issued a modified Special Notice announcing its intent to award sole source contracts to two companies for Commercial-Off-the-Shelf (COTS) ambient scribe solutions</a>. This amendment revises the apparent awardees to Knowtex Inc. and Abridge AI, Inc.',
        },
      ],
    },
    {
      title: "Challenge",
      content: [
        {
          type: "paragraph",
          text: "As a human-centered designer and researcher within VA's Digital Health Office (DHO), how might we quickly understand and communicate the existing care delivery ecosystem and prepare for measuring outcomes of the AI Scribe pilot to inform investments, strategic planning, site readiness, application integration, clinical workflows, and success measurement across a consortium of VA offices, including DHO, VA's National AI Institute, Office of Information and Technology, and Veterans Health Administration?",
        },
      ],
    },
    {
      title: "Action",
      content: [
        {
          type: "paragraph",
          text: "<strong>We needed a clear and detailed understanding of where administrative burden is felt in the care encounter experience today at VA,</strong> so that we could cumulatively measure the impact of the ambient scribe pilot to be able to deliver better health outcomes to Veterans.",
        },
        {
          type: "paragraph",
          text: 'Using a task analysis method to uncover a detailed view of the clinician workflow—including a calculation of perceived burden using <a href="https://humansystems.arc.nasa.gov/groups/TLX/downloads/HFES_2006_Paper.pdf" target="_blank" rel="noopener noreferrer">NASA TLX</a>—not only did we identify where and how much administrative burden is felt, but we also created a reusable research method for measuring burnout across other applications and care settings.',
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751916072/Frame_2_hq2z2p.png",
          alt: "Care encounter workflow analysis diagram",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "paragraph",
          text: "We conducted semi-structured interviews with primary care providers, workstream leadership, and health informaticists and analyzed existing research findings, employee survey results, and clinician workflows to help us understand task work and task load during care encounters.",
        },
        {
          type: "paragraph",
          text: "Our task analysis method and resulting analysis asserted that <strong>administrative burden increases overtime, like compounding interest.</strong>",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1751916307/Frame_3_kjzwyo.png",
          alt: "Detailed care encounter workflow with NASA-TLX burden scores for each phase",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "paragraph",
          text: "We still had some ideas about how ambient scribe could be integrated into the care experience and EHR now in order to solve for other pain points and opportunities that we uncovered. For example:",
        },
        {
          type: "list",
          items: [
            "How might AI dictation and scribe tools support documentation during the preliminary assessment and exam with EHR note templates to reduce downstream redundant workload after hours? (Versus, simply, being used for dictation and transcription after hours.)",
            "How might AI dictation and scribe tools integrate into encounter note templates to accelerate downstream AI actions for creating RTC plans, consults, and orders to lighten post visit documentation?",
          ],
        },
        {
          type: "paragraph",
          text: "Once we understood how much and where providers experience the most friction during care encounters, we <strong>created a service blueprint to map out the end-to-end service experience, including all user interactions, staff processes, touchpoints, and supporting systems that support delivering care.</strong>",
        },
        {
          type: "paragraph",
          text: "It served as a foundational tool for aligning cross-functional teams on understanding pain points and where to focus improving efficiencies based on the needs of both Veterans and care providers.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750022654/CleanShot_2025-06-15_at_17.20.29_e3a1du.gif",
          alt: "Service blueprint mapping the end-to-end care encounter experience",
          width: 800,
          height: 450,
          className: "rounded-lg w-full object-cover border-2 border-neutral-700 dark:border-neutral-600",
        },
        {
          type: "paragraph",
          text: "And, lastly, together with our learned knowledge about the end-to-end care encounter service experience and VA's desired outcomes for the upcoming ambient scribe pilot, <strong>we created a proof of concept—using AI-powered v0 by Vercel—for measuring and reporting outcomes to product and DHO leadership.</strong>",
        },
        {
          type: "paragraph",
          text: "We identified key performance indicators to focus on, including provider satisfaction, time or perceived time in the EHR, burnout score, quality of note to edited note, and adoption rate.",
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750024750/Frame_5_hdqh1s.png",
          alt: "Ambient Scribe KPI Dashboard project showcase",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "paragraph",
          text: '<a href="https://ai-scribe-pilot-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">Review the interactive prototype for the Ambient Scribe Pilot Insights Report</a>',
        },
        {
          type: "paragraph",
          text: 'All of which leads to one final insight—since its launch <a href="https://www.nextgov.com/emerging-tech/2024/06/veterans-health-administration-creates-new-office-streamline-tech-initiatives/397330/" target="_blank" rel="noopener noreferrer">on June 2, 2024, the Digital Health Office (DHO) has focused on enhancing digital health solutions that improve experiences for Veterans and care teams.</a> The DHO was created as part of a broader VHA Central Office optimization effort, which began in April 2023 to centralize several of the Veterans Health Administration’s technology-focused components under a single, unified authority. From the start, the team’s priority has been to ensure that VHA’s mission—delivering innovative, modern, and human-centered health care—is clearly reflected in everything they do.',
        },
        {
          type: "paragraph",
          text: "As the DHO defined its vision, organization, and strategic goals, the team quickly recognized the need for a centralized workspace to store user research findings and to access practical resources such as playbooks, guides, and templates for human-centered design and research.",
        },
        {
          type: "paragraph",
          text: '<strong>To accelerate this initiative, we developed a rapid prototype—using AI-powered v0 by Vercel—to visualize a <a href="https://v0-dho-github-repo-prototype.vercel.app/" target="_blank" rel="noopener noreferrer">GitHub-based workspace for the DHO</a>. This prototype served as an immediate demonstration of what the Digital Health Office GitHub repository could achieve, guiding the development of the actual private repository.</strong> This approach enabled the DHO team to clearly understand how centralizing their digital workspace would support their ongoing commitment to delivering exceptional digital health care experiences.',
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750800095/Frame_202_uouppc.png",
          alt: "Screenshot of the GitHub-based workspace prototype for the DHO team",
          width: 800,
          height: 450,
          className: "rounded-lg mt-12 mb-6 w-full object-cover",
        },
        {
          type: "paragraph",
          text: '<a href="https://v0-dho-github-repo-prototype.vercel.app/" target="_blank" rel="noopener noreferrer">Review the interactive prototype for the GitHub-based workspace for the DHO team</a>',
        },
      ],
    },
    {
      title: "Key Outcomes",
      content: [
        {
          type: "list",
          items: [
            "<strong>Created a method for quantitative capture of understanding where and how much administrative burden</strong> is felt during the care encounter.",
            "<strong>Created a baseline administrative burden score, using the NASA-TLX,</strong> for each phase of the care encounter to validate with ~20 primary care clinics across two VA health care systems before the pilot begins to measure and understand if and where burden shifted with ambient scribe.",
            "<strong>Identified the insight that administrative burden increases, like compounding interest,</strong> as care encounters are completed, resulting in burden felt later or after hours—sometimes carrying over into the next day—through conducting task analysis with users, workstream leadership, and health informaticists.",
            "<strong>Shared research readouts to DHO leadership that identified opportunities for improvement in the existing care encounter experience</strong> where ambient scribe and predictive AI modeling can impact care delivery, reduce administrative burnout, increase Veteran satisfaction, and improve health outcomes.",
            '<strong>Developed a <a href="https://ai-scribe-pilot-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">proof of concept KPI dashboard</a>, using AI-powered prototyping, to be used to inform Power BI dashboards and presenting outcomes</strong> during the pilot to DHO leadership to make informed decisions on product preference, clinician workflows, accuracy and safety, and onboarding additional VA health care systems.',
            'Developed and rapidly prototyped an <a href="https://v0-dho-github-repo-prototype.vercel.app/" target="_blank" rel="noopener noreferrer">AI-powered GitHub-based workspace</a> to centralize user research, playbooks, guides, and templates, <strong>empowering the newly formed Digital Health Office (DHO) to operationalize its mission of delivering innovative, modern, and human-centered digital health solutions for Veterans and care teams.</strong>',
          ],
        },
      ],
    },
  ],
}
