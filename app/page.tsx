import Header from "./components/header"
import HeroSection from "./components/hero-section"
import FeaturedWorkSection from "./components/featured-work-section"
import ToolsIUseSection from "./components/tools-i-use"
import AboutSection from "./components/about-section"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <FeaturedWorkSection />
        <ToolsIUseSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
