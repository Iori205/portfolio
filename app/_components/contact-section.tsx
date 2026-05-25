"use client";

import type React from "react";
import { sendEmail } from "@/app/actions/send-email";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import { ScrambleText } from "./ScrambleText";

export function ContactSection() {
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
        alert("Message sent successfully.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className=" mx-auto w-full max-w-[760px] pt-20">
      {/* top */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-[7px] w-[7px] bg-lime-400" />

          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
            Let&apos;s collaborate
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigator.clipboard.writeText("sodoo53@gmail.com")}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-lime-400"
        >
          <Copy className="h-3.5 w-3.5" />

          <ScrambleText text="Copy Email" />
        </button>
      </div>

      {/* contact box */}
      <div className="relative border border-white/[0.08] bg-black px-7 py-7 md:px-8 md:py-8">
        {/* corners */}
        <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
        <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
        <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/20" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/20" />

        {/* heading */}
        <div className="mb-8">
          <h2 className="font-mono text-[42px] font-bold uppercase leading-[1] tracking-[-0.04em] text-white">
            Let&apos;s Build
          </h2>

          <p className="mt-3 max-w-[420px] font-mono text-[14px] leading-[1.6] text-white/60">
            Send a project idea, internship opportunity, freelance brief, or a
            product problem that needs a careful developer.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              placeholder="YOUR NAME"
              className="h-11 w-full border border-white/[0.08] bg-transparent px-4 font-mono text-[13px] uppercase text-white outline-none transition-colors placeholder:text-white/25 focus:border-lime-400"
            />

            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              placeholder="YOUR EMAIL"
              className="h-11 w-full border border-white/[0.08] bg-transparent px-4 font-mono text-[13px] uppercase text-white outline-none transition-colors placeholder:text-white/25 focus:border-lime-400"
            />
          </div>

          <textarea
            required
            rows={6}
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            placeholder="YOUR MESSAGE"
            className="w-full resize-none border border-white/[0.08] bg-transparent px-4 py-3 font-mono text-[13px] uppercase leading-[1.7] text-white outline-none transition-colors placeholder:text-white/25 focus:border-lime-400"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 rounded-none border border-white bg-white px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-black transition-all duration-150 hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_18px_rgba(132,255,0,0.18)] disabled:opacity-40"
          >
            <ScrambleText text={isSubmitting ? "SENDING..." : "SEND MESSAGE"} />
          </Button>
        </form>
      </div>
    </section>
  );
}
