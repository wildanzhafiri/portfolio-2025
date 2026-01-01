import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/cn';
import type { Project } from './projects.types';
import { PreviewFrame, type GalleryItem } from './PreviewFrame';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProjectPreviewModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const open = !!project;

  const [isProjectLoading, setIsProjectLoading] = useState(true);
  const [active, setActive] = useState(0);

  const gallery = useMemo<GalleryItem[]>(() => {
    if (!project) return [];
    const raw = (project.gallery ?? []).filter(Boolean) as any[];
    const normalized: GalleryItem[] = raw.map((it) => (typeof it === 'string' ? { src: it } : it)).filter((x) => x?.src);
    if (normalized.length) return normalized;
    return project.image ? [{ src: project.image }] : [];
  }, [project]);

  const total = gallery.length;
  const current = gallery[active];

  const prev = () => {
    if (total <= 1) return;
    setActive((v) => (v - 1 + total) % total);
  };

  const next = () => {
    if (total <= 1) return;
    setActive((v) => (v + 1) % total);
  };

  useEffect(() => {
    if (!open) return;
    setIsProjectLoading(true);
    setActive(0);
    const t = window.setTimeout(() => setIsProjectLoading(false), 220);
    return () => window.clearTimeout(t);
  }, [open, project?.id]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, total]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[90]">
          <motion.button
            type="button"
            aria-label="Close preview"
            className="absolute inset-0 bg-black/55"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, transition: { duration: 0.16 } }}
          />

          <div className="relative z-[91] flex min-h-[100svh] items-center justify-center p-3 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              className="
                relative
                w-[min(1000px,94vw)]
                max-h-[calc(100svh-1.5rem)] sm:max-h-[calc(100svh-3rem)]
                overflow-hidden rounded-[28px]
                border border-white/12
                bg-white/95 dark:bg-slate-950/92
                shadow-[0_40px_140px_rgba(0,0,0,0.40)]
              "
              initial={{ opacity: 0, y: 16, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: easeOut } }}
              exit={{ opacity: 0, y: 14, scale: 0.99, transition: { duration: 0.18, ease: easeOut } }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-400" />

              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="
                  absolute z-20
                  right-3 top-3 sm:right-4 sm:top-4
                  h-10 w-10
                  rounded-full
                  bg-white/90 dark:bg-slate-950/70
                  text-slate-900 dark:text-white
                  border border-slate-200/70 dark:border-white/12
                  shadow-[0_18px_60px_rgba(0,0,0,0.25)]
                  backdrop-blur
                  grid place-items-center
                  hover:bg-white dark:hover:bg-slate-950
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60
                "
              >
                <span className="text-xl leading-none">✕</span>
              </button>

              <div className="max-h-[calc(100svh-1.5rem)] sm:max-h-[calc(100svh-3rem)] overflow-y-auto">
                <div className="flex flex-col gap-4 p-6 pr-16 sm:pr-20">
                  <div className="min-w-0">
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500 dark:text-slate-300">Project Details</p>

                    {isProjectLoading ? (
                      <div className="mt-2 space-y-2">
                        <Skeleton className="h-7 w-[min(520px,72vw)]" />
                        <Skeleton className="h-4 w-[min(360px,58vw)]" />
                      </div>
                    ) : (
                      <>
                        <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white line-clamp-2">{project?.title}</h3>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-slate-700 dark:text-slate-200">{project?.role}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 px-6 pb-6 pt-0 lg:grid-cols-[1.35fr_0.65fr]">
                  <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      {!isProjectLoading && total > 0 && current ? (
                        <motion.div key={`${project?.id}-${active}`} initial={{ opacity: 0, scale: 1.01 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.22, ease: easeOut } }} className="absolute inset-0">
                          <PreviewFrame src={current.src} alt={`${project?.title ?? 'Project'} screen ${active + 1}`} />
                        </motion.div>
                      ) : (
                        <div className="absolute inset-0">
                          <div className="h-full w-full animate-pulse bg-slate-200/70 dark:bg-white/10" />
                        </div>
                      )}

                      {!isProjectLoading && total > 1 ? (
                        <>
                          <button
                            type="button"
                            aria-label="Previous"
                            onClick={prev}
                            className="
                              absolute left-3 top-1/2 -translate-y-1/2
                              h-11 w-11
                              rounded-full
                              bg-white/85 dark:bg-slate-950/55
                              text-slate-900 dark:text-white
                              border border-white/60 dark:border-white/12
                              shadow-[0_18px_50px_rgba(0,0,0,0.22)]
                              backdrop-blur
                              grid place-items-center
                              transition
                              hover:scale-[1.03] hover:bg-white dark:hover:bg-slate-950/70
                              active:scale-[0.98]
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60
                            "
                          >
                            <span className="text-xl leading-none">‹</span>
                          </button>

                          <button
                            type="button"
                            aria-label="Next"
                            onClick={next}
                            className="
                              absolute right-3 top-1/2 -translate-y-1/2
                              h-11 w-11
                              rounded-full
                              bg-white/85 dark:bg-slate-950/55
                              text-slate-900 dark:text-white
                              border border-white/60 dark:border-white/12
                              shadow-[0_18px_50px_rgba(0,0,0,0.22)]
                              backdrop-blur
                              grid place-items-center
                              transition
                              hover:scale-[1.03] hover:bg-white dark:hover:bg-slate-950/70
                              active:scale-[0.98]
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60
                            "
                          >
                            <span className="text-xl leading-none">›</span>
                          </button>
                        </>
                      ) : null}

                      {!isProjectLoading && total > 0 ? (
                        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur border border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-400/90" />
                          <span className="tabular-nums font-medium">
                            {active + 1} / {total}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    {!isProjectLoading && (project?.links.github || project?.links.live) ? (
                      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-start">
                        {project?.links.github ? (
                          <Button as="a" href={project.links.github} target="_blank" rel="noreferrer" size="sm" className="w-full sm:w-auto justify-center">
                            GitHub
                          </Button>
                        ) : null}

                        {project?.links.live ? (
                          <Button as="a" href={project.links.live} target="_blank" rel="noreferrer" size="sm" className="w-full sm:w-auto justify-center">
                            Live
                          </Button>
                        ) : null}
                      </div>
                    ) : null}

                    {!isProjectLoading && total > 1 ? (
                      <div className="mt-3 flex items-center justify-center gap-2">
                        {Array.from({ length: total }).map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setActive(i)}
                            className={cn(
                              'h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50',
                              i === active ? 'w-7 bg-orange-500 shadow-[0_10px_26px_rgba(249,115,22,0.35)]' : 'w-2.5 bg-slate-300 dark:bg-white/18 hover:bg-slate-400 dark:hover:bg-white/26'
                            )}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-3 h-2" />
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
                      <p className="text-xs tracking-[0.18em] uppercase text-slate-500 dark:text-slate-300">About</p>
                      {isProjectLoading ? (
                        <div className="mt-4 space-y-2">
                          <Skeleton className="h-4 w-[94%]" />
                          <Skeleton className="h-4 w-[88%]" />
                          <Skeleton className="h-4 w-[82%]" />
                        </div>
                      ) : (
                        <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{project?.description}</p>
                      )}
                    </div>

                    <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
                      <p className="text-xs tracking-[0.18em] uppercase text-slate-500 dark:text-slate-300">Highlights</p>
                      {isProjectLoading ? (
                        <div className="mt-4 space-y-2">
                          <Skeleton className="h-4 w-[92%]" />
                          <Skeleton className="h-4 w-[86%]" />
                          <Skeleton className="h-4 w-[78%]" />
                          <Skeleton className="h-4 w-[84%]" />
                        </div>
                      ) : (
                        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                          {(project?.highlights ?? []).slice(0, 6).map((h) => (
                            <li key={h} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500/80 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
                      <p className="text-xs tracking-[0.18em] uppercase text-slate-500 dark:text-slate-300">Tech</p>
                      {isProjectLoading ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-7 w-20 rounded-full" />
                          ))}
                        </div>
                      ) : (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(project?.tags ?? []).map((t) => (
                            <span key={t} className="rounded-full border border-orange-200/70 dark:border-orange-400/20 bg-orange-50/80 dark:bg-orange-400/10 px-3 py-1 text-[11px] font-semibold text-orange-700 dark:text-orange-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-xl bg-slate-200/80 dark:bg-white/10', className)} />;
}
