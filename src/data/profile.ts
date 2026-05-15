import type { ComponentType } from 'react'
import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
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

export type SkillGroup = {
  title: string
  icon: IconComponent
  skills: string[]
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
  summary: string
  metrics: PortfolioStat[]
  tags: string[]
}

export const profile = {
  name: 'Raden Issa',
  fullName: 'Raden Mochamad Issa Wirakusumah',
  role: 'Project Manager',
  location: 'South Jakarta',
  email: 'rdnsa123@gmail.com',
  phone: '085155448738',
  intro:
    'I am a Project Manager with a technical background in software development.',
  summary:
    'I currently manage several digital projects. I am experienced in creating backlog tickets, prioritizing tasks, monitoring development progress, and communicating with stakeholders. With my technical skills, I can better understand system requirements and bridge the gap between business needs and the development team.',
  focus: [
    'Product roadmap',
    'Backlog prioritization',
    'Sprint execution',
    'Stakeholder communication',
    'Technical execution',
  ],
  stats: [
    {
      target: 3.97,
      suffix: '/4.00',
      decimals: 2,
      label: 'Bachelor of Information Technology',
    },
    { target: 50, suffix: '+', label: 'Users in usability testing' },
    { target: 100, suffix: '+', label: 'Participants from 10+ universities' },
    { target: 100, suffix: '%', label: 'Tuition scholarship for 4 years' },
  ] satisfies PortfolioStat[],
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

export const experiences: Experience[] = [
  {
    company: 'PT InfantAI Teknologi Nusantara',
    location: 'North Jakarta, Indonesia',
    period: 'Sep 2025 - Present',
    role: 'Project Manager',
    description:
      'PT InfantAI Teknologi Nusantara is an AI-focused startup that develops digital solutions for parenting, early education, and financial news. Its products include Infant.AI, GeniusAI, and IFCNews, with a focus on using AI to support families, children, and data-driven information services.',
    highlights: [
      'Managed product roadmap, backlog prioritization, and sprint execution for IFCNews, Infant.AI, GeniusAI, Nordpartners, and Satglow Invent using Agile Scrum and Kanban.',
      'Collaborated with stakeholders, AI engineers, QA, and developers to define requirements, create user stories, and align development goals.',
      'Created and monitored backlog tickets, tracked project progress, coordinated sprint reviews, and maintained project documentation through Lark.',
      'Supported feature development for IFCNews, including Stocks, IPO, AI summarization, recommendation systems, SEO optimization, Google Search Console, sitemap.xml, and Google Analytics setup.',
      'Applied technical knowledge in Python, GoLang, MySQL, MongoDB, Railway, Cloudflare, Postman, deployment workflows, and CI/CD implementation to bridge business needs with technical execution.',
    ],
    tags: ['Agile Scrum', 'Kanban', 'AI', 'CI/CD', 'SEO'],
  },
  {
    company: 'PT Super Pasar Rakyat Indonesia (BRI Group)',
    location: 'Central Jakarta, Indonesia',
    period: 'Feb 2025 - Oct 2025',
    role: 'Full Stack Engineer Intern',
    description:
      'PT Super Pasar Rakyat Indonesia (PARI) is a BRI Group digital marketplace for agricultural commodities, focused on supporting farmers, breeders, fishermen, and micro-entrepreneurs through supply chain digitalization and wider market access.',
    highlights: [
      'Acted as a cross-functional intern across product management, project coordination, full stack development, and QA testing within Agile sprints.',
      'Supported financial feature development, including TopUp, Withdrawal, and Settlement, using Laravel, MySQL, Docker, and Redis.',
      'Managed sprint tasks, project timelines, and communication across product, design, and engineering teams.',
      'Designed, tested, and optimized system modules through structured QA workflows, performance tuning, and user feedback analysis.',
    ],
    tags: ['Laravel', 'MySQL', 'Docker', 'Redis', 'QA'],
  },
  {
    company: 'Moodscape',
    location: 'South Jakarta, Indonesia',
    period: 'Jan 2024 - Dec 2024',
    role: 'IT Product & Project Manager',
    description:
      'Moodscape is a Kemendikbudristek-funded mental health innovation project that develops an AI-powered mobile app to monitor emotional well-being using graphology, facial recognition, and machine learning.',
    highlights: [
      'Led product roadmap planning, feature prioritization, backlog management, and sprint execution using Agile Scrum.',
      'Collaborated with developers and UI/UX designers to build AI-based mood analysis features using machine learning.',
      'Conducted usability testing with 50+ users to gather insights and improve product experience.',
      'Used Jira, Confluence, and Notion to track project progress, document requirements, and align cross-functional teams.',
      'Secured full project funding from Kemendikbudristek and achieved national recognition in mental health technology innovation.',
    ],
    tags: ['Product Roadmap', 'Machine Learning', 'Jira', 'Confluence', 'Notion'],
  },
]

export const projects: Project[] = [
  {
    title: 'IFCNews',
    category: 'Financial news product',
    href: 'https://ifcnews.id',
    image: '/images/roadmap-dashboard.svg',
    summary:
      'Indonesian Financial Channel News product work covering Stocks, IPO, AI summarization, recommendation systems, SEO optimization, Google Search Console, sitemap.xml, and Google Analytics setup.',
    metrics: [
      { target: 5, suffix: '+', label: 'Product modules' },
      { target: 100, suffix: '%', label: 'SEO workflow setup' },
    ],
    tags: ['AI summarization', 'Stocks', 'IPO', 'SEO', 'Analytics'],
  },
  {
    title: 'Nordpartners',
    category: 'Property partnership platform',
    href: 'https://nordpartners.id',
    image: '/images/leadership-network.svg',
    summary:
      'Melbourne property partnership experience designed for strategic access, investor and agency communication, and premium ecosystem presentation.',
    metrics: [
      { target: 3, suffix: '+', label: 'Audience groups' },
      { target: 1, label: 'Strategic access flow' },
    ],
    tags: ['Property', 'Partnership', 'Investor', 'Agency'],
  },
  {
    title: "I'M LUXURY",
    category: 'Luxury storefront',
    href: 'https://im-luxury.yvrtz.workers.dev',
    image: '/images/mobile-research.svg',
    summary:
      'Luxury Within Reach storefront for curated premium bags, private guidance, personal shopping, product collections, and direct consultation flow.',
    metrics: [
      { target: 5, decimals: 1, suffix: '/5', label: 'Client rating visual' },
      { target: 6, label: 'Featured products' },
    ],
    tags: ['Luxury commerce', 'Catalog', 'WhatsApp flow', 'Brand experience'],
  },
]

export const education: Education = {
  institution: 'Universitas Siber Indonesia',
  location: 'TB Simatupang, South Jakarta',
  period: 'Sep 2022 - Sep 2026 (Expected)',
  degree: 'Bachelor of Information Technology, 3.97/4.00',
  highlights: [
    'Full-Ride Scholarship Awardee, received a 100% tuition scholarship for 4 years based on academic performance and leadership merit.',
    '1st Place Winner, Cyber Entrepreneur Product Innovation Competition, developed a Raspberry Pi and Nextcloud-based private cloud storage solution for SMEs and households.',
    'Published research on private cloud storage implementation using OwnCloud and Linux Ubuntu, available on Google Scholar.',
    'Published research on MSME growth prediction in West Java using linear regression, available on Google Scholar.',
    'Designed an IoT-based environmental monitoring system using NodeMCU, gas sensors, and climate sensors for real-time hazard monitoring.',
    'Speaker at Data Security Awareness Program, delivering cybersecurity awareness material to 50+ participants.',
  ],
}

export const organizations: Organization[] = [
  {
    name: 'Himpunan Mahasiswa Teknologi Informasi',
    location: 'Jakarta, Indonesia',
    period: 'Jul 2023 - Present',
    role: 'President HIMA',
    description:
      'Served as President of the Information Technology Student Association, leading academic and social development programs.',
    highlights: [
      "Organized company visits to XL Axiata and Allo Bank to expand members' industry insights.",
      'Led multiple community service initiatives focusing on digital literacy and cybersecurity awareness.',
      'Fostered collaboration among members through workshops, internal projects, and professional networking events.',
    ],
  },
  {
    name: 'Decompe 3.0',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2023 - Jan 2024',
    role: 'IT Infrastructure',
    description:
      'Decompe 3.0 is a national-scale UI/UX design competition organized by Cyber University, aiming to encourage innovation in digital product design and user experience.',
    highlights: [
      'Managed IT infrastructure setup and system operations for a national competition involving 100+ participants from 10+ universities.',
      'Coordinated with cross-functional teams to ensure seamless online and offline event execution.',
      'Supervised technical logistics and system configuration, ensuring 100% uptime during presentations and judging sessions.',
      'Designed and maintained event registration and data management systems, streamlining participant verification by 40%.',
      'Provided on-site and remote technical support, resolving system issues within an average of 5 minutes per report.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Product & Project',
    icon: BriefcaseBusiness,
    skills: [
      'Product roadmap',
      'Backlog prioritization',
      'Sprint execution',
      'Agile Scrum',
      'Kanban',
      'User stories',
      'Sprint reviews',
      'Project documentation',
      'Stakeholder communication',
      'QA workflows',
    ],
  },
  {
    title: 'Technical Stack',
    icon: Code2,
    skills: [
      'Python',
      'GoLang',
      'MySQL',
      'MongoDB',
      'Laravel',
      'Docker',
      'Redis',
      'Railway',
      'Cloudflare',
      'Postman',
      'CI/CD implementation',
      'Deployment workflows',
    ],
  },
  {
    title: 'AI & Product Growth',
    icon: BrainCircuit,
    skills: [
      'AI summarization',
      'Recommendation systems',
      'Machine learning',
      'SEO optimization',
      'Google Search Console',
      'sitemap.xml',
      'Google Analytics setup',
      'Performance tuning',
      'User feedback analysis',
    ],
  },
  {
    title: 'Certifications & Learning',
    icon: ShieldCheck,
    skills: [
      'Web Development (Front End) - Dibimbing.id',
      'Data Science - DQLab',
      'Bootcamp Product Management - MySkill',
      'Intro to UX Research - MySkill',
      'Data Science - Dicoding',
      'Cyber Security Awareness Profesional Certification',
      'Structured Query Language Intermediate - HackerRank',
    ],
  },
]

export const signaturePoints = [
  {
    title: 'AI-focused startup delivery',
    detail: 'Infant.AI, GeniusAI, IFCNews, Nordpartners, and Satglow Invent.',
    icon: Sparkles,
  },
  {
    title: 'Cross-functional bridge',
    detail: 'Stakeholders, AI engineers, QA, developers, product, and design.',
    icon: UsersRound,
  },
  {
    title: 'Academic foundation',
    detail: 'Bachelor of Information Technology with 3.97/4.00 GPA.',
    icon: GraduationCap,
  },
]
