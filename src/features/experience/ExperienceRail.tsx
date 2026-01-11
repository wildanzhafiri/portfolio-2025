import React, { useMemo } from 'react';
import { Reveal } from '../../components/ui/Reveal';
import { EXPERIENCE_DATA } from './experience.data';
import type { StoryItem } from './experience.types';
import { ImageWithSkeleton } from '../../components/ui/ImageWithSkeleton';

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
    <span className="relative mt-1.5 flex h-4 w-4 items-center justify-center">
      <span className="absolute h-4 w-4 rounded-full border border-orange-400/55 dark:border-orange-300/35" />

      <span className="absolute h-8 w-8 rounded-full bg-orange-400/12 blur-[10px]" />
      <span className="absolute h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_0_4px_rgba(255,255,255,0.85)] dark:shadow-[0_0_0_4px_rgba(2,6,23,0.85)]" />
    </span>
  );
}

function HighlightPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        rounded-lg
        border border-slate-200/80 dark:border-white/10
        bg-white/90 backdrop-blur-md
dark:bg-[#0B1220]/85

        px-3 py-2
        text-[13px] leading-snug
        text-slate-700 dark:text-slate-200
        shadow-[0_10px_24px_rgba(2,6,23,0.06)]
        dark:shadow-[0_18px_44px_rgba(0,0,0,0.30)]
        ring-1 ring-inset ring-black/5 dark:ring-white/6
        transition
        hover:border-slate-300/80 hover:-translate-y-[1px]
        dark:hover:border-white/14
        select-none
      "
    >
      <span className="h-4 w-[3px] rounded-full bg-gradient-to-b from-orange-400/90 via-amber-300/80 to-orange-400/30" />
      <span className="min-w-0">{children}</span>
    </span>
  );
}

function EvidenceHeroPhoto({ title, photo }: { title: string; photo: { src: string; alt?: string; orientation?: 'landscape' | 'portrait' } }) {
  return (
    <button
      type="button"
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-slate-200/80 dark:border-white/10
        bg-white dark:bg-slate-950
        shadow-[0_10px_28px_rgba(2,6,23,0.10)]
        dark:shadow-[0_18px_55px_rgba(0,0,0,0.35)]
        transition-transform duration-300
        hover:-translate-y-[1px]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40
        w-full sm:w-[220px] md:w-[240px]
        aspect-[16/11]
        shrink-0
      "
      onClick={() => window.open(photo.src, '_blank', 'noopener,noreferrer')}
      aria-label={`Open documentation for ${title}`}
      title="Open photo"
    >
      <ImageWithSkeleton
        src={photo.src}
        alt={photo.alt ?? title}
        loading="lazy"
        className="absolute inset-0 h-full w-full"
        shimmerClassName="absolute inset-0 h-full w-full"
        imgClassName="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.20),transparent_55%)]" />

      <div className="absolute bottom-2 left-2">
        <span className="rounded-full bg-black/45 text-white text-[10px] px-2.5 py-1 border border-white/10">Open</span>
      </div>
    </button>
  );
}

function ExperienceCard({ it }: { it: StoryItem }) {
  return (
    <article
      className="
        relative overflow-hidden
        rounded-[22px]
        border border-slate-200/80 dark:border-white/10
         bg-white/80 dark:bg-white/5 backdrop-blur
        transition
        hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(249,115,22,0.18)]
        ring-1 ring-black/5 dark:ring-white/5
        shadow-[0_14px_42px_rgba(2,6,23,0.10)]
        dark:shadow-[0_22px_70px_rgba(0,0,0,0.35)]
      "
    >
      <div className="relative p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400">{it.year}</p>
            <h3 className="mt-1 text-[16px] sm:text-[17px] font-semibold tracking-tight text-slate-900 dark:text-white">{it.title}</h3>
            {it.context ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{it.context}</p> : null}
          </div>

          <Chip>{it.label}</Chip>
        </div>

        <div className="mt-4 h-px w-full bg-slate-200/70 dark:bg-white/10" />

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[240px_minmax(0,1fr)]">
          {it.photo ? <EvidenceHeroPhoto title={it.title} photo={it.photo} /> : null}

          <div className="min-w-0">
            <p className="text-sm text-justify leading-relaxed text-slate-700 dark:text-slate-200">{it.story}</p>

            {it.highlights?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {it.highlights.map((h) => (
                  <HighlightPill key={h}>{h}</HighlightPill>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
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
                    <div className="w-full md:max-w-[700px]">
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
