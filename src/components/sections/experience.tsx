"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import type { Experience as ExperienceType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/section-wrapper";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <SectionWrapper id="experience">
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
          Experience
        </motion.h2>

        <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={slideInLeft} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div
                className="rounded-2xl border border-border p-6"
                style={{ boxShadow: "var(--shadow-bento)" }}
              >
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mb-3 text-sm font-medium text-primary">{exp.role}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <ul className="mb-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
