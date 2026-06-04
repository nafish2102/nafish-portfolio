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
  "Sr. UI/UX Developer and Frontend Developer with 7+ years of experience building responsive, scalable web applications using React.js, Next.js, Tailwind CSS, and Bootstrap. Experienced across LMS, Healthcare SaaS, Insurance, Trading, E-Commerce, and enterprise dashboards at Chapter247 Infotech.";

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
