export const locales = ["en", "es", "zh"] as const;
export type Locale = (typeof locales)[number];
export const localeCookie = "portfolio-language";
export const languageNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  zh: "普通话（简体中文）",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localeFromLanguage(language: string): Locale {
  const base = language.trim().toLowerCase().split(/[-_]/)[0];
  if (base === "zh" || base === "cmn") return "zh";
  return isLocale(base) ? base : "en";
}

// Respect the browser's primary preference, including regional language tags.
// An unsupported primary language falls back to English.
export function resolveLocale(
  acceptLanguage: string | null,
  cookie: string | null,
): Locale {
  const saved = cookie
    ?.split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${localeCookie}=`))
    ?.slice(localeCookie.length + 1);
  if (isLocale(saved)) return saved;

  const preferred = (acceptLanguage ?? "")
    .split(",")
    .map((entry) => {
      const [language, ...parameters] = entry.trim().split(";");
      const quality = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      return {
        language,
        quality: quality ? Number(quality.trim().slice(2)) : 1,
      };
    })
    .filter(({ language, quality }) => language && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality)[0];
  return localeFromLanguage(preferred?.language ?? "en");
}
