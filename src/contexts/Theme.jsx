import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  // theme: 'default' || 'dark'
  const [theme, setTheme] = useState('default');

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'dark' : 'default');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
