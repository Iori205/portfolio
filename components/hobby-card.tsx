import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface HobbyCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export function HobbyCard({ title, description, icon, link }: HobbyCardProps) {
  return (
    <Link href={link}>
      <Card className="void-card group h-full border-white/[0.08] bg-transparent py-6 transition-colors duration-200 hover:border-white/[0.18]">
        <CardHeader className="gap-3 px-6">
          <div className="mb-2 text-3xl">{icon}</div>
          <CardTitle className="text-lg font-medium leading-tight tracking-[0.01em] text-zinc-100">{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-6">
          <CardDescription className="void-copy text-sm">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
