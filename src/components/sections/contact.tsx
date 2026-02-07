"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { profile } from "@/lib/data";
import { SectionWrapper } from "@/components/section-wrapper";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-6 text-3xl font-bold text-foreground sm:text-4xl"
        >
          Contact
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mb-8 text-muted-foreground"
        >
          お気軽にご連絡ください
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a
            href={`mailto:${profile.email}`}
            className="text-lg text-primary hover:underline"
          >
            {profile.email}
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-6"
        >
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
      </motion.div>
    </SectionWrapper>
  );
}
