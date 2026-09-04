import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { aboutPageContent, aiAugmentedEngineering, portfolioProfile } from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import type { AboutPageContent } from '../../models/about.models';
import type { AiAugmentedEngineering } from '../../models/content.models';
import type { PortfolioProfile } from '../../models/profile.models';

@Component({
  imports: [PageContainer, RouterLink],
  selector: 'app-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  protected readonly profile: PortfolioProfile = portfolioProfile;
  protected readonly content: AboutPageContent = aboutPageContent;
  protected readonly ai: AiAugmentedEngineering = aiAugmentedEngineering;
}
