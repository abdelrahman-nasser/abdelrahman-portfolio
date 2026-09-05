import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import {
  canonicalMicrosoftCertifications,
  microsoftCertificationProvider,
  microsoftTranscriptVerification,
  portfolioCertificationProviders,
} from '../../../content';
import { Certifications } from './certifications';

describe('Certifications', () => {
  let fixture: ComponentFixture<Certifications>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certifications],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Certifications);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Certifications section with an h2', () => {
    const section = compiled.querySelector('section.certifications');
    const heading = section?.querySelector('h2');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('certifications-title');
    expect(heading?.id).toBe('certifications-title');
    expect(heading?.textContent?.trim()).toBe('Certifications');
  });

  it('renders the restrained eyebrow copy', () => {
    const eyebrow = compiled.querySelector('.certifications__eyebrow');

    expect(eyebrow?.textContent?.trim()).toBe('Professional credentials');
  });

  it('renders the Microsoft provider group heading with an h3', () => {
    const providerHeader = compiled.querySelector(
      '.certifications__provider[data-provider="microsoft"] .certifications__provider-name',
    );

    expect(providerHeader).not.toBeNull();
    expect(providerHeader?.tagName).toBe('H3');
    expect(providerHeader?.textContent?.trim()).toBe('Microsoft');
  });

  it('renders every canonical Microsoft certification from the runtime dataset', () => {
    const items = Array.from(compiled.querySelectorAll('.certifications__item'));

    expect(items).toHaveLength(canonicalMicrosoftCertifications.length);

    for (const [index, cert] of canonicalMicrosoftCertifications.entries()) {
      const item = items[index];
      const title = item?.querySelector('.certifications__card-title')?.textContent?.trim();
      const issuer = item?.querySelector('.certifications__card-issuer')?.textContent?.trim();

      expect(title).toBe(cert.title);
      expect(issuer).toBe(cert.issuer);
    }
  });

  it('preserves canonical certification ordering', () => {
    const renderedTitles = Array.from(compiled.querySelectorAll('.certifications__card-title')).map(
      (el) => el.textContent?.trim(),
    );

    const canonicalTitles = canonicalMicrosoftCertifications.map((c) => c.title);

    expect(renderedTitles).toEqual(canonicalTitles);
  });

  it('uses h4 for certification card titles under provider h3', () => {
    const titles = Array.from(compiled.querySelectorAll('.certifications__card-title'));

    for (const title of titles) {
      expect(title.tagName).toBe('H4');
    }
  });

  it('uses semantic list structure for certifications', () => {
    const list = compiled.querySelector('ul.certifications__list');
    expect(list).not.toBeNull();

    const items = compiled.querySelectorAll('ul.certifications__list > li.certifications__item');
    expect(items).toHaveLength(canonicalMicrosoftCertifications.length);
  });

  it('renders the verified Microsoft transcript link with secure external attributes', () => {
    const link = compiled.querySelector<HTMLAnchorElement>(
      '.certifications__provider[data-provider="microsoft"] .certifications__transcript-link',
    );

    expect(link).not.toBeNull();
    expect(link?.textContent?.trim()).toContain(microsoftTranscriptVerification.label);
    expect(link?.getAttribute('href')).toBe(microsoftTranscriptVerification.url);
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('binds to the canonical portfolio certification providers data source', () => {
    expect(Reflect.get(fixture.componentInstance, 'providers')).toBe(
      portfolioCertificationProviders,
    );
    expect(portfolioCertificationProviders[0]).toBe(microsoftCertificationProvider);
  });

  it('does not render invented dates, status, scores, or certificate IDs', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(/\b(expires|expired|active|inactive|renewed)\b/i);
    expect(text).not.toMatch(/\b(20\d\d)\b/); // No years
    expect(text).not.toMatch(/score|credential\s*id|badge/i);
  });

  it('does not render third-party badge images or external vendor logos', () => {
    const images = compiled.querySelectorAll('img, picture');

    expect(images).toHaveLength(0);
  });
});
