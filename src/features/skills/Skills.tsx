import * as React from 'react';
import { Section } from '../../components/layouts/Section';
import { Reveal } from '../../components/ui/Reveal';

const TECH_ROWS = [
  { label: 'Main', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Data / API', items: ['REST APIs', 'GraphQL', 'Firebase'] },
  { label: 'Tooling', items: ['Git (GitHub)', 'Postman', 'Figma'] },
  { label: 'Also used', items: ['Laravel', 'Express.js', 'Framer Motion', 'Midtrans'] },
] as const;

const SOFT_SKILLS = ['Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Continuous Learning'] as const;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
       inline-flex items-center rounded-full
        border border-slate-200/70 dark:border-white/18
        bg-white/75 dark:bg-white/14
        px-3 py-1 text-xs font-medium
        text-slate-700 dark:text-white/90
        shadow-[0_10px_22px_rgba(2,6,23,0.06)]
        dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)]
        ring-1 ring-inset ring-white/50 dark:ring-white/10
        no-ios-blur
      "
    >
      {children}
    </span>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="What I use and what I value in everyday work.">
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl ios-glass shadow-sm">
            <div
              aria-hidden
              className="
                pointer-events-none absolute -top-44 -right-44 h-[520px] w-[520px] rounded-full
                bg-[radial-gradient(circle,rgba(251,146,60,0.16),transparent_60%)] blur-3xl opacity-80
              "
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/60 dark:ring-white/10" />

            <div className="relative p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/75 dark:bg-white/[0.06] px-3 py-1 text-[11px] font-medium tracking-[0.14em] uppercase text-slate-600 dark:text-slate-200 no-ios-blur">
                    Tech stack
                  </div>
                  <h3 className="mt-4 text-lg sm:text-xl font-medium tracking-tight text-slate-900 dark:text-white">Tools I’ve worked with</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Grouped by how I usually apply them in projects.</p>
                </div>

                <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] text-slate-700 dark:text-slate-100 no-ios-blur">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M9 6H6v12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M15 6h3v12h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200/80 to-transparent dark:via-white/10" />

              <div className="mt-6 space-y-5">
                {TECH_ROWS.map((row) => (
                  <div key={row.label} className="grid gap-3 sm:grid-cols-12 sm:items-start">
                    <div className="sm:col-span-3">
                      <p className="text-xs font-medium tracking-[0.12em] uppercase text-slate-500 dark:text-slate-300">{row.label}</p>
                    </div>

                    <div className="sm:col-span-9">
                      <div className="flex flex-wrap gap-2">
                        {row.items.map((it) => (
                          <Chip key={it}>{it}</Chip>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-12 h-px w-full bg-slate-200/70 dark:bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-4">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl ios-glass p-6 shadow-sm">
            <div
              aria-hidden
              className="
                pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full
                bg-[radial-gradient(circle,rgba(251,146,60,0.12),transparent_60%)] blur-3xl opacity-70
              "
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/60 dark:ring-white/10" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/75 dark:bg-white/[0.06] px-3 py-1 text-[11px] font-medium tracking-[0.14em] uppercase text-slate-600 dark:text-slate-200 no-ios-blur">
                Soft skills
                <span className="h-1 w-1 rounded-full bg-orange-400/80" />
              </div>

              <h3 className="mt-4 text-base sm:text-lg font-medium tracking-tight text-slate-900 dark:text-white">How I like to work</h3>

              <div className="mt-5 space-y-3">
                {SOFT_SKILLS.map((s) => (
                  <div
                    key={s}
                    className="
                      flex items-center justify-between rounded-2xl border
                      border-slate-200/70 dark:border-white/12
                      bg-white/80 dark:bg-slate-900/45
                      px-4 py-3
                      no-ios-blur
                    "
                  >
                    <span className="text-sm text-slate-700 dark:text-slate-100">{s}</span>
                    <span className="h-2 w-2 rounded-full bg-orange-400/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
