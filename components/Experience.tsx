"use client";

import { motion } from "framer-motion";
import {
  badge,
  card,
  container,
  motionTransition,
  motionViewport,
  section,
  sectionDesc,
  sectionLabel,
  sectionTitle,
} from "@/lib/ui";

type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
  awards?: string[];
  technologies: string[];
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "chapter247",
    company: "Chapter247 Infotech",
    role: "Sr. UI/UX Developer / Frontend Developer",
    period: "Aug 2021 – Present",
    highlights: [
      "Built responsive React.js and Next.js applications with reusable components and modern frontend architecture.",
      "Integrated REST APIs with dynamic data rendering across LMS, Healthcare SaaS, Insurance, Trading, E-Commerce, and dashboards.",
      "Collaborated with developers, QA, and stakeholders on production-ready UI delivery.",
    ],
    awards: [
      "Consistent Performer Award (2025)",
      "Hardworking Achiever Award (2024)",
      "Certificate of Appreciation (2021)",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "SCSS",
      "React Query",
      "REST APIs",
      "Git",
      "Figma",
    ],
  },
  {
    id: "pixler",
    company: "Pixler IT Solution",
    role: "Web Designer",
    period: "Jan 2020 – Jul 2021",
    highlights: [
      "Designed responsive layouts and converted UI designs into functional frontends.",
      "Delivered frontend customization and cross-team implementation support.",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    id: "inkgraph",
    company: "Inkgraph Techno Pvt Ltd",
    role: "Web Designer",
    period: "Oct 2018 – Jan 2020",
    highlights: [
      "Developed responsive website UI and optimized, user-friendly layouts.",
      "Contributed to multiple projects while building core frontend fundamentals.",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={`${section} border-t border-zinc-200 dark:border-zinc-800`}
      aria-labelledby="experience-heading"
    >
      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={motionTransition}
        >
          <p className={sectionLabel}>Experience</p>
          <h2 id="experience-heading" className={sectionTitle}>
            Work History
          </h2>
          <p className={sectionDesc}>
            7+ years from web design to senior UI/UX and frontend development.
          </p>
        </motion.div>

        <ol className="relative mt-8 space-y-0" aria-label="Work experience timeline">
          <div
            className="absolute bottom-2 left-[7px] top-2 w-px bg-zinc-200 dark:bg-zinc-800"
            aria-hidden
          />

          {EXPERIENCES.map((job, index) => (
            <motion.li
              key={job.id}
              className={`relative pl-7 ${index < EXPERIENCES.length - 1 ? "pb-8" : ""}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{
                ...motionTransition,
                delay: index * 0.05,
              }}
            >
              <span
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-violet-600 bg-white dark:border-violet-400 dark:bg-zinc-950"
                aria-hidden
              />

              <article className={card}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {job.company}
                  </h3>
                  <time className="text-xs text-zinc-500 dark:text-zinc-500">
                    {job.period}
                  </time>
                </div>
                <p className="mt-0.5 text-sm text-violet-700 dark:text-violet-400">
                  {job.role}
                </p>

                <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-violet-600 dark:text-violet-400">·</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {job.awards && job.awards.length > 0 && (
                  <div className="mt-4 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Awards
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                      {job.awards.map((award) => (
                        <li key={award}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.technologies.map((tech) => (
                    <li key={tech}>
                      <span className={badge}>{tech}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
