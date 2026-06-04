"use client";

import { motion, type Variants } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    year: "2025",
    title: "Consistent Performer Award",
    organization: "Chapter247 Infotech",
    description:
      "Received the Consistent Performer Certificate and Award for sustained excellence in frontend delivery and reliable contribution across product teams.",
    icon: Trophy,
    accent: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/20",
  },
  {
    year: "2024",
    title: "Hardworking Achiever Award",
    organization: "Chapter247 Infotech",
    description:
      "Awarded Hardworking Achiever recognition for exceptional dedication, commitment, and consistent effort on enterprise frontend initiatives.",
    icon: Medal,
    accent: "from-violet-500 to-fuchsia-500",
    glow: "shadow-violet-500/20",
  },
  {
    year: "2021",
    title: "Certificate of Appreciation",
    organization: "Chapter247 Infotech",
    description:
      "Received a Certificate of Appreciation for contribution, performance, and active participation in team and project delivery.",
    icon: Award,
    accent: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative border-y border-zinc-200/60 bg-zinc-100/40 px-4 py-20 dark:border-zinc-800/60 dark:bg-zinc-950/80 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="achievements-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Achievements
          </p>
          <h2
            id="achievements-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            Recognition & Awards
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Honors earned at Chapter247 Infotech for consistent performance,
            dedication, and meaningful contributions to frontend delivery.
          </p>
        </motion.header>

        <motion.ol
          className="relative mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          aria-label="Awards timeline"
        >
          <div
            className="absolute bottom-4 left-[1.125rem] top-4 w-px bg-gradient-to-b from-violet-500/60 via-fuchsia-500/40 to-cyan-500/30 sm:left-[1.375rem]"
            aria-hidden
          />

          {ACHIEVEMENTS.map(
            ({ year, title, organization, description, icon: Icon, accent, glow }, index) => (
              <motion.li
                key={year}
                variants={itemVariants}
                className={`relative pl-12 sm:pl-14 ${
                  index < ACHIEVEMENTS.length - 1 ? "pb-12" : ""
                }`}
              >
                <div
                  className="absolute left-0 top-1 flex flex-col items-center"
                  aria-hidden
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-900 bg-gradient-to-br ${accent} shadow-lg sm:h-10 sm:w-10`}
                  >
                    <Icon className="h-4 w-4 text-white sm:h-[1.125rem] sm:w-[1.125rem]" />
                  </span>
                </div>

                <article
                  className={`group rounded-2xl border border-zinc-300/50 bg-zinc-900/95 p-5 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600/80 hover:shadow-2xl dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:shadow-black/30 ${glow} sm:p-6`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <time
                        dateTime={year}
                        className="inline-block rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-0.5 text-xs font-semibold tracking-wider text-zinc-300"
                      >
                        {year}
                      </time>
                      <h3 className="mt-3 text-lg font-semibold text-zinc-50 sm:text-xl">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-violet-400">
                        {organization}
                      </p>
                    </div>
                    <div
                      className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} opacity-90 shadow-lg sm:flex`}
                      aria-hidden
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </article>
              </motion.li>
            ),
          )}
        </motion.ol>
      </div>
    </section>
  );
}
