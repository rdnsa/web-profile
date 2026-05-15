import type { ComponentType } from 'react'
import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from 'lucide-react'

export type IconComponent = ComponentType<{ className?: string }>

export type ContactLink = {
  label: string
  value: string
  href: string
  icon: IconComponent
}

export type SocialLink = {
  label: string
  href: string
  icon: IconComponent
}

export type Experience = {
  company: string
  location: string
  period: string
  role: string
  description: string
  highlights: string[]
  tags: string[]
}

export type Education = {
  institution: string
  location: string
  period: string
  degree: string
  highlights: string[]
}

export type Organization = {
  name: string
  location: string
  period: string
  role: string
  description: string
  highlights: string[]
}

export type PortfolioStat = {
  target: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
}

export type Project = {
  title: string
  category: string
  href: string
  image: string
  imageClassName?: string
  role: string
  summary: string
  highlights: string[]
  tags: string[]
}

export type Capability = {
  title: string
  description: string
  icon: IconComponent
  skills: string[]
}

export const profile = {
  name: 'Raden Issa',
  fullName: 'Raden Mochamad Issa Wirakusumah',
  role: 'Project Manager',
  location: 'South Jakarta',
  email: 'rdnsa123@gmail.com',
  phone: '085155448738',
  avatar: '/images/WhatsApp%20Image%202025-08-11%20at%209.34.49%20AM.jpg',
  intro:
    'Project manager with an engineering background, working across planning, team coordination, and technical delivery.',
  tagline:
    'I help digital projects move from idea to release by keeping scope, backlog, timelines, and engineering aligned.',
  shortBio:
    'My work sits between project planning and technical execution: clarifying priorities, coordinating teams, and making sure delivery stays realistic, organized, and moving.',
  about: [
    'I currently manage digital projects across financial news, property, and AI-focused initiatives. I enjoy turning broad business goals into clearer scopes, backlog priorities, timelines, and release plans that teams can actually execute.',
    'Because I started from software development, I can move comfortably between stakeholder conversations and technical discussions with engineers. That helps me keep delivery clear when requirements, timelines, and implementation details begin to drift apart.',
  ],
  contactCopy:
    'I work best on digital projects that need clearer planning, stronger coordination, and steadier delivery habits, especially when stakeholders, design, and engineering need to stay tightly connected.',
  focus: [
    'Project planning',
    'Backlog control',
    'Sprint execution',
    'Stakeholder alignment',
  ],
  stats: [
    { target: 5, suffix: '+', label: 'Project streams managed' },
    { target: 50, suffix: '+', label: 'Users involved in testing' },
    { target: 3, label: 'Live portfolio projects' },
  ] as PortfolioStat[],
  contacts: [
    {
      label: 'Email',
      value: 'rdnsa123@gmail.com',
      href: 'mailto:rdnsa123@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '085155448738',
      href: 'tel:+6285155448738',
      icon: Phone,
    },
    {
      label: 'Location',
      value: 'South Jakarta',
      href: 'https://www.google.com/maps/search/South+Jakarta',
      icon: MapPin,
    },
  ] satisfies ContactLink[],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/Rdnsa',
      icon: UsersRound,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/rdnsa',
      icon: Code2,
    },
  ] satisfies SocialLink[],
}

export const projects: Project[] = [
  {
    title: 'IFCNews',
    category: 'Financial news project',
    href: 'https://ifcnews.id',
    image: '/images/projects/ifcnews.webp',
    imageClassName: 'scale-[1.08] object-left-top',
    role: 'Project management and delivery support',
    summary:
      'A financial news platform where I support project delivery across content discovery, market features, and search visibility.',
    highlights: [
      'Worked on Stocks, IPO, AI summarization, recommendation systems, SEO, Search Console, sitemap.xml, and analytics setup.',
      'Helped connect project goals with the technical work needed to ship and improve the platform.',
    ],
    tags: ['AI summarization', 'Stocks', 'IPO', 'SEO'],
  },
  {
    title: 'Nordpartners',
    category: 'Property partnership platform',
    href: 'https://nordpartners.id',
    image: '/images/projects/nordpartners.webp',
    role: 'Project coordination',
    summary:
      'A premium property partnership experience designed to present access, trust, and opportunity for investors and agency partners.',
    highlights: [
      'Focused on aligning stakeholder needs, presentation flow, and delivery priorities for a high-trust digital experience.',
      'Supported a project narrative built around investor access, agency communication, and premium positioning.',
    ],
    tags: ['Property', 'Partnership', 'Stakeholders', 'Experience'],
  },
  {
    title: "I'M LUXURY",
    category: 'Luxury commerce',
    href: 'https://im-luxury.yvrtz.workers.dev',
    image: '/images/projects/im-luxury.webp',
    role: 'Digital project concept',
    summary:
      'A luxury storefront concept built around curated collections, private consultation, and a more polished buying journey.',
    highlights: [
      'Explored how catalog structure, visual tone, and consultation flow can support premium brand perception.',
      'Created a focused commerce experience with strong brand presence and direct conversion paths.',
    ],
    tags: ['Commerce', 'Catalog', 'Brand', 'Consultation'],
  },
]

