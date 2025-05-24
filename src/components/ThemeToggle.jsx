import React, { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="toggle-container">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}