export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-24">
      <h1 className="text-4xl sm:text-5xl font-semibold">Jack Adamczyk</h1>

      <p className="mt-4 max-w-xl opacity-80">
        Creative Front-End Dev. React, TypeScript, Three.js.
        Portfolio rebuild in progress.
      </p>

      {/* Simple card example to confirm tokens */}
      <div className="card p-6 mt-8">
        <p className="opacity-80">
          This is a reusable card surface.
        </p>
      </div>
    </main>
  )
}