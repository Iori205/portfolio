import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

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
};

export default function About() {
  const timeline = [
    {
      year: "2025 - 2026",
      title: "Pinecone Academy",
      description: "Software Engineer program.",
    },
    {
      year: "2022 - 2024",
      title: "Joongbu University",
      description: "Language preparation program.",
    },
    {
      year: "2020 - 2022",
      title: "Mandakh University",
      description: "Finance management studies.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-14 md:pt-32">
      <main className="void-shell space-y-12 md:space-y-14">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="void-eyebrow text-xs uppercase">My story</p>
            <h1 className="mt-4 void-heading text-[clamp(4rem,16vw,6.8rem)] font-medium uppercase text-zinc-100">About Me</h1>
          </div>
          <Link href="/projects" className="void-link inline-flex items-center text-xs uppercase tracking-[0.2em]">
            Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <section className="void-card p-7 md:p-8">
          <h2 className="void-eyebrow text-xs uppercase">Background</h2>
          <div className="void-copy mt-5 max-w-3xl space-y-3">
            <p>Full-stack developer focused on building real-world systems used by actual users.</p>
            <p>I&apos;ve built multiple production-style applications including dashboards, admin systems, and data-driven platforms.</p>
            <p>My work centers around clean architecture, scalable backend systems, and solving practical problems.</p>
          </div>
        </section>

        <section className="void-card p-7 md:p-8">
          <h2 className="void-eyebrow text-xs uppercase">Timeline</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className="rounded-md border border-white/[0.08] bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{item.year}</p>
                <h3 className="mt-3 text-xl font-medium tracking-[0.01em] text-zinc-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
