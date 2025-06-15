import type { ProjectOverviewBannerData } from "@/app/data/case-study-types"

interface ProjectOverviewBannerProps {
  bannerData: ProjectOverviewBannerData
}

export default function ProjectOverviewBanner({ bannerData }: ProjectOverviewBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 mb-8 pb-8 md:pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10" />
      <div className="relative px-6 pt-8 md:px-8 md:pt-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Project Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{bannerData.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
              Skills
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{bannerData.skills}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">Tools</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{bannerData.tools}</p>

            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 mt-4 uppercase tracking-wide">
              Date
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{bannerData.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
