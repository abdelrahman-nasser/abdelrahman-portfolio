import type { AiAugmentedEngineering, EngineeringPrinciple } from '../models/content.models';

export const engineeringPrinciples = [
  {
    id: 'architecture-before-complexity',
    title: 'Architecture before accidental complexity',
    description:
      'Choose structures and patterns that solve real product and operational constraints while keeping the system understandable.',
  },
  {
    id: 'evidence-driven-engineering',
    title: 'Evidence-driven engineering',
    description:
      'Validate assumptions with requirements, system behavior, and tests before committing to a technical direction.',
  },
  {
    id: 'build-for-maintainability',
    title: 'Build for maintainability',
    description:
      'Use clear boundaries, readable code, appropriate abstractions, review, tests, and documentation to support long-lived systems.',
  },
  {
    id: 'production-behavior-matters',
    title: 'Security and production behavior matter',
    description:
      'Treat security, performance, reliability, and troubleshooting as part of engineering ownership from the start.',
  },
  {
    id: 'reusable-infrastructure',
    title: 'Reusable infrastructure over repeated implementation',
    description:
      'Extract stable shared behavior when it reduces duplication while leaving business-specific rules with their features.',
  },
  {
    id: 'human-owned-ai-acceleration',
    title: 'Human ownership with AI acceleration',
    description:
      'Use AI to move faster while keeping architecture, validation, security, and final engineering decisions human-owned.',
  },
] as const satisfies readonly EngineeringPrinciple[];

export const aiAugmentedEngineering = {
  id: 'ai-augmented-engineering',
  title: 'AI-Augmented Development',
  statement:
    'I use AI coding agents to accelerate research, technical planning, implementation, refactoring, debugging, testing, documentation, and code review while retaining human ownership of architecture, validation, security, business logic, and final engineering decisions.',
  capabilities: [
    'Agentic coding workflows',
    'AI coding agents',
    'AI-assisted planning',
    'Refactoring',
    'Debugging',
    'Testing',
    'Code review',
    'Technical documentation',
  ],
  workflow: [
    'Requirements',
    'Analysis',
    'Architecture',
    'Task Breakdown',
    'AI Assistance',
    'Validation',
    'Human Review',
    'CI/CD',
  ],
  humanResponsibilities: [
    'Architecture',
    'Validation',
    'Security',
    'Business logic',
    'Final engineering decisions',
  ],
} as const satisfies AiAugmentedEngineering;
