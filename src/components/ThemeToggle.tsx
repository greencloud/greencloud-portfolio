"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="mt-6 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-5 py-3 font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus-visible:outline-indigo-400"
    >
      <span className="hidden dark:inline">☀ Switch to light mode</span>
      <span className="dark:hidden">☾ Switch to dark mode</span>
    </button>
  );
}
