import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { portfolioProfile } from '../../content/profile.content';
import { SEO_ROUTE_DATA_KEY, SeoMetadata } from './seo.models';

export const DEFAULT_ROBOTS_CONTENT = 'index, follow';

export const FALLBACK_SEO_METADATA: SeoMetadata = {
  title: 'Abdelrahman Hegab | Senior Software Engineer',
  description:
    'Senior Software Engineer with 10+ years of experience in .NET, Angular, software architecture, enterprise SaaS, and government digital platforms.',
};

const PERSON_STRUCTURED_DATA_ATTRIBUTE = 'data-person-structured-data';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private started = false;

  start(): void {
    if (this.started) {
      return;
    }

    this.started = true;
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.applyCurrentRouteMetadata());

    if (this.router.navigated) {
      this.applyCurrentRouteMetadata();
    }
  }

  private applyCurrentRouteMetadata(): void {
    const metadata = this.findDeepestSeoMetadata(this.router.routerState.snapshot.root);

    this.applyMetadata(metadata ?? FALLBACK_SEO_METADATA);
  }

  private findDeepestSeoMetadata(root: ActivatedRouteSnapshot): SeoMetadata | undefined {
    let current: ActivatedRouteSnapshot | null = root;
    let metadata: SeoMetadata | undefined;

    while (current) {
      const candidate = current.data[SEO_ROUTE_DATA_KEY];

      if (this.isSeoMetadata(candidate)) {
        metadata = candidate;
      }

      current = current.firstChild;
    }

    return metadata;
  }

  private isSeoMetadata(value: unknown): value is SeoMetadata {
    if (value === null || typeof value !== 'object') {
      return false;
    }

    const candidate = value as Partial<SeoMetadata>;

    return (
      typeof candidate.title === 'string' &&
      candidate.title.trim().length > 0 &&
      typeof candidate.description === 'string' &&
      candidate.description.trim().length > 0
    );
  }

  private applyMetadata(metadata: SeoMetadata): void {
    this.title.setTitle(metadata.title);
    this.setNamedMeta('description', metadata.description);
    this.setNamedMeta('robots', DEFAULT_ROBOTS_CONTENT);
    this.updatePersonStructuredData(metadata.structuredData === 'person');
  }

  private setNamedMeta(name: 'description' | 'robots', content: string): void {
    const selector = `name="${name}"`;
    const existingTags = this.meta.getTags(selector);

    if (existingTags.length === 0) {
      this.meta.addTag({ name, content });
      return;
    }

    this.meta.updateTag({ name, content }, selector);

    for (const duplicate of existingTags.slice(1)) {
      this.meta.removeTagElement(duplicate);
    }
  }

  private updatePersonStructuredData(includePerson: boolean): void {
    const scripts = Array.from(
      this.document.head.querySelectorAll<HTMLScriptElement>(
        `script[${PERSON_STRUCTURED_DATA_ATTRIBUTE}]`,
      ),
    );

    if (!includePerson) {
      for (const script of scripts) {
        script.remove();
      }

      return;
    }

    const script = scripts[0] ?? this.document.createElement('script');

    script.type = 'application/ld+json';
    script.setAttribute(PERSON_STRUCTURED_DATA_ATTRIBUTE, '');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: portfolioProfile.name,
      jobTitle: portfolioProfile.role,
      sameAs: [portfolioProfile.linkedin, portfolioProfile.github],
    });

    if (!script.parentNode) {
      this.document.head.appendChild(script);
    }

    for (const duplicate of scripts.slice(1)) {
      duplicate.remove();
    }
  }
}
