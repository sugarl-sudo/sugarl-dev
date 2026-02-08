"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Profile } from "@/types";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/section-wrapper";

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <SectionWrapper id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-12 text-3xl font-bold text-foreground sm:text-4xl"
        >
          About
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Profile card - spans 2 cols */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-border p-6 md:col-span-2"
            style={{ boxShadow: "var(--shadow-bento)" }}
          >
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {profile.university}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {profile.department}
            </p>
            <p className="leading-relaxed text-muted-foreground">{profile.bio}</p>
          </motion.div>

          {/* Contact card */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-border p-6"
            style={{ boxShadow: "var(--shadow-bento)" }}
          >
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact</h3>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
            <div className="mt-4 flex gap-3">
              {profile.github && (
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
              )}
              {profile.twitter && (
                <a
                  href={`https://twitter.com/${profile.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
              )}
            </div>
          </motion.div>

          {/* Skill cards */}
          {profile.skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={fadeInUp}
              className="rounded-2xl border border-border p-6"
              style={{ boxShadow: "var(--shadow-bento)" }}
            >
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
