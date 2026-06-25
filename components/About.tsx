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
  "Senior UI/UX Developer and Frontend Developer with experience designing and developing user centered digital products across SaaS, Insurance, Healthcare, LMS, Trading, and E-Commerce domains. Skilled in Figma, wireframing, prototyping, design systems, responsive design, accessibility, and frontend implementation using HTML, CSS, JavaScript, React.js, and Next.js.";
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
