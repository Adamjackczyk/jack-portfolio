import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Jack Adamczyk — Front-End Developer",
  description:
    "Creative front-end dev building fast, immersive web experiences with React, TypeScript, and Three.js.",
  other: { "theme-color": "#9664ff" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body id="top" className="min-h-screen antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
