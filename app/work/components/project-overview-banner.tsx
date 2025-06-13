import type { ProjectOverviewBannerData } from "@/app/data/case-study-types"

interface ProjectOverviewBannerProps {
  bannerData: ProjectOverviewBannerData
}

export default function ProjectOverviewBanner({ bannerData }: ProjectOverviewBannerProps) {
  if (!bannerData) {
    return null
  }

  const { description, skills, tools, date } = bannerData

  return (
    <div className="mb-12 p-6 md:p-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow">
      <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
        Project details
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-base md:text-lg">{description}</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Skills</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">{skills}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Tools</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">{tools}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Date</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">{date}</p>
        </div>
      </div>
    </div>
  )
}
