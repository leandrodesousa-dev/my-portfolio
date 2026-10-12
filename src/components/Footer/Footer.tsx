"use client";

import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useTheme } from "../Theme/ThemeProvider";
import styles from "./Footer.module.css";

const myName = "Leandro de Sousa";
const myEmail = "contato@leandrodesousa.dev";

const contacts = [
  {
    name: "Github",
    url: "https://github.com/leandrodesousa-dev",
    icon: SiGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/leandrodesousadesenvolvedorios/",
    icon: SiLinkedin,
  },
];

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      id="contact"
      tabIndex={-1}
      className={`${styles.footer} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.separator}></div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 id="contact-title" className={styles.name} lang="en">
            Contact
          </h2>
          <p className={styles.name}>{myName}</p>
          <a href={`mailto:${myEmail}`} className={styles.email}>
            <Mail size={16} className={styles.emailIcon} aria-hidden="true" />
            {myEmail}
          </a>
        </div>
        <div className={styles.socialList}>
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.url}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`${contact.name} (opens in a new tab)`}
                lang="en"
              >
                <Icon
                  size={20}
                  className={styles.socialIcon}
                  aria-hidden="true"
                />
                <span className={styles.socialName}>{contact.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
