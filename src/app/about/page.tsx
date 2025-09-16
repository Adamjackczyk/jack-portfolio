import Image from "next/image"
import CopyEmailButton from "@/components/CopyEmailButton"

export const metadata = {
  title: "About — Jack Adamczyk",
  description:
    "Front-End developer focused on fast, immersive web experiences with React, TypeScript, and Three.js.",
}

export default function AboutPage() {
  const email = "jackadamczykjs@gmail.com"
  const linkedIn = "https://www.linkedin.com/in/jackadamczyk"
  const github = "https://github.com/Adamjackczyk"
  const resumeHref = "/resume/jack-adamczyk-resume.pdf"

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Front-End Role — Portfolio inquiry"
  )}&body=${encodeURIComponent(`Hi Jack,

I came across your portfolio and would love to chat about a front-end opportunity.

—`)}`

  return (
    <main className="container mx-auto px-6 py-12">
      {/* ---------- HERO ---------- */}
      <header className="max-w-5xl">

        <div className="mt-2 grid gap-6 lg:grid-cols-[auto,1fr] lg:items-center">
          {/* Avatar */}
          <div className="flex lg:block justify-start">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border border-white/10 shadow-[0_0_0_4px_rgba(255,255,255,0.06)]">
              <Image
                src="/thumbs/me.png"
                alt="Jack Adamczyk"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name + intro + CTAs */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">Jack Adamczyk</h1>
            <p className="mt-1 text-base sm:text-lg opacity-85">
              Front-End Developer — React • TypeScript • Three.js
            </p>

            <p className="mt-4 opacity-85 max-w-2xl">
              I craft smooth, real-time web experiences and ship performance-minded UI
              with clean code and sharp visuals.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full border border-white/15 text-sm opacity-90">Columbus, GA-Area</span>
              <span className="px-3 py-1 rounded-full border border-white/15 text-sm opacity-90">Immediate Availability</span>
              <span className="px-3 py-1 rounded-full border border-white/15 text-sm opacity-90">Remote/Hybrid</span>
              <span className="px-3 py-1 rounded-full border border-white/15 text-sm opacity-90">Open to Front-End Roles</span>
            </div>

            {/* CTAs + Socials */}
            <section id="contact" className="mt-5 flex flex-wrap gap-3">
              {/* Prefilled email */}
              <a
                className="px-4 py-2 rounded-2xl bg-white text-black font-medium hover:opacity-90"
                href={mailto}
              >
                Contact
                Me
              </a>

              {/* One-click copy */}
              <CopyEmailButton email={email} />

              {/* View résumé in browser */}
              <a
                className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

              {/* Socials */}
              <a
                href={linkedIn}
                target="_blank"
                rel="me noreferrer"
                className="px-3 py-2 rounded-xl border border-white/20 hover:border-white/50"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.17 2.14-2.4 4.4-2.4 4.7 0 5.54 3.1 5.54 7.1V24h-5v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.76 1.9-2.76 3.8V24h-5V8z"/>
                </svg>
              </a>

              <a
                href={github}
                target="_blank"
                rel="me noreferrer"
                className="px-3 py-2 rounded-xl border border-white/20 hover:border-white/50"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                  <path
                    fillRule="evenodd"
                    d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.57.1.78-.25.78-.55l-.01-2.03c-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.75.4-1.24.72-1.52-2.54-.29-5.22-1.27-5.22-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.2-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.07 0 4.38-2.68 5.35-5.23 5.64.41.35.77 1.04.77 2.1l-.01 3.11c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <section className="mt-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Shaders", value: "3+", hint: "Starfield • Sea • WIP" },
            { label: "Performance", value: "≈60 FPS", hint: "Desktop Targets" },
            { label: "Projects", value: "4 shipped", hint: "Live + Repos" },
            { label: "Stack", value: "React/TS/Three", hint: "Next.js • Tailwind" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-4 card">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="text-sm opacity-80">{s.label}</div>
              <div className="text-xs mt-1 opacity-60">{s.hint}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN + SIDEBAR */}
      <section className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {/* Tech */}
          <section>
            <h2 className="text-xl font-semibold">My Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {[
                "React", "Next.js", "TypeScript",
                "Three.js", "GLSL",
                "Tailwind", "Framer Motion",
                "Vite", "Jest/RTL",
                "Accessibility (ARIA, keyboard)",
                "Performance (images, code-split, WebGL)",
              ].map((t) => (
                <li
                  key={t}
                  className="px-3 py-1 rounded-full border border-white/15 text-sm opacity-90"
                  aria-label={t}
                  title={t}
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* Wins */}
          <section>
            <h2 className="text-xl font-semibold">Recent Wins</h2>
            <ul className="space-y-3 opacity-85 list-disc pl-5 mt-4">
              <li>Built real-time starfield shader (≈55k particles) with 60 FPS desktop, clean GLSL files.</li>
              <li>Shipped ocean shader with on-GPU normals (dFdx/dFdy) and specular highlights.</li>
              <li>Pokédex app with instant search, evolutions, and shiny toggles; sub-100ms perceived results.</li>
              <li>Static-hosted social app with Firebase Auth/Firestore, optimistic UI, and hash routing.</li>
            </ul>
          </section>

          {/* CTA */}
          <section>
            <div className="card p-6 rounded-2xl">
              <h2 className="text-xl font-semibold">Let’s connect and collaborate</h2>
              <p className="mt-2 opacity-85">
                I’m targeting Front-End roles where performance + polish matter (React/TS/Three.js).
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  className="px-4 py-2 rounded-2xl bg-white text-black font-medium hover:opacity-90"
                  href={mailto}
                >
                  Email Me
                </a>
                <a
                  className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/"
                className="inline-block px-4 py-2 rounded-2xl border border-white/20 hover:border-white/40"
              >
                ← Back Home
              </a>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="card p-5 rounded-2xl">
            <h3 className="font-semibold">Contact</h3>
            <p className="opacity-80 text-sm mt-1">
              Perfered Contact Method
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={mailto}
                className="px-4 py-2 rounded-xl bg-white text-black font-medium text-center hover:opacity-90"
              >
                Email Jack
              </a>
              <CopyEmailButton email={email} />
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl border border-white/20 text-center hover:border-white/50"
              >
                View Resume
              </a>
              <div className="mt-2 flex gap-2">
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="me noreferrer"
                  className="flex-1 px-3 py-2 rounded-xl border border-white/20 text-center hover:border-white/50"
                >
                  LinkedIn
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="me noreferrer"
                  className="flex-1 px-3 py-2 rounded-xl border border-white/20 text-center hover:border-white/50"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm font-medium">Now</div>
            <ul className="mt-2 text-sm opacity-85 list-disc pl-4 space-y-1">
              <li>Polishing portfolio (case studies + overlays)</li>
              <li>Exploring SSR + R3F patterns</li>
              <li>Open to FE roles (US-remote)</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jack Adamczyk",
            jobTitle: "Front-End Developer",
            email: `mailto:${email}`,
            url: process.env.NEXT_PUBLIC_SITE_URL,
            image: "/me.png",
            sameAs: [github, linkedIn],
          }),
        }}
      />
    </main>
  )
}
