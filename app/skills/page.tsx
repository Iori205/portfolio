import type { Metadata } from "next";
import { HobbyCard } from "@/components/hobby-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
    url: `${siteUrl}/skills`,
    type: "profile",
  },
};

export default function Hobbies() {
  const hobbies = [
    {
      title: "Programming Languages",
      description: "JavaScript, TypeScript, HTML, CSS",
      icon: "",
      link: "#",
    },
    {
      title: "Frameworks & Libraries",
      description:
        "React, Next.js, Node.js, React Native, Express, Svelte, Shadcn UI, Daisy UI",
      icon: "",
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
        "Clerk, GitHub, Monorepo, Vercel, Netlify, Gemini AI, Hugging Face AI, Leaflet, Ably, Husky",
      icon: "",
      link: "#",
    },
    {
      title: "Testing",
      description: "Cypress (E2E), Jest (Unit)",
      icon: "",
      link: "#",
    },
    {
      title: "Languages",
      description: "English (basic), Korean (Topik 3)",
      icon: "",
      link: "#",
    },
    {
      title: "Core Profile",
      description:
        "Full-stack developer with 9+ project experiences building practical web and mobile solutions.",
      icon: "",
      link: "#",
    },
    {
      title: "Fun facts about me",
      description:
        "Learning, coding, and continuously improving through real-world software projects.",
      icon: "",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-14 md:pt-32">
      <main className="void-shell space-y-12 md:space-y-14">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="void-eyebrow text-xs uppercase">Technical stack</p>
            <h1 className="mt-4 void-heading text-[clamp(4rem,16vw,6.8rem)] font-medium uppercase text-zinc-100">Skills</h1>
          </div>
          <Link href="/about" className="void-link inline-flex items-center text-xs uppercase tracking-[0.2em]">
            About <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>
      </main>
    </div>
  );
}
