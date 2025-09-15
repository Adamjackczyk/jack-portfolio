"use client"
/**
 * Hero.tsx
 * Above-the-fold pitch with clear CTAs.
 * Uses `isolate` to create a local stacking context so the starfield (z-0)
 * sits behind the content (z-10) but above the page background.
 */

import { motion } from "framer-motion"
import Link from "next/link"
import Starfield from "./Starfield"

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-[90svh] flex items-center"
      aria-label="Introduction"
    >
      {/* Background layer */}
      <Starfield />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl font-semibold tracking-tight"
        >
          Creative Front-End Dev
          <span className="block opacity-80 text-xl sm:text-2xl mt-3">
            React • TypeScript • Three.js
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          className="max-w-xl mt-6 text-base sm:text-lg opacity-90"
        >
          I specialize in building fast, immersive interfaces with React and WebGL. I enjoy solving performance challenges and creating memorable digital experiences.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
  className="mt-8 flex flex-wrap gap-3"
>
  <Link
    href="/#work"
    className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:opacity-90 focus-visible:outline"
  >
    View Work
  </Link>

  <Link
    href="/about"
    className="px-5 py-3 rounded-2xl border border-white/30 hover:border-white/60 focus-visible:outline"
  >
    About me
  </Link>

  {/* temporary contact: mailto until /contact exists */}
  <a
    href="mailto:your.email@example.com"
    className="px-5 py-3 rounded-2xl border border-white/30 hover:border-white/60 focus-visible:outline"
  >
    Contact
  </a>
</motion.div>
      </div>
    </section>
  )
}
