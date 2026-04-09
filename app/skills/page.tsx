import type { Metadata } from "next"
import { HobbyCard } from "@/components/hobby-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Skills & Knowledge | Baatar-Ochir Sodbilegt",
  description:
    "Explore Baatar-Ochir Sodbilegt's engineering skills and technical stack",
  keywords: [
    "Sodbilegt skills",
    "software engineer skills",
    "full-stack skills",
    "React developer",
    "Node.js developer",
    "backend development",
  ],
  openGraph: {
    title: "Skills & Knowledge | Baatar-Ochir Sodbilegt",
    description: "What Can I Do For You",
    url: "https://nana-nandintsetseg.com/skills",
    type: "profile",
  },
}

export default function Hobbies() {
  const hobbies = [
    {
      title: "Programming Languages",
      description:
        "JavaScript, TypeScript, HTML, CSS",
      link: "#",
    },
    {
      title: "Frameworks & Libraries",
      description:
        "React, Next.js, Node.js, React Native, Express, Svelte, Shadcn UI, Daisy UI",
      link: "#",
    },
    {
      title: "Database / API",
      description:
        "NoSQL, PostgreSQL, MongoDB, NeonDB, Cloudflare D1, Mongoose, Prisma, Drizzle, REST API, GraphQL",
      icon: "",
      link: "#",
    },
    {
      title: "Tools",
      description:
        "Clerk, GitHub, Monorepo, Vercel, Netlify, Gemini AI, Hugging Face AI, Leaflet, Ably",
      link: "#",
    },
    {
      title: "Testing",
      description:
        "Cypress (E2E), Jest (Unit)",
      link: "#",
    },
    {
      title: "Languages",
      description:
        "English (basic), Korean (Topik 3)",
      link: "#",
    },
    {
      title: "Core Profile",
      description:
        "Full-stack developer with 9+ project experiences building practical web and mobile solutions.",
      link: "#",
    },
    {
      title: "Fun facts about me",
      description:
        "Learning, coding, and continuously improving through real-world software projects.",
      icon: "",
      link: "#",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <GalaxyNavigation />

      <div className="relative z-10 py-20 px-4">
        <Link
          href="/"
          className="fixed top-8 left-8 glass-card p-3 rounded-full hover:scale-110 transition-transform z-20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              Skills & Interests
            </h1>
            <p className="text-xl text-foreground">What do I know? How can I contribute.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} {...hobby} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
