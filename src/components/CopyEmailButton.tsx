"use client"

import { useState } from "react"

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // clipboard may be blocked in some contexts; noop
    }
  }

  return (
    <button
      onClick={copy}
      className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
      type="button"
      aria-live="polite"
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  )
}
