import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import styles from "./page.module.css";

export default async function NotFound() {
  const texts = dictionaries[await getLocale()];
  return (
    <main className={styles.home}>
      <h1>{texts.notFound}</h1>
      <a href="/">{texts.backHome}</a>
    </main>
  );
}
