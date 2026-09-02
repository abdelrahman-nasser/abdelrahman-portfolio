import type { PortfolioProfile } from '../models/profile.models';

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
  website: 'https://abdelrahman-nasser.github.io',
  linkedin: 'https://linkedin.com/in/abdelrahman-nasser',
  github: 'https://github.com/abdelrahman-nasser',
} as const satisfies PortfolioProfile;
