interface ProjectDetail {
  label: string
  value: string | string[] // string for single value, string[] for list
}

interface ProjectDetailsTableProps {
  details: ProjectDetail[]
}

export default function ProjectDetailsTable({ details }: ProjectDetailsTableProps) {
  if (!details || details.length === 0) {
    return null
  }

  return (
    <div className="my-8 md:my-12 space-y-6">
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b border-neutral-200 dark:border-neutral-700 pb-6"
        >
          <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
            <h3 className="text-sm font-semibold uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
              {detail.label}
            </h3>
          </div>
          <div className="w-full sm:w-2/3 sm:text-left">
            {Array.isArray(detail.value) ? (
              <ul className="space-y-0.5">
                {detail.value.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base font-medium text-neutral-800 dark:text-neutral-100">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base font-medium text-neutral-800 dark:text-neutral-100">{detail.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
