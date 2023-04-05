import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { trackEvent } from 'libs/analytics';
import { identity } from 'lodash-es';

export interface ColorModeContextValue {
  dark: boolean;
  toggleColorMode: (becomeDark: boolean) => void;
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  dark: false,
  toggleColorMode: identity,
});

export interface ColorModeProviderProps {
  children?: ReactNode;
}

export default function ColorModeProvider({
  children,
}: ColorModeProviderProps) {
  const [dark, setDark] = useState(false);
  const router = useRouter();

  const setDarkClassName = useCallback((becomeDark: boolean) => {
    if (becomeDark) {
      global.document.documentElement.classList.add('dark');
    } else {
      global.document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleColorMode = (becomeDark: boolean) => {
    setDark(becomeDark);
    setDarkClassName(becomeDark);
    trackEvent({
      name: 'color_mode_click',
      selected_value: becomeDark ? 'dark' : 'light',
    });
    global.localStorage.theme = becomeDark ? 'dark' : 'light';
  };

  useEffect(() => {
    const isCurrentlyDark =
      router.query?.theme === 'dark' || window.localStorage?.theme === 'dark';
    setDark(isCurrentlyDark);
    setDarkClassName(isCurrentlyDark);
  }, [router, setDark, setDarkClassName]);

  return (
    <ColorModeContext.Provider
      value={{
        dark,
        toggleColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
