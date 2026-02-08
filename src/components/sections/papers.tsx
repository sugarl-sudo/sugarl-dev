"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import type { Paper } from "@/types";
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

interface PapersProps {
  papers: Paper[];
}

export function Papers({ papers }: PapersProps) {
  return (
    <SectionWrapper id="papers">
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
          Papers
        </motion.h2>

        <div className="grid gap-6">
          {papers.map((paper) => (
            <motion.div
              key={paper.id}
              variants={fadeInUp}
            >
              <motion.div initial={cardHover.rest} whileHover={cardHover.hover}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{paper.title}</CardTitle>
                    {paper.titleEn && (
                      <CardDescription className="text-xs italic">
                        {paper.titleEn}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {paper.authors.join(", ")}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {paper.venue} ({paper.year})
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {paper.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {(paper.doi || paper.pdfUrl) && (
                    <CardFooter className="gap-4">
                      {paper.doi && (
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${paper.title}のDOIリンク`}
                          className="text-sm text-primary hover:underline"
                        >
                          DOI
                        </a>
                      )}
                      {paper.pdfUrl && (
                        <a
                          href={paper.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${paper.title}のPDF`}
                          className="text-sm text-primary hover:underline"
                        >
                          PDF
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
