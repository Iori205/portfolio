"use client";

import type React from "react";
import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ProjectCard } from "@/components/project-card";
import { HobbyCard } from "@/components/hobby-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";

const featuredProjects = [
  {
    title: "Unifind (Intern)",
    description:
      "Built a full-stack B6 platform with React, Next.js, and Node.js. Implemented authentication and role-based access control, developed REST APIs, and delivered a responsive UI/UX across devices.",
    category: "Full-Stack",
    tags: ["React", "Next.js", "Node.js", "RBAC", "REST API"],
    link: "https://unifind-ruddy.vercel.app/",
  },
  {
    title: "ReferU (Intern)",
    description:
      "Developed backend services and APIs for a referral management system using Node.js, Express, and PostgreSQL. Improved authentication, role-based access control, and overall system stability.",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "Authentication", "API"],
    link: "#",
  },
];

const featuredHobbies = [
  {
    title: "Programming Languages",
    description: "JavaScript, TypeScript, HTML, CSS",
    icon: "",
    link: "/skills",
  },
  {
    title: "Frameworks & Libraries",
    description:
      "React, Next.js, Node.js, React Native, Express, Svelte, Shadcn UI, Daisy UI",
    icon: "",
    link: "/skills",
  },
  {
    title: "Database / API",
    description:
      "NoSQL, PostgreSQL, MongoDB, NeonDB, Cloudflare D1, Mongoose, Prisma, Drizzle, REST API, GraphQL",
    icon: "",
    link: "/skills",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        alert("Message sent! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(
          "Something went wrong. Please email me directly at sodoo53@gmail.com",
        );
      }
    } catch (error) {
      console.error("Form error:", error);
      alert(
        "Something went wrong. Please email me directly at sodoo53@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <GalaxyNavigation />

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem]">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/35 via-amber-100/25 to-blue-300/25 blur-sm" />
                <div className="absolute inset-0 rounded-full bg-black/10" />
                <Image
                  src="/images/design-mode/my_face.png"
                  alt="Baatar-Ochir Sodbilegt - Software Engineer"
                  width={480}
                  height={480}
                  className="relative rounded-full border-[5px] border-white/90 shadow-lg object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground/90">
                Iori
              </h1>
              <p className="text-3xl md:text-4xl font-semibold text-foreground/80 leading-tight">
                I build scalable web
                <br />& mobile applications
              </p>
              <p className="text-2xl md:text-3xl font-medium text-blue-300">
                Frontend & Backend Developer
              </p>
              {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="bg-clip-text text bg-gradient-to-r from-primary  to-accent animate-[gradient-shift_3s_ease_infinite]">
                  Nana B
                </span>
              </h1> */}

              <div className="glass-card p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-blue-300/20 space-y-5 max-w-2xl">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Full-stack developer with 9+ real-world projects.
                  <br />I build React, Next.js, and Node.js applications focused
                  on clean architecture and scalable solutions.
                </p>
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-secondary/50 to-accent/90 hover:from-secondary/80 hover:to-accent/70 text-primary-foreground border border-secondary/40 group backdrop-blur-xl px-6 py-4 text-base rounded-xl">
                    More About Me
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 space-y-40 px-6 pb-40">
        {/* ── FEATURED WORK ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-16 py-12"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-secondary to-accent leading-tight text-foreground">
              Selected Work
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Internship projects and practical engineering outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-secondary/50 to-accent/90 hover:from-secondary/80 hover:to-accent/70 text-primary-foreground border border-secondary/40 group backdrop-blur-xl px-7.5 py-5.5 text-base rounded-xl">
                View All Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ── HOBBIES ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-16 py-12"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-accent to-accent/80 leading-tight text-foreground">
              Beyond the Screen
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              The things that keep me sharp and curious.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredHobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HobbyCard {...hobby} />
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/skills">
              <Button
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 hover:border-accent group bg-transparent backdrop-blur-xl px-7.5 py-5.5 text-base rounded-xl"
              >
                View My Skills
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-16 py-12"
        >
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent leading-tight text-foreground">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-foreground">
              Have an engineering opportunity or project in mind? I usually
              respond within 24 hours.
            </p>
          </div>

          <div className="glass-card p-10 md:p-14 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground/90 uppercase tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all backdrop-blur-sm hover:bg-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground/90 uppercase tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all backdrop-blur-sm hover:bg-white/10"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground/90 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none backdrop-blur-sm hover:bg-white/10"
                  placeholder="Tell me about your project or role..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-semibold py-5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-secondary/25 text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
