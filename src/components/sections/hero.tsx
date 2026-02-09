"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "var(--gradient-hero)" }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Left — name + short intro */}
        <div>
          <motion.h1
            variants={fadeInUp}
            className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
          >
            {profile.nameEn ?? profile.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground"
          >
            {profile.university} {profile.department}
          </motion.p>
        </div>

        {/* Right — social links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-5 text-sm"
        >
          {profile.github && (
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          {profile.twitter && (
            <a
              href={`https://x.com/${profile.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="X"
            >
              X
            </a>
          )}
          {profile.linkedin && (
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
