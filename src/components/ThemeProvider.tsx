"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme | undefined;
  toggleTheme: () => void;
}>({ theme: undefined, toggleTheme: () => {} });

const applyThemeClass = (currentTheme: Theme) => {
    const root = document.documentElement;
    if (currentTheme === 'dark') {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
    } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
    }
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme | undefined>(undefined);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        let initialTheme: Theme;

        if (savedTheme === 'light' || savedTheme === 'dark') {
            initialTheme = savedTheme;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            initialTheme = 'dark';
        } else {
            initialTheme = 'light';
        }
        
        setTheme(initialTheme);
    }, []);

    const toggleTheme = () => {
        if (!theme) return;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        applyThemeClass(newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

