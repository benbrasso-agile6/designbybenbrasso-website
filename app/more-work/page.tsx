"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface MoreWorkProject {
  id: string
  title: string
  imageUrl: string
  linkUrl: string
  linkText: string
}

const moreWorkProjectsData: MoreWorkProject[] = [
  {
    id: "project-1",
    title: "Johns Hopkins School of Medicine",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635524/Frame_187_wyvifr.png",
    linkUrl: "https://www.hopkinsmedicine.org/som",
    linkText: "Visit https://www.hopkinsmedicine.org/som",
  },
  {
    id: "project-2",
    title: "Clinical Research and Trials at UI Health Care",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635522/Frame_191_mkiko9.png",
    linkUrl: "https://clinicaltrials.uihealthcare.org/",
    linkText: "Visit https://clinicaltrials.uihealthcare.org/",
  },
  {
    id: "project-3",
    title: "Rush University System for Health",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635525/Frame_190_bb1d2t.png",
    linkUrl: "https://www.rush.edu/",
    linkText: "Visit https://www.rush.edu/",
  },
  {
    id: "project-4",
    title: "Valley Health System",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635526/Frame_189_yxkmy1.png",
    linkUrl: "https://www.valleyhealth.com/",
    linkText: "Visit https://www.valleyhealth.com/",
  },
  {
    id: "project-5",
    title: "UMass Memorial Health",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635525/Frame_192_tgxh6x.png",
    linkUrl: "https://www.ummhealth.org/",
    linkText: "Visit https://www.ummhealth.org/",
  },
  {
    id: "project-6",
    title: "Johns Hopkins Community Physicians",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750635527/Frame_188_mqcmlw.png",
    linkUrl: "https://www.hopkinsmedicine.org/community-physicians",
    linkText: "Visit https://www.hopkinsmedicine.org/community-physicians",
  },
  {
    id: "project-7",
    title: "St. Louis Children's Hospital",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700262/Frame_193_jqcnon.png",
    linkUrl: "https://www.stlouischildrens.org/",
    linkText: "Visit https://www.stlouischildrens.org/",
  },
  {
    id: "project-8",
    title: "University of Missouri School of Medicine",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700261/Frame_197_yyrerx.png",
    linkUrl: "https://medicine.missouri.edu/",
    linkText: "Visit https://medicine.missouri.edu/",
  },
  {
    id: "project-9",
    title: "PennState Health",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700258/Frame_195_qsmssb.png",
    linkUrl: "https://www.pennstatehealth.org/",
    linkText: "Visit https://www.pennstatehealth.org/",
  },
  {
    id: "project-10",
    title: "Rush University",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700258/Frame_194_vh4ihh.png",
    linkUrl: "https://www.rushu.rush.edu/",
    linkText: "Visit https://www.rushu.rush.edu/",
  },
  {
    id: "project-11",
    title: "University of California Health",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700257/Frame_201_ddi8to.png",
    linkUrl: "hhttps://health.universityofcalifornia.edu/",
    linkText: "Visit https://health.universityofcalifornia.edu/",
  },
  {
    id: "project-12",
    title: "Nebraska Medicine",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700258/Frame_196_fgqgmm.png",
    linkUrl: "https://www.nebraskamed.com/",
    linkText: "Visit https://www.nebraskamed.com/",
  },
  {
    id: "project-13",
    title: "Midwest Orthopaedics at Rush (MOR)",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700254/Frame_198_gsexm2.png",
    linkUrl: "https://www.rushortho.com/",
    linkText: "Visit https://www.rushortho.com/",
  },
  {
    id: "project-14",
    title: "University of Iowa Health Care",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700258/Frame_199_flpmgt.png",
    linkUrl: "https://uihc.org/",
    linkText: "Visit https://uihc.org/",
  },
  {
    id: "project-15",
    title: "University of Missouri Health Care",
    imageUrl: "https://res.cloudinary.com/dpl6apspp/image/upload/v1750700257/Frame_200_myyo55.png",
    linkUrl: "https://www.muhealth.org/",
    linkText: "Visit https://www.muhealth.org/",
  },
]

const INITIAL_PROJECT_COUNT = 3
const PROJECTS_PER_LOAD = 3

