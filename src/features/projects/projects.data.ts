import type { Project } from './projects.types';

export const PROJECTS: readonly Project[] = [
  {
    id: 'domma',
    title: 'DOMMA — UMKM Cashier & Inventory Management',
    description: 'A web-based management system built to help UMKM run daily operations more efficiently by centralizing business processes into a single application.',
    role: 'Front-end Developer',
    tags: ['React', 'TypeScript', 'Tailwind', 'InertiaJS', 'Laravel'],
    highlights: [
      'Product management with full CRUD operations for inventory items',
      'Fast cashier workflow with auto-recorded transactions',
      'Real-time inventory updates synced to sales activity',
      'Dashboard summary (profit, daily sales, low-stock alerts) + automated reports',
      'Automatic receipt generation for completed transactions',
      'Role-based access control with different privileges for owners and employees',
    ],

    links: {
      // live: 'https://...',
      // github: 'https://...',
    },
  },

  {
    id: 'bulkyhub',
    title: 'BulkyHub — Bulky Waste Pickup Platform',
    description: 'A scheduling and tracking platform for bulky waste pickup: residents submit requests, pick slots by RW capacity, and track status using a booking code.',
    role: 'Front-end Developer',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Rest API'],
    highlights: [
      'Multi-step pickup request (user & location → items → verification summary)',
      'Slot-based scheduling per RW capacity + admin slot management',
      'Tracking page using booking code with status progression',
      'Field officer reporting with photo evidence upload',
    ],
    links: {
      github: 'https://github.com/wildanzhafiri/BulkyHub-FE',
    },
  },
  {
    id: 'laporin',
    title: 'LaporIn — Public Complaint Reporting System',
    description: 'A smart-city reporting web app where citizens submit complaints with a ticket number and track status, while admins verify and resolve reports.',
    role: 'Front-end Developer',
    tags: ['React', 'TypeScript', 'Tailwind', 'Rest API'],
    highlights: [
      'Complaint form with required fields + photo upload',
      'Ticket confirmation page + report history (list & detail)',
      'Status tracking: New / In Review / Rejected / Resolved',
      'Admin dashboard to review reports and update status with confirmation',
    ],
    links: {
      live: 'http://laporin.bccdev.id/admin',
      github: 'https://github.com/wildanzhafiri/fe-LaporIn',
    },
  },
  {
    id: 'kenalbatik',
    title: 'Kenal Batik — Cultural Education & Interactive Learning',
    description: 'An educational platform to explore Indonesian batik motifs with story-based content, interactive quizzes, and a curated catalog with marketplace directions.',
    role: 'Front-end Developer',
    tags: ['React', 'InertiaJS', 'Laravel', 'Tailwind', 'Framer Motion'],
    highlights: [
      'Batik catalog with region-based exploration + detailed overview per motif',
      'Interactive quiz module to increase engagement (gamified learning)',
      'Authentication (login/register) and profile experience',
      'Admin dashboard for managing batik/quizzes content',
      'Marketplace direction for finding batik products (external purchase flow)',
    ],
    links: { github: 'https://github.com/bektiyuda/KenalBatik' },
  },
  {
    id: 'ticketbuzz',
    title: 'TicketBuzz — Concert Ticketing Platform',
    description: 'A web-based concert ticketing platform focused on simplicity, featuring real-time payments via Midtrans and organizer tools for managing events and sales.',
    role: 'Front-end Developer',
    tags: ['React', 'TypeScript', 'Tailwind', 'Midtrans', 'Rest API'],
    highlights: [
      'Concert catalog with search/filter and detailed event pages',
      'Simple booking flow with minimal steps and form validation',
      'Integrated payments via Midtrans (bank transfer, e-wallet, QRIS) with real-time confirmation',
      'E-ticket management with QR code + purchase history',
      'Organizer dashboard for event/ticket category management + sales analytics',
    ],
    links: {
      github: 'https://github.com/wildanzhafiri/TicketBuzz',
    },
  },
  {
    id: 'lentara',
    title: 'Lentara — Rental Marketplace Platform',
    description: 'A web-based rental marketplace built to make item renting more accessible and organized, helping users find what they need while enabling providers to manage their rental listings and transactions efficiently.',
    role: 'Front-end Developer',
    tags: ['React', 'TypeScript', 'Tailwind', 'Rest API', 'Midtrans'],
    highlights: [
      'User registration flow (sign up / sign in entry point)',
      'Homepage with search + category browsing',
      'Product filtering (category, rating, price)',
      'Product detail page (rental duration, quantity, add to cart)',
      'Checkout experience with cost summary + voucher selection',
      'Provider dashboard with key stats and product management entry',
    ],
    links: {
      live: 'https://fe-intern-bcc.vercel.app/',
      github: 'https://github.com/wildanzhafiri/fe-intern-bcc',
    },
  },
] as const;
