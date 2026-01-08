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
      {/* Base */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(1200px_circle_at_14%_12%,rgba(249,115,22,0.09),transparent_62%),
              radial-gradient(900px_circle_at_86%_18%,rgba(13,148,136,0.04),transparent_66%)]
          dark:bg-[radial-gradient(circle_at_22%_16%,rgba(245,158,11,0.12),transparent_62%),
              radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.08),transparent_60%),
              radial-gradient(circle_at_50%_88%,rgba(45,212,191,0.07),transparent_62%)]
        "
      />

      {/* Modern edge patches (light only) */}
      <div className="absolute inset-0 dark:hidden">
        {/* Left edge patches */}
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

        {/* Right edge patches */}
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

      {/* Soft glow blobs (overall ambience) */}
      <div className={cn('absolute -inset-[38%] opacity-[0.62] blur-[120px] mix-blend-multiply dark:mix-blend-normal', reducedMotion && 'opacity-50 blur-[80px]')}>
        <div
          className="absolute left-[6%] top-[4%] h-[720px] w-[920px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 34% 34%, rgba(249,115,22,0.30) 0%, rgba(251,191,36,0.18) 36%, rgba(249,115,22,0.08) 60%, rgba(249,115,22,0.0) 78%)',
          }}
        />
        <div
          className="absolute left-[48%] top-[10%] h-[620px] w-[820px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 44% 40%, rgba(251,191,36,0.22) 0%, rgba(249,115,22,0.12) 42%, rgba(249,115,22,0.05) 66%, rgba(249,115,22,0.0) 82%)',
          }}
        />
        <div
          className="absolute left-[18%] top-[56%] h-[660px] w-[860px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 46%, rgba(249,115,22,0.18) 0%, rgba(251,191,36,0.12) 44%, rgba(249,115,22,0.05) 68%, rgba(249,115,22,0.0) 84%)',
          }}
        />
      </div>

      {/* Aurora swirl */}
      <div className={cn('absolute -inset-[40%] opacity-40 dark:opacity-60 blur-3xl', reducedMotion && 'opacity-28 blur-2xl')}>
        <div
          className={cn(
            'absolute left-1/2 top-1/2 h-[760px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-[conic-gradient(from_200deg_at_50%_50%,rgba(249,115,22,0.0),rgba(249,115,22,0.16),rgba(251,191,36,0.10),rgba(13,148,136,0.04),rgba(249,115,22,0.10),rgba(249,115,22,0.0))]',
            reducedMotion ? '' : 'animate-[spin_38s_linear_infinite]'
          )}
        />
      </div>

      {/* Cursor glow (smaller + soft) */}
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

      {/* Particles */}
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

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,transparent_0%,rgba(15,23,42,0.02)_62%,rgba(15,23,42,0.05)_100%)] dark:bg-[radial-gradient(circle_at_50%_10%,transparent_0%,rgba(0,0,0,0.38)_62%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
