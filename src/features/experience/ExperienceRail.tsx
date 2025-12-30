import React, { useMemo } from 'react';
import { Reveal } from '../../components/ui/Reveal';
import { EXPERIENCE_DATA } from './experience.data';
import type { StoryItem } from './experience.types';

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

function Dot() {
  return (
    <span className="relative mt-1.5 flex h-3 w-3 items-center justify-center">
      <span className="absolute inline-flex h-3 w-3 rounded-full bg-orange-400/85 ring-2 ring-white dark:ring-slate-950" />
      <span className="absolute inline-flex h-8 w-8 rounded-full bg-orange-400/15 blur-[2px]" />
    </span>
  );
}

function EvidenceHeroPhoto({ title, photo }: { title: string; photo: { src: string; alt?: string; orientation?: 'landscape' | 'portrait' } }) {
  const isPortrait = photo.orientation === 'portrait';

  return (
    <button
      type="button"
      className={`
        group relative overflow-hidden rounded-2xl
        border border-slate-200/70 dark:border-white/10
        bg-white/60 dark:bg-white/[0.03]
        ring-1 ring-black/5 dark:ring-white/5
        shadow-[0_12px_34px_-22px_rgba(0,0,0,0.55)]
        transition duration-300
        hover:-translate-y-[1px] hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.75)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50

        /* RESPONSIVE SIZE */
        w-full sm:w-[200px] md:w-[220px] lg:w-[240px]
        ${isPortrait ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-[16/10]'}
        shrink-0
      `}
      onClick={() => window.open(photo.src, '_blank', 'noopener,noreferrer')}
      aria-label={`Open documentation for ${title}`}
      title="Open photo"
    >
      <img src={photo.src} alt={photo.alt ?? title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.22),transparent_55%)] opacity-80" />

      <div className="absolute bottom-2 left-2 flex items-center gap-2">
        <span className="rounded-full bg-black/35 text-white text-[10px] px-2.5 py-1 backdrop-blur border border-white/10">Photo</span>
        <span className="rounded-full bg-white/10 text-white text-[10px] px-2.5 py-1 backdrop-blur border border-white/10">Open</span>
      </div>
    </button>
  );
}

function HighlightPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-start gap-2
        rounded-xl
        border border-slate-200/70 dark:border-white/10
        bg-white/55 dark:bg-white/[0.03]
        px-3 py-2
        text-[13px] leading-snug
        text-slate-700 dark:text-slate-200
      "
    >
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400/80" />
      <span className="min-w-0">{children}</span>
    </span>
  );
}

function ExperienceCard({ it }: { it: StoryItem }) {
  return (
    <div
      className="
        relative overflow-hidden rounded-[22px]
        border border-slate-200/70 dark:border-white/10
        bg-white/55 dark:bg-white/[0.035]
        backdrop-blur-xl
        ring-1 ring-black/5 dark:ring-white/5
        shadow-[0_16px_55px_-38px_rgba(0,0,0,0.55)]
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none absolute -right-16 -top-16 h-48 w-48 rotate-12
          bg-gradient-to-br from-orange-400/25 via-amber-200/10 to-transparent
          blur-2xl
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 top-0 h-[2px]
          bg-gradient-to-r from-orange-400/70 via-amber-200/40 to-transparent
        "
      />

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[15px] sm:text-base font-semibold tracking-tight text-slate-900 dark:text-white">{it.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{it.context}</p>
          </div>

          <div className="flex items-center gap-2">
            <Chip>{it.label}</Chip>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
          {it.photo ? <EvidenceHeroPhoto title={it.title} photo={it.photo} /> : null}

          <div className="min-w-0 flex-1">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{it.story}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {it.highlights.map((h) => (
                <HighlightPill key={h}>{h}</HighlightPill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceRail() {
  const items = useMemo(() => EXPERIENCE_DATA, []);

  return (
    <div
      className="
        relative
        [--rail-w:56px] sm:[--rail-w:64px]
        [--rail-x:28px] sm:[--rail-x:32px]
        [--meta-w:260px] lg:[--meta-w:300px]
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none absolute top-0 bottom-0 w-px
          left-[var(--rail-x)]
          bg-gradient-to-b from-transparent via-orange-400/55 to-transparent
          dark:via-orange-300/25
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute top-0 bottom-0 w-[10px]
          left-[var(--rail-x)]
          -translate-x-1/2
          bg-orange-400/15 blur-[10px]
        "
      />

      <div className="space-y-8">
        {items.map((it, idx) => (
          <Reveal key={`${it.year}-${it.title}`} delay={idx * 0.05}>
            <div className="grid grid-cols-[var(--rail-w)_minmax(0,1fr)] ">
              <div className="relative">
                <div className="absolute left-1/2 top-3 -translate-x-1/2">
                  <Dot />
                </div>
              </div>

              <div className="min-w-0">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[var(--meta-w)_minmax(0,1fr)]">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{it.year}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">•</span>
                      <span className="text-sm text-slate-600 dark:text-slate-300 truncate">{it.label}</span>
                    </div>

                    {it.context ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 truncate">{it.context}</p> : null}
                  </div>

                  <div className="min-w-0">
                    <div className="w-full md:max-w-[760px]">
                      <ExperienceCard it={it} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
