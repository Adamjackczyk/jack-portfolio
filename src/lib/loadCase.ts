export type CaseStudy = {
  title: string
  intro: string
  links?: { live?: string; repo?: string }
  heroMedia?: { type: "video" | "image"; src: string; poster?: string }
  problem?: string
  tools?: string[]
  solution?: string[]
  results?: string[]
  highlights?: { label: string; value: string }[]
  codePointers?: { label: string; url?: string; path?: string }[]
  next?: string[]
}

export async function loadCase(slug: string): Promise<CaseStudy | null> {
  try {
    const mod = await import(`@/content/caseStudies/${slug}.json`)
    return mod.default as CaseStudy
  } catch {
    return null
  }
}
