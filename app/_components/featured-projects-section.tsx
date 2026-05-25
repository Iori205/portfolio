// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// const featuredProjects = [
//   {
//     title: "Unifind (Intern)",
//     description:
//       "Built a full-stack platform with React, Next.js, and Node.js. Implemented authentication, role-based access, REST APIs, and a responsive interface across devices.",
//     category: "Full-Stack",
//     role: "Frontend + backend implementation",
//     outcome: "Shipped auth, RBAC, API flows, and production-ready responsive screens.",
//     tags: ["React", "Next.js", "Node.js", "RBAC", "REST API"],
//     link: "https://unifind-ruddy.vercel.app/",
//     index: "01",
//     preview: "platform",
//   },
//   {
//     title: "ReferU (Intern)",
//     description:
//       "Developed backend services and APIs for a referral management system using Node.js, Express, and PostgreSQL. Improved authentication, role-based access control, and overall system stability.",
//     category: "Backend",
//     role: "Backend API development",
//     outcome: "Strengthened API structure, access control, and database-backed workflows.",
//     tags: ["Node.js", "Express", "PostgreSQL", "Authentication", "API"],
//     link: "#",
//     index: "02",
//     preview: "api",
//   },
// ];

// function ProjectPreview({ type, title }: { type: string; title: string }) {
//   if (type === "api") {
//     return (
//       <div className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden bg-[#181818] p-5">
//         <div className="grid grid-cols-[1fr_0.72fr] gap-3">
//           <div className="space-y-3">
//             <div className="h-12 border border-white/10 bg-white/[0.04]" />
//             <div className="grid grid-cols-3 gap-2">
//               <div className="h-16 bg-lime-300 text-[10px] font-semibold uppercase tracking-[0.12em] text-black" />
//               <div className="h-16 border border-white/10 bg-white/[0.035]" />
//               <div className="h-16 border border-white/10 bg-white/[0.035]" />
//             </div>
//             <div className="h-28 border border-white/10 bg-black/35 p-3 font-mono text-[10px] leading-[1.65] text-white/45">
//               POST /referrals
//               <br />
//               GET /users/:id
//               <br />
//               PATCH /roles
//             </div>
//           </div>
//           <div className="space-y-2 border border-white/10 bg-black/35 p-3">
//             {[68, 48, 82, 56, 72].map((width) => (
//               <div
//                 key={width}
//                 className="h-2 bg-white/15"
//                 style={{ width: `${width}%` }}
//               />
//             ))}
//             <div className="mt-5 h-24 border border-lime-300/35 bg-lime-300/10" />
//           </div>
//         </div>
//         <p className="font-mono text-[clamp(2.6rem,8vw,5.8rem)] font-bold uppercase leading-none tracking-normal text-white/90">
//           API
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden bg-[#d9ddd0] p-5 text-black">
//       <div className="grid grid-cols-[0.72fr_1fr] gap-3">
//         <div className="space-y-3">
//           <div className="h-24 bg-black p-3 text-[10px] uppercase tracking-[0.12em] text-white/60">
//             Student search
//           </div>
//           <div className="h-20 border border-black/15 bg-white/65" />
//         </div>
//         <div className="space-y-2 bg-white/70 p-3">
//           <div className="flex items-center justify-between border-b border-black/10 pb-2 font-mono text-[10px] uppercase tracking-[0.12em]">
//             <span>Dashboard</span>
//             <span>RBAC</span>
//           </div>
//           {[92, 64, 78, 52].map((width) => (
//             <div
//               key={width}
//               className="h-3 bg-black/12"
//               style={{ width: `${width}%` }}
//             />
//           ))}
//           <div className="grid grid-cols-2 gap-2 pt-3">
//             <div className="h-16 bg-lime-400" />
//             <div className="h-16 bg-black/85" />
//           </div>
//         </div>
//       </div>
//       <p className="font-mono text-[clamp(2.3rem,7vw,5.4rem)] font-bold uppercase leading-none tracking-normal">
//         {title.split(" ")[0]}
//       </p>
//     </div>
//   );
// }

// export function FeaturedProjectsSection() {
//   return (
//     <section className="relative left-1/2 w-screen max-w-[1180px] -translate-x-1/2 space-y-8 px-4 md:px-8">
//       <div className="grid gap-5 border-t border-white/[0.08] pt-7 md:grid-cols-[0.92fr_1.08fr] md:items-end">
//         <h2 className="max-w-[760px] font-mono text-[clamp(2.3rem,7vw,6.4rem)] font-bold uppercase leading-[0.9] tracking-normal text-zinc-100">
//           Selected Projects
//         </h2>
//         <p className="max-w-[560px] font-geist text-[15px] leading-[1.7] text-white/58 md:justify-self-end">
//           Custom web products built from the ground up with modern code, clear
//           interfaces, authentication, APIs, and responsive delivery.
//         </p>
//       </div>

//       <div className="flex items-center justify-between border-y border-white/[0.08] py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/72">
//         <div>Selected Projects({featuredProjects.length})</div>
//         <div className="flex items-center gap-4">
//           <span className="text-white">Grid</span>
//           <span className="text-white/32">List</span>
//         </div>
//       </div>

//       <div className="grid gap-x-5 gap-y-9 md:grid-cols-2">
//         {featuredProjects.map((project) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="group"
//           >
//             <Link
//               href={project.link}
//               target={project.link === "#" ? undefined : "_blank"}
//               className="block"
//               aria-label={`View ${project.title}`}
//             >
//               <div className="overflow-hidden border border-white/[0.08] bg-white/[0.035] transition-colors duration-200 group-hover:border-white/[0.18]">
//                 <div className="aspect-[1.22/1]">
//                   <ProjectPreview type={project.preview} title={project.title} />
//                 </div>
//               </div>
//               <div className="mt-4 space-y-3 font-mono uppercase">
//                 <div className="flex items-center justify-between gap-4 text-[13px] tracking-[0.12em] text-white">
//                   <div>
//                     <span className="text-white/38">Project </span>
//                     {project.title}
//                   </div>
//                   <ArrowUpRight className="h-4 w-4 text-white/48 transition group-hover:text-lime-300" />
//                 </div>
//                 <p className="max-w-[520px] font-geist text-[14px] normal-case leading-[1.62] text-white/55">
//                   <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/38">
//                     About{" "}
//                   </span>
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 pt-1">
//                   {project.tags.slice(0, 3).map((tag) => (
//                     <span
//                       key={tag}
//                       className="border border-white/[0.1] px-2.5 py-1 text-[10px] tracking-[0.14em] text-white/48"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid, List } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Supermoon Capital",
    description: "Website for Supermoon Capital, a sleep-focused venture fund.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["VENTURE CAPITAL", "WELLNESS"],
    link: "#",
  },
  {
    title: "Balerion AI",
    description: "Silicon Valley AI Startup for Mortgage Lending",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["AI", "SOFTWARE"],
    link: "#",
  },
  {
    title: "Liveflow",
    description: "Financial operating system for modern startups.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    tags: ["SAAS", "FINANCE"],
    link: "#",
  },
  {
    title: "Noise Studio",
    description: "Creative studio focused on film and visual effects.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    tags: ["FILM", "VISUAL FX"],
    link: "#",
  },
  {
    title: "Immutable",
    description: "Web3 gaming platform for NFT marketplace.",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=500&fit=crop",
    tags: ["GAMING", "WEB3"],
    link: "#",
  },
  {
    title: "Honey",
    description: "Smart savings app for everyday purchases.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    tags: ["MOBILE APP", "AI"],
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function FeaturedProjectsSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Selected Projects
            <sup className="text-base font-normal text-[#71717A] ml-1">
              ({projects.length})
            </sup>
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center rounded-full border border-[rgba(255,255,255,0.1)] p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-white text-black"
                  : "text-[#71717A] hover:text-white"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              GRID
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-white text-black"
                  : "text-[#71717A] hover:text-white"
              }`}
            >
              <List className="w-4 h-4" />
              LIST
            </button>
          </div>
        </motion.div>

        {/* GRID VIEW */}
        {viewMode === "grid" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="
      flex
      gap-6
      overflow-x-auto
      overflow-y-hidden
      pb-6
      snap-x
      snap-mandatory
      scrollbar-hide
    "
          >
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                variants={itemVariants}
                className="
          group
          relative
          min-w-[85vw]
          md:min-w-[520px]
          xl:min-w-[620px]
          rounded-[24px]
          overflow-hidden
          snap-center
          transition-all
          duration-500
          hover:-translate-y-1
        "
                style={{
                  backgroundColor: "#0A0A0A",
                }}
                whileHover={{
                  borderColor: "rgba(255,255,255,0.12)",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
                }}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-7 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    {/* LEFT */}
                    <div className="flex gap-10">
                      <div>
                        <span className="text-[10px] tracking-[0.24em] text-zinc-500 block mb-2 uppercase">
                          Project
                        </span>

                        <h3 className="text-2xl font-medium text-white tracking-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="hidden md:block">
                        <span className="text-[10px] tracking-[0.24em] text-zinc-500 block mb-2 uppercase">
                          About
                        </span>

                        <p className="text-sm leading-relaxed text-zinc-400 max-w-[240px]">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* TAGS */}
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                    px-3
                    py-1.5
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    rounded-full
                    border
                    text-zinc-200
                  "
                          style={{
                            borderColor: "rgba(255,255,255,0.12)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* LIST VIEW */}
        {viewMode === "list" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            {projects.map((project, index) => {
              const isHovered = hoveredItem === project.title;
              return (
                <motion.a
                  key={project.title}
                  href={project.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-t border-[rgba(255,255,255,0.08)] first:border-t-0"
                  onMouseEnter={() => setHoveredItem(project.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center justify-between py-6 group">
                    {/* Project Name */}
                    <div className="flex-shrink-0 w-48">
                      <h3
                        className={`text-lg font-medium transition-colors duration-200 ${
                          isHovered
                            ? "text-white"
                            : "text-[#71717A] group-hover:text-white"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Description - visible on hover */}
                    <div className="flex-1 px-8 hidden md:block">
                      <p
                        className={`text-sm transition-all duration-200 ${
                          isHovered
                            ? "text-[#A1A1AA] opacity-100"
                            : "text-transparent opacity-0"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-shrink-0 mr-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 text-xs uppercase tracking-wide rounded-full border transition-colors duration-200 ${
                            isHovered
                              ? "text-white border-[rgba(255,255,255,0.2)]"
                              : "text-[#71717A] border-[rgba(255,255,255,0.1)]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Image Preview - visible on hover */}
                    <div className="relative w-48 h-28 flex-shrink-0 mr-6 hidden lg:block">
                      <div
                        className={`absolute inset-0 rounded-lg overflow-hidden transition-all duration-300 ${
                          isHovered
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Arrow Icon on hover */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 ${
                        isHovered
                          ? "text-white opacity-100"
                          : "text-[#71717A] opacity-0"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <a
            href="projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            VIEW ALL PROJECTS
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
