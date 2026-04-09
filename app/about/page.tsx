import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me - Background, Education & Timeline",
  description:
    "Learn about Baatar-Ochir Sodbilegt, a software engineer focused on full-stack development with React, React Native, and backend API systems.",
  keywords: [
    "Baatar-Ochir Sodbilegt",
    "Sodbilegt",
    "software engineer",
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "backend engineer",
  ],
  openGraph: {
    title: "About Baatar-Ochir Sodbilegt - Software Engineer",
    description:
      "Software engineer with internship experience delivering full-stack and backend systems using React, Node.js, and PostgreSQL.",
  },
}

export default function About() {
  const timeline = [
    {
      year: "2025 - 2026",
      title: "Pinecone Academy",
      description:
        "Software Engineer program.",
    },
    {
      year: "2022 - 2024",
      title: "Joongbu University",
      description:
        "Language preparation program.",
    },
    {
      year: "2020 - 2022",
      title: "Mandakh Ikh Surguuli",
      description:
        "Finance management studies.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <GalaxyNavigation />

      <div className="absolute inset-0 gradient-bg" />
      <AnimatedBackground />

      <div className="relative z-10 py-20 px-4">
        <Link
          href="/"
          className="fixed top-8 left-8 glass-card p-3 rounded-full hover:scale-110 transition-transform z-20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              About Me
            </h1>
            <p className="text-xl text-balance text-foreground">
              Get to know my background, education, and journey
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Background</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-lg leading-relaxed">
              <div>
                Full-stack engineer with 9+ project experiences across web and mobile application development.
              </div>
              <div>
                Built production-oriented features using React, React Native, Node.js, and PostgreSQL.
              </div>
              <div>
                Focused on building maintainable systems and practical user-first solutions.
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-muted-foreground">Pinecone Academy • 2025 - 2026</p>
                <p className="mt-2">
                  Advanced software engineering studies focused on full-stack implementation, backend services, and scalable system design.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-semibold">Language Preparation</h3>
                <p className="text-muted-foreground">Joongbu University • 2022 - 2024</p>
                <p className="mt-2">
                  Academic language preparation before engineering specialization.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Timeline</h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                        <div className="text-sm font-semibold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full -translate-x-[7px] md:-translate-x-1/2 border-4 border-black shadow-lg" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
