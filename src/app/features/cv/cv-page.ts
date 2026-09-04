import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  expertiseGroups,
  portfolioCredentials,
  portfolioExperience,
  portfolioProfile,
} from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import type { CredentialItem } from '../../models/credential.models';
import type { ExperienceItem } from '../../models/experience.models';
import type { ExpertiseGroup } from '../../models/expertise.models';
import type { PortfolioProfile } from '../../models/profile.models';

const cvDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

@Component({
  imports: [PageContainer, RouterLink],
  selector: 'app-cv-page',
  styleUrl: './cv-page.scss',
  templateUrl: './cv-page.html',
})
export class CvPage {
  protected readonly profile: PortfolioProfile = portfolioProfile;
  protected readonly experiences: readonly ExperienceItem[] = portfolioExperience;
  protected readonly expertise: readonly ExpertiseGroup[] = expertiseGroups;
  protected readonly credentials: readonly CredentialItem[] = portfolioCredentials;
  protected readonly emailHref = `mailto:${portfolioProfile.email}`;
  protected readonly phoneHref = portfolioProfile.phone
    ? `tel:${portfolioProfile.phone.replace(/\s+/g, '')}`
    : undefined;

  protected formatDate(value: string): string {
    const [year, month] = value.split('-').map(Number);

    if (month === undefined) {
      return value;
    }

    return cvDateFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
  }
}
