import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [isDarkTheme, changeTheme] = useState(false);
  const { body } = document;

  if (isDarkTheme) {
    console.log('isDarkTheme ->', isDarkTheme);
    body.classList.add('dark');
  } else {
    console.log('isDarkTheme ->', isDarkTheme);
    body.classList.remove('dark');
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
