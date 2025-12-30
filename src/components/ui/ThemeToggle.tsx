import React from 'react';
import { useUiStore } from '../../app/store/ui.store';
import { Button } from './Button';
import { cn } from '../../lib/cn';

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M21 13.2A7.8 7.8 0 0 1 10.8 3 6.9 6.9 0 1 0 21 13.2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useUiStore((s) => s.theme);
  const toggleTheme = useUiStore((s) => s.toggleTheme);
  const isDark = theme === 'dark';

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      variant="toggle"
      size="theme"
      className={cn('h-10 w-auto p-0', 'rounded-full', 'inline-flex items-center justify-center', 'shrink-0', className)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className={cn('relative inline-flex items-center shrink-0', 'h-9 w-16 rounded-full', 'ring-1 ring-slate-900/10 dark:ring-white/15', 'bg-white/60 dark:bg-white/5 backdrop-blur', 'transition')} aria-hidden="true">
        <span className={cn('absolute inset-0 rounded-full transition-opacity duration-300', isDark ? 'opacity-100 bg-black' : 'opacity-100 bg-gradient-to-r from-orange-500 to-amber-400')} />

        <span
          className={cn(
            'relative z-10 grid h-8 w-8 place-items-center rounded-full',
            'bg-white text-slate-900',
            'shadow-[0_10px_24px_rgba(0,0,0,0.18)]',
            'transition-transform duration-300 ease-out',
            isDark ? 'translate-x-7' : 'translate-x-1'
          )}
        >
          {isDark ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
        </span>
      </span>
    </Button>
  );
}