export const capabilities: Capability[] = [
  {
    title: 'Project Planning',
    description:
      'I turn loose goals into clearer scopes, priorities, timelines, and backlog decisions that teams can act on.',
    icon: BriefcaseBusiness,
    skills: ['Roadmap', 'Prioritization', 'User stories', 'Sprint reviews'],
  },
  {
    title: 'Delivery Systems',
    description:
      'I keep work moving through sprint planning, documentation, coordination, and stakeholder communication.',
    icon: UsersRound,
    skills: ['Agile Scrum', 'Kanban', 'Documentation', 'QA workflow'],
  },
  {
    title: 'Technical Bridge',
    description:
      'My engineering background helps me translate between business needs and the systems underneath them.',
    icon: BrainCircuit,
    skills: ['Python', 'GoLang', 'MySQL', 'CI/CD', 'Analytics'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'PT InfantAI Teknologi Nusantara',
    location: 'North Jakarta, Indonesia',
    period: 'Sep 2025 - Present',
    role: 'Project Manager',
    description:
      'AI-focused startup work across financial news, parenting, education, and related digital products.',
    highlights: [
      'Managed roadmap, backlog prioritization, and sprint execution for IFCNews, Infant.AI, GeniusAI, Nordpartners, and Satglow Invent.',
      'Collaborated with stakeholders, AI engineers, QA, and developers to define requirements and align delivery goals.',
      'Supported IFCNews features spanning Stocks, IPO, AI summarization, recommendations, SEO, and analytics.',
    ],
    tags: ['Agile Scrum', 'Kanban', 'AI', 'CI/CD', 'SEO'],
  },
  {
    company: 'PT Super Pasar Rakyat Indonesia (BRI Group)',
    location: 'Central Jakarta, Indonesia',
    period: 'Feb 2025 - Oct 2025',
    role: 'Full Stack Engineer Intern',
    description:
      'Cross-functional internship across product coordination, development, and QA for a digital agricultural marketplace.',
    highlights: [
      'Supported TopUp, Withdrawal, and Settlement features using Laravel, MySQL, Docker, and Redis.',
      'Worked across product, design, engineering, and QA to keep sprint tasks, coordination, and timelines moving.',
    ],
    tags: ['Laravel', 'MySQL', 'Docker', 'Redis', 'QA'],
  },
  {
    company: 'Moodscape',
    location: 'South Jakarta, Indonesia',
    period: 'Jan 2024 - Dec 2024',
    role: 'IT Product & Project Manager',
    description:
      'Mental health innovation project building an AI-powered mobile app for emotional well-being monitoring.',
    highlights: [
      'Led roadmap planning, feature prioritization, backlog management, and sprint execution.',
      'Conducted usability testing with 50+ users and collaborated on AI-based mood analysis features.',
    ],
    tags: ['Product Roadmap', 'Machine Learning', 'Jira', 'Confluence', 'Notion'],
  },
]

export const education: Education = {
  institution: 'Universitas Siber Indonesia',
  location: 'TB Simatupang, South Jakarta',
  period: 'Sep 2022 - Sep 2026 (Expected)',
  degree: 'Bachelor of Information Technology, 3.97/4.00',
  highlights: [
    'Full-Ride Scholarship Awardee, received a 100% tuition scholarship for 4 years based on academic performance and leadership merit.',
    '1st Place Winner, Cyber Entrepreneur Product Innovation Competition.',
    'Published research on private cloud storage implementation using OwnCloud and Linux Ubuntu.',
  ],
}

export const organizations: Organization[] = [
  {
    name: 'Himpunan Mahasiswa Teknologi Informasi',
    location: 'Jakarta, Indonesia',
    period: 'Jul 2023 - Present',
    role: 'President HIMA',
    description:
      'Led academic, social, and professional development programs for the Information Technology Student Association.',
    highlights: [
      'Organized company visits to XL Axiata and Allo Bank.',
      'Led community initiatives around digital literacy and cybersecurity awareness.',
    ],
  },
  {
    name: 'Decompe 3.0',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2023 - Jan 2024',
    role: 'IT Infrastructure',
    description:
      'Supported the technical operation of a national-scale UI/UX design competition.',
    highlights: [
      'Managed infrastructure for 100+ participants from 10+ universities.',
      'Maintained reliable event operations across registration, judging, and support.',
    ],
  },
]
