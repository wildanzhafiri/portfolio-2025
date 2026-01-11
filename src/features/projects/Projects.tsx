import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, type Variants } from 'framer-motion';
import { Section } from '../../components/layouts/Section';
import { Button } from '../../components/ui/Button';
import type { Project } from './projects.types';
import { PROJECTS } from './projects.data';
import { ProjectCard } from './ProjectCard';
import { ProjectPreviewModal } from './ProjectPreviewModal';
import { ProjectReveal } from '../../components/ui/ProjectReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PAGE_SIZE = 6;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const pageSlideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export function Projects() {
  const [preview, setPreview] = useState<Project | null>(null);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const gridTopRef = useRef<HTMLDivElement | null>(null);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(PROJECTS.length / PAGE_SIZE));
  }, []);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return PROJECTS.slice(start, start + PAGE_SIZE);
  }, [page]);

  const shouldScrollRef = useRef(false);

  const goToPage = (next: number) => {
    if (next === page) return;
    shouldScrollRef.current = true;
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

  useEffect(() => {
    if (!shouldScrollRef.current) return;
    shouldScrollRef.current = false;
    gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  return (
    <Section id="projects" title="" subtitle="">
      <div className="relative">
        <div
          className="
            pointer-events-none absolute -inset-x-6 -top-10 -bottom-6
            opacity-[0.55] dark:opacity-[0.35]
            [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]
          "
        >
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_18%_25%,rgba(249,115,22,0.22),transparent_52%),
                  radial-gradient(circle_at_82%_20%,rgba(251,191,36,0.16),transparent_56%),
                  radial-gradient(circle_at_58%_86%,rgba(249,115,22,0.12),transparent_62%)]
            "
          />
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }} className="relative">
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight leading-[1.05]">
            Recent{' '}
            <span className="relative inline-block">
              work
              <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-orange-400/25" />
            </span>{' '}
            on the web.
          </h2>

          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800 dark:text-slate-300 leading-relaxed">Here are some recent projects I’ve worked on, where I gained valuable experience along the way</p>
        </motion.div>
      </div>

      <div ref={gridTopRef} className="h-px w-full" />

      <LayoutGroup>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div key={page} custom={direction} variants={pageSlideVariants} initial="enter" animate="center" exit="exit">
            <motion.div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={container} initial="hidden" animate="show">
              <AnimatePresence mode="popLayout">
                {paginatedData.map((p, i) => (
                  <ProjectReveal key={p.id} index={i}>
                    <ProjectCard project={p} onOpenDetail={() => setPreview(p)} />
                  </ProjectReveal>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center">
          <div
            className="
        inline-flex items-center gap-1.5
        rounded-full
        border border-slate-200/70 dark:border-white/10
        bg-white/70 dark:bg-white/5 backdrop-blur
        px-2 py-1.5
        shadow-[0_12px_30px_rgba(2,6,23,0.08)]
        dark:shadow-[0_18px_44px_rgba(0,0,0,0.35)]
      "
          >
            <Button size="sm" variant="ghost" disabled={page === 1} className="rounded-full w-9 h-9 p-0" onClick={() => goToPage(page - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <Button
                  key={p}
                  size="sm"
                  variant={active ? 'primary' : 'ghost'}
                  className={['rounded-full w-9 h-9 p-0', active && 'text-white !shadow-[0_10px_28px_rgba(249,115,22,0.25)]'].filter(Boolean).join(' ')}
                  onClick={() => goToPage(p)}
                >
                  {p}
                </Button>
              );
            })}

            <Button size="sm" variant="ghost" disabled={page === totalPages} className="rounded-full w-9 h-9 p-0" onClick={() => goToPage(page + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <ProjectPreviewModal project={preview} onClose={() => setPreview(null)} />
    </Section>
  );
}
