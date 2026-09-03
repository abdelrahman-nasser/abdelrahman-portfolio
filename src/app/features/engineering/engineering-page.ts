import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { aiAugmentedEngineering, engineeringPrinciples, expertiseGroups } from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import type { AiAugmentedEngineering, EngineeringPrinciple } from '../../models/content.models';
import type { ExpertiseGroup } from '../../models/expertise.models';

@Component({
  imports: [PageContainer, RouterLink],
  selector: 'app-engineering-page',
  styleUrl: './engineering-page.scss',
  templateUrl: './engineering-page.html',
})
export class EngineeringPage {
  protected readonly expertiseGroups: readonly ExpertiseGroup[] = expertiseGroups;
  protected readonly principles: readonly EngineeringPrinciple[] = engineeringPrinciples;
  protected readonly ai: AiAugmentedEngineering = aiAugmentedEngineering;
}
