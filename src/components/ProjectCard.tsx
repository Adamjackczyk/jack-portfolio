import Image from "next/image"
import Link from "next/link"

type Props = {
  slug: string
  title: string
  tags: string[]
  metrics?: string
  cover: string
}

export default function ProjectCard({ slug, title, tags, metrics, cover }: Props) {
  return (
    <Link
      href={`/work/${slug}`}
      className="
        group relative block rounded-2xl border border-white/10
        transition
        hover:border-white/25
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
      "
      aria-label={title}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-2xl">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="
            object-cover will-change-transform
            transition-transform duration-500 ease-out
            filter grayscale contrast-110 brightness-[.88]
            group-hover:grayscale-0 group-hover:saturate-150 group-hover:contrast-100 group-hover:brightness-100
            motion-safe:group-hover:scale-[1.03]
          "
        />
        <div
          className="
            absolute inset-0
            bg-black/30
            transition-colors duration-500
            group-hover:bg-black/10
          "
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="rounded-b-2xl bg-[rgb(var(--card))] p-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-70 transition-opacity group-hover:opacity-100">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-full border border-white/15"
            >
              {t}
            </span>
          ))}
        </div>

        {metrics && <p className="mt-3 text-sm opacity-75">{metrics}</p>}
      </div>
    </Link>
  )
}
