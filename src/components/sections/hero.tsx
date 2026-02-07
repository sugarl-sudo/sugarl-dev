"use client";

import { motion } from "framer-motion";
import { fadeInUp, textReveal, staggerContainer } from "@/lib/animations";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
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
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm tracking-widest text-muted-foreground uppercase"
        >
          Portfolio
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {profile.name.split("").map((char, i) => (
            <motion.span key={i} custom={i} variants={textReveal} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-4 text-xl text-primary sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          {profile.bio}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-6">
          {profile.github && (
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          )}
          {profile.twitter && (
            <a
              href={`https://twitter.com/${profile.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </a>
          )}
          {profile.linkedin && (
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          )}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          variants={fadeInUp}
          className="mt-16"
        >
          <a href="#about" className="inline-block">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs">Scroll</span>
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                className="text-muted-foreground"
              >
                <path
                  d="M7.29 23.71a1 1 0 001.42 0l6.36-6.37a1 1 0 00-1.41-1.41L8 21.59l-5.66-5.66a1 1 0 00-1.41 1.41l6.36 6.37zM7 0v23h2V0H7z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
