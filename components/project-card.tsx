import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  role?: string
  outcome?: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, category, role, outcome, tags, link }: ProjectCardProps) {
  return (
    <Card className="void-card group h-full border-white/[0.08] bg-transparent py-6 transition-colors duration-200 hover:border-white/[0.18]">
      <CardHeader className="gap-3 px-6">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="mb-2 rounded-full border-white/[0.11] bg-white/[0.035] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
            {category}
          </Badge>
          <Link
            href={link}
            className="text-zinc-600 transition-colors hover:text-zinc-100"
            aria-label={`View ${title}`}
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
        <CardTitle className="text-[1.28rem] font-medium leading-tight tracking-[0.01em] text-zinc-100">{title}</CardTitle>
        {role ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime-300/70">
            {role}
          </p>
        ) : null}
        <CardDescription className="void-copy text-[0.92rem]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-6">
        {outcome ? (
          <div className="border-l border-lime-300/35 pl-4 font-geist text-sm leading-[1.6] text-zinc-300">
            {outcome}
          </div>
        ) : null}
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-white/[0.1] bg-black/15 px-3 py-1 text-[11px] font-normal text-zinc-400"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {link !== "#" ? (
          <Link
            href={link}
            target="_blank"
            className="void-link inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em]"
          >
            Live project <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        ) : null}
      </CardContent>
    </Card>
  )
}
