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
    <div
      className="my-12 pt-4 pb-6 px-6 md:pt-6 md:pb-8 md:px-8 
                 bg-gradient-to-b from-white to-brand-peach 
                 dark:from-neutral-950 dark:to-sky-900 
                 rounded-lg"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-peach-text dark:text-white mb-3">Project details</h2>
      <p className="text-neutral-700 dark:text-sky-100 mb-6 text-base md:text-lg">{description}</p>

      <div className="space-y-4 border-t border-brand-peach-text/30 dark:border-sky-800 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <h3 className="text-base font-semibold text-brand-peach-text dark:text-white w-full sm:w-1/4 mb-1 sm:mb-0">
            Skills
          </h3>
          <p className="text-neutral-600 dark:text-sky-200 text-sm md:text-base w-full sm:w-3/4">{skills}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <h3 className="text-base font-semibold text-brand-peach-text dark:text-white w-full sm:w-1/4 mb-1 sm:mb-0">
            Tools
          </h3>
          <p className="text-neutral-600 dark:text-sky-200 text-sm md:text-base w-full sm:w-3/4">{tools}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <h3 className="text-base font-semibold text-brand-peach-text dark:text-white w-full sm:w-1/4 mb-1 sm:mb-0">
            Date
          </h3>
          <p className="text-neutral-600 dark:text-sky-200 text-sm md:text-base w-full sm:w-3/4">{date}</p>
        </div>
      </div>
    </div>
  )
}
