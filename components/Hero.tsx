"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  btnPrimary,
  btnSecondary,
  container,
  motionTransition,
  section,
} from "@/lib/ui";

const PROFILE = {
  name: "Mohd Nafish",
  role: "Senior UI/UX Developer | Product Designer | Frontend Developer",
  experience: "UI/UX Designer • Frontend Developer • Figma • React.js • Next.js",
  headline:
    "Designing intuitive user experiences and building scalable digital products with Figma, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, and Next.js.",
  image: "/images/profile.png",
  resume: "/files/Mohd_Nafish_UI_Frontend_Developer_Resume.pdf",
} as const;

function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="hero" className={section} aria-label="Introduction">
      <div
        className={`${container} grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10`}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionTransition}
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {PROFILE.experience}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Hi, I&apos;m{" "}
            <span className="text-violet-600 dark:text-violet-400">
              {PROFILE.name}
            </span>
          </h1>
          <p className="mt-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
            {PROFILE.role}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {PROFILE.headline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={scrollToProjects} className={btnPrimary}>
              View Projects
            </button>
            <Link href={PROFILE.resume} download className={btnSecondary}>
              <Download className="h-4 w-4" aria-hidden />
              Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...motionTransition, delay: 0.08 }}
          className="mx-auto w-full max-w-[200px] md:max-w-[220px]"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src={PROFILE.image}
              alt={`Portrait of ${PROFILE.name}`}
              fill
              priority
              sizes="220px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
