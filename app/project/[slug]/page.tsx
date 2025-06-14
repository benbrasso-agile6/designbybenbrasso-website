import { getAllCaseStudySlugs, getCaseStudyData } from "@/app/data/case-studies-data"
import CaseStudyClientPage from "./CaseStudyClientPage"
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { slug: string }
}

// Instruct Next.js to only generate pages for slugs from generateStaticParams
// and 404 for any other slug if this dynamic route is matched.
export const dynamicParams = false

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    // This path should ideally not be hit for slugs not in generateStaticParams
    // when dynamicParams = false. If it is, it's a fallback.
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
  const slugs = getAllCaseStudySlugs() // e.g., [{ slug: 'ai-scribe-kpi-dashboard' }, ...]
  return slugs
}

export default function CaseStudyPage({ params }: Props) {
  // With dynamicParams = false, this page component should only be invoked
  // for slugs generated by generateStaticParams.
  // CaseStudyClientPage will internally call notFound() if getCaseStudyData(params.slug)
  // returns undefined, serving as a final safety check.
  return <CaseStudyClientPage params={params} />
}
