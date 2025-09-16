// src/components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  const email = "jackadamczykjs@gmail.com"
  const linkedIn = "https://www.linkedin.com/in/jackadamczyk"
  const github = "https://github.com/Adamjackczyk"
  const resumeHref = "/resume/jack-adamczyk-resume.pdf"

  return (
    <footer
      className="
        mt-16
        border-t border-white/10
        bg-[linear-gradient(to_top,rgba(255,255,255,0.04),transparent)]
      "
      aria-labelledby="site-footer-title"
    >
      <div className="container mx-auto px-6 py-10">
        <h2 id="site-footer-title" className="sr-only">Site footer</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand / one-liner */}
          <div>
            <div className="text-lg font-semibold">Jack Adamczyk</div>
            <p className="mt-2 opacity-80 max-w-sm">
              Front-End dev crafting fast, immersive interfaces with React, TypeScript, and Three.js.
            </p>
            <div className="mt-4 text-xs opacity-70">
              Now: open to Front-End roles (US-remote)
            </div>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation" className="text-sm">
            <div className="font-semibold opacity-90">Navigate</div>
            <ul className="mt-3 space-y-2">
              <li><Link className="hover:underline underline-offset-4" href="/#work">Work</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/about">About</Link></li>
              <li><a   className="hover:underline underline-offset-4" href={`mailto:${email}`}>Contact</a></li>
              <li><a   className="hover:underline underline-offset-4" href={resumeHref} target="_blank" rel="noreferrer">Resume (PDF)</a></li>
            </ul>
          </nav>

          {/* Contact / socials */}
          <div className="text-sm">
            <div className="font-semibold opacity-90">Contact</div>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="inline-flex items-center gap-2 hover:underline underline-offset-4" href={`mailto:${email}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 5.2-9.4 5.88a2 2 0 0 1-2.2 0L1 9.2V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.2Z"/>
                  </svg>
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href={linkedIn} target="_blank" rel="me noreferrer"
                   className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-white/15 hover:border-white/40"
                   aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.17 2.14-2.4 4.4-2.4 4.7 0 5.54 3.1 5.54 7.1V24h-5v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.76 1.9-2.76 3.8V24h-5V8z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href={github} target="_blank" rel="me noreferrer"
                   className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-white/15 hover:border-white/40"
                   aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.57.1.78-.25.78-.55l-.01-2.03c-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.75.4-1.24.72-1.52-2.54-.29-5.22-1.27-5.22-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.2-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.07 0 4.38-2.68 5.35-5.23 5.64.41.35.77 1.04.77 2.1l-.01 3.11c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .5Z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-white/15 hover:border-white/40"
                   href={resumeHref} target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7h5l-5-5v5Z"/>
                  </svg>
                  Resume(PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Jack Adamczyk. Built with Next.js & Tailwind.
          </p>
          <a href="#top" className="text-xs opacity-80 hover:opacity-100 underline underline-offset-4">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
