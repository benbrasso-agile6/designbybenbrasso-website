import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "./components/scroll-to-top"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ben Brasso - UX Product Design Portfolio",
  description:
    "Professional UX design portfolio showcasing human-centered design, product strategy, and digital health solutions by Ben Brasso, UX Product Designer and Researcher.",
  category: "business",
  keywords: [
    "UX Designer",
    "Product Designer",
    "User Experience",
    "Design Portfolio",
    "Human-Centered Design",
    "Digital Health",
    "Healthcare Design",
    "Accessibility Design",
    "Design Strategy",
    "User Research",
    "Professional Services",
    "Creative Services",
  ],
  authors: [{ name: "Ben Brasso", url: "https://designbybenbrasso.com" }],
  creator: "Ben Brasso",
  publisher: "Ben Brasso",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Ben Brasso - UX Product Design Portfolio",
    description:
      "Professional UX design portfolio showcasing human-centered design, product strategy, and digital health solutions by Ben Brasso, UX Product Designer and Researcher.",
    siteName: "Ben Brasso Design Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dpl6apspp/image/upload/IMG_7897_tmmfga.jpg",
        width: 1200,
        height: 630,
        alt: "Ben Brasso UX Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Brasso - UX Product Design Portfolio",
    description:
      "Professional UX design portfolio showcasing human-centered design, product strategy, and digital health solutions by Ben Brasso, UX Product Designer and Researcher.",
    images: ["https://res.cloudinary.com/dpl6apspp/image/upload/IMG_7897_tmmfga.jpg"],
  },
  generator: "v0.dev",
  classification: "Professional Portfolio",
  other: {
    "business-type": "Design Services",
    "service-category": "Creative Professional Services",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "CreativeWork"],
              name: "Ben Brasso",
              jobTitle: "UX Product Designer",
              description:
                "Human-centered designer, researcher, and AI-forward strategist specializing in digital health solutions and accessible user experiences.",
              url: "https://designbybenbrasso.com",
              sameAs: ["https://www.linkedin.com/in/benbrasso"],
              knowsAbout: [
                "User Experience Design",
                "Product Design",
                "Human-Centered Design",
                "User Research",
                "Digital Health",
                "Accessibility Design",
                "Design Strategy",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "UX Product Designer",
                occupationLocation: {
                  "@type": "Country",
                  name: "United States",
                },
                skills: [
                  "User Experience Design",
                  "Product Strategy",
                  "User Research",
                  "Prototyping",
                  "Accessibility Design",
                  "Design Systems",
                ],
              },
              mainEntity: {
                "@type": "CreativeWork",
                name: "Professional Design Portfolio",
                description:
                  "Portfolio showcasing UX design case studies, product strategy, and human-centered design solutions",
                creator: {
                  "@type": "Person",
                  name: "Ben Brasso",
                },
                about: [
                  "User Experience Design",
                  "Digital Health Solutions",
                  "Accessibility Design",
                  "Product Strategy",
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.className} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:dark:bg-neutral-900 focus:text-sky-600 focus:dark:text-sky-500 focus:border focus:border-sky-600 focus:dark:border-sky-500 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <ScrollToTop />
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
