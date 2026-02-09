"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Profile } from "@/types";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <motion.div
      id="skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="mb-8 text-2xl font-bold text-foreground sm:text-3xl"
      >
        Skills
      </motion.h2>

      <div className="flex flex-col gap-4">
        {profile.skills.map((skill) => (
          <motion.div
            key={skill.category}
            variants={fadeInUp}
            className="rounded-2xl border border-border p-5"
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
  );
}
