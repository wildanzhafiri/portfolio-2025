import { Section } from '../../components/layouts/Section';
import { motion, type Variants } from 'framer-motion';

const ITEMS = [
  {
    title: 'Team collaboration',
    desc: 'I work closely with others, share progress clearly, and keep tasks moving under deadlines.',
    badge: 'Collab',
    tone: 'orange',
    icon: (
      <svg viewBox="0 0 48 48" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M16 20h-6v-6H6v6H0v4h6v6h4v-6h6v-4zm20 2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-.64 0-1.25.1-1.83.29 1.13 1.62 1.81 3.59 1.81 5.71s-.68 4.09-1.81 5.71c.58.19 1.19.29 1.83.29zm-10 0c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm13.24 4.32C40.9 27.77 42 29.64 42 32v4h6v-4c0-3.08-4.75-4.97-8.76-5.68zM26 26c-4 0-12 2-12 6v4h24v-4c0-4-8-6-12-6z" />
      </svg>
    ),
  },

  {
    title: 'Usability first',
    desc: 'I focus on making features easy to understand and comfortable to use.',
    badge: 'Experience',
    tone: 'amber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3v4" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5.5 6.5 8.3 9.3M18.5 6.5l-2.8 2.8" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 13a5 5 0 1 1 10 0c0 2.1-1.2 3.2-2.3 4.1-.7.6-1.2 1.1-1.2 1.9v.5H10.5V19c0-.8-.5-1.3-1.2-1.9C8.2 16.2 7 15.1 7 13Z" className="stroke-current" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 21h4" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Learning by doing',
    desc: 'I grow my skills by building projects and iterating on real problems.',
    badge: 'Learning',
    tone: 'rose',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M6 4h9a3 3 0 0 1 3 3v12a1 1 0 0 1-1.4.9L14 19H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" className="stroke-current" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 9h6M8 12h6" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 15.5l1.3 1.3L12 14" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

const TONE = {
  orange: {
    badge: 'bg-orange-500/10 text-orange-700 ring-orange-500/20 dark:bg-orange-400/10 dark:text-orange-300 dark:ring-orange-400/20',
    icon: 'text-orange-700 ring-orange-500/15 bg-orange-500/10 dark:text-orange-300 dark:ring-orange-400/20 dark:bg-orange-400/10',
    hover: 'hover:border-orange-200 dark:hover:border-orange-400/20',
    stripe: 'bg-orange-500/70',
    glow: 'from-orange-500/18 to-amber-400/10',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-800 ring-amber-500/20 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/20',
    icon: 'text-amber-800 ring-amber-500/15 bg-amber-500/10 dark:text-amber-200 dark:ring-amber-400/20 dark:bg-amber-400/10',
    hover: 'hover:border-amber-200 dark:hover:border-amber-400/20',
    stripe: 'bg-amber-500/70',
    glow: 'from-amber-500/18 to-orange-400/10',
  },
  rose: {
    badge: 'bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-200 dark:ring-rose-400/20',
    icon: 'text-rose-700 ring-rose-500/15 bg-rose-500/10 dark:text-rose-200 dark:ring-rose-400/20 dark:bg-rose-400/10',
    hover: 'hover:border-rose-200 dark:hover:border-rose-400/20',
    stripe: 'bg-rose-500/70',
    glow: 'from-rose-500/16 to-orange-400/10',
  },
} as const;

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.08,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
};

export function Highlights() {
  return (
    <Section id="highlights" title="What I do" subtitle="What I usually do when building frontend.">
      <div className="relative">
        <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-12 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.25]
          [background-image:linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)]
          [background-size:48px_48px]
          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        "
        />

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25, margin: '0px 0px -10% 0px' }} className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {ITEMS.map((it) => {
            const tone = TONE[it.tone];

            return (
              <motion.div key={it.title} variants={card} className="h-full">
                <div
                  className={[
                    'group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm',
                    'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                    'dark:border-white/10 dark:bg-slate-950/60',
                    tone.hover,
                  ].join(' ')}
                >
                  <div className={['pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl opacity-0', 'transition-opacity duration-300 group-hover:opacity-100', `bg-gradient-to-br ${tone.glow}`].join(' ')} />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-900/10 to-transparent dark:via-white/10" />

                  <div className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-90 ${tone.stripe}`} />

                  <span className={['absolute right-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1', tone.badge].join(' ')}>{it.badge}</span>

                  <div className="flex h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div className={['grid h-12 w-12 shrink-0 place-items-center rounded-full ring-1', tone.icon].join(' ')}>{it.icon}</div>

                      <div className="min-w-0 pr-10">
                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">{it.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/75">{it.desc}</p>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
