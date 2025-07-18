import Header from "./components/header"
import HeroSection from "./components/hero-section"
import FeaturedWorkSection from "./components/featured-work-section"
import ToolsIUseSection from "./components/tools-i-use"
import Footer from "./components/footer"
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <FeaturedWorkSection statsHeadingLevel={4} />
        <ToolsIUseSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
