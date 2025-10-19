"use client";

import { Sun, Moon, FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import styles from './Header.module.css';

const Header = () => {
    const pathname = usePathname(); 
    const isActive = pathname.startsWith('/about');
    const { theme, toggleTheme } = useTheme();

    const myName = "Leandro de Sousa";
    const linkCV = "leandrodesousa_ios.pdf";

    if (theme === undefined) {
        return null;
    }

    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.container}>
                <a href="/" className={styles.logoLink}>
                    <h1 className={styles.title}>
                        {myName}
                    </h1>
                </a>
                <div className={styles.buttonsContainer}>
                    <a
                        href="/about"
                        className={`${styles.aboutLink} ${isActive ? styles.activeLink : ''}`} 
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
                        onClick={toggleTheme}
                        className={styles.themeButton}
                        aria-label="Toggle Dark/Light Mode"
                    >
                        {theme === 'light' ? (
                            <Moon className="w-5 h-5" />
                        ) : (
                            <Sun className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
            <div className={styles.separator}></div>
        </header>
    );
};

export default Header;