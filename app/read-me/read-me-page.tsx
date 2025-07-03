import { readMeData } from "./read-me-data"
import ReadMeContentSection from "./components/read-me-content-section"
import StickyReadMeNavigation from "./components/sticky-read-me-navigation"
import FooterImage from "./components/footer-image"

export default function ReadMePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
          <aside className="hidden md:block">
            <StickyReadMeNavigation sections={readMeData.sections} />
          </aside>
          <main>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {readMeData.sections.map((section) => (
                <ReadMeContentSection key={section.id} section={section} />
              ))}
            </div>
          </main>
        </div>
        <div className="mt-16 md:mt-24">
          <FooterImage />
        </div>
      </div>
    </div>
  )
}
