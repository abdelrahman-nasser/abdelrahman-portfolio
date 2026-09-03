import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { portfolioExperience } from '../../../content';
import type { ExperienceItem } from '../../../models/experience.models';
import { ExperiencePreview } from './experience-preview';

describe('ExperiencePreview', () => {
  let fixture: ComponentFixture<ExperiencePreview>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencePreview],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencePreview);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Experience section with an h2', () => {
    const section = compiled.querySelector('section.experience-preview');
    const heading = section?.querySelector('h2');

    expect(section?.getAttribute('aria-labelledby')).toBe('experience-preview-title');
    expect(heading?.id).toBe('experience-preview-title');
    expect(heading?.textContent?.trim()).toBe('Experience');
  });

  it('links the section CTA to the full experience route', () => {
    const cta = compiled.querySelector<HTMLAnchorElement>('.experience-preview__cta');

    expect(cta?.textContent?.trim()).toBe('View Full Experience');
    expect(cta?.getAttribute('href')).toBe('/experience');
  });

  it('renders up to three canonical experience entries in their existing order', () => {
    const expectedExperiences = portfolioExperience.slice(0, 3);
    const items = Array.from(compiled.querySelectorAll('.experience-preview__item'));

    expect(items).toHaveLength(Math.min(3, portfolioExperience.length));

    for (const [index, experience] of expectedExperiences.entries()) {
      const item = items[index];

      expect(item?.querySelector('h3')?.textContent?.trim()).toBe(experience.role);
      expect(item?.querySelector('.experience-preview__company')?.textContent?.trim()).toBe(
        experience.company,
      );
      expect(item?.querySelector('.experience-preview__summary')?.textContent?.trim()).toBe(
        experience.summary,
      );
    }
  });

  it('limits highlights while preserving their canonical wording and order', () => {
    const expectedExperiences = portfolioExperience.slice(0, 3);
    const items = Array.from(compiled.querySelectorAll('.experience-preview__item'));

    for (const [index, experience] of expectedExperiences.entries()) {
      const highlights = Array.from(
        items[index]?.querySelectorAll('.experience-preview__highlights li') ?? [],
      );

      expect(highlights).toHaveLength(Math.min(3, experience.highlights.length));
      expect(highlights.map((highlight) => highlight.textContent?.trim())).toEqual(
        experience.highlights.slice(0, 3),
      );
    }
  });

  it('uses only approved canonical values for rendered dates', () => {
    const expectedExperiences: readonly ExperienceItem[] = portfolioExperience.slice(0, 3);
    const items = Array.from(compiled.querySelectorAll('.experience-preview__item'));

    for (const [index, experience] of expectedExperiences.entries()) {
      const renderedDates = Array.from(items[index]?.querySelectorAll('time') ?? []).map((time) =>
        time.getAttribute('datetime'),
      );
      const approvedDates = [experience.startDate, experience.endDate].filter(
        (date) => date !== undefined,
      );

      expect(renderedDates).toEqual(approvedDates);
      expect(items[index]?.querySelector('.experience-preview__date')).not.toBeNull();
    }
  });

  it('keeps entries informational and exposes only the section CTA as a focus stop', () => {
    const interactiveElements = compiled.querySelectorAll(
      '.experience-preview a, .experience-preview button, .experience-preview input, .experience-preview select, .experience-preview textarea, .experience-preview [tabindex]',
    );

    expect(interactiveElements).toHaveLength(1);
    expect(interactiveElements[0]?.matches('.experience-preview__cta')).toBe(true);
  });
});
