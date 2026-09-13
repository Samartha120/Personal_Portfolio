import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left'
}) => {
  return (
    <div className={cn('mb-10 md:mb-14', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400 mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
