import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Featured Case Studies</h1>
          <p className="mt-4 text-lg text-muted-foreground">This page is under construction. Please check back soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
