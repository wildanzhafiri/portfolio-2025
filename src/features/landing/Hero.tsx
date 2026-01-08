import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/layouts/Container';
import { Reveal } from '../../components/ui/Reveal';
import { useParallax } from '../../lib/scroll';
import { Button } from '../../components/ui/Button';
import { IconBriefcase, IconMessage, IconGithub, IconDownload } from '../../components/icons/HeroIcons';
// import IconGithub from '../../assets/icons/github.png';

const STATS = [
  { k: 'Projects', v: '12+' },
  { k: 'Experience', v: '2+ years' },
  { k: 'Collabs', v: '8+' },
] as const;

const ease = [0.7, 2, 0.2, 5] as const;

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  useParallax(orbRef, 0.65, {
    smooth: 0.09,
    rotate: 2.2,
    distance: 140,
    scale: 0.035,
    tiltX: 2.0,
    tiltY: 3.5,
    blur: 0,
    perspective: 1000,
  });

  return (
    <section
      id="home"
      className="
        relative overflow-hidden scroll-mt-24
        min-h-[calc(100svh-84px)]
        flex items-center
        pt-10 sm:pt-12
      "
    >
      <Container className="relative w-full">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6, ease }} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-slate-600 dark:text-slate-300">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 opacity-80" aria-hidden="true">
                  <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" className="stroke-current" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M12 11.2a2.2 2.2 0 1 0 0-4.4a2.2 2.2 0 0 0 0 4.4Z" className="stroke-current" strokeWidth="1.8" />
                </svg>

                <span>
                  Based in <span className="font-semibold text-slate-900 dark:text-white">Malang, East Java, Indonesia</span>
                </span>
              </span>
            </motion.div>

            <Reveal delay={0.05}>
              <h1 className="mt-8 text-balance font-display text-4xl sm:text-5xl xl:text-[53px] font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">
                Hi, I&apos;m <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent dark:bg-none dark:text-white">Wildan</span>.
                <span className="block mt-2 text-slate-800 dark:text-white/90">
                  I turn ideas into{' '}
                  <span className="relative inline-block ">
                    digital experiences
                    <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-orange-400/25" />
                  </span>{' '}
                  on the web.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg text-justify">
                I’m a front-end web developer who enjoys building web interfaces and growing through real-world projects. I’m used to collaborating on projects and turning shared ideas into reliable web solutions.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="#projects" variant="primary" className="gap-2">
                  <IconBriefcase className="shrink-0 opacity-90" />
                  View Work
                </Button>

                <Button as="a" href="#contact" variant="outline" className="gap-2">
                  <IconMessage className="shrink-0 opacity-90" />
                  Let&apos;s Talk
                </Button>

                <Button as="a" href="https://github.com/wildanzhafiri" variant="outline" className="inline-flex items-center gap-2">
                  <IconGithub className="h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0" aria-hidden />
                  <span className="leading-none">GitHub</span>
                </Button>

                <Button as="a" href={`${import.meta.env.BASE_URL}resume/CV_Muhammad_Wildan_Zhafiri_2025.pdf`} download variant="outline" className="gap-2">
                  <IconDownload className="shrink-0 opacity-90" />
                  Download CV
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {STATS.map((s) => (
                  <div key={s.k} className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{s.v}</p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">{s.k}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <a
                  className="rounded-full px-4 py-2 transition border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:bg-white/90 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40"
                  href="https://github.com/wildanzhafiri"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full px-4 py-2 transition border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:bg-white/90 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40"
                  href="https://www.linkedin.com/in/muhammad-wildan-zhafiri-0a1921289/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full px-4 py-2 transition border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:bg-white/90 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40"
                  href="mailto:wildan@example.com"
                >
                  Email
                </a>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 pt-7 sm:pt-5 md:pt-0">
            <div className="relative mx-auto w-full max-w-[460px]">
              <motion.div ref={orbRef} initial={{ opacity: 0, y: 16, rotate: -1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative">
                {/* <div className="absolute -inset-2 rounded-[36px] opacity-70 blur-2xl bg-[conic-gradient(from_180deg,rgba(249,115,22,0.35),rgba(20,184,166,0.30),rgba(56,189,248,0.24),rgba(249,115,22,0.35))]" /> */}

                <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur shadow-[0_35px_120px_rgba(15,23,42,0.25)]">
                  <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.24)_1px,transparent_1px)] bg-[size:100%_12px]" />
                  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(15,23,42,0.55)_1px,transparent_1px)] bg-[size:18px_18px]" />
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.55),transparent_60%)]" />

                  <div className="relative aspect-[4/5] w-full max-h-[520px]">
                    <img src={`${import.meta.env.BASE_URL}/images/profile2.png`} alt="Photo of Wildan" className="h-full w-full object-cover scale-[1.15] object-[50%_20%]" loading="eager" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%),linear-gradient(to_top,rgba(2,6,23,0.64),transparent_55%)]" />

                    <motion.div
                      aria-hidden
                      initial={{ x: '-140%' }}
                      whileInView={{ x: '140%' }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      className="absolute inset-0 opacity-25 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)]"
                      style={{ transform: 'skewX(-12deg)' }}
                    />

                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3">
                        <p className="text-sm font-semibold text-white">Muhammad Wildan Zhafiri</p>
                        <p className="text-xs text-white/80">Frontend Developer | Student </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.08, ease }}
                className="absolute -left-2 top-10 sm:-left-8 rounded-2xl border border-white/20 bg-white/70 dark:bg-white/10 px-4 py-3 text-xs text-slate-700 dark:text-white backdrop-blur shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
              >
                <p className="uppercase tracking-[0.2em] text-slate-500 dark:text-white/70">Featured</p>
                <p className="mt-1 font-semibold">Portfolio 2025</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.16, ease }}
                className="absolute -right-2 bottom-16 sm:-right-8 rounded-2xl border border-white/20 bg-white/70 dark:bg-white/10 px-4 py-3 text-xs text-slate-700 dark:text-white backdrop-blur shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
              >
                <p className="uppercase tracking-[0.2em] text-slate-500 dark:text-white/70">Open to</p>
                <p className="mt-1 font-semibold">New opportunities</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
