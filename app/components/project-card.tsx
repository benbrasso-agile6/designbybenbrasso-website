import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const DEFAULT_CASE_STUDY_STATUS_TEXT = "Case study coming soon..."

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  slug?: string
  hasCaseStudy?: boolean
  projectUrl?: string
  caseStudyStatusText?: string
  imageMarginTopClass?: string
  footerPaddingTopClass?: string
  caseStudyUrlOverride?: string
  stats?: { label: string; value: string }[]
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  slug,
  hasCaseStudy,
  caseStudyUrlOverride,
  caseStudyStatusText,
  imageMarginTopClass = "mt-6",
  footerPaddingTopClass = "pt-6",
  stats,
}: ProjectCardProps) {
  // If caseStudyUrlOverride is provided, it's used. Otherwise, it falls back to the slug.
  const linkHref = caseStudyUrlOverride || (slug ? `/project/${slug}` : "#")

  return (
    <Card className="overflow-hidden w-full max-w-5xl flex flex-col group bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 min-h-[auto] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <CardHeader className="pt-10 px-8 pb-0">
        <CardTitle className="text-2xl lg:text-3xl text-sky-800 dark:text-sky-700">{title}</CardTitle>
        <p
          className="text-base md:text-lg lg:text-xl leading-loose text-neutral-700 dark:text-neutral-300 mt-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className={`w-full ${imageMarginTopClass}`}>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800 flex items-center justify-center">
            <Image
              src={imageUrl || "/placeholder.svg?width=890&height=500&query=large+project+showcase+image"}
              alt={title}
              width={890}
              height={500}
              className="object-contain w-full h-full transition-transform duration-300"
              unoptimized
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className={`px-8 ${stats && stats.length > 0 ? "pt-6" : "pt-0"}`}>
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.label}</p>
                <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 font-light">{stat.value}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className={`px-8 pb-6 ${footerPaddingTopClass}`}>
        {hasCaseStudy && (slug || caseStudyUrlOverride) ? (
          <Link href={linkHref} passHref>
            <Button className="bg-sky-900 hover:bg-sky-950 text-white dark:bg-sky-700 dark:hover:bg-sky-800">
              Review case study
            </Button>
          </Link>
        ) : (
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            {caseStudyStatusText || DEFAULT_CASE_STUDY_STATUS_TEXT}
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
