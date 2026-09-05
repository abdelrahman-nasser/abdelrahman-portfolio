import { Component } from '@angular/core';

import { portfolioCertificationProviders } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import type { CertificationProvider } from '../../../models/certification.models';

@Component({
  imports: [PageContainer],
  selector: 'app-certifications',
  styleUrl: './certifications.scss',
  templateUrl: './certifications.html',
})
export class Certifications {
  protected readonly providers: readonly CertificationProvider[] = portfolioCertificationProviders;
}
