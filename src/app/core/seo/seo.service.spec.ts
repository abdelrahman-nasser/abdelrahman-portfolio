import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter, Router, Routes } from '@angular/router';

import { portfolioProfile } from '../../content/profile.content';
import { SeoRouteData } from './seo.models';
import { DEFAULT_ROBOTS_CONTENT, FALLBACK_SEO_METADATA, SeoService } from './seo.service';

@Component({ template: '' })
class TestPage {}

const homeMetadata = {
  title: 'Home test title',
  description: 'Home test description',
  structuredData: 'person',
} as const;

const otherMetadata = {
  title: 'Other test title',
  description: 'Other test description',
} as const;

const testRoutes: Routes = [
  {
    path: '',
    component: TestPage,
    data: { seo: homeMetadata } satisfies SeoRouteData,
  },
  {
    path: 'other',
    component: TestPage,
    data: { seo: otherMetadata } satisfies SeoRouteData,
  },
  {
    path: 'fallback',
    component: TestPage,
  },
];

describe('SeoService', () => {
  let meta: Meta;
  let router: Router;
  let service: SeoService;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(testRoutes)],
    });

    meta = TestBed.inject(Meta);
    router = TestBed.inject(Router);
    service = TestBed.inject(SeoService);
    title = TestBed.inject(Title);
    service.start();
  });

  afterEach(() => {
    for (const selector of [
      'meta[name="description"]',
      'meta[name="robots"]',
      'script[data-person-structured-data]',
    ]) {
      document.head.querySelectorAll(selector).forEach((element) => element.remove());
    }

    title.setTitle('');
  });

  it('should default public routes to index, follow', async () => {
    await router.navigateByUrl('/other');

    expect(meta.getTag('name="robots"')?.content).toBe(DEFAULT_ROBOTS_CONTENT);
  });

  it('should replace route metadata without leaving stale or duplicate tags', async () => {
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');

    expect(title.getTitle()).toBe(otherMetadata.title);
    expect(meta.getTag('name="description"')?.content).toBe(otherMetadata.description);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
  });

  it('should replace stale metadata with the portfolio fallback when route data is missing', async () => {
    await router.navigateByUrl('/other');
    await router.navigateByUrl('/fallback');

    expect(title.getTitle()).toBe(FALLBACK_SEO_METADATA.title);
    expect(meta.getTag('name="description"')?.content).toBe(FALLBACK_SEO_METADATA.description);
    expect(meta.getTag('name="robots"')?.content).toBe(DEFAULT_ROBOTS_CONTENT);
  });

  it('should insert canonical Person structured data on the homepage', async () => {
    await router.navigateByUrl('/');

    const scripts = document.head.querySelectorAll<HTMLScriptElement>(
      'script[data-person-structured-data]',
    );
    const person = JSON.parse(scripts[0]?.textContent ?? '{}') as Record<string, unknown>;

    expect(scripts).toHaveLength(1);
    expect(scripts[0]?.type).toBe('application/ld+json');
    expect(person).toEqual({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: portfolioProfile.name,
      jobTitle: portfolioProfile.role,
      sameAs: [portfolioProfile.linkedin, portfolioProfile.github],
    });
  });

  it('should remove Person structured data outside the homepage', async () => {
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');

    expect(document.head.querySelectorAll('script[data-person-structured-data]')).toHaveLength(0);
  });

  it('should not duplicate Person structured data after repeated homepage navigation', async () => {
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');
    await router.navigateByUrl('/');

    expect(document.head.querySelectorAll('script[data-person-structured-data]')).toHaveLength(1);
  });
});
