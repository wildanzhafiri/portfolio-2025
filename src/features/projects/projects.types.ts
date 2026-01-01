export type GalleryItem = {
  src: string;
};

export type ProjectTag =
  | 'React'
  | 'TypeScript'
  | 'Tailwind'
  | 'IoT'
  | 'Framer Motion'
  | 'Web3'
  | 'Rest API'
  | 'GraphQL'
  | 'InertiaJS'
  | 'Laravel'
  | 'Next.js'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Docker'
  | 'AWS'
  | 'Firebase'
  | 'Midtrans';

export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  tags: ProjectTag[];
  highlights: string[];
  gallery?: GalleryItem[];
  links: {
    live?: string;
    github?: string;
  };
  image?: string;
};
