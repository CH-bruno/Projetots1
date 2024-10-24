import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from './../themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

// Definindo o contexto de tema
const ThemeContext = createContext({} as IThemeContextData);

// Hook para usar o contexto de tema
export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

// Definindo as propriedades do AppThemeProvider
interface AppThemeProviderProps {
  children: ReactNode; // Aqui você define que children é do tipo ReactNode
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
