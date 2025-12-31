import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

const baseProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconBriefcase(props: IconProps) {
  return (
    <svg {...baseProps} aria-hidden="true" focusable="false" {...props}>
      <path d="M10 6h4" />
      <path d="M10 6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2" />
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M4 12h16" />
    </svg>
  );
}

export function IconMessage(props: IconProps) {
  return (
    <svg {...baseProps} aria-hidden="true" focusable="false" {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
    </svg>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56
      0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7
      -1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2
      1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56
      -2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.19-3.07
      -.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.17
      .92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39
      c2.21-1.48 3.18-1.17 3.18-1.17.63 1.58.23 2.75.11 3.04
      .74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.64
      .42.36.8 1.08.8 2.18 0 1.57-.02 2.83-.02 3.22
      0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12
      C23.5 5.73 18.27.5 12 .5z"
      />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...baseProps} aria-hidden="true" focusable="false" {...props}>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
