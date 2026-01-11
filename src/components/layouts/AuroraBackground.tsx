import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

type Particle = { id: number; x: number; y: number; s: number; o: number; d: number };

export function AuroraBackground({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const latestRef = useRef({ x: 50, y: 30 });

  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [reducedMotion, setReducedMotion] = useState(false);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: 2 + Math.random() * 4,
        o: 0.12 + Math.random() * 0.16,
        d: 10 + Math.random() * 18,
      })),
    []
  );

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(!!mq?.matches);
    apply();
    mq?.addEventListener?.('change', apply);
    return () => mq?.removeEventListener?.('change', apply);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      rafRef.current = null;
      setPos(latestRef.current);
    };

    const onPointerMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      latestRef.current = { x: clamp(x, 0, 100), y: clamp(y, 0, 100) };
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={ref} className={cn('fixed inset-0 -z-10 overflow-hidden', className)}>
      <div
        className="
    absolute inset-0
    bg-[linear-gradient(135deg,rgba(234,88,12,0.40)_0%,rgba(251,146,60,0.34)_28%,rgba(253,224,71,0.26)_58%,rgba(254,252,232,0.12)_100%),
        radial-gradient(1200px_circle_at_18%_14%,rgba(249,115,22,0.44),transparent_56%),
        radial-gradient(1050px_circle_at_84%_18%,rgba(253,224,71,0.38),transparent_60%),
        radial-gradient(900px_circle_at_50%_92%,rgba(234,88,12,0.26),transparent_62%)]
    dark:bg-[linear-gradient(135deg,rgba(194,65,12,0.22)_0%,rgba(234,88,12,0.18)_38%,rgba(251,191,36,0.14)_68%,rgba(0,0,0,0)_100%),
        radial-gradient(1100px_circle_at_18%_14%,rgba(234,88,12,0.30),transparent_58%),
        radial-gradient(900px_circle_at_84%_18%,rgba(253,224,71,0.22),transparent_62%),
        radial-gradient(900px_circle_at_50%_92%,rgba(194,65,12,0.18),transparent_64%)]
  "
      />

      <div className="absolute inset-0 dark:hidden">
        <div
          className="absolute inset-y-0 left-0 w-[38vw] max-w-[620px] opacity-[0.55] blur-[22px]"
          style={{
            background: `
              radial-gradient(180px 140px at 22% 18%, rgba(249,115,22,0.18), rgba(251,191,36,0.10) 45%, rgba(249,115,22,0.0) 75%),
              radial-gradient(140px 120px at 14% 36%, rgba(249,115,22,0.14), rgba(251,191,36,0.08) 50%, rgba(249,115,22,0.0) 78%),
              radial-gradient(220px 180px at 18% 58%, rgba(251,191,36,0.14), rgba(249,115,22,0.08) 46%, rgba(249,115,22,0.0) 80%),
              radial-gradient(160px 140px at 26% 78%, rgba(249,115,22,0.12), rgba(251,191,36,0.07) 48%, rgba(249,115,22,0.0) 82%)
            `,
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
          }}
        />

        <div
          className="absolute inset-y-0 right-0 w-[38vw] max-w-[620px] opacity-[0.55] blur-[22px]"
          style={{
            background: `
              radial-gradient(190px 150px at 78% 20%, rgba(249,115,22,0.16), rgba(251,191,36,0.10) 44%, rgba(249,115,22,0.0) 76%),
              radial-gradient(150px 130px at 86% 40%, rgba(251,191,36,0.14), rgba(249,115,22,0.08) 48%, rgba(249,115,22,0.0) 80%),
              radial-gradient(240px 190px at 82% 62%, rgba(249,115,22,0.12), rgba(251,191,36,0.07) 52%, rgba(249,115,22,0.0) 84%),
              radial-gradient(170px 150px at 74% 82%, rgba(249,115,22,0.12), rgba(251,191,36,0.07) 50%, rgba(249,115,22,0.0) 84%)
            `,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
          }}
        />
      </div>

      <div className={cn('absolute -inset-[38%] opacity-[0.62] blur-[120px] mix-blend-multiply dark:mix-blend-normal', reducedMotion && 'opacity-50 blur-[80px]')}>
        <div
          className="absolute left-[2%] top-[0%] h-[760px] w-[980px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 34% 34%, rgba(255,220,120,0.52) 0%, rgba(255,180,60,0.34) 38%, rgba(255,122,24,0.18) 62%, rgba(255,122,24,0.0) 84%)',
          }}
        />

        <div
          className="absolute left-[44%] top-[6%] h-[680px] w-[880px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 46% 40%, rgba(255,246,210,0.34) 0%, rgba(255,220,120,0.26) 36%, rgba(255,180,60,0.18) 62%, rgba(255,122,24,0.0) 86%)',
          }}
        />

        <div
          className="absolute left-[18%] top-[52%] h-[720px] w-[980px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 46%, rgba(255,180,60,0.34) 0%, rgba(255,220,120,0.20) 44%, rgba(255,246,210,0.12) 70%, rgba(255,122,24,0.0) 88%)',
          }}
        />
      </div>

      <div className={cn('absolute -inset-[40%] opacity-40 dark:opacity-60 blur-3xl', reducedMotion && 'opacity-28 blur-2xl')}>
        <div
          className={cn(
            'absolute left-1/2 top-1/2 h-[760px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-[conic-gradient(from_200deg_at_50%_50%,rgba(249,115,22,0.0),rgba(249,115,22,0.16),rgba(251,191,36,0.10),rgba(13,148,136,0.04),rgba(249,115,22,0.10),rgba(249,115,22,0.0))]',
            reducedMotion ? '' : 'animate-[spin_38s_linear_infinite]'
          )}
        />
      </div>

      <div
        className="absolute inset-0 transition-opacity duration-200 will-change-[background]"
        style={{
          background: `radial-gradient(460px circle at ${pos.x}% ${pos.y}%, rgba(249,115,22,0.22) 0%, rgba(251,191,36,0.10) 38%, transparent 72%)`,
        }}
      />
      <div
        className="absolute inset-0 will-change-[background]"
        style={{
          background: `radial-gradient(920px circle at ${pos.x}% ${pos.y}%, rgba(13,148,136,0.04), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-amber-300/16 dark:bg-amber-100/15"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
              opacity: p.o,
              animation: reducedMotion ? undefined : `float ${p.d}s ease-in-out infinite`,
              transform: `translate3d(0,0,0)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,transparent_0%,rgba(15,23,42,0.02)_62%,rgba(15,23,42,0.05)_100%)] dark:bg-[radial-gradient(circle_at_50%_10%,transparent_0%,rgba(0,0,0,0.38)_62%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
