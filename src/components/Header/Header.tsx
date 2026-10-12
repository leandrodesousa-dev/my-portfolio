"use client";

import { FileText, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "../Theme/ThemeProvider";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/about");
  const { theme, toggleTheme } = useTheme();

  const myName = "Leandro de Sousa";
  const linkCV = "leandrodesousa_ios.pdf";

  if (theme === undefined) {
    return null;
  }

  return (
    <header
      className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <a href="/" className={styles.logoLink}>
          <p className={styles.title}>{myName}</p>
        </a>
        <nav className={styles.buttonsContainer} aria-label="Main navigation">
          <a
            href="/about"
            lang="pt-BR"
            aria-current={isActive ? "page" : undefined}
            className={`${styles.aboutLink} ${isActive ? styles.activeLink : ""}`}
          >
            Sobre Mim
          </a>
          <a
            href={`/${linkCV}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvLink}
          >
            <FileText className={styles.cvIcon} />
            CV
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeButton}
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === "light" ? (
              <Moon size={20} aria-hidden="true" />
            ) : (
              <Sun size={20} aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>
      <div className={styles.separator}></div>
    </header>
  );
};

export default Header;
