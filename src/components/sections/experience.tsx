"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import type { Experience as ExperienceType } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <motion.div
      id="experience"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="mb-8 text-2xl font-bold text-foreground sm:text-3xl"
      >
        Experience
      </motion.h2>

      <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={slideInLeft} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-8 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <div
              className="rounded-2xl border border-border p-5"
              style={{ boxShadow: "var(--shadow-bento)" }}
            >
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.company}
                </h3>
                <span className="text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mb-2 text-sm font-medium text-primary">{exp.role}</p>
              {exp.description && (
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              )}

              {exp.achievements.length > 0 && (
                <ul className="mb-3 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
