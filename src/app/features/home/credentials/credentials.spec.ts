import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { portfolioCredentials } from '../../../content';
import { Credentials } from './credentials';

describe('Credentials', () => {
  let fixture: ComponentFixture<Credentials>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Credentials],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Credentials);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Credentials section with an h2', () => {
    const section = compiled.querySelector('section.credentials');
    const heading = section?.querySelector('h2');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('credentials-title');
    expect(heading?.id).toBe('credentials-title');
    expect(heading?.textContent?.trim()).toBe('Credentials');
  });

  it('renders the restrained eyebrow copy', () => {
    const eyebrow = compiled.querySelector('.credentials__eyebrow');

    expect(eyebrow?.textContent?.trim()).toBe('Microsoft Certifications');
  });

  it('renders every canonical credential from the runtime dataset', () => {
    const items = Array.from(compiled.querySelectorAll('.credentials__item'));

    expect(items).toHaveLength(portfolioCredentials.length);

    for (const [index, cred] of portfolioCredentials.entries()) {
      const item = items[index];
      const title = item?.querySelector('.credentials__card-title')?.textContent?.trim();
      const issuer = item?.querySelector('.credentials__card-issuer')?.textContent?.trim();

      expect(title).toBe(cred.title);
      expect(issuer).toBe(cred.issuer);
    }
  });

  it('preserves canonical credential ordering', () => {
    const renderedTitles = Array.from(compiled.querySelectorAll('.credentials__card-title')).map(
      (el) => el.textContent?.trim(),
    );

    const canonicalTitles = portfolioCredentials.map((c) => c.title);

    expect(renderedTitles).toEqual(canonicalTitles);
  });

  it('uses h3 for credential card titles', () => {
    const titles = Array.from(compiled.querySelectorAll('.credentials__card-title'));

    for (const title of titles) {
      expect(title.tagName).toBe('H3');
    }
  });

  it('uses semantic list structure for credentials', () => {
    const list = compiled.querySelector('ul.credentials__list');
    expect(list).not.toBeNull();

    const items = compiled.querySelectorAll('ul.credentials__list > li.credentials__item');
    expect(items).toHaveLength(portfolioCredentials.length);
  });

  it('keeps credential items informational with no interactive elements', () => {
    const interactive = compiled.querySelectorAll(
      '.credentials a, .credentials button, .credentials input, .credentials select, .credentials textarea, .credentials [tabindex]',
    );

    expect(interactive).toHaveLength(0);
  });

  it('does not render invented dates, status, or certificate IDs', () => {
    const text = compiled.textContent ?? '';

    // Verify no dates or expiration status
    expect(text).not.toMatch(/\b(expires|expired|active|inactive|renewed)\b/i);
    expect(text).not.toMatch(/\b(20\d\d)\b/); // No years
    expect(text).not.toMatch(/score|transcript\s*id|badge/i);
  });

  it('does not render third-party badge images or external icons', () => {
    const images = compiled.querySelectorAll('img, svg, picture');

    expect(images).toHaveLength(0);
  });
});
