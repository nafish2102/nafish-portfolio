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

const SUMMARY =
  "Senior UI/UX Developer and Frontend Developer with 7+ years of experience delivering responsive, scalable, and high-performance web applications. Skilled in Figma, React.js, Next.js, JavaScript, HTML5, CSS3, SCSS, Tailwind CSS, and Bootstrap, with expertise in translating designs into pixel-perfect user interfaces, building reusable component libraries, implementing scalable frontend architectures, integrating REST APIs, and creating intuitive user experiences. Proven track record of developing enterprise applications across Insurance, EdTech, Housing, Events, and E-Commerce domains.";
export default function About() {
  return (
    <section
      id="about"
      className={`${section} border-t border-zinc-200 dark:border-zinc-800`}
      aria-labelledby="about-heading"
    >
      <motion.div
        className={container}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={motionViewport}
        transition={motionTransition}
      >
        <p className={sectionLabel}>About</p>
        <h2 id="about-heading" className={sectionTitle}>
          Professional Summary
        </h2>
        <p className={sectionDesc}>{SUMMARY}</p>
      </motion.div>
    </section>
  );
}
