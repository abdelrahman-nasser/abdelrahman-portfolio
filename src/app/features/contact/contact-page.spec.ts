import { ComponentFixture, TestBed } from '@angular/core/testing';

import { routes } from '../../app.routes';
import { portfolioProfile } from '../../content';
import { ContactPage } from './contact-page';

describe('ContactPage', () => {
  let fixture: ComponentFixture<ContactPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Contact page with exactly one h1 and a logical heading hierarchy', () => {
    const page = compiled.querySelector('section.contact-page');
    const h1Headings = compiled.querySelectorAll('h1');
    const h2Headings = Array.from(compiled.querySelectorAll('h2')).map((heading) =>
      heading.textContent?.trim(),
    );

    expect(page?.getAttribute('aria-labelledby')).toBe('contact-title');
    expect(h1Headings).toHaveLength(1);
    expect(h1Headings[0]?.id).toBe('contact-title');
    expect(h1Headings[0]?.textContent?.trim()).toBe('Contact');
    expect(h2Headings).toEqual(['Direct Contact', 'Professional Profiles']);
    expect(compiled.querySelectorAll('h3')).toHaveLength(0);
  });

  it('consumes the canonical profile object directly', () => {
    expect(Reflect.get(fixture.componentInstance, 'profile')).toBe(portfolioProfile);
  });

  it('renders the canonical email with the correct mailto link', () => {
    const link = compiled.querySelector<HTMLAnchorElement>(
      `a[href="mailto:${portfolioProfile.email}"]`,
    );

    expect(link).not.toBeNull();
    expect(link?.textContent?.trim()).toBe(portfolioProfile.email);
  });

  it('renders the canonical phone with a normalized tel link', () => {
    expect(portfolioProfile.phone).toBeDefined();

    const expectedHref = `tel:${portfolioProfile.phone?.replace(/\s+/g, '')}`;
    const link = compiled.querySelector<HTMLAnchorElement>(`a[href="${expectedHref}"]`);

    expect(link).not.toBeNull();
    expect(link?.textContent?.trim()).toBe(portfolioProfile.phone);
  });

  it('renders canonical LinkedIn, GitHub, and portfolio links safely', () => {
    const expectedLinks = [
      { label: 'LinkedIn', href: portfolioProfile.linkedin },
      { label: 'GitHub', href: portfolioProfile.github },
      { label: 'Portfolio', href: portfolioProfile.website },
    ];

    for (const expected of expectedLinks) {
      const link = compiled.querySelector<HTMLAnchorElement>(`a[href="${expected.href}"]`);

      expect(link).not.toBeNull();
      expect(link?.textContent).toContain(expected.label);
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    }
  });

  it('uses semantic address, list, and anchor elements for contact details', () => {
    expect(compiled.querySelector('address.contact-page__details')).not.toBeNull();
    expect(compiled.querySelector('.contact-page__link-list')?.tagName).toBe('UL');
    expect(compiled.querySelector('.contact-page__profile-list')?.tagName).toBe('UL');
    expect(compiled.querySelectorAll('.contact-page__link-list a')).toHaveLength(2);
    expect(compiled.querySelectorAll('.contact-page__profile-list a')).toHaveLength(3);
  });

  it('does not render a contact form or data-entry controls', () => {
    expect(compiled.querySelector('form')).toBeNull();
    expect(compiled.querySelectorAll('input, textarea, select, button')).toHaveLength(0);
  });

  it('does not publish salary, notice, relocation, or job-search urgency copy', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(
      /salary|expected salary|notice period|0-day notice|immediate joiner|laid off|unemployed|relocation|visa|availability date|urgent job search/i,
    );
  });

  it('resolves /contact to the real ContactPage without changing route count', async () => {
    const contactRoute = routes.find((route) => route.path === 'contact');

    expect(contactRoute).toBeDefined();
    const component = await (contactRoute?.loadComponent as () => Promise<unknown>)();
    expect(component).toBe(ContactPage);
    expect(routes).toHaveLength(10);
  });
});
