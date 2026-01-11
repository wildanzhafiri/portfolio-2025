import type { StoryItem } from './experience.types';

export const EXPERIENCE_DATA: readonly StoryItem[] = [
  {
    year: '2023',
    label: 'Foundation',
    title: 'Entering the World of Information Technology',
    context: 'Early Exploration and Direction',
    story:
      'This phase marked my initial entry into the IT world and a period of broad exploration. I explored several areas of technology while learning core fundamentals, which helped me understand how digital systems are built and how different roles contribute to real world projects. During this process, I began to develop a growing interest in frontend development.',
    highlights: [
      'Explored multiple areas of information technology before forming a clearer learning direction',
      'Learned fundamental concepts of web and software development',
      'Began understanding how frontend development is used in real projects',
    ],
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
      'This competition at Universitas Airlangga was not only about design, but also about implementing it into real code and a working project. I worked with a JavaScript framework and REST APIs, collaborating in a team and taking responsibility as the frontend developer under tight deadlines.',
    highlights: [
      'Worked as the frontend developer using React to implement the application interface',
      'Integrated REST APIs and handled dynamic data on the client side',
      'Collaborated in a team environment under tight competition deadlines',
    ],

    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum teknovistafest.png`,
      alt: 'Teknovistafest award',
      orientation: 'portrait',
    },
  },

  {
    year: '2025',
    label: 'Organization',
    title: 'Expert Staff at the Communication and Information Center',
    context: 'Eksekutif Mahasiswa Universitas Brawijaya',
    story:
      'This role introduced me to a more realistic working environment within an organization. In addition to development tasks, I worked on new features for the official website, including a program registration system using a form based flow with autosave, similar to Google Forms. I was also involved in guiding internship staff during development and supporting collaborative work across the team.',
    highlights: [
      'Developed and implemented new features for the official organization website',
      'Guided internship staff during development of an SDGs focused project',
      'Worked closely with different divisions to align technical implementation with organizational needs',
    ],

    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum ptpd.png`,
      alt: 'Company Profile',
      orientation: 'landscape',
    },
  },
  {
    year: '2025',
    label: 'Lab Assistant',
    title: 'Lab Assistant for Web Application Programming',
    context: 'Teaching Environment',
    story:
      'As a Web Application Programming Lab Assistant, I guided students through weekly practicum sessions, explained core web development concepts in a structured way, and assisted them in debugging and completing their tasks. I also supported students who needed additional help during the learning process, strengthening both my technical foundation and communication skills.',
    highlights: ['Guided students through weekly web development practicum sessions', 'Assisted students in debugging and completing their tasks', 'Reinforced core fundamentals through teaching and mentoring'],
    photo: {
      src: `${import.meta.env.BASE_URL}/images/dokum asprak.png`,
      alt: 'Dokumentasi Asprak',
      orientation: 'landscape',
    },
  },
] as const;
