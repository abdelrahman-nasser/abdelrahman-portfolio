import { Component } from '@angular/core';

import { professionalSnapshot } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';

@Component({
  imports: [PageContainer],
  selector: 'app-professional-snapshot',
  styleUrl: './professional-snapshot.scss',
  templateUrl: './professional-snapshot.html',
})
export class ProfessionalSnapshot {
  protected readonly items = professionalSnapshot;
}
