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
    <div className="my-8 md:my-12 space-y-3">
      {" "}
      {/* Changed to space-y-3 for smaller spacing */}
      {details.map((detail, index) => (
        <div
          key={`${projectDetailLabelMap[detail.label]}-${index}`}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b border-neutral-200 dark:border-neutral-700 pb-3" // Changed to pb-3 for smaller padding
        >
          <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
            <h3 className="text-sm font-semibold uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
              {projectDetailLabelMap[detail.label]}
            </h3>
          </div>
          <div className="w-full sm:w-2/3 sm:text-left">
            {Array.isArray(detail.value) ? (
              <ul className="space-y-0.5">
                {detail.value.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base font-medium text-neutral-800 dark:text-neutral-100">
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
              <p className="text-base font-medium text-neutral-800 dark:text-neutral-100">
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
