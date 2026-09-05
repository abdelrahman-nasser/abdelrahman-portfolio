import { aboutPageContent } from './about.content';
import { portfolioCertificationProviders } from './certifications.content';
import { aiAugmentedEngineering, engineeringPrinciples } from './engineering.content';
import { portfolioExperience } from './experience.content';
import { expertiseGroups } from './expertise.content';
import { portfolioProfile } from './profile.content';
import { projectCaseStudies } from './project-case-studies';
import { portfolioProjects } from './projects.content';
import { professionalSnapshot } from './snapshot.content';

export { aboutPageContent } from './about.content';
export {
  canonicalMicrosoftCertifications,
  microsoftCertificationProvider,
  microsoftTranscriptVerification,
  portfolioCertificationProviders,
  portfolioCertifications,
} from './certifications.content';
export { aiAugmentedEngineering, engineeringPrinciples } from './engineering.content';
export { portfolioExperience } from './experience.content';
export { expertiseGroups } from './expertise.content';
export { portfolioProfile } from './profile.content';
export {
  findProjectCaseStudy,
  mojLawyerLicensingCaseStudy,
  projectCaseStudies,
  scegaEventLicensingCaseStudy,
  uplandFileBoundCaseStudy,
} from './project-case-studies';
export { portfolioProjects } from './projects.content';
export { professionalSnapshot } from './snapshot.content';

export const publicPortfolioContent = {
  about: aboutPageContent,
  profile: portfolioProfile,
  professionalSnapshot,
  projects: portfolioProjects,
  projectCaseStudies,
  experience: portfolioExperience,
  expertise: expertiseGroups,
  certifications: portfolioCertificationProviders,
  engineeringPrinciples,
  aiAugmentedEngineering,
} as const;
