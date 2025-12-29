import type { ProjectCardProps } from "./path-to-project-card-props" // Assuming ProjectCardProps is declared in another file

export const projectsData: ProjectCardProps[] = [
  {
    title: "Community Care Provider Online Scheduling",
    description:
      "Designed a self-scheduling experience that allowed Veterans to choose a community care provider and time slot, <strong>saving an estimated 41 million minutes per month in staff time.</strong>",
    slug: "provider-online-scheduling",
    tags: ["health care", "design systems", "service design"],
    imageUrl:
      "https://res.cloudinary.com/dpl6apspp/image/upload/v1751586617/CleanShot_2025-07-03_at_19.47.21_rmviky.gif",
    hasCaseStudy: true,
    stats: [
      {
        label: "Staff time saved",
        value: "41M minutes per month",
      },
      {
        label: "Scheduling time reduced",
        value: "From 7 days to 7 minutes",
      },
    ],
  },
]
