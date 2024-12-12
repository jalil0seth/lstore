import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check system preference first
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      // Then check localStorage, fallback to system preference
      return localStorage.getItem('theme') || systemPreference;
    }
    return 'dark'; // Default fallback
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.classList.add('theme-transition');
    localStorage.setItem('theme', theme);

    // Add transition class
    const removeTransition = () => {
      root.classList.remove('theme-transition');
    };

    // Remove transition class after animation completes
    const transitionTimeout = setTimeout(removeTransition, 200);

    return () => {
      clearTimeout(transitionTimeout);
      removeTransition();
    };
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}