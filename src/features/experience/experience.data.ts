import type { StoryItem } from './experience.types';

export const EXPERIENCE_DATA: readonly StoryItem[] = [
  {
    year: '2023',
    label: 'Foundation',
    title: 'Entering the World of Information Technology',
    context: 'Journey Begins',
    story:
      'This phase marked my initial entry into the IT world. I was still exploring different areas, learning the fundamentals, and trying to understand how technology is applied in real-world environments. It became a period of self-discovery, where I gradually shaped my learning direction and mindset toward building things.',
    highlights: ['Explored multiple IT fields to identify a personal learning focus', 'Learned fundamental concepts of web and software development', 'Started understanding real-world workflows and project structures'],
    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum maba.png`,
      alt: 'Journey Begins',
      orientation: 'portrait',
    },
  },
  {
    year: '2024',
    label: 'Milestone',
    title: 'First Place at Teknovistafest Web Design Competition',
    context: 'First Competition',
    story:
      'This experience pushed me beyond learning basics and into real execution. Working under a tight deadline challenged me to learn faster, make decisions efficiently, and take responsibility for delivering a complete product. The competition was organized by Universitas Airlangga, giving me exposure to an academic yet highly competitive environment.',
    highlights: ['Learned and applied the React framework in a real project', 'Built a complete web application within a limited timeframe', 'Used Git for version control and collaborative development'],
    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum teknovistafest.png`,
      alt: 'Teknovistafest award',
      orientation: 'portrait',
    },
  },
  {
    year: '2025',
    label: 'Teaching',
    title: 'Practicum Tutor for Web Application Development',
    context: 'Mentoring Environment',
    story:
      'Becoming a practicum tutor changed how I approached learning. Explaining concepts to others required clarity and structure, which helped me identify gaps in my own understanding. This role strengthened both my technical foundation and my ability to communicate effectively.',
    highlights: ['Guided students through weekly web development practicum sessions', 'Reviewed assignments and delivered clear, constructive feedback', 'Reinforced core fundamentals through teaching and mentoring'],
    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum asprak.png`,
      alt: 'Dokumentasi Asprak',
      orientation: 'landscape',
    },
  },
  {
    year: '2025',
    label: 'Organization',
    title: 'Expert Staff at the Communication and Information Center',
    context: 'Eksekutif Mahasiswa Universitas Brawijaya',
    story:
      'This role introduced me to a more realistic working environment within an organization. In addition to development tasks, I was trusted to mentor internship staff and support collaborative projects. It helped me balance technical work with responsibility, coordination, and long-term impact.',
    highlights: ['Built and maintained an official organization website with a team', 'Mentored internship staff in developing an SDGs-focused project', 'Collaborated across roles to maintain consistency and quality'],
    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum ptpd.png`,
      alt: 'Company Profile',
      orientation: 'landscape',
    },
  },
] as const;
