import type { AboutPageContent } from '../models/about.models';

export const aboutPageContent = {
  story: [
    'My career began with a foundation in Microsoft technologies and work as a Microsoft .NET Trainer. Teaching engineers and technical professionals made knowledge sharing part of how I approach engineering, even after moving fully into software development.',
    "From there, I progressed through enterprise application development into senior full-stack engineering. My work has covered commercial and government systems, nearly five years contributing to Upland Software's FileBound SaaS platform with a US-based product organization, and later Saudi government digital-transformation initiatives.",
    'Those environments shaped an approach centered on reliable delivery, clear architecture, maintainable systems, and close collaboration across engineering, product, QA, DevOps, and business or government stakeholders.',
  ],
  workIntro:
    'My strongest work sits where product needs, technical depth, and long-term system health meet.',
  workAreas: [
    {
      id: 'enterprise-saas',
      title: 'Enterprise & SaaS platforms',
      description:
        'Long-lived products where maintainability, workflow, backward compatibility, performance, and production reliability matter.',
    },
    {
      id: 'government-services',
      title: 'Government digital services',
      description:
        'Full-stack platforms that bring together backend services, Angular applications, data access, authentication, and integrations.',
    },
    {
      id: 'apis-integrations',
      title: 'APIs & integrations',
      description:
        'REST APIs and integration-heavy services that connect product workflows, data, and external systems.',
    },
    {
      id: 'architecture-data',
      title: 'Architecture & data',
      description:
        'Software architecture, distributed systems, SQL Server and PostgreSQL, with performance optimization treated as part of delivery.',
    },
  ],
  contributionIntro:
    'Beyond implementation, I focus on the decisions and practices that help software remain dependable as products and teams evolve.',
  contributionAreas: [
    {
      id: 'end-to-end-ownership',
      title: 'Own outcomes end to end',
      description:
        'Carry complex features from requirements analysis and technical design through implementation, testing, deployment, production support, and troubleshooting.',
    },
    {
      id: 'purposeful-architecture',
      title: 'Make architecture serve the product',
      description:
        'Choose clear boundaries and appropriate abstractions that address real constraints without adding accidental complexity.',
    },
    {
      id: 'production-quality',
      title: 'Protect production quality',
      description:
        'Treat security, performance, reliability, testing, and maintainability as engineering responsibilities from the start.',
    },
    {
      id: 'technical-leadership',
      title: 'Strengthen the engineering team',
      description:
        'Use code review, mentoring, technical guidance, and cross-functional collaboration to help teams make sound decisions and deliver consistently.',
    },
  ],
  closing: {
    title: 'Explore the Work Behind the Story',
    description:
      'See the career context and project case studies behind this professional journey, or get in touch to discuss an engineering opportunity.',
  },
} as const satisfies AboutPageContent;
