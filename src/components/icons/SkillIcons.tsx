import * as React from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiFirebase, SiGit, SiPostman, SiFigma, SiGithub, SiLaravel, SiExpress, SiFramer } from 'react-icons/si';

type Props = { className?: string };

function Svg({ children, className, zoom = 1 }: { children: React.ReactNode; className?: string; zoom?: number }) {
  const t = (24 - 24 * zoom) / 2;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {zoom === 1 ? children : <g transform={`translate(${t} ${t}) scale(${zoom})`}>{children}</g>}
    </svg>
  );
}

function BrandIcon({ Icon, className }: { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; className?: string }) {
  return <Icon className={className} aria-hidden="true" focusable="false" />;
}

export function IconReact({ className }: Props) {
  return <BrandIcon Icon={SiReact} className={className} />;
}
export function IconNext({ className }: Props) {
  return <BrandIcon Icon={SiNextdotjs} className={className} />;
}
export function IconTS({ className }: Props) {
  return <BrandIcon Icon={SiTypescript} className={className} />;
}
export function IconTailwind({ className }: Props) {
  return <BrandIcon Icon={SiTailwindcss} className={className} />;
}

export function IconGraphql({ className }: Props) {
  return <BrandIcon Icon={SiGraphql} className={className} />;
}

export function IconFirebase({ className }: Props) {
  return <BrandIcon Icon={SiFirebase} className={className} />;
}

export function IconGit({ className }: Props) {
  return <BrandIcon Icon={SiGit} className={className} />;
}

export function IconPostman({ className }: Props) {
  return <BrandIcon Icon={SiPostman} className={className} />;
}

export function IconFigma({ className }: Props) {
  return <BrandIcon Icon={SiFigma} className={className} />;
}

export function IconGithub({ className }: Props) {
  return <BrandIcon Icon={SiGithub} className={className} />;
}

export function IconLaravel({ className }: Props) {
  return <BrandIcon Icon={SiLaravel} className={className} />;
}

export function IconExpress({ className }: Props) {
  return <BrandIcon Icon={SiExpress} className={className} />;
}

export function IconMotion({ className }: Props) {
  return <BrandIcon Icon={SiFramer} className={className} />;
}

const Z = 1.15;

export function IconApi({ className }: Props) {
  return (
    <Svg className={className} zoom={Z}>
      <path d="M7 7h10v4H7V7Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7 13h10v4H7v-4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 9h.01M9 15h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </Svg>
  );
}

export function IconMidtrans({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="6.2" y="7" width="3" height="10" rx="1.5" fill="currentColor" />
      <rect x="10.5" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
      <rect x="14.8" y="7" width="3" height="10" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconProblemSolving({ className }: Props) {
  return (
    <Svg className={className} zoom={Z}>
      <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.2 10.2a3.8 3.8 0 1 1 7.6 0c0 1.5-.8 2.4-1.6 3.2-.7.7-1.4 1.4-1.6 2.6H11c-.2-1.2-.9-1.9-1.6-2.6-.8-.8-1.6-1.7-1.6-3.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 2.8v1.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.9 5.7l1.1 1.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M19.1 5.7 18 6.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M3.2 12h1.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M19.2 12h1.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Svg>
  );
}

export function IconCollaboration() {
  return (
    <svg viewBox="0 0 48 48" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
      <path d="M16 20h-6v-6H6v6H0v4h6v6h4v-6h6v-4zm20 2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-.64 0-1.25.1-1.83.29 1.13 1.62 1.81 3.59 1.81 5.71s-.68 4.09-1.81 5.71c.58.19 1.19.29 1.83.29zm-10 0c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm13.24 4.32C40.9 27.77 42 29.64 42 32v4h6v-4c0-3.08-4.75-4.97-8.76-5.68zM26 26c-4 0-12 2-12 6v4h24v-4c0-4-8-6-12-6z" />
    </svg>
  );
}

export function IconTime({ className }: Props) {
  return (
    <Svg className={className} zoom={Z}>
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.6v4.8l3 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconAdapt({ className }: Props) {
  return (
    <Svg className={className} zoom={Z}>
      <path d="M7 12a5 5 0 0 1 8.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16.8 8.5V6.2h-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 12a5 5 0 0 1-8.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M7.2 15.5v2.3h2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconLearning({ className }: Props) {
  return (
    <Svg className={className} zoom={Z}>
      <path d="M4.8 8.6 12 5.3l7.2 3.3L12 12l-7.2-3.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6.5 11.8v4.2c1.9 1.2 3.7 1.8 5.5 1.8s3.6-.6 5.5-1.8v-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Svg>
  );
}

export function getSkillIcon(name: string): React.ComponentType<Props> | null {
  const map: Record<string, React.ComponentType<Props>> = {
    'React.js': IconReact,
    'Next.js': IconNext,
    TypeScript: IconTS,
    'Tailwind CSS': IconTailwind,
    'REST APIs': IconApi,
    GraphQL: IconGraphql,
    Firebase: IconFirebase,
    Git: IconGit,
    Postman: IconPostman,
    Figma: IconFigma,
    Github: IconGithub,
    Laravel: IconLaravel,
    'Express.js': IconExpress,
    'Framer Motion': IconMotion,
    Midtrans: IconMidtrans,

    'Problem Solving': IconProblemSolving,
    'Team Collaboration': IconCollaboration,
    'Time Management': IconTime,
    Adaptability: IconAdapt,
    'Continuous Learning': IconLearning,
  };

  return map[name] ?? null;
}
