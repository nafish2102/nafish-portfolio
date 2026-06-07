"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Download, Link2, Mail, MapPin } from "lucide-react";
import {
  btnPrimary,
  btnSecondary,
  container,
  motionTransition,
  motionViewport,
  section,
  sectionDesc,
  sectionLabel,
  sectionTitle,
} from "@/lib/ui";

const CONTACT = {
  email: "mo.nafish786@gmail.com",
  mobile: "+91 9131312692",
  linkedin: "https://linkedin.com/in/nafish0202",
  location: "Indore, Madhya Pradesh, India",
  resume: "/files/Mohd_Nafish_Frontend_Resume.pdf",
  mailto:
    "mailto:mo.nafish786@gmail.com?subject=Let's%20Connect%20%E2%80%94%20Portfolio",
} as const;

type ContactLink = {
  label: string;
  value: string;
  icon: string;
  href?: string;
  external?: boolean;
};

const LINKS: ContactLink[] = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "mdi:email-outline",
  },
  {
    label: "Mobile",
    value: CONTACT.mobile,
    href: "tel:+919131312692",
    icon: "mdi:phone-outline",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nafish0202",
    href: CONTACT.linkedin,
    icon: "mdi:linkedin",
    external: true,
  },
  {
    label: "Location",
    value: CONTACT.location,
    icon: "mdi:map-marker-outline",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${section} border-t border-zinc-200 dark:border-zinc-800`}
      aria-labelledby="contact-heading"
    >
      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={motionTransition}
          className="max-w-2xl"
        >
          <p className={sectionLabel}>Contact</p>
          <h2 id="contact-heading" className={sectionTitle}>
            Let&apos;s Build Something Great Together
          </h2>
          <p className={sectionDesc}>
            Open to Senior Frontend Developer, UI/UX Developer, React.js,
            Next.js, and remote roles. Reach out for projects or career
            discussions.
          </p>
        </motion.div>

        <motion.ul
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ ...motionTransition, delay: 0.05 }}
        >
          {LINKS.map(({ label, value, href, icon, external }) => {
            const content = (
              <>
               <Icon
                  icon={icon}
                  className="h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400"
                />
                <span>
                  <span className="block text-xs text-zinc-500">{label}</span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {value}
                  </span>
                </span>
              </>
            );

            if (!href) {
              return (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  {content}
                </li>
              );
            }

            return (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-violet-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {content}
                </a>
              </li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ ...motionTransition, delay: 0.1 }}
        >
          <a href={CONTACT.mailto} className={btnPrimary}>
            <Mail className="h-4 w-4" aria-hidden />
            Let&apos;s Connect
          </a>
          <Link href={CONTACT.resume} download className={btnSecondary}>
            <Download className="h-4 w-4" aria-hidden />
            Download Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
