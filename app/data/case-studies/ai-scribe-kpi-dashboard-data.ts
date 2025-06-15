import type { CaseStudyData } from "../case-study-types"

export const aiScribeKpiDashboardData: CaseStudyData = {
  slug: "ai-scribe-kpi-dashboard",
  pageTitle: "Ambient Scribe Pilot KPI Dashboard",
  metaTitle: "Case Study: Ambient Scribe KPI Dashboard | Ben Brasso",
  metaDescription:
    "Detailed case study of the Ambient Scribe KPI Dashboard project, focusing on data visualization and UX strategy by Ben Brasso.",
  projectOverviewBanner: {
    description:
      "This project aimed to understand gaps and opportunities in the existing care encounter experience to inform the ambient scribe pilot plan and visualize a concept for measuring and reporting outcomes to product leadership.",
    skills: "Human-centered design, UX research lead, service design, AI-powered prototyping",
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
    alt: "Ambient Scribe KPI Dashboard project showcase GIF", // Updated alt slightly for clarity
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
          text: "TBD",
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
          ],
        },
      ],
    },
  ],
}
