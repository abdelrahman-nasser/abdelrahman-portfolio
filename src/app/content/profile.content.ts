import type { PortfolioProfile } from '../models/profile.models';

export const engineeringProfile = {
  heading: 'ENGINEERING PROFILE',
  label: 'SENIOR ENGINEER',
  rows: [
    { number: '01', category: 'EXPERIENCE', value: '10+ Years' },
    { number: '02', category: 'CORE STACK', value: '.NET + Angular' },
    { number: '03', category: 'SYSTEMS', value: 'Enterprise + SaaS' },
    { number: '04', category: 'FOCUS', value: 'Architecture + APIs' },
  ],
} as const;

export const portfolioProfile = {
  name: 'Abdelrahman Hegab',
  role: 'Senior Software Engineer',
  headline: 'Senior Software Engineer | .NET & Angular | Software Architecture & Microservices',
  supportLine: 'Building scalable enterprise, SaaS, and government digital platforms.',
  summary:
    "Senior Software Engineer with 10+ years of experience designing and delivering enterprise applications, SaaS platforms, and government digital services using .NET and Angular. Strong background in software architecture, microservices, REST APIs, SQL Server/PostgreSQL, distributed systems, performance optimization, and end-to-end feature ownership. Nearly five years contributing to Upland Software's FileBound SaaS platform, alongside extensive experience delivering solutions for Saudi government entities and mentoring engineers.",
  location: 'Cairo, Egypt',
  email: 'abdelrahman.n.hegab@outlook.com',
  phone: '+20 1010 200 471',
  website: 'https://abdelrahman-hegab.pages.dev',
  linkedin: 'https://linkedin.com/in/abdelrahman-nasser',
  github: 'https://github.com/abdelrahman-nasser',
} as const satisfies PortfolioProfile;
