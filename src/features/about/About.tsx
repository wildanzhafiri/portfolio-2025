import { Section } from '../../components/layouts/Section';
import { Reveal } from '../../components/ui/Reveal';

export function About() {
  return (
    <Section id="about" title="About" subtitle="A short introduction, shaped by experience.">
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl p-7 shadow-sm">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.28),transparent_60%)] blur-2xl transition-opacity duration-300 group-hover:opacity-90 dark:bg-[radial-gradient(circle,rgba(251,146,60,0.18),transparent_60%)]"
            />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.18),transparent_60%)] blur-3xl opacity-80 dark:opacity-60" />

            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60 dark:ring-white/10" />

            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-[0.14em] uppercase text-slate-600 dark:text-slate-300">
                  About
                  <span className="h-1 w-1 rounded-full bg-orange-400/80" />
                  Wildan
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-white">A bit of context</h3>
              </div>

              <div className="hidden sm:block h-10 w-10 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur">
                <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.35),transparent_60%)]" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                I’m a third-year Information Technology student at Universitas Brawijaya with an interest in front-end development. I enjoy working on the visual side of the web and turning ideas into things people can actually use. I’m
                used to collaborating on projects with people in different roles, sharing ideas, and working together toward a common goal.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Through academic projects, organizational work, and teaching experiences, I’ve learned how to think through problems, adapt to feedback, and shape ideas into things that are genuinely useful.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl p-6 shadow-sm">
            <div aria-hidden className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.20),transparent_60%)] blur-2xl opacity-70 dark:opacity-50" />
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60 dark:ring-white/10" />

            <div className="flex items-start justify-between">
              <div>
                <h3 className="mt-2 text-base font-medium tracking-tight text-slate-900 dark:text-white">What I’m growing through</h3>
              </div>

              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] text-slate-700 dark:text-slate-200">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2l1.2 4.2L17.4 7.4l-4.2 1.2L12 12.8l-1.2-4.2L6.6 7.4l4.2-1.2L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M19 13l.8 2.6 2.6.8-2.6.8L19 20l-.8-2.6-2.6-.8 2.6-.8L19 13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity=".9" />
                </svg>
              </span>
            </div>

            <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-slate-200/80 to-transparent dark:via-white/10" />

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {['Still learning front-end best practices through real projects', 'Getting better at collaborating and communicating in team environments', 'Teaching and mentoring help me deepen my understanding of core concepts'].map(
                (item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400/80" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
