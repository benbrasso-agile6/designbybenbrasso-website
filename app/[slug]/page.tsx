import CaseStudyClientPage from "./CaseStudyClientPage" // Updated import path
import type { Metadata, ResolvingMetadata } from "next"
import { getAllCaseStudySlugs, getCaseStudyData } from "@/app/data/case-studies-data" // Ensure this path is correct

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

  // Ensure absolute URLs for openGraph images
  const imageUrl = caseStudy.mainImage?.src.startsWith("http")
    ? caseStudy.mainImage.src
    : caseStudy.mainImage?.src
      ? `https://www.benbrasso.com${caseStudy.mainImage.src}`
      : undefined

  const images =
    imageUrl && caseStudy.mainImage
      ? [
          {
            url: imageUrl,
            width: caseStudy.mainImage.width,
            height: caseStudy.mainImage.height,
            alt: caseStudy.mainImage.alt,
          },
        ]
      : (await parent).openGraph?.images || []

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: images,
    },
  }
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs()
}

export default function CaseStudyPage({ params }: Props) {
  // This structure applies the max-width container and padding,
  // similar to how app/work/layout.tsx did.
  // Header and Footer are expected to be handled by the root app/layout.tsx.
  return (
    <main id="main-content" className="flex-1 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        <CaseStudyClientPage params={params} />
      </div>
    </main>
  )
}
