import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type ProjectItem = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
};

export const metadata: Metadata = {
  title: "Projects - Full-Stack & Backend Engineering",
  description:
    "Explore projects by Baatar-Ochir Sodbilegt including full-stack web platforms, referral systems, and scalable backend services.",
  keywords: [
    "software engineer projects",
    "full-stack projects",
    "backend projects",
    "React projects",
    "Node.js projects",
  ],
  openGraph: {
    title: "Projects Portfolio - Baatar-Ochir Sodbilegt",
    description:
      "Internship and engineering projects covering full-stack platforms, REST APIs, asynchronous processing, and database architecture.",
  },
};

export default function Projects() {
  const itProjects: ProjectItem[] = [
    {
      title: "Unifind (Intern)",
      description:
        "Built a full-stack B6 platform using React, Next.js, and Node.js. Implemented authentication and role-based access control while improving overall user experience.",
      category: "Full-Stack",
      tags: ["React", "Next.js", "Node.js", "RBAC", "UI/UX"],
      link: "https://unifind-ruddy.vercel.app/",
    },
    {
      title: "UniExam (Intern)",
      description:
        "Worked on backend development for a scalable REST API using AWS SQS asynchronous processing, Upstash Redis caching, and task queue handling. Improved processing speed and service reliability.",
      category: "Backend",
      tags: ["REST API", "AWS SQS", "Upstash Redis", "Scalability"],
      link: "#",
    },
  ];
  const personalProjects: ProjectItem[] = [
    {
      title: "ReferU (Intern)",
      description:
        "Developed backend and REST API services for a referral management platform with Node.js, Express, and PostgreSQL. Strengthened authentication, role-based access control, and API validation.",
      category: "Personal",
      tags: ["Node.js", "Express", "PostgreSQL", "Validation", "RBAC"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-14 md:pt-32">
      <main className="void-shell space-y-12 md:space-y-14">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="void-eyebrow text-xs uppercase">Selected work</p>
            <h1 className="mt-4 void-heading text-[clamp(4rem,16vw,6.8rem)] font-medium uppercase text-zinc-100">
              Projects
            </h1>
          </div>
          <Link
            href="/contact"
            className="void-link inline-flex items-center text-xs uppercase tracking-[0.2em]"
          >
            Contact <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <section className="space-y-6">
          <h2 className="void-eyebrow text-xs uppercase">Web development</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {itProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="void-eyebrow text-xs uppercase">Mobile development</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
