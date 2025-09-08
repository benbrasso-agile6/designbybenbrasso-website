export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Design by Ben Brasso</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Creative portfolio showcasing innovative design solutions and digital experiences
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              View Work
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
              Contact
            </button>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
            <p className="text-muted-foreground">Showcase of creative projects and design work</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-muted-foreground">Learn more about my design philosophy and approach</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <p className="text-muted-foreground">Design services and creative solutions offered</p>
          </div>
        </section>
      </div>
    </main>
  )
}
