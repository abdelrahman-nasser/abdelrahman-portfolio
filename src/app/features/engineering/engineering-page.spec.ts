import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { aiAugmentedEngineering, engineeringPrinciples, expertiseGroups } from '../../content';
import { EngineeringPage } from './engineering-page';

describe('EngineeringPage', () => {
  let fixture: ComponentFixture<EngineeringPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  // ── Rendering: heading structure ────────────────────────────────────────────

  it('renders exactly one h1', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
  });

  it('uses "Engineering" as the page h1 text', () => {
    expect(compiled.querySelector('h1')?.textContent?.trim()).toBe('Engineering');
  });

  it('labels the page section with the h1 id', () => {
    const section = compiled.querySelector('section.engineering-page');

    expect(section?.getAttribute('aria-labelledby')).toBe('engineering-title');
    expect(compiled.querySelector('#engineering-title')?.tagName).toBe('H1');
  });

  it('renders the Engineering Expertise section with an h2', () => {
    const heading = compiled.querySelector('#ep-expertise-title');

    expect(heading?.tagName).toBe('H2');
    expect(heading?.textContent?.trim()).toBe('Engineering Expertise');
  });

  it('renders the How I Engineer section with an h2', () => {
    const heading = compiled.querySelector('#ep-principles-title');

    expect(heading?.tagName).toBe('H2');
    expect(heading?.textContent?.trim()).toBe('How I Engineer');
  });

  it('renders the AI-Augmented Development section with an h2', () => {
    const heading = compiled.querySelector('#ep-ai-title');

    expect(heading?.tagName).toBe('H2');
    expect(heading?.textContent?.trim()).toBe(aiAugmentedEngineering.title);
  });

  it('renders the closing CTA section with an h2', () => {
    const heading = compiled.querySelector('#ep-cta-title');

    expect(heading?.tagName).toBe('H2');
  });

  // ── Content integrity: expertiseGroups ──────────────────────────────────────

  it('renders exactly as many expertise groups as the runtime dataset', () => {
    const groups = compiled.querySelectorAll('.ep-expertise-group');

    expect(groups).toHaveLength(expertiseGroups.length);
  });

  it('preserves canonical expertise group order in the DOM', () => {
    const titles = Array.from(compiled.querySelectorAll('.ep-expertise-group__title')).map((el) =>
      el.textContent?.trim(),
    );

    expect(titles).toEqual([...expertiseGroups.map((g) => g.title)]);
  });

  it('renders every canonical item for each expertise group', () => {
    const groupEls = Array.from(compiled.querySelectorAll('.ep-expertise-group'));

    expect(groupEls).toHaveLength(expertiseGroups.length);

    for (const [idx, group] of expertiseGroups.entries()) {
      const itemEls = Array.from(
        groupEls[idx]?.querySelectorAll('.ep-expertise-group__item') ?? [],
      );

      expect(itemEls).toHaveLength(group.items.length);

      for (const [itemIdx, item] of group.items.entries()) {
        expect(itemEls[itemIdx]?.textContent?.trim()).toBe(item);
      }
    }
  });

  it('uses h3 for expertise group titles', () => {
    const titles = Array.from(compiled.querySelectorAll('.ep-expertise-group__title'));

    expect(titles.length).toBeGreaterThan(0);

    for (const title of titles) {
      expect(title.tagName).toBe('H3');
    }
  });

  it('uses semantic list elements for expertise items', () => {
    const itemLists = Array.from(compiled.querySelectorAll('.ep-expertise-group__items'));

    expect(itemLists.length).toBeGreaterThan(0);

    for (const list of itemLists) {
      expect(list.tagName).toBe('UL');
    }

    const items = Array.from(compiled.querySelectorAll('.ep-expertise-group__item'));

    for (const item of items) {
      expect(item.tagName).toBe('LI');
    }
  });

  // ── Content integrity: engineeringPrinciples ────────────────────────────────

  it('renders exactly as many principles as the runtime dataset', () => {
    const items = compiled.querySelectorAll('.ep-principle');

    expect(items).toHaveLength(engineeringPrinciples.length);
  });

  it('preserves canonical principle order in the DOM', () => {
    const titles = Array.from(compiled.querySelectorAll('.ep-principle__title')).map((el) =>
      el.textContent?.trim(),
    );

    expect(titles).toEqual([...engineeringPrinciples.map((p) => p.title)]);
  });

  it('renders every canonical principle description', () => {
    const descriptions = Array.from(compiled.querySelectorAll('.ep-principle__description')).map(
      (el) => el.textContent?.trim(),
    );

    expect(descriptions).toEqual([...engineeringPrinciples.map((p) => p.description)]);
  });

  it('uses h3 for principle titles', () => {
    const titles = Array.from(compiled.querySelectorAll('.ep-principle__title'));

    expect(titles.length).toBeGreaterThan(0);

    for (const title of titles) {
      expect(title.tagName).toBe('H3');
    }
  });

  it('uses a semantic ordered list for principles', () => {
    const list = compiled.querySelector('.ep-principles-list');

    expect(list?.tagName).toBe('OL');

    const items = Array.from(list?.querySelectorAll('.ep-principle') ?? []);

    for (const item of items) {
      expect(item.tagName).toBe('LI');
    }
  });

  // ── Content integrity: aiAugmentedEngineering ───────────────────────────────

  it('renders exactly as many AI workflow stages as the runtime dataset', () => {
    const steps = compiled.querySelectorAll('.ep-ai-step');

    expect(steps).toHaveLength(aiAugmentedEngineering.workflow.length);
  });

  it('preserves canonical AI workflow stage order in the DOM', () => {
    const names = Array.from(compiled.querySelectorAll('.ep-ai-step__name')).map((el) =>
      el.textContent?.trim(),
    );

    expect(names).toEqual([...aiAugmentedEngineering.workflow]);
  });

  it('renders exactly as many human ownership areas as the runtime dataset', () => {
    const items = compiled.querySelectorAll('.ep-ai-ownership__item');

    expect(items).toHaveLength(aiAugmentedEngineering.humanResponsibilities.length);
  });

  it('renders human ownership concept: Architecture', () => {
    const text = compiled.querySelector('.ep-ai-ownership__list')?.textContent?.toLowerCase();

    expect(text).toContain('architecture');
  });

  it('renders human ownership concept: Validation', () => {
    const text = compiled.querySelector('.ep-ai-ownership__list')?.textContent?.toLowerCase();

    expect(text).toContain('validation');
  });

  it('renders human ownership concept: Security', () => {
    const text = compiled.querySelector('.ep-ai-ownership__list')?.textContent?.toLowerCase();

    expect(text).toContain('security');
  });

  it('renders human ownership concept: Business logic', () => {
    const text = compiled.querySelector('.ep-ai-ownership__list')?.textContent?.toLowerCase();

    expect(text).toContain('business logic');
  });

  it('renders human ownership concept: Final engineering decisions', () => {
    const text = compiled.querySelector('.ep-ai-ownership__list')?.textContent?.toLowerCase();

    expect(text).toContain('final engineering decisions');
  });

  it('renders the canonical AI positioning statement', () => {
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain(aiAugmentedEngineering.statement);
  });

  // ── Prohibited positioning ──────────────────────────────────────────────────

  it('does not contain forbidden phrase: AI Expert', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('ai expert');
  });

  it('does not contain forbidden phrase: AI Engineer (standalone)', () => {
    const text = compiled.textContent ?? '';
    const matches = text.match(/\bai engineer\b/gi) ?? [];

    expect(matches).toHaveLength(0);
  });

  it('does not contain forbidden phrase: ML Engineer', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('ml engineer');
  });

  it('does not contain forbidden phrase: autonomous engineering', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('autonomous engineering');
  });

  it('does not contain forbidden phrase: fully autonomous', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('fully autonomous');
  });

  it('does not contain formal people-management claims', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(/people\s+management/i);
    expect(text).not.toMatch(/engineering\s+manager/i);
    expect(text).not.toMatch(/direct\s+reports/i);
    expect(text).not.toMatch(/managed\s+\d+\s+developers/i);
  });

  // ── No duplicate hardcoded dataset ─────────────────────────────────────────

  it('does not use a hardcoded group count — derives from runtime dataset', () => {
    // The rendered count must equal the runtime array — confirms data-driven rendering
    const groups = compiled.querySelectorAll('.ep-expertise-group');

    expect(groups.length).toBe(expertiseGroups.length);
    expect(groups.length).toBeGreaterThan(0);
  });

  // ── Accessibility: no unnecessary focus stops ───────────────────────────────

  it('keeps expertise items informational with no interactive elements inside groups', () => {
    const interactive = compiled.querySelectorAll(
      '.ep-expertise-group a, .ep-expertise-group button, .ep-expertise-group input, .ep-expertise-group select, .ep-expertise-group textarea, .ep-expertise-group [tabindex]',
    );

    expect(interactive).toHaveLength(0);
  });

  it('keeps principle items informational with no interactive elements', () => {
    const interactive = compiled.querySelectorAll(
      '.ep-principle a, .ep-principle button, .ep-principle input, .ep-principle select, .ep-principle textarea, .ep-principle [tabindex]',
    );

    expect(interactive).toHaveLength(0);
  });

  it('keeps AI workflow steps informational with no interactive elements', () => {
    const interactive = compiled.querySelectorAll(
      '.ep-ai-step a, .ep-ai-step button, .ep-ai-step input, .ep-ai-step select, .ep-ai-step textarea, .ep-ai-step [tabindex]',
    );

    expect(interactive).toHaveLength(0);
  });

  // ── CTA routes ──────────────────────────────────────────────────────────────

  it('renders a projects CTA link pointing to /projects', () => {
    const link = compiled.querySelector<HTMLAnchorElement>('.ep-cta__action--primary');

    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe('/projects');
  });

  it('renders a contact CTA link pointing to /contact', () => {
    const link = compiled.querySelector<HTMLAnchorElement>('.ep-cta__action--secondary');

    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe('/contact');
  });

  it('uses real anchor elements for CTA links, not buttons or divs', () => {
    const primaryAction = compiled.querySelector('.ep-cta__action--primary');
    const secondaryAction = compiled.querySelector('.ep-cta__action--secondary');

    expect(primaryAction?.tagName).toBe('A');
    expect(secondaryAction?.tagName).toBe('A');
  });
});
