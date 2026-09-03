import type { ProfessionalSnapshotItem } from '../models/snapshot.models';

export const professionalSnapshot = [
  {
    value: '10+ Years',
    label: 'Software Engineering',
    description: 'Enterprise applications, SaaS platforms, and government digital services.',
  },
  {
    value: 'Nearly 5 Years',
    label: 'Enterprise SaaS',
    description:
      'Contributing to Upland FileBound across APIs, workflow, integrations, security, and production engineering.',
  },
  {
    value: '.NET + Angular',
    label: 'Full-Stack Engineering',
    description: 'Backend, frontend, APIs, data, architecture, and end-to-end feature ownership.',
  },
  {
    value: 'Architecture + Leadership',
    label: 'Senior Engineering Scope',
    description:
      'Technical decisions, mentoring, code review, reusable engineering infrastructure, and delivery ownership.',
  },
] as const satisfies readonly ProfessionalSnapshotItem[];
