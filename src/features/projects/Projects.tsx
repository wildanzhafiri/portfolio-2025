import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, type Variants } from 'framer-motion';
import { Section } from '../../components/layouts/Section';
import { Button } from '../../components/ui/Button';
import type { Project, ProjectTag } from './projects.types';
import { PROJECTS } from './projects.data';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const ALL = 'All' as const;
type Filter = typeof ALL | ProjectTag;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
  exit: { opacity: 0, y: 10, scale: 0.985, transition: { duration: 0.18 } },
};

export function Projects() {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [active, setActive] = useState<Project | null>(null);

  const tags = useMemo(() => {
    const s = new Set<ProjectTag>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const data = useMemo(() => {
    if (filter === ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(filter));
  }, [filter]);

  const activeIndex = useMemo(() => {
    const list: Filter[] = [ALL, ...tags];
    return list.findIndex((x) => x === filter);
  }, [filter, tags]);

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(249,115,22,0.22),transparent_52%),radial-gradient(circle_at_78%_22%,rgba(20,184,166,0.18),transparent_55%),radial-gradient(circle_at_55%_88%,rgba(56,189,248,0.14),transparent_60%)]" />
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }} className="relative">
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
            Recent{' '}
            <span className="relative inline-block">
              work
              <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-orange-400/25" />
            </span>{' '}
            on the web.
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-800 dark:text-slate-300 leading-relaxed">A few recent projects, built with a focus on simplicity and ease of use.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }} className="mt-7">
          <div
            className="
              relative inline-flex flex-wrap items-center gap-2
              rounded-2xl border border-slate-200/60 dark:border-white/10
              bg-white/60 dark:bg-white/5 backdrop-blur
              p-2
            "
          >
            <motion.div
              className="
                absolute inset-y-2 rounded-xl
                bg-gradient-to-r from-orange-500/15 via-amber-400/10 to-teal-400/15
                border border-orange-500/15 dark:border-orange-400/10
              "
              layout
              transition={{ type: 'spring', stiffness: 520, damping: 38 }}
              style={{
                left: `calc(${activeIndex} * (var(--pill-w) + 8px) + 8px)`,
                width: 'var(--pill-w)',
              }}
            />

            <div className="[--pill-w:92px] flex flex-wrap gap-2 relative z-10 ">
              <Button
                type="button"
                size="sm"
                variant={filter === ALL ? 'primary' : 'ghost'}
                className={filter === ALL ? 'text-white !shadow-[0_14px_34px_rgba(249,115,22,0.22)] w-[var(--pill-w)]' : 'w-[var(--pill-w)]'}
                onClick={() => setFilter(ALL)}
              >
                All
              </Button>

              {tags.map((t) => (
                <Button
                  key={t}
                  type="button"
                  size="sm"
                  variant={filter === t ? 'primary' : 'pill'}
                  className={['min-w-[88px] px-3', filter === t && 'text-white !shadow-[0_14px_34px_rgba(249,115,22,0.22)]'].filter(Boolean).join(' ')}
                  onClick={() => setFilter(t)}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <LayoutGroup>
        <motion.div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <AnimatePresence mode="popLayout">
            {data.map((p) => (
              <motion.div key={p.id} layout variants={item} initial="hidden" animate="show" exit="exit">
                <ProjectCard project={p} onOpen={() => setActive(p)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
