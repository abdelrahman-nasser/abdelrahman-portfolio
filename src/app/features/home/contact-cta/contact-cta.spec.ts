import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ContactCta } from './contact-cta';

describe('ContactCta', () => {
  let fixture: ComponentFixture<ContactCta>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCta],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCta);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Contact CTA section with an h2', () => {
    const section = compiled.querySelector('section.contact-cta');
    const heading = section?.querySelector('h2');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('contact-cta-title');
    expect(heading?.id).toBe('contact-cta-title');
    expect(heading?.textContent?.trim()).toBe("Let's Work Together");
  });

  it('renders the supporting copy aligned with senior engineering positioning', () => {
    const support = compiled.querySelector('.contact-cta__support');

    expect(support?.textContent?.trim()).toBe(
      "I'm open to senior engineering and technical leadership opportunities focused on scalable systems, strong delivery, and practical software architecture.",
    );
  });

  it('renders the Contact Me action with router link to /contact', () => {
    const contactAction = compiled.querySelector<HTMLAnchorElement>(
      '.contact-cta__action--primary',
    );

    expect(contactAction).not.toBeNull();
    expect(contactAction?.textContent?.trim()).toBe('Contact Me');
    expect(contactAction?.getAttribute('href')).toBe('/contact');
  });

  it('renders the View CV action with router link to /cv', () => {
    const cvAction = compiled.querySelector<HTMLAnchorElement>('.contact-cta__action--secondary');

    expect(cvAction).not.toBeNull();
    expect(cvAction?.textContent?.trim()).toBe('View CV');
    expect(cvAction?.getAttribute('href')).toBe('/cv');
  });

  it('provides real accessible links with clear text', () => {
    const actions = Array.from(
      compiled.querySelectorAll<HTMLAnchorElement>('.contact-cta__action'),
    );

    expect(actions).toHaveLength(2);

    for (const action of actions) {
      expect(action.tagName).toBe('A');
      expect(action.textContent?.trim().length).toBeGreaterThan(0);
      expect(action.getAttribute('href')).toMatch(/^\/(contact|cv)$/);
    }
  });

  it('contains no form elements, inputs, textareas, or submit buttons', () => {
    const formElements = compiled.querySelectorAll(
      'form, input, textarea, select, button[type="submit"]',
    );

    expect(formElements).toHaveLength(0);
  });

  it('limits interactive focus stops strictly to the two CTA links', () => {
    const focusable = compiled.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    expect(focusable).toHaveLength(2);
  });

  it('does not display job-search urgency, salary, or notice period copy', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(/\b(salary|rate|compensation|\$|usd|eur|egp)\b/i);
    expect(text).not.toMatch(
      /\b(immediate\s*joiner|immediately\s*available|urgent|notice\s*period)\b/i,
    );
    expect(text).not.toMatch(/\b(relocation|visa\s*sponsorship)\b/i);
  });

  it('does not contain exaggerated executive or people-management claims', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(
      /\b(CTO|VP|Chief|Head\s+of|Engineering\s+Manager|People\s+Manager)\b/i,
    );
  });
});
