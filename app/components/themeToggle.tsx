"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";
type EffectiveTheme = "light" | "dark";

const THEME_EVENT = "luxury-touch-theme-change";
const THEME_KEY = "theme";

function getSystemTheme(): EffectiveTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getSavedTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);

    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch {
    // Fall back to the system preference.
  }

  return "system";
}

function getEffectiveTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem(THEME_KEY);

    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Fall back to system preference.
  }

  return getSystemTheme();
}

function applyTheme(theme: EffectiveTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [theme, setTheme] = useState<EffectiveTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const effectiveTheme = getEffectiveTheme();
      applyTheme(effectiveTheme);
      setTheme(effectiveTheme);
    };

    syncTheme();
    setMounted(true);

    const handleSystemChange = () => {
      if (getSavedTheme() === "system") {
        syncTheme();
      }
    };

    window.addEventListener(THEME_EVENT, syncTheme);
    window.addEventListener("storage", syncTheme);
    media.addEventListener("change", handleSystemChange);

    return () => {
      window.removeEventListener(THEME_EVENT, syncTheme);
      window.removeEventListener("storage", syncTheme);
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const toggle = () => {
    const next: EffectiveTheme = theme === "dark" ? "light" : "dark";

    applyTheme(next);
    setTheme(next);

    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Theme still applies for this session.
    }

    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const resetToSystem = () => {
    try {
      localStorage.setItem(THEME_KEY, "system");
    } catch {
      // Continue using the system preference for this session.
    }

    const effectiveTheme = getSystemTheme();
    applyTheme(effectiveTheme);
    setTheme(effectiveTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const label =
    mounted && theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  const iconClass = "absolute h-5 w-5 transition-all duration-300";

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={toggle}
        aria-label={mounted ? label : "Toggle theme"}
        title={mounted ? label : "Toggle theme"}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-600 transition-all duration-200 hover:border-[#b58742] hover:text-[#b58742] active:scale-90 dark:border-stone-700 dark:bg-stone-800 dark:text-amber-400 dark:hover:text-amber-300 ${className}`}
      >
        <svg
          className={`${iconClass} ${
            mounted && theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>

        <svg
          className={`${iconClass} ${
            mounted && theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-50 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>

    </div>
  );
}
