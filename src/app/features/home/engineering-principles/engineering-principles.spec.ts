import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { engineeringPrinciples } from '../../../content';
import { EngineeringPrinciples } from './engineering-principles';

describe('EngineeringPrinciples', () => {
  let fixture: ComponentFixture<EngineeringPrinciples>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringPrinciples],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringPrinciples);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled How I Engineer section', () => {
    const section = compiled.querySelector('section.engineering-principles');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('engineering-principles-title');
  });

  it('uses an h2 for the section heading', () => {
    const heading = compiled.querySelector('#engineering-principles-title');

    expect(heading?.tagName).toBe('H2');
    expect(heading?.textContent?.trim()).toBe('How I Engineer');
  });

  it('renders every canonical principle from the runtime dataset', () => {
    const items = Array.from(compiled.querySelectorAll('.engineering-principles__item'));

    expect(items).toHaveLength(engineeringPrinciples.length);
  });

  it('preserves canonical principle order in the DOM', () => {
    const titles = Array.from(compiled.querySelectorAll('.engineering-principles__title')).map(
      (el) => el.textContent?.trim(),
    );

    const expectedTitles = engineeringPrinciples.map((p) => p.title);

    expect(titles).toEqual(expectedTitles);
  });

  it('uses h3 for each principle title', () => {
    const titleElements = Array.from(compiled.querySelectorAll('.engineering-principles__title'));

    expect(titleElements.length).toBeGreaterThan(0);

    for (const el of titleElements) {
      expect(el.tagName).toBe('H3');
    }
  });

  it('renders the description for each principle', () => {
    const items = Array.from(compiled.querySelectorAll('.engineering-principles__item'));

    for (const [index, principle] of engineeringPrinciples.entries()) {
      const desc = items[index]?.querySelector('.engineering-principles__description');

      expect(desc?.textContent?.trim()).toBe(principle.description);
    }
  });

  it('has no interactive elements inside principle items', () => {
    const interactive = compiled.querySelectorAll(
      '.engineering-principles__item a, .engineering-principles__item button, .engineering-principles__item input, .engineering-principles__item select, .engineering-principles__item textarea, .engineering-principles__item [tabindex]',
    );

    expect(interactive).toHaveLength(0);
  });
});
