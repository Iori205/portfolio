"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(
              section.charAt(0).toUpperCase() + section.slice(1),
            );
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="relative flex items-center gap-1 border border-white/[0.08] bg-black/40 px-2 py-2 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.45)]">
        {/* VOID CORNERS */}
        <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/20 " />
        <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/20 " />
        <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/20" />
        <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/20" />

        {navLinks.map((link) => {
          const isActive = activeSection === link.name;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`relative rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                isActive
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.18)]"
                  : "text-zinc-500 hover:text-zinc-100"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                  }}
                />
              )}

              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
