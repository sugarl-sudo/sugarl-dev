"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, cardHover } from "@/lib/animations";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/section-wrapper";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <SectionWrapper id="projects">
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
          Projects
        </motion.h2>

        {/* Bento Grid - first featured project spans 2 cols */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              className={project.featured && index === 0 ? "md:col-span-2" : ""}
            >
              <motion.div initial={cardHover.rest} whileHover={cardHover.hover} className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  {project.longDescription && (
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.longDescription}
                      </p>
                    </CardContent>
                  )}
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {(project.githubUrl || project.demoUrl) && (
                    <CardFooter className="gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title}のGitHubリポジトリ`}
                          className="text-sm text-primary hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title}のデモ`}
                          className="text-sm text-primary hover:underline"
                        >
                          Demo
                        </a>
                      )}
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
