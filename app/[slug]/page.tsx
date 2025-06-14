import { getAllCaseStudySlugs, getCaseStudyData } from "@/app/data/case-studies-data"
import CaseStudyClientPage from "./CaseStudyClientPage"
import type { Metadata, ResolvingMetadata } from "next"
import { notFound as nextNotFound } from "next/navigation" // Renamed to avoid conflict if notFound is used locally

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const knownStaticRoutes = ["read-me", "contact", "design-contributions"] // Add other known static top-level slugs

  // If this slug is for a known static route, don't try to generate case study metadata
  if (knownStaticRoutes.includes(slug)) {
    // This ideally shouldn't be hit if static routing works correctly.
    // If it is, returning a generic title or allowing notFound to be called is appropriate.
    // For now, we let the page component handle the notFound() call.
    // We could return a generic "Page Not Found" metadata here too.
    // For simplicity, we'll assume the page component's notFound() will be authoritative.
  }

  const caseStudy = getCaseStudyData(slug)

  if (!caseStudy) {
    // This will be hit if the slug is not a known static route AND not a valid case study.
    // Or if a known static route was not caught by its dedicated page.tsx and fell through here.
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
  // console.log("Slugs being generated for dynamic /[slug] pages:", slugs); // Cleaned up log message
  return slugs
}

export default function CaseStudyPage({ params }: Props) {
  const knownStaticRoutes = ["read-me", "contact", "design-contributions"] // Ensure this list is comprehensive

  if (knownStaticRoutes.includes(params.slug)) {
    // If a known static path reaches here, it means the static route for it failed or wasn't picked up.
    // Explicitly call notFound to prevent rendering it as a case study.
    nextNotFound()
  }

  // If it's not a known static route, proceed to render as a case study.
  // CaseStudyClientPage will call notFound() again if it's not a valid case study slug.
  return <CaseStudyClientPage params={params} />
}
