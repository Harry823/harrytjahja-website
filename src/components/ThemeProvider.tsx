'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { COOKIE_MAX_AGE } from '@/shared/constants';

const ThemeCtx = createContext({ dark: false, toggle: () => {} });
export const useTheme = () => useContext(ThemeCtx);

export default function ThemeProvider({
  children,
  defaultDark,
}: {
  children: React.ReactNode;
  defaultDark: boolean;
}) {
  const [dark, setDark] = useState(defaultDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.cookie = `darkMode=${next}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  };

  return <ThemeCtx.Provider value={{ dark, toggle }}>{children}</ThemeCtx.Provider>;
}
