"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const LOGO_TEXT = "Mohd Nafish";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

function getThemeFromStorage(): "light" | "dark" | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

function resolveTheme(): "light" | "dark" {
  const stored = getThemeFromStorage();
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

const themeListeners = new Set<() => void>();

function subscribeTheme(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  themeListeners.add(onStoreChange);
  media.addEventListener("change", onStoreChange);
  return () => {
    themeListeners.delete(onStoreChange);
    media.removeEventListener("change", onStoreChange);
  };
}

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener());
}

function getThemeSnapshot(): "light" | "dark" {
  return resolveTheme();
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    () => "light",
  );

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    applyTheme(resolveTheme());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = useCallback(() => {
    const next = resolveTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    notifyThemeListeners();
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const target = document.getElementById(href.replace("#", ""));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }, []);

  const linkClass =
    "text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/95"
          : "border-transparent bg-[var(--background)]/90"
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileOpen(false);
          }}
          className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {LOGO_TEXT}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={linkClass}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(href);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label={
              mounted && theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden />
            ) : (
              <Moon className="h-4 w-4" aria-hidden />
            )}
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`border-t border-zinc-200 bg-white md:hidden dark:border-zinc-800 dark:bg-zinc-950 ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(href);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
