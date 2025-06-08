import { projectDetailLabelMap } from "@/app/data/project-detail-labels"
import type { ProjectDetailItem } from "@/app/data/case-study-types"

interface ProjectDetailsTableProps {
  details: ProjectDetailItem[]
}

export default function ProjectDetailsTable({ details }: ProjectDetailsTableProps) {
  if (!details || details.length === 0) {
    return null
  }

  return (
    <div className="mt-[10px] mb-[10px] border-y border-neutral-200 dark:border-neutral-700">
      {details.map((detail, index) => (
        <div
          key={`${projectDetailLabelMap[detail.label]}-${index}`}
          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 py-2"
        >
          <div className="w-full sm:w-1/3 mb-1 sm:mb-0">
            <h3 className="text-xs font-normal uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
              {projectDetailLabelMap[detail.label]}
            </h3>
          </div>
          <div className="w-full sm:w-2/3 sm:text-left">
            {Array.isArray(detail.value) ? (
              <ul className="space-y-1">
                {detail.value.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-neutral-700 dark:text-neutral-200">
                    <span
                      aria-label={
                        Array.isArray(detail.valueAriaLabel) && detail.valueAriaLabel[itemIndex]
                          ? detail.valueAriaLabel[itemIndex]
                          : undefined
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-neutral-700 dark:text-neutral-200">
                <span aria-label={typeof detail.valueAriaLabel === "string" ? detail.valueAriaLabel : undefined}>
                  {detail.value}
                </span>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
