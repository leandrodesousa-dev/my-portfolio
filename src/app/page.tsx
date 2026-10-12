import type { Metadata } from "next";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";
import styles from "./page.module.css";

const description =
  "Senior iOS Engineer with 6+ years of experience building native iOS applications using Swift, UIKit, and SwiftUI, primarily in banking and financial technology.";

export const metadata: Metadata = {
  title: "Leandro de Sousa | Senior iOS Engineer",
  description,
};

export default function LandingPage() {
  return (
    <>
      <a className={styles.skipLink} href="#home-content">
        Skip to content
      </a>
      <main id="home-content" className={styles.home} lang="en" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <p className={styles.eyebrow}>Leandro de Sousa</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            Senior iOS Engineer
          </h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#featured-projects">
              View Projects
            </a>
            <a
              className={styles.secondaryAction}
              href="/leandrodesousa_ios.pdf"
              download
            >
              Download CV
            </a>
            <a className={styles.secondaryAction} href="#contact">
              Contact
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
            Featured Projects
          </h2>
          <p className={styles.sectionIntro}>Personal software projects.</p>
          <article className={styles.project} aria-labelledby="pomodoro-title">
            <h3 id="pomodoro-title" className={styles.projectTitle}>
              MyPomodoro
            </h3>
            <p className={styles.description}>
              A native iOS application developed with SwiftUI.
            </p>
            <a
              className={styles.repositoryLink}
              href="https://github.com/leandrodesousa-dev/my-pomodoro"
            >
              View MyPomodoro on GitHub
            </a>
          </article>
        </section>
        <ProjectsSection />
      </main>
    </>
  );
}
