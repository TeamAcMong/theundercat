'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('diary'); // 'diary' | 'heist'
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('uc-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (theme === 'heist') {
      document.body.classList.add('theme-heist');
      document.body.classList.remove('theme-diary', 'notebook-paper');
    } else {
      document.body.classList.add('theme-diary', 'notebook-paper');
      document.body.classList.remove('theme-heist');
    }
    localStorage.setItem('uc-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'diary' ? 'heist' : 'diary');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
