"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 dark:text-gray-400">
        <p className="text-center">
          &copy; {new Date().getFullYear()} meaPERITIA. {t.footer}
        </p>
      </div>
    </footer>
  );
}
