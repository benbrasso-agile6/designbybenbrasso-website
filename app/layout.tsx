import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "./components/scroll-to-top"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ben Brasso - UX Product Design Portfolio",
  description:
    "UX design portfolio and website for Ben Brasso, human-centered designer, researcher, and AI-forward strategist.", // Shorter version
  robots: {
    index: false,
    follow: false,
    nocache: true,
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
    title: "Ben Brasso - UX Product Design Portfolio",
    description:
      "UX design portfolio and website for Ben Brasso, human-centered designer, researcher, and AI-forward strategist.", // Shorter version
    images: [
      {
        url: "https://res.cloudinary.com/dpl6apspp/image/upload/IMG_7897_tmmfga.jpg",
        width: 1200,
        height: 630,
        alt: "Ben Brasso - Full-Stack UX Product Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Brasso - UX Product Design Portfolio",
    description:
      "UX design portfolio and website for Ben Brasso, human-centered designer, researcher, and AI-forward strategist.", // Shorter version
    images: ["https://res.cloudinary.com/dpl6apspp/image/upload/IMG_7897_tmmfga.jpg"],
  },
  generator: "v0.dev",
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
