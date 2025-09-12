import projects from "@/content/projects.json"
import ProjectCard from "./ProjectCard"

export default function ProjectGrid() {
  return (
    <section id="work" className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 opacity-80 max-w-xl">
        A few projects showing performance, interactivity, and clean architecture.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
      </div>
    </section>
  )
}
