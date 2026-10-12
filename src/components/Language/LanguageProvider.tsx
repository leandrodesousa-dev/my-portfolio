"use client";

import { createContext, type ReactNode, useContext } from "react";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locale";

const LocaleContext = createContext<Locale>("en");

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLanguage() {
  const locale = useContext(LocaleContext);
  return { locale, texts: dictionaries[locale] };
}
