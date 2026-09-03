import { Component } from '@angular/core';

import { portfolioCredentials } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import type { CredentialItem } from '../../../models/credential.models';

@Component({
  imports: [PageContainer],
  selector: 'app-credentials',
  styleUrl: './credentials.scss',
  templateUrl: './credentials.html',
})
export class Credentials {
  protected readonly credentials: readonly CredentialItem[] = portfolioCredentials;
}
