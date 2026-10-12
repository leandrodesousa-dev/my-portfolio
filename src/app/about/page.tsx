import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import styles from "../page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const texts = dictionaries[await getLocale()];
  return { title: texts.aboutTitle };
}

export default async function AboutPage() {
  const texts = dictionaries[await getLocale()];
  return (
    <main className={styles.home}>
      <h1>{texts.aboutTitle}</h1>
      <div className="profile-description">
        {texts.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
