import type { ProjectCaseStudy } from '../../models/project.models';
import { uplandFileBoundCaseStudy } from './upland-filebound.content';

export { uplandFileBoundCaseStudy } from './upland-filebound.content';

export const projectCaseStudies = [
  uplandFileBoundCaseStudy,
] as const satisfies readonly ProjectCaseStudy[];

export function findProjectCaseStudy(projectId: string): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((caseStudy) => caseStudy.projectId === projectId);
}
