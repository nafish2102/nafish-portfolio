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

type Project = {
  name: string;
  title: string;
  domain: string;
  url: string;
  techStack: string[];
  highlights: string[];
  impact: string;
};

const PROJECTS: Project[] = [
  {
    name: "AnalystPrep",
    title: "EdTech LMS",
    domain: "EdTech",
    url: "https://analystprep.com",
    techStack: ["React.js", "JavaScript", "REST APIs"],
    highlights: [
      "Developed responsive learning interfaces for courses and study modules.",
      "Integrated APIs for dynamic content delivery and user progress tracking.",
      "Built reusable React components for scalable LMS experiences.",
    ],
    impact:
      "Scalable LMS interfaces for content-driven learning experiences.",
  },
  {
    name: "Skillsome",
    title: "EdTech Learning Platform",
    domain: "Education",
    url: "https://skillsome.com/",
    techStack: ["WordPress", "HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript"],
    highlights: [
    "Developed responsive user interfaces for an educational platform using WordPress.",
    "Implemented interactive animations and visual effects to enhance user engagement.",
    "Converted design concepts into pixel-perfect, mobile-friendly web pages.",
    "Optimized layouts and UI components for consistent cross-browser performance."
    ],
    impact:
    "Improved user experience through modern UI design, responsive layouts, and engaging animations across the platform."
  },
  {
    name: "Yatara",
    title: "Insurance Management Platform",
    domain: "Insurance",
    url: "https://yatara.com",
    techStack: [
      "Next.js",
      "React Bootstrap",
      "SCSS",
      "JavaScript",
      "React Query",
    ],
    highlights: [
      "Developed reusable components for insurance policy management, claims processing, and carrier integrations.",
      "Integrated APIs with React Query for efficient data fetching and caching.",
      "Built reusable UI components to support scalable insurance workflows.",
    ],
    impact:
      "Modular insurance UI supporting operational visibility across carriers and claims.",
  },
  {
    name: "A Hot Party",
    title: "Event & Party Planning Platform",
    domain: "Events",
    url: "https://ahotparty.com",
    techStack: [
      "Laravel",
      "Bootstrap",
      "JavaScript",
      "Responsive Design",
    ],
    highlights: [
      "Developed responsive event discovery and booking experiences across devices.",
      "Built reusable frontend components for event listings, venues, and booking workflows.",
      "Enhanced user engagement through intuitive navigation and mobile-first design.",
    ],
    impact:
      "Delivered an engaging event booking experience with intuitive navigation and mobile-first design.",
  },
  
  {
    name: "URStore",
    title: "E-Commerce Platform",
    domain: "E-Commerce",
    url: "https://urstore.net",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: [
      "Developed responsive storefront pages optimized for all screen sizes.",
      "Built reusable product listing and promotional UI components.",
      "Enhanced shopping experiences with intuitive navigation and layouts.",
    ],
    impact:
      "Consistent product-focused e-commerce UI across retail flows.",
  },
  {
    name: "Signature Innovation Group",
    title: "Fashion E-Commerce Platform",
    domain: "E-Commerce",
    url: "https://signatureinnovationgroup.com",
    techStack: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "Responsive Design",
    ],
    highlights: [
      "Developed responsive product listing, collection, and product detail pages.",
      "Built reusable storefront components for promotions and merchandising campaigns.",
      "Optimized shopping experiences across desktop, tablet, and mobile devices.",
    ],
    impact:
      "Delivered a seamless fashion e-commerce experience with improved usability and consistent brand presentation.",
  },
];

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
            Enterprise products across insurance, EdTech, FinTech, housing, and
            e-commerce domains.
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
              className="h-full"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <article
                  className={`${card} h-full overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:hover:border-violet-700`}
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                    {project.domain}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400">
                      {project.name}
                    </h3>
                  </div>

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

                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600 dark:bg-violet-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                    {project.impact}
                  </p>
                </article>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}