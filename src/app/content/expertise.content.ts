import type { ExpertiseGroup } from '../models/expertise.models';

export const expertiseGroups = [
  {
    id: 'backend-platform',
    title: 'Backend & Platform',
    items: [
      'C#',
      '.NET / .NET Core',
      'ASP.NET Core',
      'REST APIs',
      'Entity Framework / EF Core',
      'Dapper',
      'Microservices',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'Vue.js', 'React', 'HTML', 'CSS / SCSS'],
  },
  {
    id: 'architecture-distributed-systems',
    title: 'Architecture & Distributed Systems',
    items: [
      'Software Architecture',
      'Microservices',
      'Distributed Systems',
      'REST API Design',
      'Clean / Onion Architecture',
      'CQRS',
      'Caching',
      'Performance Optimization',
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: ['SQL Server', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
  },
  {
    id: 'devops-delivery',
    title: 'DevOps & Delivery',
    items: ['Docker', 'Kubernetes', 'Azure DevOps', 'Git', 'CI/CD', 'IIS'],
  },
  {
    id: 'engineering-leadership',
    title: 'Engineering Leadership',
    items: [
      'Code Review',
      'Mentoring',
      'Technical Decision-Making',
      'Feature Ownership',
      'Architecture Guidance',
    ],
  },
  {
    id: 'ai-augmented-development',
    title: 'AI-Augmented Development',
    items: [
      'Agentic coding workflows',
      'AI coding agents',
      'AI-assisted planning',
      'Refactoring',
      'Debugging',
      'Testing',
      'Code review',
      'Technical documentation',
    ],
  },
] as const satisfies readonly ExpertiseGroup[];
