import type { Metadata } from "next";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const texts = dictionaries[await getLocale()];
  return {
    title: `Leandro de Sousa | ${texts.role}`,
    description: texts.description,
  };
}

export default async function LandingPage() {
  const locale = await getLocale();
  const texts = dictionaries[locale];
  return (
    <>
      <a className={styles.skipLink} href="#home-content">
        {texts.skip}
      </a>
      <main
        id="home-content"
        className={styles.home}
        lang={locale}
        tabIndex={-1}
      >
        <section className={styles.hero} aria-labelledby="hero-title">
          <p className={styles.eyebrow}>Leandro de Sousa</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            {texts.role}
          </h1>
          <p className={styles.description}>{texts.description}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#featured-projects">
              {texts.projects}
            </a>
            <a
              className={styles.secondaryAction}
              href="/leandrodesousa_ios.pdf"
              download
            >
              {texts.cv}
            </a>
            <a className={styles.secondaryAction} href="#contact">
              {texts.contact}
            </a>
          </div>
        </section>
        <section
          id="featured-projects"
          className={styles.section}
          aria-labelledby="featured-projects-title"
          tabIndex={-1}
        >
          <h2 id="featured-projects-title" className={styles.sectionTitle}>
            {texts.featured}
          </h2>
          <p className={styles.sectionIntro}>{texts.projectsIntro}</p>
          <article className={styles.project} aria-labelledby="pomodoro-title">
            <h3 id="pomodoro-title" className={styles.projectTitle}>
              MyPomodoro
            </h3>
            <p className={styles.description}>{texts.pomodoro}</p>
            <a
              className={styles.repositoryLink}
              href="https://github.com/leandrodesousa-dev/my-pomodoro"
            >
              {texts.repository}
            </a>
          </article>
        </section>
        <ProjectsSection />
      </main>
    </>
  );
}
