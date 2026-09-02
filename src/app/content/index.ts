import { portfolioCredentials } from './credentials.content';
import { aiAugmentedEngineering, engineeringPrinciples } from './engineering.content';
import { portfolioExperience } from './experience.content';
import { expertiseGroups } from './expertise.content';
import { portfolioProfile } from './profile.content';
import { portfolioProjects } from './projects.content';

export { portfolioCredentials } from './credentials.content';
export { aiAugmentedEngineering, engineeringPrinciples } from './engineering.content';
export { portfolioExperience } from './experience.content';
export { expertiseGroups } from './expertise.content';
export { portfolioProfile } from './profile.content';
export { portfolioProjects } from './projects.content';

export const publicPortfolioContent = {
  profile: portfolioProfile,
  projects: portfolioProjects,
  experience: portfolioExperience,
  expertise: expertiseGroups,
  credentials: portfolioCredentials,
  engineeringPrinciples,
  aiAugmentedEngineering,
} as const;
