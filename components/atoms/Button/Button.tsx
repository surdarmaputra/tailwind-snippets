import classNames from 'classnames';
import NextLink from 'next/link';

import LoaderIcon from '~icons/tabler/loader-2';

export enum ButtonVariation {
  primary = 'primary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  light = 'light',
  dark = 'dark',
}

export enum ButtonSize {
  small = 'small',
  default = 'default',
  large = 'large',
}

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  external?: boolean;
  href?: string;
  link?: boolean;
  loading?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: `${ButtonSize}`;
  target?: string;
  variation?: `${ButtonVariation}`;
}

const backgroundClassNames = {
  normal: {
    [ButtonVariation.primary]: 'bg-primary-500 hover:bg-primary-600',
    [ButtonVariation.success]: 'bg-success-500 hover:bg-success-600',
    [ButtonVariation.danger]: 'bg-danger-500 hover:bg-danger-600',
    [ButtonVariation.warning]: 'bg-warning-500 hover:bg-warning-600',
    [ButtonVariation.light]:
      'bg-dark-50 hover:bg-dark-100 text-dark-900 dark:bg-dark-800 dark:text-dark-100 dark:hover:bg-dark-900',
    [ButtonVariation.dark]:
      'bg-dark-800 hover:bg-dark-900 dark:bg-dark-100 dark:hover:bg-dark-50',
  },
  disabled: {
    [ButtonVariation.primary]: 'bg-primary-400',
    [ButtonVariation.success]: 'bg-success-400',
    [ButtonVariation.danger]: 'bg-danger-400',
    [ButtonVariation.warning]: 'bg-warning-400',
    [ButtonVariation.light]: 'bg-dark-50 dark:bg-dark-700',
    [ButtonVariation.dark]: 'bg-dark-500 dark:bg-dark-200',
  },
};
const borderClassNames = {
  normal: {
    [ButtonVariation.primary]: 'border-primary-500 hover:border-primary-600',
    [ButtonVariation.success]: 'border-success-500 hover:border-success-600',
    [ButtonVariation.danger]: 'border-danger-500 hover:border-danger-600',
    [ButtonVariation.warning]: 'border-warning-500 hover:border-warning-600',
    [ButtonVariation.light]:
      'border-dark-50 hover:border-dark-100 dark:border-dark-800 dark:hover:border-dark-900',
    [ButtonVariation.dark]:
      'border-dark-800 hover:border-dark-900 dark:border-dark-100 dark:hover:border-dark-50',
  },
  disabled: {
    [ButtonVariation.primary]: 'border-primary-400',
    [ButtonVariation.success]: 'border-success-400',
    [ButtonVariation.danger]: 'border-danger-400',
    [ButtonVariation.warning]: 'border-warning-400',
    [ButtonVariation.light]:
      'border-dark-50 text-dark-300 dark:border-dark-700',
    [ButtonVariation.dark]: 'border-dark-500 dark:border-dark-200',
  },
};
const outlineClassNames = {
  normal: {
    [ButtonVariation.primary]: 'text-primary-500 hover:bg-primary-600',
    [ButtonVariation.success]: 'text-success-500 hover:bg-success-600',
    [ButtonVariation.danger]: 'text-danger-500 hover:bg-danger-600',
    [ButtonVariation.warning]: 'text-warning-500 hover:bg-warning-600',
    [ButtonVariation.light]:
      'text-dark-900 dark:text-dark-50 dark:hover:text-dark-900 hover:bg-dark-100',
    [ButtonVariation.dark]:
      'text-dark-800 dark:border-dark-900 dark:text-dark-900 dark:hover:text-dark-50 hover:bg-dark-900',
  },
  disabled: {
    [ButtonVariation.primary]: 'text-primary-300',
    [ButtonVariation.success]: 'text-success-300',
    [ButtonVariation.danger]: 'text-danger-300',
    [ButtonVariation.warning]: 'text-warning-300',
    [ButtonVariation.light]: 'text-dark-400',
    [ButtonVariation.dark]: 'text-dark-500',
  },
};

export default function Button({
  children,
  className = '',
  disabled,
  external = false,
  href,
  link = false,
  loading = false,
  onClick,
  outline = false,
  rounded = false,
  size = ButtonSize.default,
  target,
  title,
  variation = ButtonVariation.primary,
}: ButtonProps) {
  const backgroundClassName = disabled
    ? backgroundClassNames.disabled[variation]
    : backgroundClassNames.normal[variation];
  const borderClassName = disabled
    ? borderClassNames.disabled[variation]
    : borderClassNames.normal[variation];
  const outlineClassName = disabled
    ? outlineClassNames.disabled[variation]
    : outlineClassNames.normal[variation];
  const sizeClassName = classNames({
    'px-4 py-2 text-xs': size === ButtonSize.small,
    'px-6 py-3 text-sm': size === ButtonSize.default,
    'px-10 py-4 text-base': size === ButtonSize.large,
  });
  const roundedClassName = rounded
    ? 'rounded-full'
    : classNames({
        rounded: size === ButtonSize.small,
        'rounded-md': size === ButtonSize.default,
        'rounded-lg': size === ButtonSize.large,
      });
  const finalClassName = `
    ${classNames({
      'button transition': true,
      'text-white dark:text-black':
        !outline && variation !== ButtonVariation.light,
      'bg-transparent': outline,
      'hover:text-white dark:hover:text-black':
        outline && !disabled && variation !== ButtonVariation.light,
      'cursor-not-allowed': disabled,
      'cursor-pointer hover:shadow-lg': !disabled,
    })}
    ${borderClassName}
    ${sizeClassName}
    ${outline ? outlineClassName : backgroundClassName}
    ${roundedClassName}
    ${className}
  `;

  if (!link || (link && disabled)) {
    return (
      <button
        className={finalClassName}
        disabled={disabled}
        onClick={onClick}
        title={title}
      >
        {loading ? (
          <>
            <LoaderIcon className="absolute animate-spin" />
            <div className="flex items-end justify-center opacity-40">
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </button>
    );
  }

  if (link && external) {
    return (
      <a className={finalClassName} href={href} target={target} title={title}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href || '/'}>
      <a className={finalClassName} title={title}>
        {children}
      </a>
    </NextLink>
  );
}
