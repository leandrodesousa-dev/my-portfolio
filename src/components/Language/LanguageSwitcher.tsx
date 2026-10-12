"use client";

import { useFormStatus } from "react-dom";
import { setLocale } from "@/lib/i18n/actions";
import { useLanguage } from "./LanguageProvider";
import styles from "./LanguageSwitcher.module.css";

function SwitchButton() {
  const { locale, texts } = useLanguage();
  const { pending } = useFormStatus();
  const target = locale === "en" ? "pt-BR" : "en";
  return (
    <button
      type="submit"
      name="locale"
      value={target}
      disabled={pending}
      aria-label={texts.switchLanguage}
      className={styles.button}
    >
      <span lang={target}>{target === "en" ? "EN" : "PT"}</span>
    </button>
  );
}

export function LanguageSwitcher() {
  return (
    <form action={setLocale}>
      <SwitchButton />
    </form>
  );
}
