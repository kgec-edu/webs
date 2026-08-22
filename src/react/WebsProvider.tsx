import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeName, ThemePreset, WEBS_THEMES } from '../tokens';

interface WebsContextValue {
  theme: ThemeName;
  preset: ThemePreset;
  setTheme: (name: ThemeName) => void;
  availableThemes: ThemePreset[];
}

const WebsContext = createContext<WebsContextValue>({
  theme: 'theme-1',
  preset: WEBS_THEMES['theme-1'],
  setTheme: () => {},
  availableThemes: Object.values(WEBS_THEMES),
});

export function WebsProvider({
  children,
  defaultTheme = 'theme-1',
}: {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
}) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const saved = localStorage.getItem('webs_theme') as ThemeName;
    if (saved && saved in WEBS_THEMES) {
      setThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', defaultTheme);
    }
  }, [defaultTheme]);

  const setTheme = (name: ThemeName) => {
    if (name in WEBS_THEMES) {
      setThemeState(name);
      localStorage.setItem('webs_theme', name);
      document.documentElement.setAttribute('data-theme', name);
    }
  };

  return (
    <WebsContext.Provider
      value={{
        theme,
        preset: WEBS_THEMES[theme] || WEBS_THEMES['theme-1'],
        setTheme,
        availableThemes: Object.values(WEBS_THEMES),
      }}
    >
      {children}
    </WebsContext.Provider>
  );
}

export function useWebsTheme() {
  return useContext(WebsContext);
}
