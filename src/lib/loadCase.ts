export async function loadCase(slug: string) {
    try {
      const mod = await import(`@/content/caseStudies/${slug}.json`)
      return mod.default as any
    } catch {
      return null
    }
  }
  