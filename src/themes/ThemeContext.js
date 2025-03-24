import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

// Define colors based on extracted website theme
const Colors = {
  light: {
    primary: '#646cffaa',
    secondary: '#61dafbaa',
    background: '#ffffff',
    text: '#888888',
    accent: '#646cffaa',
    card: '#f9f9f9',
    border: '#e1e1e1',
  },
  dark: {
    primary: '#646cffaa',
    secondary: '#61dafbaa',
    background: '#121212',
    text: '#ffffff',
    accent: '#646cffaa',
    card: '#1e1e1e',
    border: '#2a2a2a',
  },
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = {
    colors: Colors[colorScheme || 'light'],
    isDark: colorScheme === 'dark',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
