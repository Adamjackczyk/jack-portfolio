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
      className="group block card overflow-hidden hover:border-white/30 transition"
      aria-label={title}
    >
      <div className="relative aspect-video">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-80">
          {tags.map(t => (
            <span key={t} className="px-2 py-1 rounded-full border border-white/15">{t}</span>
          ))}
        </div>
        {metrics && <p className="mt-3 text-sm opacity-75">{metrics}</p>}
      </div>
    </Link>
  )
}
