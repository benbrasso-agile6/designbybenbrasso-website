import type { Metadata } from "next"
import { streamliningNofoAuthoringData } from "@/app/data/case-studies/streamlining-nofo-authoring-data"
import StreamliningNofoAuthoringClientPage from "./StreamliningNofoAuthoringClientPage"

const caseStudy = streamliningNofoAuthoringData

export async function generateMetadata(): Promise<Metadata> {
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
        : [],
    },
  }
}

export default function StreamliningNofoAuthoringWorkPage() {
  return <StreamliningNofoAuthoringClientPage />
}
