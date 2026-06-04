"use client";

import { Icon } from "@iconify/react";
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

const SKILL_CATEGORIES = [
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
    skills: ["Git", "GitHub", "Jira", "Trello", "Figma", "Postman", "VS Code"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Concepts",
    skills: [
      "Responsive Design",
      "API Integration",
      "Reusable Components",
      "Dynamic Data Rendering",
      "Component Architecture",
      "Cross-Browser Compatibility",
    ],
  },
] as const;

const SKILL_ICONS: Record<string, string> = {
  HTML5: "devicon:html5",
  CSS3: "devicon:css3",
  SCSS: "devicon:sass",
  Bootstrap: "devicon:bootstrap",
  "Tailwind CSS": "devicon:tailwindcss",
  JavaScript: "devicon:javascript",
  jQuery: "devicon:jquery",
  "React.js": "devicon:react",
  "Next.js": "devicon:nextjs",
  Git: "devicon:git",
  GitHub: "devicon:github",
  Jira: "devicon:jira",
  Trello: "devicon:trello",
  Figma: "devicon:figma",
  Postman: "devicon:postman",
  "VS Code": "devicon:vscode",
  MongoDB: "devicon:mongodb",
  MySQL: "devicon:mysql",
  "Responsive Design": "material-symbols:responsive-layout",
  "API Integration": "mdi:api",
  "Reusable Components": "material-symbols:deployed-code-outline",
  "Dynamic Data Rendering": "material-symbols:database-outline",
  "Component Architecture": "material-symbols:account-tree-outline",
  "Cross-Browser Compatibility": "material-symbols:browser-updated-outline",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${section} border-t border-zinc-200 dark:border-zinc-800`}
      aria-labelledby="skills-heading"
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
            Core technologies from my resume—focused on production React and
            Next.js delivery.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ ...motionTransition, delay: 0.05 }}
        >
          {SKILL_CATEGORIES.map(({ title, skills }) => (
            <article key={title} className={card}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <li key={skill}>
                    <span className={`${badge} gap-1.5`}>
                      <Icon
                        icon={SKILL_ICONS[skill]}
                        className="h-3.5 w-3.5 shrink-0"
                        aria-hidden
                      />
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
