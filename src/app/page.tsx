import Hero from "@/components/Hero"
export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* temporary spacer so you can scroll and test */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold">Coming up next</h2>
        <p className="mt-2 opacity-80">
          Project grid and case studies will appear below.
        </p>
      </section>
    </main>
  )
}