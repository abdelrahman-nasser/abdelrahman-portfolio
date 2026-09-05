import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { portfolioProfile } from '../../content/profile.content';
import { SEO_ROUTE_DATA_KEY, SeoMetadata } from './seo.models';

export const DEFAULT_ROBOTS_CONTENT = 'index, follow';
export const OPEN_GRAPH_TYPE = 'website';
export const SOCIAL_IMAGE_ALT = 'Abdelrahman Hegab — Senior Software Engineer portfolio';
export const SOCIAL_IMAGE_HEIGHT = '630';
export const SOCIAL_IMAGE_PATH = '/assets/social/portfolio-og.png';
export const SOCIAL_IMAGE_WIDTH = '1200';
export const SOCIAL_SITE_NAME = portfolioProfile.name;
export const TWITTER_CARD_TYPE = 'summary_large_image';

export const HIDDEN_TAB_TITLE = 'Come back 👋 | Abdelrahman Hegab';
export const SOCIAL_IMAGE_URL = new URL(
  SOCIAL_IMAGE_PATH,
  `${portfolioProfile.website}/`,
).toString();

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
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private started = false;
  private currentRouteTitle = FALLBACK_SEO_METADATA.title;

  get activeRouteTitle(): string {
    return this.currentRouteTitle;
  }

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

    this.initializeVisibilityListener();
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
    const routeUrl = buildSocialRouteUrl(this.router.url);

    this.currentRouteTitle = metadata.title;

    if (this.isDocumentHidden()) {
      this.title.setTitle(HIDDEN_TAB_TITLE);
    } else {
      this.title.setTitle(metadata.title);
    }

    this.setNamedMeta('description', metadata.description);
    this.setNamedMeta('robots', DEFAULT_ROBOTS_CONTENT);
    this.applySocialMetadata(metadata, routeUrl);
    this.updateCanonicalLink(routeUrl);
    this.updatePersonStructuredData(metadata.structuredData === 'person');
  }

  private initializeVisibilityListener(): void {
    if (!this.isBrowser) {
      return;
    }

    this.document.addEventListener('visibilitychange', this.handleVisibilityChange);

    this.destroyRef.onDestroy(() => {
      this.document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    });
  }

  private readonly handleVisibilityChange = (): void => {
    if (this.isDocumentHidden()) {
      this.title.setTitle(HIDDEN_TAB_TITLE);
      return;
    }

    this.title.setTitle(this.currentRouteTitle);
  };

  private isDocumentHidden(): boolean {
    if (!this.isBrowser) {
      return false;
    }

    return Boolean(this.document.hidden || this.document.visibilityState === 'hidden');
  }

  private applySocialMetadata(metadata: SeoMetadata, routeUrl: string): void {
    this.setPropertyMeta('og:type', OPEN_GRAPH_TYPE);
    this.setPropertyMeta('og:site_name', SOCIAL_SITE_NAME);
    this.setPropertyMeta('og:title', metadata.title);
    this.setPropertyMeta('og:description', metadata.description);
    this.setPropertyMeta('og:url', routeUrl);
    this.setPropertyMeta('og:image', SOCIAL_IMAGE_URL);
    this.setPropertyMeta('og:image:width', SOCIAL_IMAGE_WIDTH);
    this.setPropertyMeta('og:image:height', SOCIAL_IMAGE_HEIGHT);
    this.setPropertyMeta('og:image:alt', SOCIAL_IMAGE_ALT);

    this.setNamedMeta('twitter:card', TWITTER_CARD_TYPE);
    this.setNamedMeta('twitter:title', metadata.title);
    this.setNamedMeta('twitter:description', metadata.description);
    this.setNamedMeta('twitter:image', SOCIAL_IMAGE_URL);
    this.setNamedMeta('twitter:image:alt', SOCIAL_IMAGE_ALT);
  }

  private updateCanonicalLink(canonicalUrl: string): void {
    const existingLinks = Array.from(
      this.document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'),
    );

    const link = existingLinks[0] ?? this.document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);

    if (!link.parentNode) {
      this.document.head.appendChild(link);
    }

    for (const duplicate of existingLinks.slice(1)) {
      duplicate.remove();
    }
  }

  private setNamedMeta(name: string, content: string): void {
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

  private setPropertyMeta(property: string, content: string): void {
    const selector = `property="${property}"`;
    const existingTags = this.meta.getTags(selector);

    if (existingTags.length === 0) {
      this.meta.addTag({ property, content });
      return;
    }

    this.meta.updateTag({ property, content }, selector);

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

export function buildSocialRouteUrl(routerUrl: string): string {
  const routePath = routerUrl.split(/[?#]/, 1)[0] || '/';
  const trimmed = routePath.replace(/^\/+|\/+$/g, '');
  const normalizedPath = trimmed.length === 0 ? '/' : `/${trimmed}/`;

  return new URL(normalizedPath, `${portfolioProfile.website}/`).toString();
}
