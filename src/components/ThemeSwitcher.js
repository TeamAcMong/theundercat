'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return <div className="theme-switcher-placeholder" style={{ width: '120px' }}></div>;

  return (
    <button 
      onClick={toggleTheme}
      className="theme-switcher"
      title="Toggle Theme"
      aria-label="Toggle Theme"
      style={{
        background: theme === 'diary' ? 'var(--primary-light)' : 'rgba(124, 58, 237, 0.2)',
        color: theme === 'diary' ? 'var(--text-primary)' : 'var(--secondary-light)',
        border: `1px solid ${theme === 'diary' ? 'var(--border-default)' : 'var(--border-glow)'}`,
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontFamily: 'var(--font-display)',
        fontSize: '0.875rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {theme === 'diary' ? '📔 Diary Mode' : '🥷 Heist Mode'}
    </button>
  );
}
