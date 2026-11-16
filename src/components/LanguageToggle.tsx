"use client";

import { useEffect, useRef, useState } from "react";
import { languageNames, locales } from "../i18n/locale";
import { useLanguage } from "./LanguageProvider";

// Google Material Icons: translate (Apache-2.0). See public/icons/NOTICE.md.
const translatePath =
  "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z";

export default function LanguageToggle() {
  const { locale, t, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      )
        setOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function handleFocus(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      )
        setOpen(false);
    }
    document.addEventListener("focusin", handleFocus);
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative order-1 ml-auto lg:order-3 lg:ml-0"
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={`${t.language.label}: ${languageNames[locale]}`}
        title={t.language.label}
        aria-expanded={open}
        aria-controls="language-options"
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-800"
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d={translatePath} />
        </svg>
      </button>
      {open && (
        <fieldset
          id="language-options"
          aria-label={t.language.title}
          className="absolute right-0 top-full z-30 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900"
        >
          <p className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            {t.language.title}
          </p>
          {locales.map((language) => (
            <button
              key={language}
              type="button"
              lang={language === "zh" ? "zh-CN" : language}
              aria-pressed={locale === language}
              onClick={() => {
                setLocale(language);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:hover:bg-gray-800"
            >
              <span>{languageNames[language]}</span>
              <span aria-hidden="true">{locale === language ? "✓" : ""}</span>
            </button>
          ))}
        </fieldset>
      )}
    </div>
  );
}
