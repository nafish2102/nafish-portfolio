"use client";

import Image from "next/image";
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

const PROJECTS = [
  {
    name: "Yatara",
    title: "Insurance Management Platform",
    domain: "Insurance",
    image: "/images/projects/yatara.svg",
    techStack: ["Next.js", "React Bootstrap", "SCSS", "JavaScript", "React Query"],
    highlights: [
      "Carrier management, claims, dashboards, and user workflows",
      "API integration with React Query for dynamic data rendering",
    ],
    impact:
      "Modular insurance UI supporting operational visibility across carriers and claims.",
  },
  {
    name: "AnalystPrep",
    title: "EdTech LMS",
    domain: "EdTech",
    image: "/images/projects/analystprep.svg",
    techStack: ["React.js", "JavaScript", "REST APIs"],
    highlights: [
      "Modular layouts with API-integrated responsive frontend",
      "Structured learning modules for EdTech delivery",
    ],
    impact: "Scalable LMS interfaces for content-driven learning experiences.",
  },
  {
    name: "TradeSpect",
    title: "Trading & Investment Platform",
    domain: "FinTech",
    image: "/images/projects/tradespect.svg",
    techStack: ["Laravel Livewire", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Trading dashboards and analytics module UI",
      "Reusable Tailwind sections for investment workflows",
    ],
    impact: "Clear, responsive trading interfaces for financial data and analytics.",
  },
  {
    name: "Section 8 Housing",
    title: "Housing Platform",
    domain: "Housing",
    image: "/images/projects/section8-housing.svg",
    techStack: ["Laravel Livewire", "Bootstrap", "JavaScript"],
    highlights: [
      "Dashboard interfaces and dynamic frontend layouts",
      "UI components for housing program workflows",
    ],
    impact: "Usable housing dashboards for program management teams.",
  },
  {
    name: "URStore",
    title: "E-Commerce Platform",
    domain: "E-Commerce",
    image: "/images/projects/urstore.svg",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: [
      "Product interfaces and reusable storefront sections",
      "Responsive layouts for multi-device shopping flows",
    ],
    impact: "Consistent product-focused e-commerce UI across retail flows.",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${section} border-t border-zinc-200 dark:border-zinc-800`}
      aria-labelledby="projects-heading"
    >
      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={motionTransition}
        >
          <p className={sectionLabel}>Projects</p>
          <h2 id="projects-heading" className={sectionTitle}>
            Selected Work
          </h2>
          <p className={sectionDesc}>
            Enterprise products from Chapter247 Infotech—insurance, EdTech,
            trading, housing, and e-commerce.
          </p>
        </motion.div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.li
              key={project.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{
                ...motionTransition,
                delay: index * 0.04,
              }}
            >
              <article className={`${card} overflow-hidden p-0`}>
                <div className="relative aspect-[16/9] border-b border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    {project.domain}
                  </p>
                  <h3 className="mt-0.5 font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {project.title}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <li key={tech}>
                        <span className={badge}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-violet-600 dark:text-violet-400">
                          ·
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                    {project.impact}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
