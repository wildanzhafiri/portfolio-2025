import { cn } from '../../lib/cn';

export function Shimmer({ className }: { className?: string }) {
  return (
    <div className={cn('h-full w-full overflow-hidden bg-slate-200/70 dark:bg-white/10', className)}>
      <div className="h-full w-full animate-[shimmer_1.2s_infinite] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.55),transparent)] opacity-40" />
    </div>
  );
}
