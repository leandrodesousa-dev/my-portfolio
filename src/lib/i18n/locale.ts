export type Locale = "en" | "pt-BR";

export const localeCookie = "portfolio-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "pt-BR";
}
