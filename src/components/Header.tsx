"use client";

import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, FileText } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const applyTheme = useCallback((currentTheme: 'light' | 'dark') => {
        const root = document.documentElement;
        if (currentTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        let initialTheme: 'light' | 'dark';
        if (savedTheme) {
            initialTheme = savedTheme as 'light' | 'dark';
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            initialTheme = 'dark';
        } else {
            initialTheme = 'light';
        }
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, [applyTheme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const seuNome = "Leandro de Sousa";
    const linkCV = "leandrodesousa_ios.pdf";

    return (
       <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.container}> 
               <h1 className="text-xl font-extrabold tracking-tight"> 
                    {seuNome}
                </h1>
                 <div className={styles.buttonsContainer}>
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