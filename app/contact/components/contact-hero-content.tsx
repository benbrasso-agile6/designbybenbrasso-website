import type React from "react"
interface ContactHeroContentProps {
  title: string | React.ReactNode
  description: string
  className?: string
}

export default function ContactHeroContent({ title, description, className = "" }: ContactHeroContentProps) {
  return (
    <article className={`prose prose-lg dark:prose-invert prose-neutral max-w-none text-center ${className}`}>
      <h1 className="leading-normal">{title}</h1>
      <div className="bg-white dark:bg-neutral-950 px-4 py-2 rounded-lg relative z-10">
        <p className="lead">{description}</p>
      </div>
    </article>
  )
}
