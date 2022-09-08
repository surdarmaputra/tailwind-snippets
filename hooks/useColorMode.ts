import { useEffect, useState } from 'react';

export default function useColorMode() {
  const [dark, setDark] = useState(false);

  const setDarkClassName = (becomeDark: boolean) => {
    if (becomeDark) {
      global.document.documentElement.classList.add('dark');
    } else {
      global.document.documentElement.classList.remove('dark');
    }
  };

  const toggleColorMode = (becomeDark: boolean) => {
    setDark(becomeDark);
    setDarkClassName(becomeDark);
    global.localStorage.theme = becomeDark ? 'dark' : 'light';
  };

  useEffect(() => {
    const isCurrentlyDark = !window.localStorage.theme
      ? false
      : window.localStorage.theme === 'dark';
    setDark(isCurrentlyDark);
    setDarkClassName(isCurrentlyDark);
  }, [setDark]);

  return {
    dark,
    toggleColorMode,
  };
}