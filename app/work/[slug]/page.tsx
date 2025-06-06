import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import ProjectDetailsTable from "../components/project-details-table"
import { getCaseStudyData, getAllCaseStudySlugs } from "@/app/data/case-studies-data"
import type { CaseStudyContentItem } from "@/app/data/case-study-types"
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: caseStudy.mainImage
        ? [
            {
              url: caseStudy.mainImage.src.startsWith("http")
                ? caseStudy.mainImage.src
                : `https://www.benbrasso.com${caseStudy.mainImage.src}`, // Ensure absolute URL for OG
              width: caseStudy.mainImage.width,
              height: caseStudy.mainImage.height,
              alt: caseStudy.mainImage.alt,
            },
          ]
        : (await parent).openGraph?.images || [],
    },
  }
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs()
}

const renderContentItem = (item: CaseStudyContentItem, index: number) => {
  switch (item.type) {
    case "paragraph":
      return <p key={index}>{item.text}</p>
    case "list":
      return (
        <ul key={index}>
          {item.items?.map((li, liIndex) => (
            <li key={liIndex}>{li}</li>
          ))}
        </ul>
      )
    case "image":
      if (item.src && item.alt) {
        return (
          <div key={index} className={`my-6 ${item.className || ""}`}>
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={800} // Default width, can be overridden by item.width if added to type
              height={450} // Default height, can be overridden by item.height if added to type
              className="rounded-lg w-full object-cover"
              priority={item.priority}
            />
          </div>
        )
      }
      return null
    default:
      return null
  }
}

export default function CaseStudyPage({ params }: Props) {
  const slug = params.slug
  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Button
        asChild
        variant="outline"
        className="mb-8 print:hidden border-sky-600 text-sky-600 hover:bg-sky-100 hover:text-sky-700 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400"
      >
        <Link href="/#work">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to All Projects
        </Link>
      </Button>

      <ProjectDetailsTable details={caseStudy.projectDetails} />

      <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral dark:prose-invert">
        <h1>{caseStudy.pageTitle}</h1>

        {caseStudy.mainImage && (
          <Image
            src={caseStudy.mainImage.src || "/placeholder.svg"}
            alt={caseStudy.mainImage.alt}
            width={caseStudy.mainImage.width}
            height={caseStudy.mainImage.height}
            className={caseStudy.mainImage.className || "rounded-lg my-6 w-full object-cover"}
            priority={caseStudy.mainImage.priority}
          />
        )}

        <p className="lead">{caseStudy.leadParagraph}</p>

        {caseStudy.sections.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h2>{section.title}</h2>
            {section.content.map(renderContentItem)}
          </section>
        ))}

        <div className="mt-12 print:hidden">
          <Button asChild className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white">
            <Link href="/#work">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              See Other Projects
            </Link>
          </Button>
        </div>
      </article>
    </>
  )
}
