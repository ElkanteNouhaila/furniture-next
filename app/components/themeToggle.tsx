// "use client";

// import { useEffect, useState } from "react";

// type Theme = "light" | "dark";

// export default function ThemeToggle({ className = "" }: { className?: string }) {
//   const [theme, setTheme] = useState<Theme>("light");
//   const [mounted, setMounted] = useState(false);

//   // Read the theme applied by the layout's inline script on mount,
//   // so the icon matches what the user is actually seeing.
//   useEffect(() => {
//     setMounted(true);
//     setTheme(
//       document.documentElement.classList.contains("dark") ? "dark" : "light"
//     );
//   }, []);

//   const toggle = () => {
//     const next: Theme = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     document.documentElement.classList.toggle("dark", next === "dark");
//     try {
//       localStorage.setItem("theme", next);
//     } catch {
//       // localStorage unavailable — theme still applies for this session
//     }
//   };

//   return (
//     <button
//       onClick={toggle}
//       aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
//       title={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
//       className={`relative w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-amber-400 hover:border-[#b58742] hover:text-[#b58742] dark:hover:text-amber-300 transition-all duration-200 active:scale-90 ${className}`}
//     >
//       {/* Sun (visible in dark mode → click for light) */}
//       <svg
//         className={`absolute w-5 h-5 transition-all duration-300 ${
//           mounted && theme === "dark"
//             ? "opacity-100 rotate-0 scale-100"
//             : "opacity-0 -rotate-90 scale-50"
//         }`}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <circle cx="12" cy="12" r="5" />
//         <line x1="12" y1="1" x2="12" y2="3" />
//         <line x1="12" y1="21" x2="12" y2="23" />
//         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//         <line x1="1" y1="12" x2="3" y2="12" />
//         <line x1="21" y1="12" x2="23" y2="12" />
//         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//       </svg>

//       {/* Moon (visible in light mode → click for dark) */}
//       <svg
//         className={`absolute w-5 h-5 transition-all duration-300 ${
//           mounted && theme === "light"
//             ? "opacity-100 rotate-0 scale-100"
//             : "opacity-0 rotate-90 scale-50"
//         }`}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//       </svg>
//     </button>
//   );
// }


"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_EVENT = "luxury-touch-theme-change";

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      setTheme(getCurrentTheme());
    };

    syncTheme();
    setMounted(true);

    window.addEventListener(THEME_EVENT, syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener(THEME_EVENT, syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const toggle = () => {
    // Read the actual document theme to avoid stale component state.
    const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);

    try {
      localStorage.setItem("theme", next);
    } catch {
      // The theme still works for the current session.
    }

    // Synchronize every ThemeToggle instance on this page.
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const label =
    mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  const iconClass =
    "absolute h-5 w-5 transition-all duration-300";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? label : "Toggle theme"}
      title={mounted ? label : "Toggle theme"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-600 transition-all duration-200 hover:border-[#b58742] hover:text-[#b58742] active:scale-90 dark:border-stone-700 dark:bg-stone-800 dark:text-amber-400 dark:hover:text-amber-300 ${className}`}
    >
      {/* Sun: visible in dark mode */}
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

      {/* Moon: visible in light mode */}
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
  );
}