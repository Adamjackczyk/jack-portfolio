// src/app/work/[slug]/page.tsx
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import projects from "@/content/projects.json"
import { loadCase } from "@/lib/loadCase"

// --- Prebuild /work/<slug> for static export
export function generateStaticParams() {
  return (projects as { slug: string }[]).map(p => ({ slug: p.slug }))
}
export const dynamic = "error"
export const dynamicParams = false

// --- Per-page metadata (SEO/OG)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }     // 👈 Next 15: params is a Promise
): Promise<Metadata> {
  const { slug } = await params                          // 👈 await params
  const data = await loadCase(slug)
  if (!data) return { title: "Case Study" }
  return {
    title: `${data.title} — Case Study`,
    description: data.intro,
    openGraph: {
      title: `${data.title} — Case Study`,
      description: data.intro,
      images: data.heroMedia?.src ? [{ url: data.heroMedia.src }] : undefined,
    },
  }
}

// --- Page
export default async function CasePage(
  { params }: { params: Promise<{ slug: string }> }      // 👈 Promise here too
) {
  const { slug } = await params                          // 👈 await here
  const data = await loadCase(slug)
  if (!data) return notFound()

  // Optional: read an optional webm from JSON without changing your types
  const webmSrc = (data.heroMedia as any)?.webm as string | undefined

  return (
    <main className="container mx-auto px-6 py-12" aria-label="Case study">
      {/* HERO MEDIA */}
      {data.heroMedia?.type === "video" ? (
        <div className="relative aspect-video rounded-2xl overflow-hidden card">
          {/* Hide motion for users who prefer reduced motion */}
          <video
            className="w-full h-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={data.heroMedia.poster}
          >
            {/* Only add WebM source if you actually have one to avoid 404s */}
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            <source src={data.heroMedia.src} type="video/mp4" />
          </video>

          {/* Reduced-motion fallback (or while video is loading) */}
          {data.heroMedia.poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.heroMedia.poster}
              alt={data.title}
              className="hidden motion-reduce:block w-full h-full object-cover"
            />
          )}
        </div>
      ) : data.heroMedia?.src ? (
        <div className="relative aspect-video rounded-2xl overflow-hidden card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.heroMedia.src}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}

      {/* HEADER */}
      <header className="mt-6">
        <p className="opacity-70 text-sm">Case Study</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mt-1">{data.title}</h1>
        {data.intro && <p className="mt-3 opacity-85 max-w-2xl">{data.intro}</p>}

        {(data.links?.live || data.links?.repo) && (
          <div className="mt-4 flex gap-3">
            {data.links?.live && (
              <a
                href={data.links.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-2xl bg-white text-black font-medium hover:opacity-90"
              >
                View Live
              </a>
            )}
            {data.links?.repo && (
              <a
                href={data.links.repo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
              >
                GitHub Repo
              </a>
            )}
          </div>
        )}
      </header>

      {/* BODY */}
      <section className="mt-10 grid gap-10 lg:grid-cols-3">
        {/* MAIN COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {data.problem && (
            <div>
              <h2 className="text-xl font-semibold">The Problem</h2>
              <p className="mt-2 opacity-85">{data.problem}</p>
            </div>
          )}

          {Array.isArray(data.solution) && data.solution.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold">Solution</h2>
              <ul className="mt-2 space-y-2 opacity-85 list-disc pl-5">
                {data.solution.map((s: string, i: number) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}

          {Array.isArray(data.results) && data.results.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold">Results</h2>
              <ul className="mt-2 space-y-2 opacity-85 list-disc pl-5">
                {data.results.map((r: string, i: number) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}

          {Array.isArray(data.next) && data.next.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold">Next</h2>
              <ul className="mt-2 space-y-2 opacity-85 list-disc pl-5">
                {data.next.map((n: string, i: number) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {Array.isArray(data.tools) && data.tools.length > 0 && (
            <div className="card p-4">
              <h3 className="font-semibold">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.tools.map((t: string) => (
                  <span key={t} className="px-2 py-1 rounded-full border border-white/15 text-xs opacity-90">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(data.highlights) && data.highlights.length > 0 && (
            <div className="card p-4">
              <h3 className="font-semibold">Highlights</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {data.highlights.map((h: { label: string; value: string }, i: number) => (
                  <div key={i} className="rounded-xl border border-white/10 p-3">
                    <div className="text-xs opacity-70">{h.label}</div>
                    <div className="text-lg font-semibold">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(data.codePointers) && data.codePointers.length > 0 && (
            <div className="card p-4">
              <h3 className="font-semibold">Read the Code</h3>
              <ul className="mt-3 space-y-2">
                {data.codePointers.map((c: { label: string; url?: string; path?: string }, i: number) => (
                  <li key={i}>
                    {c.url ? (
                      <a
                        className="underline underline-offset-4 opacity-85 hover:opacity-100"
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {c.label}
                      </a>
                    ) : c.path ? (
                      <span className="opacity-75">
                        {c.label} — <code>{c.path}</code>
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      <div className="mt-12">
        <a
          href="/"
          className="inline-block px-4 py-2 rounded-2xl border border-white/20 hover:border-white/40"
        >
          ← Back home
        </a>
      </div>
    </main>
  )
}
