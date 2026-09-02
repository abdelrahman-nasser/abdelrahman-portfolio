import type { ExperienceItem } from '../models/experience.models';

export const portfolioExperience = [
  {
    id: 'three-pillars',
    company: 'Three Pillars',
    role: 'Senior Software Engineer',
    location: 'Cairo, Egypt',
    summary:
      'Worked on enterprise .NET and Angular solutions supporting digital-transformation initiatives for Saudi government entities, including the Ministry of Justice and SCEGA.',
    highlights: [
      'Designed and developed scalable backend services and REST APIs.',
      'Contributed to architecture, authentication, authorization, and data-access decisions.',
      'Owned complex features end-to-end and supported code review and mentoring.',
    ],
    technologies: ['.NET', 'ASP.NET Core', 'Angular', 'Microservices', 'EF Core', 'SQL Server'],
    startDate: '2024-02',
    endDate: '2025-06',
  },
  {
    id: 'flairstech-upland-software',
    company: 'FlairsTech (Upland Software)',
    role: 'Senior Software Engineer',
    location: 'Remote, USA',
    summary:
      "Core engineer on Upland Software's FileBound, a mature enterprise SaaS platform for document management, workflow automation, forms, integrations, and business-process automation.",
    highlights: [
      'Contributed across backend services, web applications, APIs, data access, and integrations.',
      'Owned features through analysis, implementation, review, optimization, and production support.',
      'Worked with technical debt, backward compatibility, performance, and reliability.',
    ],
    technologies: ['.NET', 'ASP.NET MVC/Web API', 'SQL Server', 'Dapper', 'Angular'],
    startDate: '2019-09',
    endDate: '2024-02',
  },
  {
    id: 'orch-tech',
    company: 'OrchTech',
    role: 'Senior Software Engineer',
    location: 'Giza, Egypt',
    summary:
      'Designed and developed enterprise web and backend solutions for commercial and government clients.',
    highlights: [
      'Built REST APIs, business services, database components, integrations, and web applications.',
      'Developed backend services and integrations for mobile applications.',
      'Investigated application and database performance and improved production reliability.',
    ],
    technologies: ['.NET', 'REST APIs', 'SQL Server'],
    startDate: '2018-03',
    endDate: '2019-09',
  },
  {
    id: 'matrix-business-solutions',
    company: 'Matrix Business Solutions',
    role: 'Software Engineer',
    location: 'Cairo, Egypt',
    summary:
      'Developed enterprise HR and business-management applications using .NET and SQL Server.',
    highlights: [
      'Worked on employee management, attendance, payroll, authorization, and reporting modules.',
      'Developed Microsoft Dynamics AX customizations and internal business-system integrations.',
    ],
    technologies: ['.NET', 'SQL Server', 'Microsoft Dynamics AX'],
    startDate: '2016-09',
    endDate: '2018-03',
  },
  {
    id: 'new-horizons-clc',
    company: 'New Horizons CLC',
    role: 'Microsoft .NET Trainer',
    location: 'Cairo, Egypt',
    summary:
      'Delivered Microsoft technical training to engineers and technical professionals from private-sector and government organizations across the MENA region.',
    highlights: ['Delivered training in C#, .NET, ASP.NET MVC, SQL Server, and web development.'],
    technologies: ['C#', '.NET', 'ASP.NET MVC', 'SQL Server'],
    startDate: '2016',
    endDate: '2016',
  },
] as const satisfies readonly ExperienceItem[];
