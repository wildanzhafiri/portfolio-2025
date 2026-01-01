import { cn } from '../../lib/cn';
import { Container } from './Container';

export function Section({ id, title, subtitle, children, className }: { id: string; title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn(' relative my-10 sm:my-20', className)}>
      <Container>
        <div className="mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight leading-[1.05]">{title}</h2>
          {subtitle ? <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
