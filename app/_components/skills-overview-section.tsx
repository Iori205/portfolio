"use client";

import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiGraphql,
  SiGit,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },

  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    name: "Git",
    icon: SiGit,
  },
];

export function SkillsOverviewSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* TOP FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="mb-14 px-6">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Technologies
          </span>

          <h2 className="text-5xl md:text-7xl tracking-tight text-white font-medium">
            Tech Stack
          </h2>
        </div>
      </div>

      <Marquee speed={35} gradient={false} pauseOnHover={true}>
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="
                group
                mx-3
                flex
                h-[140px]
                w-[280px]
                items-center
                justify-between
                rounded-[28px]
                border
                border-white/[0.06]
                bg-[#0A0A0A]
                px-8
                transition-all
                duration-500
                hover:border-white/[0.12]
                hover:bg-[#101010]
              "
            >
              <div>
                <p className="text-2xl font-medium tracking-tight text-white">
                  {tech.name}
                </p>

                <p className="mt-2 text-sm text-zinc-500">Technology</p>
              </div>

              <Icon
                className="
                  text-5xl
                  text-zinc-300
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:text-white
                "
              />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
