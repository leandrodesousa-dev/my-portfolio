"use client";

import { Mail } from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { useTheme } from '../Theme/ThemeProvider';
import React from 'react';
import styles from './Footer.module.css';

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
        <footer className={`${styles.footer} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.separator}></div>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.name}>{myName}</p>
                    <a
                        href={`mailto:${myEmail}`}
                        className={styles.email}
                    >
                        <Mail size={16} className={styles.emailIcon} />
                        {myEmail}
                    </a>
                </div>
                <div className={styles.socialList}>
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={index}
                                href={contact.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={`Link para ${contact.name}`}
                            >
                                <Icon size={20} className={styles.socialIcon} />
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