export default function MoreWorkPage() {
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(INITIAL_PROJECT_COUNT)
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null)
  const isMobile = useMobile()

  // Check if device supports touch (includes tablets and mobile devices)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  const openModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl)
    setIsModalOpen(true)
  }

  const loadMoreProjects = useCallback(() => {
    if (isLoading || visibleProjectsCount >= moreWorkProjectsData.length) return

    setIsLoading(true)
    setTimeout(() => {
      setVisibleProjectsCount((prevCount) => Math.min(prevCount + PROJECTS_PER_LOAD, moreWorkProjectsData.length))
      setIsLoading(false)
    }, 300)
  }, [isLoading, visibleProjectsCount])

  useEffect(() => {
    const hasMore = visibleProjectsCount < moreWorkProjectsData.length
    if (!hasMore || isLoading) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreProjects()
        }
      },
      {
        rootMargin: "0px 0px 600px 0px",
        threshold: 0.01,
      },
    )

    const currentLoader = loaderRef.current
    if (currentLoader) {
      observer.observe(currentLoader)
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader)
      }
    }
  }, [loadMoreProjects, visibleProjectsCount, isLoading])

  const visibleProjects = moreWorkProjectsData.slice(0, visibleProjectsCount)
  const hasMoreProjectsToLoad = visibleProjectsCount < moreWorkProjectsData.length

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        {/* ... Introductory Section ... */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-neutral">
              <h1 className="leading-normal text-center">
                <span className="text-sky-600 dark:text-sky-500">More</span> of my work
              </h1>
            </article>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center mt-8">
              <p>
                More digital transformation projects in health care I've lead or contributed to—focused on implementing
                user research, content strategy, taxonomy design, prototypes, plain language writing, UX design, and
                sitemaps.
              </p>
              <p>
                Explore{" "}
                <Link
                  href="/"
                  className="text-sky-600 dark:text-sky-500 underline hover:text-sky-700 dark:hover:text-sky-400"
                >
                  my case studies
                </Link>{" "}
                to see how I think, collaborate, make informed decisions, and drive outcomes across featured projects.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Work Projects Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-24">
          <div className="flex flex-col items-center gap-16">
            {visibleProjects.map((project) => (
              <div key={project.id} className="w-full max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 dark:text-white">{project.title}</h2>
                <div
                  className={`relative w-full aspect-[16/10] ${isTouchDevice ? "cursor-pointer active:opacity-80 transition-opacity" : ""}`}
                  onClick={() => {
                    if (isTouchDevice && project.imageUrl) {
                      openModal(project.imageUrl)
                    }
                  }}
                  role={isTouchDevice ? "button" : undefined}
                  tabIndex={isTouchDevice ? 0 : undefined}
                  aria-label={isTouchDevice ? `View larger image for ${project.title}` : undefined}
                  onKeyDown={(e) => {
                    if (isTouchDevice && project.imageUrl && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault()
                      openModal(project.imageUrl)
                    }
                  }}
                >
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={`${project.title} website design screenshot`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1152px"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-4 lg:mt-2 xl:mt-1 relative z-10">
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-500 underline hover:text-sky-700 dark:hover:text-sky-400"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Loader and Trigger */}
          {hasMoreProjectsToLoad && (
            <div ref={loaderRef} className="w-full max-w-6xl mx-auto mt-16">
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/2 mx-auto" />
                <Skeleton className="w-full aspect-[16/10]" />
                <Skeleton className="h-6 w-1/4 mx-auto" />
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed inset-0 z-50 w-screen h-screen bg-transparent border-0 p-0 shadow-none rounded-none translate-x-0 translate-y-0 max-w-none">
          {/* Custom Close Button */}
          <DialogClose className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white hover:bg-black/40 hover:border-white/40 focus:outline-none focus:shadow-none transition-colors focus:[box-shadow:0_0_0_4px_rgba(0,0,0,0.5),0_0_0_6px_rgb(250,204,21)]">
            <X className="h-4 w-4" strokeWidth={1.5} />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Image Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {selectedImageUrl && (
              <div className="relative w-full h-full max-w-7xl max-h-full">
                <Image
                  src={selectedImageUrl || "/placeholder.svg"}
                  alt="Enlarged project image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
