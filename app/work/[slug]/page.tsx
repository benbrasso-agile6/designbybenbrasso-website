import { getAllCaseStudySlugs, getCaseStudyData } from "@/app/data/case-studies-data"
import CaseStudyClientPage from "./CaseStudyClientPage"
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

export default function CaseStudyPage({ params }: Props) {
  return <CaseStudyClientPage params={params} />
}
