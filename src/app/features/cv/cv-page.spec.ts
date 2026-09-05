import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { routes } from '../../app.routes';
import {
  canonicalMicrosoftCertifications,
  expertiseGroups,
  microsoftTranscriptVerification,
  portfolioCertificationProviders,
  portfolioExperience,
  portfolioProfile,
} from '../../content';
import { CvPage } from './cv-page';

describe('CvPage', () => {
  let fixture: ComponentFixture<CvPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CvPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a semantically labelled page landmark with the expected heading outline', () => {
    const page = compiled.querySelector('article.cv-page');
    const h1Headings = compiled.querySelectorAll('h1');
    const h2Headings = Array.from(compiled.querySelectorAll('h2')).map((el) =>
      el.textContent?.trim(),
    );

    expect(page?.getAttribute('aria-labelledby')).toBe('cv-title');
    expect(h1Headings).toHaveLength(1);
    expect(h1Headings[0]?.id).toBe('cv-title');
    expect(h1Headings[0]?.textContent?.trim()).toBe('Curriculum Vitae');
    expect(h2Headings).toEqual([
      'Professional Profile',
      'Expertise',
      'Experience',
      'Certifications',
      'Contact & Portfolio',
    ]);
  });

  it('uses canonical runtime datasets directly instead of CV-specific duplicates', () => {
    expect(Reflect.get(fixture.componentInstance, 'profile')).toBe(portfolioProfile);
    expect(Reflect.get(fixture.componentInstance, 'experiences')).toBe(portfolioExperience);
    expect(Reflect.get(fixture.componentInstance, 'expertise')).toBe(expertiseGroups);
    expect(Reflect.get(fixture.componentInstance, 'certificationProviders')).toBe(
      portfolioCertificationProviders,
    );
  });

  it('renders the canonical professional headline and complete summary', () => {
    expect(compiled.querySelector('.cv-page__headline')?.textContent?.trim()).toBe(
      portfolioProfile.headline,
    );
    expect(compiled.querySelector('.cv-page__summary')?.textContent?.trim()).toBe(
      portfolioProfile.summary,
    );
  });

  it('renders every canonical experience in canonical order', () => {
    const entries = experienceEntries();

    expect(entries).toHaveLength(portfolioExperience.length);
    expect(entries.map((entry) => entry.querySelector('h3')?.textContent?.trim())).toEqual(
      portfolioExperience.map((experience) => experience.role),
    );
  });

  it('derives role, company, location, summary, and highlights from each experience entry', () => {
    for (const [index, experience] of portfolioExperience.entries()) {
      const entry = experienceEntries()[index];
      const metadata = Array.from(entry?.querySelectorAll('.cv-page__metadata p') ?? []).map(
        (item) => item.textContent?.trim(),
      );
      const highlights = Array.from(entry?.querySelectorAll('.cv-page__highlights li') ?? []).map(
        (item) => item.textContent?.trim(),
      );

      expect(entry?.querySelector('h3')?.textContent?.trim()).toBe(experience.role);
      expect(entry?.querySelector('.cv-page__company')?.textContent?.trim()).toBe(
        experience.company,
      );
      expect(metadata).toContain(experience.location);
      expect(entry?.querySelector('.cv-page__experience-summary')?.textContent?.trim()).toBe(
        experience.summary,
      );
      expect(highlights).toEqual(experience.highlights);
    }
  });

  it('preserves canonical date values without reconciling or replacing them', () => {
    for (const [index, experience] of portfolioExperience.entries()) {
      const renderedDates = Array.from(
        experienceEntries()[index]?.querySelectorAll('time') ?? [],
      ).map((time) => time.getAttribute('datetime'));
      const canonicalDates = [experience.startDate, experience.endDate].filter(
        (date) => date !== undefined,
      );

      expect(renderedDates).toEqual(canonicalDates);
    }
  });

  it('renders every expertise group and item in stored order', () => {
    const groups = Array.from(compiled.querySelectorAll('.cv-page__expertise-group'));

    expect(groups).toHaveLength(expertiseGroups.length);

    for (const [index, group] of expertiseGroups.entries()) {
      const renderedGroup = groups[index];
      const items = Array.from(renderedGroup?.querySelectorAll('ul li') ?? []).map((item) =>
        item.textContent?.trim(),
      );

      expect(renderedGroup?.querySelector('h3')?.textContent?.trim()).toBe(group.title);
      expect(items).toEqual(group.items);
    }
  });

  it('renders every certification in stored order with its provider group and verified transcript action', () => {
    const providerName = compiled.querySelector(
      '.cv-page__certification-provider[data-provider="microsoft"] h3',
    );
    expect(providerName?.textContent?.trim()).toBe('Microsoft');

    const certifications = Array.from(
      compiled.querySelectorAll('.cv-page__certification-list > li'),
    );

    expect(certifications).toHaveLength(canonicalMicrosoftCertifications.length);

    for (const [index, cert] of canonicalMicrosoftCertifications.entries()) {
      const rendered = certifications[index];

      expect(rendered?.querySelector('h4')?.textContent?.trim()).toBe(cert.title);
      expect(rendered?.querySelector('p')?.textContent?.trim()).toBe(cert.issuer);
      expect(rendered?.querySelectorAll('time, [data-credential-id]')).toHaveLength(0);
    }

    const transcriptLink = compiled.querySelector<HTMLAnchorElement>(
      '.cv-page__certification-provider[data-provider="microsoft"] .cv-page__transcript-link',
    );
    expect(transcriptLink?.textContent?.trim()).toContain(microsoftTranscriptVerification.label);
    expect(transcriptLink?.getAttribute('href')).toBe(microsoftTranscriptVerification.url);
    expect(transcriptLink?.getAttribute('target')).toBe('_blank');
    expect(transcriptLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders canonical contact and portfolio links with semantic anchors', () => {
    const expectedHrefs = [
      `mailto:${portfolioProfile.email}`,
      `tel:${portfolioProfile.phone?.replace(/\s+/g, '')}`,
      '/projects',
      portfolioProfile.linkedin,
      portfolioProfile.github,
      portfolioProfile.website,
    ];
    const hrefs = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('a')).map((link) =>
      link.getAttribute('href'),
    );

    for (const href of expectedHrefs) {
      expect(hrefs).toContain(href);
    }
  });

  it('offers the approved PDF as a semantic download near the top', () => {
    const link = compiled.querySelector<HTMLAnchorElement>('.cv-page__header a[download]');
    expect(link?.textContent?.trim()).toBe('Download CV');
    expect(link?.getAttribute('href')).toBe(portfolioProfile.cv.pdfUrl);
    expect(link?.getAttribute('download')).toBe(portfolioProfile.cv.downloadFileName);
    expect(link?.hasAttribute('role')).toBe(false);

    const note = compiled.querySelector('.cv-page__download-note');
    expect(note?.textContent?.trim()).toBe(
      `PDF · ${portfolioProfile.name} · ${portfolioProfile.role}`,
    );
  });

  it('does not invent credential metadata, inflated management titles, or metrics', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(/credential id|expiration date|expires|exam score|badge url/i);
    expect(text).not.toMatch(
      /engineering manager|technical manager|principal engineer|team lead|people manager/i,
    );
    expect(text).not.toMatch(/\d+(?:\.\d+)?%|\d+\s*(?:users|transactions|customers|revenue)\b/i);
  });

  it('resolves /cv to the real CvPage without changing route count', async () => {
    const cvRoute = routes.find((route) => route.path === 'cv');

    expect(cvRoute).toBeDefined();
    const component = await (cvRoute?.loadComponent as () => Promise<unknown>)();
    expect(component).toBe(CvPage);
    expect(routes).toHaveLength(10);
  });

  function experienceEntries(): readonly HTMLLIElement[] {
    return Array.from(compiled.querySelectorAll<HTMLLIElement>('.cv-page__experience-entry'));
  }
});
