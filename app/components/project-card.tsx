import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Added Button import
import { ArrowRightIcon } from "lucide-react" // Added an icon for the button

const DEFAULT_CASE_STUDY_STATUS_TEXT = "Case study coming soon..."

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  projectUrl?: string // This is the slug, e.g., "/patient-check-in"
  caseStudyStatusText?: string
  imageMarginTopClass?: string
  footerPaddingTopClass?: string
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags, // tags prop is available but not used in the current card display
  projectUrl,
  caseStudyStatusText,
  imageMarginTopClass = "mt-6",
  footerPaddingTopClass = "pt-6",
}: ProjectCardProps) {
  // Determine if this specific card is for "Mobile patient check-in"
  // to apply the specific button and ARIA label.
  // projectUrl here is just the slug, so we need to prepend "/"
  const isPatientCheckInCard = projectUrl === "patient-check-in"

  return (
    <Card className="overflow-hidden w-full max-w-5xl flex flex-col group bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 min-h-[auto] md:min-h-[720px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
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

      <CardContent className="px-8 py-0 mt-0" />

      <CardFooter className={`px-8 pb-8 ${footerPaddingTopClass} flex-grow flex items-end`}>
        {isPatientCheckInCard && projectUrl ? (
          <Button
            asChild
            className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white w-full sm:w-auto"
          >
            <Link href={`/${projectUrl}`} aria-label={`Review the ${title} case study`}>
              Review case study
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : projectUrl ? (
          // For other projects with a URL but not "patient-check-in",
          // you might want a generic button or different text.
          // For now, let's assume they might also get a similar button if they have a projectUrl.
          // Or, if only "patient-check-in" gets this button, the others would show status text.
          // Based on the prompt, only "patient-check-in" gets this specific button.
          // So, other projects with a URL but not "patient-check-in" will show status text.
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            {caseStudyStatusText || DEFAULT_CASE_STUDY_STATUS_TEXT}
          </p>
        ) : (
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            {caseStudyStatusText || DEFAULT_CASE_STUDY_STATUS_TEXT}
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
