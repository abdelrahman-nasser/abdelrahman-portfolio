import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageContainer } from '../../../layout/page-container/page-container';

@Component({
  imports: [PageContainer, RouterLink],
  selector: 'app-contact-cta',
  styleUrl: './contact-cta.scss',
  templateUrl: './contact-cta.html',
})
export class ContactCta {
  protected readonly supportingCopy =
    "I'm open to senior engineering and technical leadership opportunities focused on scalable systems, strong delivery, and practical software architecture.";
}
