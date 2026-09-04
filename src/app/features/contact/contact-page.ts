import { Component } from '@angular/core';

import { portfolioProfile } from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import type { PortfolioProfile } from '../../models/profile.models';

@Component({
  imports: [PageContainer],
  selector: 'app-contact-page',
  styleUrl: './contact-page.scss',
  templateUrl: './contact-page.html',
})
export class ContactPage {
  protected readonly profile: PortfolioProfile = portfolioProfile;
  protected readonly emailHref = `mailto:${portfolioProfile.email}`;
  protected readonly phoneHref = portfolioProfile.phone
    ? `tel:${portfolioProfile.phone.replace(/\s+/g, '')}`
    : undefined;
}
