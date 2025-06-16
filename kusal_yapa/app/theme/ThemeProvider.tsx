'use client';
import { ReactNode, useState, useEffect, createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { darkTheme, lightTheme } from '@/app/theme/themes';

type ThemeContextType = {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'dark',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setThemeMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const currentTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  // Provide the theme context value
  const themeContextValue = {
    themeMode,
    toggleTheme,
  };

  // Only render the provider when mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MUIThemeProvider theme={currentTheme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}