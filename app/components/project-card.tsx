import type React from "react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  imageMarginTopClass?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  imageMarginTopClass = "mt-0",
}) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <div className="relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="overflow-hidden rounded-xl">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} thumbnail`}
            className={`w-full rounded-xl shadow-lg ${imageMarginTopClass}`}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
