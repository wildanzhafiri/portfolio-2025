import * as React from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'theme' | 'unstyled' | 'toggle' | 'pill';

type ButtonSize = 'sm' | 'md' | 'lg' | 'theme';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type PolymorphicProps<T extends React.ElementType> = BaseProps & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseProps | 'as'>;

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'rounded-full font-semibold text-white ' + 'bg-gradient-to-r from-orange-500 to-amber-400 ' + 'shadow-[0_16px_34px_rgba(249,115,22,0.25)] hover:opacity-95 ' + 'focus-visible:ring-orange-400/45',

  outline: 'rounded-full font-semibold ' + 'text-slate-900 dark:text-white ' + 'border border-slate-900/12 dark:border-white/15 ' + 'glass hover:bg-white/70 dark:hover:bg-white/10 ' + 'focus-visible:ring-orange-400/35',

  ghost:
    'rounded-full font-semibold ' +
    'text-slate-800 dark:text-slate-100 ' +
    'border border-slate-900/10 dark:border-white/12 ' +
    'bg-white/80 dark:bg-slate-900/55 ' +
    'hover:bg-white dark:hover:bg-slate-900/70 ' +
    'shadow-[0_10px_24px_rgba(2,6,23,0.10)] ' +
    'backdrop-blur-none',

  theme:
    'rounded-full font-semibold ' +
    'text-slate-900 dark:text-white ' +
    'border border-slate-900/12 dark:border-white/15 ' +
    'glass shadow-sm active:scale-[0.98] ' +
    'hover:bg-white/70 dark:hover:bg-white/12 ' +
    'focus-visible:ring-orange-400/35',

  pill:
    'rounded-full font-semibold ' +
    'px-4 py-2 text-xs sm:text-sm ' +
    'border border-slate-900/10 dark:border-white/12 ' +
    'text-slate-800 dark:text-slate-100 ' +
    'bg-white/85 dark:bg-slate-900/55 ' +
    'shadow-[0_10px_26px_rgba(2,6,23,0.10)] ' +
    'hover:bg-white dark:hover:bg-slate-900/70 ' +
    'focus-visible:ring-orange-400/30 ' +
    'backdrop-blur-none',

  unstyled: 'rounded-none font-normal bg-transparent hover:bg-transparent',

  toggle: 'rounded-full bg-transparent ' + 'text-slate-800 dark:text-slate-100 ' + 'hover:bg-slate-900/6 dark:hover:bg-white/10 ' + 'shadow-none active:scale-[0.98] border-0 ' + 'focus-visible:ring-orange-400/25',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
  theme: 'px-0 py-2',
};

export function Button<T extends React.ElementType = 'button'>({ as, variant = 'primary', size = 'md', className, ...props }: PolymorphicProps<T>) {
  const Comp = (as ?? 'button') as React.ElementType;

  return (
    <Comp
      {...props}
      className={cn(
        'inline-flex items-center justify-center gap-2 cursor-pointer',
        'transition-[background-color,color,border-color,transform,box-shadow] duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'ring-offset-[rgb(var(--bg))]',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
    />
  );
}
