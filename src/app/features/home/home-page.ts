import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { portfolioProfile } from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import { ProfessionalSnapshot } from './professional-snapshot/professional-snapshot';
import { SelectedWork } from './selected-work/selected-work';

@Component({
  imports: [PageContainer, ProfessionalSnapshot, RouterLink, SelectedWork],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly profile = portfolioProfile;
  protected readonly positioning = portfolioProfile.headline
    .split(' | ')
    .filter((part) => part !== portfolioProfile.role)
    .join(' \u00b7 ');
}
