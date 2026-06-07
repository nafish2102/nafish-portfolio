import { container, section } from "@/lib/ui";
import { Icon } from "@iconify/react";

const PROFILE = {
  name: "Mohd Nafish",
  role: "Senior UI/UX Developer | Frontend Developer",
  email: "mo.nafish786@gmail.com",
  linkedin: "https://linkedin.com/in/nafish0202",
  location: "Indore, Madhya Pradesh, India",
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${section} border-t border-zinc-200 py-8 dark:border-zinc-800`}
    >
      <div
        className={`${container} flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left`}
      >
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">
            {PROFILE.name}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span>{PROFILE.role}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Icon icon="solar:map-point-linear" className="h-4 w-4" />
              {PROFILE.location}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-1.5 text-zinc-600 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors duration-200"
          >
            <Icon icon="solar:letter-linear" className="h-4 w-4" />
            <span>Email</span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-600 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors duration-200"
          >
            <Icon icon="ri:linkedin-fill" className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {year} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
