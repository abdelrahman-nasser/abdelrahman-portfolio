import { Component, inject } from '@angular/core';

import { SeoService } from './core/seo/seo.service';
import { AppShell } from './layout/app-shell/app-shell';

@Component({
  imports: [AppShell],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.start();
  }
}
