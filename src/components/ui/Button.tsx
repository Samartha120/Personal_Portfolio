import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'left',
      className,
      as = 'button',
      href,
      target,
      rel,
      download,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99] border cursor-pointer';

    const variants = {
      primary:
        'bg-zinc-900 text-zinc-50 border-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 dark:hover:bg-zinc-200 shadow-sm',
      secondary:
        'bg-zinc-100 text-zinc-900 border-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-100 dark:border-zinc-700/60 dark:hover:bg-zinc-800',
      outline:
        'bg-transparent text-zinc-900 border-zinc-300 hover:bg-zinc-100 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800/50',
      ghost:
        'bg-transparent text-zinc-700 border-transparent hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/60',
      link:
        'bg-transparent text-blue-600 border-transparent underline-offset-4 hover:underline p-0 h-auto dark:text-blue-400'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
      md: 'text-sm px-4 py-2 rounded-md gap-2',
      lg: 'text-base px-5 py-2.5 rounded-lg gap-2.5'
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      variant !== 'link' && sizes[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    if (as === 'a' && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          download={download}
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
