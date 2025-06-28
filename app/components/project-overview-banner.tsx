import { ExternalLink } from "lucide-react"

interface ProjectOverviewBannerProps {
  bannerData: {
    role: string
    timeline: string
    team: string
    tools: string[]
    overview: string
  }
  githubLink?: {
    url: string
    text: string
  }
}

export default function ProjectOverviewBanner({ bannerData, githubLink }: ProjectOverviewBannerProps) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 sm:p-8 mb-12 not-prose">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Role</h3>
          <p className="text-neutral-600 dark:text-neutral-400">{bannerData.role}</p>
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Timeline</h3>
          <p className="text-neutral-600 dark:text-neutral-400">{bannerData.timeline}</p>
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Team</h3>
          <p className="text-neutral-600 dark:text-neutral-400">{bannerData.team}</p>
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Tools</h3>
          <p className="text-neutral-600 dark:text-neutral-400">{bannerData.tools.join(", ")}</p>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Project Overview</h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{bannerData.overview}</p>

        {githubLink && (
          <a
            href={githubLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 underline group"
          >
            {githubLink.text}
            <ExternalLink className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
        )}
      </div>
    </div>
  )
}
