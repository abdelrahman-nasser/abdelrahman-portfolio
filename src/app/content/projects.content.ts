import type { PortfolioProject } from '../models/project.models';

export const portfolioProjects = [
  {
    id: 'upland-filebound',
    slug: 'upland-filebound',
    title: 'Upland FileBound',
    subtitle: 'Enterprise SaaS · Document & Workflow Automation',
    summary:
      'Nearly five years contributing across backend APIs, integrations, workflow, eForms, security, performance, testing infrastructure, and production support on a mature enterprise SaaS platform.',
    featured: true,
    order: 1,
    tags: [
      '.NET',
      'ASP.NET MVC/Web API',
      'SQL Server',
      'Dapper',
      'Angular',
      'SaaS',
      'Integrations',
    ],
    route: '/projects/upland-filebound',
    kind: 'enterprise-saas',
  },
  {
    id: 'moj-lawyer-licensing',
    slug: 'moj-lawyer-licensing',
    title: 'Saudi Ministry of Justice — Lawyer Licensing Platform',
    subtitle: 'Government Digital Services · Full-Stack · Integrations',
    summary:
      'Senior full-stack engineering on a government lawyer-licensing platform, including enterprise integrations, ASP.NET Core APIs, Vue/TypeScript route architecture, secure cross-system redirects, shared components, and release support.',
    featured: false,
    order: 2,
    tags: [
      '.NET 8',
      'ASP.NET Core',
      'EF Core',
      'Vue.js',
      'TypeScript',
      'Micro Frontend',
      'Integrations',
    ],
    route: '/projects/moj-lawyer-licensing',
    kind: 'government-digital-service',
  },
  {
    id: 'scega-event-licensing',
    slug: 'scega-event-licensing',
    title: 'SCEGA — Government Event Licensing Platform',
    subtitle: 'Saudi Government · Angular 19 · .NET 9',
    summary:
      'Full-stack contribution to a Saudi government event-licensing platform. Designed reusable Angular infrastructure including a configurable multi-step wizard, server-backed file upload, shared form controls, and validation patterns; also contributed .NET authentication architecture, CQRS workflows, and backend refactoring.',
    featured: false,
    order: 3,
    tags: [
      'Angular 19',
      'TypeScript',
      '.NET 9',
      'PrimeNG',
      'EF Core',
      'CQRS / MediatR',
      'SQL Server',
    ],
    route: '/projects/scega-event-licensing',
    kind: 'government-digital-service',
  },
] as const satisfies readonly PortfolioProject[];
