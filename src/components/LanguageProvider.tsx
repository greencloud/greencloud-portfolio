"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Dictionary, dictionaries } from "../i18n/dictionaries";
import { type Locale, localeCookie } from "../i18n/locale";

const LanguageContext = createContext<{
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
} | null>(null);

export default function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLanguage] = useState(initialLocale);
  const router = useRouter();
  const setLocale = useCallback(
    (next: Locale) => {
      setLanguage(next);
      try {
        // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store is unavailable in older browsers; this preference must also be readable during SSR.
        document.cookie = `${localeCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
      } catch {
        // Language switching still works when preference storage is blocked.
      }
      router.refresh();
    },
    [router],
  );

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, t: dictionaries[locale], setLocale }),
    [locale, setLocale],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
