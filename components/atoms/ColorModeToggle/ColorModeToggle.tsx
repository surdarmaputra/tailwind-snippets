import { identity } from 'lodash-es';

export interface ColorModeToggleProps {
  className?: string;
  dark?: boolean;
  onChange?: (dark: boolean) => void;
}

export default function ColorModeToggle({
  className = '',
  dark,
  onChange = identity,
}: ColorModeToggleProps) {
  return (
    <div
      className={`relative flex h-8 w-20 cursor-pointer rounded-full bg-dark-50 dark:bg-dark-800 ${className}`}
      onClick={() => onChange(!dark)}
    >
      <div
        className={`absolute h-8 w-8 rounded-full shadow transition-transform ${
          dark
            ? 'translate-x-12 bg-dark-800 shadow-dark-800 dark:bg-primary-700 dark:shadow-primary-700'
            : 'left-0 bg-warning-300 shadow-warning-300'
        }`}
      ></div>
      <div
        className={`w-full px-3 text-sm leading-8 transition-all dark:text-dark-400 ${
          dark ? 'text-left' : 'text-right'
        }`}
      >
        {dark ? 'Dark' : 'Light'}
      </div>
    </div>
  );
}
