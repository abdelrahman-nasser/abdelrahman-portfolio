import { portfolioProjects } from '../../../content';
import type { PortfolioProject } from '../../../models/project.models';

type CanonicalPortfolioProject = (typeof portfolioProjects)[number];

export type PortfolioProjectId = CanonicalPortfolioProject['id'];

export interface ProjectDetailRouteData {
  readonly projectId: PortfolioProjectId;
}

export const PROJECT_DETAIL_PROJECT_ID_KEY: keyof ProjectDetailRouteData = 'projectId';

export function resolvePortfolioProject(projectId: unknown): PortfolioProject {
  const project = portfolioProjects.find((candidate) => candidate.id === projectId);

  if (!project) {
    throw new Error(`Project detail route references an unknown project ID: ${String(projectId)}`);
  }

  return project;
}
