export const projectsData = [
  {
    name: "Direct Online Scheduling",
    slug: "direct-online-scheduling",
    description: "A platform for direct online scheduling.",
    imageUrl: "/images/projects/direct-online-scheduling.png",
    tags: ["React", "Node.js", "MongoDB"],
    hasCaseStudy: false,
  },
  {
    name: "Project B",
    slug: "project-b",
    description: "Another project.",
    imageUrl: "/images/projects/project-b.png",
    tags: ["Vue.js", "Firebase"],
    hasCaseStudy: false,
  },
]

const projectToUpdate = projectsData.find((project) => project.slug === "direct-online-scheduling")

if (projectToUpdate) {
  projectToUpdate.hasCaseStudy = true
  if (!projectToUpdate.caseStudyUrlOverride) {
    projectToUpdate.caseStudyUrlOverride = "/work/provider-online-scheduling"
  }
}
