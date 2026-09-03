import type { ProjectCaseStudy } from '../../models/project.models';
import { mojLawyerLicensingCaseStudy } from './moj-lawyer-licensing.content';
import { scegaEventLicensingCaseStudy } from './scega-event-licensing.content';
import { uplandFileBoundCaseStudy } from './upland-filebound.content';

export { mojLawyerLicensingCaseStudy } from './moj-lawyer-licensing.content';
export { scegaEventLicensingCaseStudy } from './scega-event-licensing.content';
export { uplandFileBoundCaseStudy } from './upland-filebound.content';

export const projectCaseStudies = [
  uplandFileBoundCaseStudy,
  mojLawyerLicensingCaseStudy,
  scegaEventLicensingCaseStudy,
] as const satisfies readonly ProjectCaseStudy[];

export function findProjectCaseStudy(projectId: string): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((caseStudy) => caseStudy.projectId === projectId);
}
