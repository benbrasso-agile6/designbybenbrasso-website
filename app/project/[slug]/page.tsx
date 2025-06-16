import { getAllCaseStudySlugs, getCaseStudyData } from "@/app/data/case-studies-data"
import CaseStudyClientPage from "./CaseStudyClientPage"
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { slug: string }
}

// Allow dynamic params to handle cases where the slug might not be pre-generated
export const dynamicParams = true

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    return {
      title: "Page Not Found",
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
                : `https://www.benbrasso.com${caseStudy.mainImage.src}`,
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
  const slugs = getAllCaseStudySlugs()
  console.log("generateStaticParams called, returning:", slugs)
  return slugs
}

export default function CaseStudyPage({ params }: Props) {
  console.log("CaseStudyPage called with params:", params)
  return <CaseStudyClientPage params={params} />
}
