import type { Locale } from "./locale";
import en from "./messages/en.json";
import es from "./messages/es.json";
import zh from "./messages/zh.json";

export type Dictionary = typeof en;
export const dictionaries: Record<Locale, Dictionary> = { en, es, zh };
