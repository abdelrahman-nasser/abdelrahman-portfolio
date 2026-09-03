import { Component } from '@angular/core';

import { expertiseGroups } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import type { ExpertiseGroup } from '../../../models/expertise.models';

@Component({
  imports: [PageContainer],
  selector: 'app-engineering-expertise',
  styleUrl: './engineering-expertise.scss',
  templateUrl: './engineering-expertise.html',
})
export class EngineeringExpertise {
  protected readonly groups: readonly ExpertiseGroup[] = expertiseGroups;
}
