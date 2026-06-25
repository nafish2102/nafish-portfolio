"use client";

import { motion } from "framer-motion";
import {
  container,
  motionTransition,
  motionViewport,
  section,
  sectionDesc,
  sectionLabel,
  sectionTitle,
} from "@/lib/ui";

const SKILL_CATEGORIES = [
  {
    title: "UX/UI Design",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "User Journey Mapping",
      "Design Systems",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Trello",
      "Figma",
      "Postman",
      "VS Code",
      "Cursor",
      "Canva",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "User Centered Design",
      "Responsive Design",
      "Reusable Components",
      "Accessibility",
      "Cross Browser Compatibility",
      "Component Architecture",
      "API Integration",
      "Design Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${section} border-t border-zinc-200 dark:border-zinc-800`}
    >
      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={motionTransition}
        >
          <p className={sectionLabel}>Skills</p>

          <h2 id="skills-heading" className={sectionTitle}>
            Technical Stack
          </h2>

          <p className={sectionDesc}>
            Technologies and tools I use to build scalable, responsive, and
            user-friendly web applications.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ ...motionTransition, delay: 0.05 }}
        >
          {SKILL_CATEGORIES.map(({ title, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-md
                      border border-zinc-200
                      bg-zinc-50
                      px-2
                      py-1
                      text-sm
                      font-medium
                      text-zinc-700
                      transition-all
                      hover:-translate-y-0.5
                      hover:border-zinc-300
                      hover:bg-zinc-100
                      dark:border-zinc-700
                      dark:bg-zinc-800
                      dark:text-zinc-300
                      dark:hover:bg-zinc-700
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}