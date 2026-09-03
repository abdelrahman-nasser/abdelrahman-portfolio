import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import {
  portfolioExperience,
  portfolioProfile,
  professionalSnapshot,
  expertiseGroups,
} from '../../content';
import { HomePage } from './home-page';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the canonical profile content in the hero', () => {
    const positioning = portfolioProfile.headline
      .split(' | ')
      .filter((part) => part !== portfolioProfile.role)
      .join(' \u00b7 ');

    expect(compiled.querySelector('.hero__eyebrow')?.textContent?.trim()).toBe(
      portfolioProfile.role,
    );
    expect(compiled.querySelector('.hero__positioning')?.textContent?.trim()).toBe(positioning);
    expect(compiled.querySelector('.hero__support')?.textContent?.trim()).toBe(
      portfolioProfile.supportLine,
    );
  });

  it('uses the profile name as the only h1', () => {
    const headings = compiled.querySelectorAll('h1');

    expect(headings).toHaveLength(1);
    expect(headings[0]?.textContent?.trim()).toBe(portfolioProfile.name);
  });

  it('renders the Professional Snapshot heading as an h2', () => {
    const section = compiled.querySelector('section.professional-snapshot');
    const heading = section?.querySelector('h2');

    expect(section?.getAttribute('aria-labelledby')).toBe('professional-snapshot-title');
    expect(heading?.id).toBe('professional-snapshot-title');
    expect(heading?.textContent?.trim()).toBe('Professional Snapshot');
  });

  it('renders every item from the professional snapshot content', () => {
    const items = Array.from(
      compiled.querySelectorAll<HTMLElement>('.professional-snapshot__item'),
    );

    expect(items).toHaveLength(professionalSnapshot.length);

    for (const [index, snapshotItem] of professionalSnapshot.entries()) {
      const item = items[index];

      expect(item?.querySelector('.professional-snapshot__value')?.textContent?.trim()).toBe(
        snapshotItem.value,
      );
      expect(item?.querySelector('h3')?.textContent?.trim()).toBe(snapshotItem.label);
      expect(item?.querySelector('.professional-snapshot__description')?.textContent?.trim()).toBe(
        snapshotItem.description,
      );
    }
  });

  it('composes Selected Work directly after the Professional Snapshot', () => {
    const selectedWork = compiled.querySelector('app-selected-work');

    expect(selectedWork).not.toBeNull();
    expect(selectedWork?.previousElementSibling?.matches('app-professional-snapshot')).toBe(true);
    expect(selectedWork?.querySelector('section.selected-work')).not.toBeNull();
  });

  it('composes Experience directly after Selected Work', () => {
    const experiencePreview = compiled.querySelector('app-experience-preview');

    expect(experiencePreview).not.toBeNull();
    expect(experiencePreview?.previousElementSibling?.matches('app-selected-work')).toBe(true);
    expect(experiencePreview?.querySelector('section.experience-preview')).not.toBeNull();
  });

  it('renders the canonical experience preview without adding another h1', () => {
    const experienceItems = compiled.querySelectorAll('.experience-preview__item');
    const experienceHeading = compiled.querySelector('#experience-preview-title');

    expect(experienceItems).toHaveLength(Math.min(3, portfolioExperience.length));
    expect(experienceHeading?.tagName).toBe('H2');
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
  });

  it('keeps professional snapshot items informational and out of the tab order', () => {
    const interactiveElements = compiled.querySelectorAll(
      '.professional-snapshot__item a, .professional-snapshot__item button, .professional-snapshot__item input, .professional-snapshot__item select, .professional-snapshot__item textarea, .professional-snapshot__item [tabindex]',
    );

    expect(interactiveElements).toHaveLength(0);
  });

  it('provides internal routes for the hero actions', () => {
    const actions = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.hero__action'));

    expect(
      actions.map((action) => [action.textContent?.trim(), action.getAttribute('href')]),
    ).toEqual([
      ['View My Work', '/projects'],
      ['Download CV', '/cv'],
    ]);
  });

  it('labels the hero section with its existing heading', () => {
    const hero = compiled.querySelector('section.hero');
    const headingId = hero?.getAttribute('aria-labelledby');

    expect(headingId).toBe('hero-title');
    expect(compiled.querySelector(`#${headingId}`)).not.toBeNull();
  });

  it('composes Engineering Expertise directly after Experience', () => {
    const expertiseEl = compiled.querySelector('app-engineering-expertise');

    expect(expertiseEl).not.toBeNull();
    expect(expertiseEl?.previousElementSibling?.matches('app-experience-preview')).toBe(true);
    expect(expertiseEl?.querySelector('section.engineering-expertise')).not.toBeNull();
  });

  it('renders the Engineering Expertise heading as an h2', () => {
    const section = compiled.querySelector('section.engineering-expertise');
    const heading = section?.querySelector('h2');

    expect(section?.getAttribute('aria-labelledby')).toBe('engineering-expertise-title');
    expect(heading?.id).toBe('engineering-expertise-title');
    expect(heading?.textContent?.trim()).toBe('Engineering Expertise');
  });

  it('renders all canonical expertise groups in the homepage', () => {
    const groupElements = Array.from(compiled.querySelectorAll('.engineering-expertise__group'));

    expect(groupElements).toHaveLength(expertiseGroups.length);

    for (const [index, group] of expertiseGroups.entries()) {
      expect(groupElements[index]?.querySelector('h3')?.textContent?.trim()).toBe(group.title);
    }
  });

  it('retains exactly one h1 after adding Engineering Expertise', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
  });
});
