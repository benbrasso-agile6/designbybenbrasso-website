import type { Metadata } from "next"
import { providerOnlineSchedulingData } from "@/app/data/case-studies/provider-online-scheduling-data"
import ProviderOnlineSchedulingClientPage from "./ProviderOnlineSchedulingClientPage"

const caseStudy = providerOnlineSchedulingData

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

export default function ProviderOnlineSchedulingWorkPage() {
  return <ProviderOnlineSchedulingClientPage />
}
