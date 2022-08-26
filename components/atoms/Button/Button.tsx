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
    [ButtonVariation.light]: 'bg-dark-100 hover:bg-dark-200',
    [ButtonVariation.dark]: 'bg-dark-800 hover:bg-dark-900',
  },
  disabled: {
    [ButtonVariation.primary]: 'bg-primary-400',
    [ButtonVariation.success]: 'bg-success-400',
    [ButtonVariation.danger]: 'bg-danger-400',
    [ButtonVariation.warning]: 'bg-warning-400',
    [ButtonVariation.light]: 'bg-dark-50',
    [ButtonVariation.dark]: 'bg-dark-500',
  },
};
const borderClassNames = {
  normal: {
    [ButtonVariation.primary]: 'border-primary-500 hover:border-primary-600',
    [ButtonVariation.success]: 'border-success-500 hover:border-success-600',
    [ButtonVariation.danger]: 'border-danger-500 hover:border-danger-600',
    [ButtonVariation.warning]: 'border-warning-500 hover:border-warning-600',
    [ButtonVariation.light]: 'border-dark-100 hover:border-dark-200',
    [ButtonVariation.dark]: 'border-dark-800 hover:border-dark-900',
  },
  disabled: {
    [ButtonVariation.primary]: 'border-primary-400',
    [ButtonVariation.success]: 'border-success-400',
    [ButtonVariation.danger]: 'border-danger-400',
    [ButtonVariation.warning]: 'border-warning-400',
    [ButtonVariation.light]: 'border-dark-50',
    [ButtonVariation.dark]: 'border-dark-500',
  },
};
const outlineClassNames = {
  normal: {
    [ButtonVariation.primary]: 'text-primary-500 hover:bg-primary-600',
    [ButtonVariation.success]: 'text-success-500 hover:bg-success-600',
    [ButtonVariation.danger]: 'text-danger-500 hover:bg-danger-600',
    [ButtonVariation.warning]: 'text-warning-500 hover:bg-warning-600',
    [ButtonVariation.light]: 'text-dark-500 hover:bg-dark-200',
    [ButtonVariation.dark]: 'text-dark-800 hover:bg-dark-900',
  },
  disabled: {
    [ButtonVariation.primary]: 'text-primary-400',
    [ButtonVariation.success]: 'text-success-400',
    [ButtonVariation.danger]: 'text-danger-400',
    [ButtonVariation.warning]: 'text-warning-400',
    [ButtonVariation.light]: 'text-dark-50',
    [ButtonVariation.dark]: 'text-dark-500',
  },
};

export function Button({
  children,
  className = '',
  disabled,
  external = false,
  href,
  link = false,
  loading = false,
  onClick,
  outline = false,
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
    'px-4 py-2 text-xs rounded': size === ButtonSize.small,
    'px-6 py-3 text-sm rounded-md': size === ButtonSize.default,
    'px-10 py-4 text-base rounded-lg': size === ButtonSize.large,
  });
  const finalClassName = `
    ${classNames({
      'button transition': true,
      'text-white': !outline && variation !== ButtonVariation.light,
      'bg-transparent': outline,
      'hover:text-white':
        outline && !disabled && variation !== ButtonVariation.light,
      'cursor-not-allowed': disabled,
      'cursor-pointer hover:shadow-lg': !disabled,
    })}
    ${borderClassName}
    ${sizeClassName}
    ${outline ? outlineClassName : backgroundClassName}
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
