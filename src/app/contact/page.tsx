"use client"

import { useState } from "react"

export default function ContactPage() {
  const email = "jackadamczykjs@gmail.com"
  const linkedIn = "https://www.linkedin.com/in/jackadamczyk"
  const github = "https://github.com/Adamjackczyk"
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID

  const [state, setState] = useState<"idle"|"submitting"|"ok"|"error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formId) { setState("error"); setMessage("Form is not configured."); return }
    setState("submitting")

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot anti-spam
    if ((data.get("website") as string)?.length) {
      setState("ok"); setMessage("Thanks!")
      form.reset()
      return
    }

    // Post to formspree
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    })

    if (res.ok) {
      setState("ok"); setMessage("Thanks — I’ll reply soon!")
      form.reset()
    } else {
      setState("error")
      setMessage("Oops, something went wrong. Try email instead.")
    }
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <header className="max-w-2xl">
        <p className="opacity-70 text-sm">Contact</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mt-1">Let’s talk</h1>
        <p className="mt-3 opacity-85">
          Quickest response via this form or email. I’m open to Front-End roles (React/TS/Three.js).
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a className="px-4 py-2 rounded-2xl bg-white text-black font-medium hover:opacity-90"
             href={`mailto:${email}`}>Email Me</a>
          <a className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
             href={linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
             href={github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      {/* FORM */}
      <section className="mt-10 max-w-2xl">
        <form onSubmit={onSubmit} className="card p-6 rounded-2xl space-y-4" noValidate>
          {/* Honeypot (hidden) */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

          <div>
            <label className="block text-sm opacity-80">Name</label>
            <input
              className="mt-1 w-full rounded-xl bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-white/40"
              type="text" name="name" placeholder="Your name" required
            />
          </div>

          <div>
            <label className="block text-sm opacity-80">Email</label>
            <input
              className="mt-1 w-full rounded-xl bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-white/40"
              type="email" name="email" placeholder="you@example.com" required
            />
          </div>

          <div>
            <label className="block text-sm opacity-80">Message</label>
            <textarea
              className="mt-1 w-full rounded-xl bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-white/40"
              name="message" rows={6} placeholder="What can I help with?" required
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled={state === "submitting"}
              className="px-4 py-2 rounded-2xl bg-white text-black font-medium hover:opacity-90 disabled:opacity-60"
              type="submit"
            >
              {state === "submitting" ? "Sending…" : "Send message"}
            </button>
            {state !== "idle" && (
              <span className={`text-sm ${state === "error" ? "text-red-300" : "opacity-85"}`}>
                {message}
              </span>
            )}
          </div>
        </form>

        <div className="mt-12">
          <a href="/" className="inline-block px-4 py-2 rounded-2xl border border-white/20 hover:border-white/40">
            ← Back Home
          </a>
        </div>
      </section>
    </main>
  )
}
