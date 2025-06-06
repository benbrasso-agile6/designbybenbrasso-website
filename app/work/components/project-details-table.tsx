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
    <div className="my-8 md:my-12 border-b border-neutral-200 dark:border-neutral-700 pb-8 md:pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {details.map((detail, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
              {detail.label}
            </h3>
            {Array.isArray(detail.value) ? (
              <ul className="mt-1 space-y-0.5">
                {detail.value.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base font-medium text-neutral-800 dark:text-neutral-100">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base font-medium text-neutral-800 dark:text-neutral-100 mt-1">{detail.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
