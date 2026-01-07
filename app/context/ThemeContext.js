'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [customColors, setCustomColors] = useState({
        primary: '',
        secondary: '',
        accent: '',
        text: ''
    });

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('light-theme', savedTheme === 'light');

        // Restore custom colors if any
        const savedColors = localStorage.getItem('custom-colors');
        if (savedColors) {
            const colors = JSON.parse(savedColors);
            setCustomColors(colors);
            applyCustomColors(colors);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('light-theme', newTheme === 'light');

        // Reset custom colors when toggling standard themes to avoid conflicts
        // or we could keep them. Let's reset for simplicity unless on the lab page.
    };

    const applyCustomColors = (colors) => {
        const root = document.documentElement;
        if (colors.primary) root.style.setProperty('--bg-primary', colors.primary);
        if (colors.secondary) root.style.setProperty('--bg-secondary', colors.secondary);
        if (colors.accent) root.style.setProperty('--accent', colors.accent);
        if (colors.text) root.style.setProperty('--text-primary', colors.text);
    };

    const updateCustomColors = (newColors) => {
        const updated = { ...customColors, ...newColors };
        setCustomColors(updated);
        localStorage.setItem('custom-colors', JSON.stringify(updated));
        applyCustomColors(updated);
    };

    const resetTheme = () => {
        setCustomColors({ primary: '', secondary: '', accent: '', text: '' });
        localStorage.removeItem('custom-colors');
        const root = document.documentElement;
        root.style.removeProperty('--bg-primary');
        root.style.removeProperty('--bg-secondary');
        root.style.removeProperty('--accent');
        root.style.removeProperty('--text-primary');

        // Re-apply base theme
        document.documentElement.classList.toggle('light-theme', theme === 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, customColors, updateCustomColors, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
