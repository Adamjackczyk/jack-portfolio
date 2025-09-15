import projects from "@/content/projects.json"
import ProjectCard from "./ProjectCard"

export default function ProjectGrid() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="container mx-auto px-6 py-12 scroll-mt-24"
    >
      <h2 id="work-heading" className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 opacity-80 max-w-xl">
        A few projects showing performance, interactivity, and clean architecture.
      </p>

      {/* Use ul/li so SRs understand it’s a list */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug} className="contents">{/* keeps grid layout */} 
            <ProjectCard {...p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
