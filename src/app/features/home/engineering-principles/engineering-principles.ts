import { Component } from '@angular/core';

import { engineeringPrinciples } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import type { EngineeringPrinciple } from '../../../models/content.models';

@Component({
  imports: [PageContainer],
  selector: 'app-engineering-principles',
  styleUrl: './engineering-principles.scss',
  templateUrl: './engineering-principles.html',
})
export class EngineeringPrinciples {
  protected readonly principles: readonly EngineeringPrinciple[] = engineeringPrinciples;
}
