import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Container } from './Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type Href = (typeof NAV)[number]['href'];

export function Navbar() {
  const [active, setActive] = useState<Href>('#home');
  const [open, setOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ x: 0, w: 0, show: false });

  const activeIndex = useMemo(() => NAV.findIndex((n) => n.href === active), [active]);

  const HEADER_OFFSET = 100;
  const getActiveFromScroll = () => {
    const y = window.scrollY + HEADER_OFFSET + 1;

    let current: Href = '#home';

    for (const n of NAV) {
      const id = n.href.slice(1);
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.offsetTop;
      if (top <= y) current = n.href as Href;
    }

    return current;
  };

  const lockUntilRef = useRef(0);

  const scrollToHref = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);

    lockUntilRef.current = Date.now() + 900;

    setActive(href as Href);
    setOpen(false);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', href);
    } else {
      window.location.hash = href;
    }
  };

  useEffect(() => {
    const onHash = () => setActive(((window.location.hash as any) || '#home') as Href);
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (Date.now() < lockUntilRef.current) return;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = getActiveFromScroll();
        setActive((prev) => (prev === next ? prev : next));
      });
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);

    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const recalcIndicator = () => {
    const wrap = navRef.current;
    const el = linkRefs.current[active];
    if (!wrap || !el) return;

    const wrapRect = wrap.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const x = elRect.left - wrapRect.left;
    const w = elRect.width;

    setIndicator({ x, w, show: true });
  };

  useLayoutEffect(() => {
    recalcIndicator();
  }, [activeIndex]);

  useEffect(() => {
    const ro = new ResizeObserver(() => recalcIndicator());
    if (navRef.current) ro.observe(navRef.current);
    Object.values(linkRefs.current).forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [active]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/70 dark:bg-[#070A12]/70 backdrop-blur border-b border-slate-200/60 dark:border-white/10">
        <Container className="flex items-center justify-between gap-2 py-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToHref('#home');
            }}
            className="shrink-0 font-display font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            Wildan<span className="text-orange-500">.</span>
          </a>

          <div className="hidden md:flex min-w-0 items-center justify-center flex-1 px-6">
            <div ref={navRef} className={['relative flex min-w-0 items-center gap-8', 'px-4 py-2 rounded-full', 'border border-slate-200/70 dark:border-white/10', 'bg-white/60 dark:bg-white/5', 'shadow-sm'].join(' ')}>
              {NAV.map((n) => {
                const isActive = n.href === active;
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    ref={(node) => {
                      linkRefs.current[n.href] = node;
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHref(n.href);
                    }}
                    className={[
                      'relative py-1 text-sm font-medium transition-colors',
                      isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#070A12]',
                    ].join(' ')}
                  >
                    {n.label}
                  </a>
                );
              })}

              <span
                aria-hidden="true"
                className={['pointer-events-none absolute left-0 -bottom-[2px] h-[2px] rounded-full', 'bg-orange-500', 'transition-[transform,width,opacity] duration-300 ease-out', indicator.show ? 'opacity-100' : 'opacity-0'].join(' ')}
                style={{
                  width: indicator.w,
                  transform: `translateX(${indicator.x}px)`,
                }}
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button as="a" href={`${import.meta.env.BASE_URL}resume/CV_Muhammad_Wildan_Zhafiri.pdf`} download size="sm" className="hidden sm:inline-flex rounded-full">
              Download CV
            </Button>

            <ThemeToggle className="shrink-0" />

            <button
              type="button"
              className="md:hidden shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-slate-100 transition hover:bg-white/80 dark:hover:bg-white/10"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <div className={['md:hidden fixed inset-0 z-50', 'transition-opacity duration-200', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'].join(' ')}>
        <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} aria-hidden="true" />

        <div
          className={[
            'absolute left-0 right-0 top-0 w-full',
            'bg-white/85 dark:bg-[#070A12]/85 backdrop-blur',
            'border-b border-slate-200/60 dark:border-white/10',
            'transition-transform duration-300 ease-out',
            'max-h-[100vh] overflow-y-auto',
            open ? 'translate-y-0' : '-translate-y-full',
          ].join(' ')}
        >
          <div className="w-full px-4 py-4">
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold text-slate-900 dark:text-slate-100">Menu</span>

              <button
                type="button"
                className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-slate-100"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {NAV.map((n) => {
                const isActive = n.href === active;
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHref(n.href);
                    }}
                    className={[
                      'w-full rounded-2xl px-4 py-3 text-sm font-medium transition',
                      'border border-slate-200/70 dark:border-white/10',
                      isActive ? 'bg-orange-500/10 text-slate-900 dark:text-white' : 'bg-white/50 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/10',
                    ].join(' ')}
                  >
                    {n.label}
                  </a>
                );
              })}

              <Button as="a" href={`${import.meta.env.BASE_URL}resume/CV_Muhammad_Wildan_Zhafiri.pdf`} download size="sm" className="mt-2 inline-flex w-full justify-center rounded-2xl sm:hidden" onClick={() => setOpen(false)}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
