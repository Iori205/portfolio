"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrambleText } from "./ScrambleText";
import { Github, LinkedinIcon, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="void-shell flex justify-center pt-6 md:pt-10" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[600px]"
      >
        {/* availability + socials */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-[7px] w-[7px] bg-lime-400" />

            <p className="font-geist text-[10px] uppercase tracking-[0.24em] text-white/55">
              Available for web projects
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="font-mono text-white/60 transition hover:text-white"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={24} />
            </Link>

            <Link
              href="mailto:sodoo53@gmail.com"
              target="_blank"
              className="font-mono text-[15px] text-white/60 transition hover:text-white"
              aria-label="Send email"
            >
              <Mail size={22} />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="font-mono text-white/60 transition hover:text-white"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </Link>
          </div>
        </div>

        {/* hero box */}
        <div className="relative min-h-[281px] border border-white/[0.08] bg-transparent px-8 py-7">
          {/* corners */}
          <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
          <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/20" />

          {/* contact button */}
          <div className="absolute right-8 top-10.5">
            <Link href="/contact">
              <Button className="h-10 rounded-none border border-white bg-white px-2 font-mono text-[12px] uppercase tracking-[0.18em] text-black hover:bg-green-500 hover:border-green-500">
                <ScrambleText text="Get In touch" className="font-mono" />
              </Button>
            </Link>
          </div>

          {/* image */}
          <div className="mb-5 overflow-hidden border-white/[0.08]">
            <Image
              src="/images/design-mode/my_face.png"
              alt="Baatar-Ochir Sodbilegt"
              width={80}
              height={80}
              priority
              className="h-[72px] w-[72px] object-cover grayscale contrast-110"
            />
          </div>

          {/* title */}
          <h1 className="max-w-[fit] font-mono text-[30px] font-bold leading-[0.96] tracking-normal text-white md:text-[38px]">
            Full-stack developer
          </h1>

          {/* description */}
          <p className="mt-4 max-w-[440px] font-geist text-[15px] leading-[1.65] tracking-normal text-[#B3B3B3]">
            I&apos;m Baatar-Ochir Sodbilegt, a developer focused on React,
            Next.js, backend APIs, and responsive interfaces that feel sharp
            from first click to final deploy.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
