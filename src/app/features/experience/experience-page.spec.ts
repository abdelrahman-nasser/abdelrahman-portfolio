import { ComponentFixture, TestBed } from '@angular/core/testing';

import { routes } from '../../app.routes';
import { portfolioExperience } from '../../content';
import { ExperiencePage } from './experience-page';

describe('ExperiencePage', () => {
  let fixture: ComponentFixture<ExperiencePage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencePage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Experience page section with exactly one h1', () => {
    const section = compiled.querySelector('section.experience-page');
    const headings = compiled.querySelectorAll('h1');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('experience-title');
    expect(headings).toHaveLength(1);
    expect(headings[0]?.id).toBe('experience-title');
    expect(headings[0]?.textContent?.trim()).toBe('Experience');
  });

  it('uses the canonical runtime dataset directly', () => {
    expect(Reflect.get(fixture.componentInstance, 'experiences')).toBe(portfolioExperience);
  });

  it('renders every canonical experience in its existing order', () => {
    const entries = experienceEntries();

    expect(entries).toHaveLength(portfolioExperience.length);
    expect(entries.map((entry) => entry.querySelector('h2')?.textContent?.trim())).toEqual(
      portfolioExperience.map((experience) => experience.role),
    );
  });

  it('derives company, role, summary, and location content from each canonical entry', () => {
    for (const [index, experience] of portfolioExperience.entries()) {
      const entry = experienceEntries()[index];

      expect(entry?.querySelector('h2')?.textContent?.trim()).toBe(experience.role);
      expect(entry?.querySelector('.experience-page__company')?.textContent?.trim()).toBe(
        experience.company,
      );
      expect(entry?.querySelector('.experience-page__summary')?.textContent?.trim()).toBe(
        experience.summary,
      );
      expect(entry?.querySelector('.experience-page__location')?.textContent?.trim()).toBe(
        experience.location,
      );
    }
  });

  it('uses only canonical date values in the rendered employment periods', () => {
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

  it('renders every canonical highlight without rewriting or reordering it', () => {
    for (const [index, experience] of portfolioExperience.entries()) {
      const highlights = Array.from(
        experienceEntries()[index]?.querySelectorAll('.experience-page__highlights li') ?? [],
      ).map((highlight) => highlight.textContent?.trim());

      expect(highlights).toEqual(experience.highlights);
    }
  });

  it('uses an ordered timeline with semantic articles, headings, and highlight lists', () => {
    const timeline = compiled.querySelector('ol.experience-page__timeline');
    const entries = experienceEntries();

    expect(timeline).not.toBeNull();
    expect(timeline?.getAttribute('aria-label')).toBe('Professional experience');
    expect(timeline?.children).toHaveLength(portfolioExperience.length);
    expect(entries.every((entry) => entry.matches('li') && entry.querySelector('article'))).toBe(
      true,
    );
    expect(entries.every((entry) => entry.querySelectorAll('h2').length === 1)).toBe(true);
    expect(entries.every((entry) => entry.querySelector('ul.experience-page__highlights'))).toBe(
      true,
    );
  });

  it('keeps timeline entries informational without adding focus stops', () => {
    const interactiveElements = compiled.querySelectorAll(
      '.experience-page a, .experience-page button, .experience-page input, .experience-page select, .experience-page textarea, .experience-page [tabindex]',
    );

    expect(interactiveElements).toHaveLength(0);
  });

  it('does not add inflated leadership or management titles', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toContain('Team Lead');
    expect(text).not.toContain('Engineering Manager');
    expect(text).not.toContain('Software Architect');
    expect(text).not.toContain('Technical Manager');
  });

  it('resolves /experience to the real ExperiencePage without changing route count', async () => {
    const experienceRoute = routes.find((route) => route.path === 'experience');

    expect(experienceRoute).toBeDefined();
    const component = await (experienceRoute?.loadComponent as () => Promise<unknown>)();
    expect(component).toBe(ExperiencePage);
    expect(routes).toHaveLength(10);
  });

  function experienceEntries(): readonly HTMLLIElement[] {
    return Array.from(compiled.querySelectorAll<HTMLLIElement>('.experience-page__entry'));
  }
});
