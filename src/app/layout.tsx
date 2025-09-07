import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jack Adamczyk — Front-End Developer",
  description:
    "Creative front-end dev building fast, immersive web experiences with React, TypeScript, and Three.js.",
  other: {
    "theme-color": "#9664ff",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
