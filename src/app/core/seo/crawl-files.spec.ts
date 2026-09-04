/// <reference types="node" />

import { readFileSync } from 'node:fs';

import { routes } from '../../app.routes';
import { portfolioProfile } from '../../content/profile.content';

const robots = readFileSync('public/robots.txt', 'utf8');
const sitemap = readFileSync('public/sitemap.xml', 'utf8');

describe('static crawl files', () => {
  it('should allow crawling and reference the production sitemap', () => {
    expect(robots.trim()).toBe(
      ['User-agent: *', 'Allow: /', `Sitemap: ${portfolioProfile.website}/sitemap.xml`].join('\n'),
    );
  });

  it('should contain exactly the public Angular routes at one HTTPS origin', () => {
    const document = new DOMParser().parseFromString(sitemap, 'application/xml');
    const parserErrors = document.querySelectorAll('parsererror');
    const locations = Array.from(document.querySelectorAll('url > loc'), (location) =>
      location.textContent?.trim(),
    );
    const expectedLocations = routes.map(({ path }) =>
      path ? `${portfolioProfile.website}/${path}` : `${portfolioProfile.website}/`,
    );

    expect(parserErrors).toHaveLength(0);
    expect(document.documentElement.namespaceURI).toBe(
      'http://www.sitemaps.org/schemas/sitemap/0.9',
    );
    expect(document.querySelectorAll('url')).toHaveLength(10);
    expect(locations).toEqual(expectedLocations);
    expect(new Set(locations)).toHaveLength(10);

    const urls = locations.map((location) => new URL(location ?? ''));

    expect(urls.every(({ protocol }) => protocol === 'https:')).toBe(true);
    expect(new Set(urls.map(({ origin }) => origin))).toEqual(
      new Set([new URL(portfolioProfile.website).origin]),
    );
  });

  it('should omit unsupported sitemap metadata', () => {
    const document = new DOMParser().parseFromString(sitemap, 'application/xml');

    expect(document.querySelector('lastmod')).toBeNull();
    expect(document.querySelector('changefreq')).toBeNull();
    expect(document.querySelector('priority')).toBeNull();
  });
});
