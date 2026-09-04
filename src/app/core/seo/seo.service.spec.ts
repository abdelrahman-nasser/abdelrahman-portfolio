import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter, Router, Routes } from '@angular/router';

import { portfolioProfile } from '../../content/profile.content';
import { SeoRouteData } from './seo.models';
import {
  DEFAULT_ROBOTS_CONTENT,
  FALLBACK_SEO_METADATA,
  OPEN_GRAPH_TYPE,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
  SOCIAL_SITE_NAME,
  SeoService,
  TWITTER_CARD_TYPE,
} from './seo.service';

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
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
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
    expect(meta.getTag('property="og:title"')?.content).toBe(FALLBACK_SEO_METADATA.title);
    expect(meta.getTag('property="og:description"')?.content).toBe(
      FALLBACK_SEO_METADATA.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(`${portfolioProfile.website}/fallback`);
    expect(meta.getTag('name="twitter:title"')?.content).toBe(FALLBACK_SEO_METADATA.title);
    expect(meta.getTag('name="twitter:description"')?.content).toBe(
      FALLBACK_SEO_METADATA.description,
    );
  });

  it('should derive route-specific Open Graph and Twitter metadata from SEO metadata', async () => {
    await router.navigateByUrl('/other');

    expect(meta.getTag('property="og:title"')?.content).toBe(otherMetadata.title);
    expect(meta.getTag('property="og:description"')?.content).toBe(otherMetadata.description);
    expect(meta.getTag('property="og:url"')?.content).toBe(`${portfolioProfile.website}/other`);
    expect(meta.getTag('name="twitter:title"')?.content).toBe(otherMetadata.title);
    expect(meta.getTag('name="twitter:description"')?.content).toBe(otherMetadata.description);
  });

  it('should apply the site-wide social preview metadata', async () => {
    await router.navigateByUrl('/');

    expect(meta.getTag('property="og:type"')?.content).toBe(OPEN_GRAPH_TYPE);
    expect(meta.getTag('property="og:site_name"')?.content).toBe(SOCIAL_SITE_NAME);
    expect(meta.getTag('property="og:image"')?.content).toBe(SOCIAL_IMAGE_URL);
    expect(meta.getTag('property="og:image:width"')?.content).toBe(SOCIAL_IMAGE_WIDTH);
    expect(meta.getTag('property="og:image:height"')?.content).toBe(SOCIAL_IMAGE_HEIGHT);
    expect(meta.getTag('property="og:image:alt"')?.content).toBe(SOCIAL_IMAGE_ALT);
    expect(meta.getTag('name="twitter:card"')?.content).toBe(TWITTER_CARD_TYPE);
    expect(meta.getTag('name="twitter:image"')?.content).toBe(SOCIAL_IMAGE_URL);
    expect(meta.getTag('name="twitter:image:alt"')?.content).toBe(SOCIAL_IMAGE_ALT);
  });

  it('should replace social metadata during navigation without creating duplicates', async () => {
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');

    expect(meta.getTag('property="og:title"')?.content).toBe(otherMetadata.title);
    expect(meta.getTag('property="og:description"')?.content).toBe(otherMetadata.description);
    expect(meta.getTag('property="og:url"')?.content).toBe(`${portfolioProfile.website}/other`);
    expect(meta.getTag('name="twitter:title"')?.content).toBe(otherMetadata.title);
    expect(meta.getTag('name="twitter:description"')?.content).toBe(otherMetadata.description);

    for (const property of [
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:url',
      'og:image',
      'og:image:width',
      'og:image:height',
      'og:image:alt',
    ]) {
      expect(document.head.querySelectorAll(`meta[property="${property}"]`)).toHaveLength(1);
    }

    for (const name of [
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:image:alt',
    ]) {
      expect(document.head.querySelectorAll(`meta[name="${name}"]`)).toHaveLength(1);
    }
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
