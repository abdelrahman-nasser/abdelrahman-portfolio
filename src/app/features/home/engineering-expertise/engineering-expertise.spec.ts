import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { expertiseGroups } from '../../../content';
import { EngineeringExpertise } from './engineering-expertise';

describe('EngineeringExpertise', () => {
  let fixture: ComponentFixture<EngineeringExpertise>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringExpertise],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringExpertise);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled Engineering Expertise section with an h2', () => {
    const section = compiled.querySelector('section.engineering-expertise');
    const heading = section?.querySelector('h2');

    expect(section?.getAttribute('aria-labelledby')).toBe('engineering-expertise-title');
    expect(heading?.id).toBe('engineering-expertise-title');
    expect(heading?.textContent?.trim()).toBe('Engineering Expertise');
  });

  it('renders every canonical expertise group from the runtime dataset', () => {
    const groupElements = Array.from(compiled.querySelectorAll('.engineering-expertise__group'));

    expect(groupElements).toHaveLength(expertiseGroups.length);

    for (const [index, group] of expertiseGroups.entries()) {
      const el = groupElements[index];

      expect(el?.querySelector('h3')?.textContent?.trim()).toBe(group.title);
    }
  });

  it('renders every item for each group from the runtime dataset', () => {
    const groupElements = Array.from(compiled.querySelectorAll('.engineering-expertise__group'));

    for (const [index, group] of expertiseGroups.entries()) {
      const el = groupElements[index];
      const itemElements = Array.from(el?.querySelectorAll('.engineering-expertise__item') ?? []);

      expect(itemElements).toHaveLength(group.items.length);

      for (const [itemIndex, item] of group.items.entries()) {
        expect(itemElements[itemIndex]?.textContent?.trim()).toBe(item);
      }
    }
  });

  it('uses h3 for group titles', () => {
    const groupTitles = Array.from(
      compiled.querySelectorAll('.engineering-expertise__group-title'),
    );

    for (const title of groupTitles) {
      expect(title.tagName).toBe('H3');
    }
  });

  it('uses list semantics for expertise items', () => {
    const itemLists = Array.from(
      compiled.querySelectorAll<HTMLUListElement>('.engineering-expertise__items'),
    );

    expect(itemLists.length).toBeGreaterThan(0);

    for (const list of itemLists) {
      expect(list.tagName).toBe('UL');
    }

    const items = Array.from(compiled.querySelectorAll('.engineering-expertise__item'));

    for (const item of items) {
      expect(item.tagName).toBe('LI');
    }
  });

  it('keeps expertise items informational with no interactive elements inside groups', () => {
    const interactiveInGroups = compiled.querySelectorAll(
      '.engineering-expertise__group a, .engineering-expertise__group button, .engineering-expertise__group input, .engineering-expertise__group select, .engineering-expertise__group textarea, .engineering-expertise__group [tabindex]',
    );

    expect(interactiveInGroups).toHaveLength(0);
  });

  it('does not introduce DDD as a strong hands-on expertise claim', () => {
    const serialized = compiled.textContent ?? '';

    expect(serialized).not.toMatch(/\bDomain-Driven Design\b/i);
    expect(serialized).not.toMatch(/\bDDD\b/);
  });

  it('does not introduce AI Expert or people-management wording', () => {
    const serialized = compiled.textContent ?? '';

    expect(serialized).not.toMatch(/AI\s+Expert/i);
    expect(serialized).not.toMatch(/AI\s+Engineer/i);
    expect(serialized).not.toMatch(/ML\s+Engineer/i);
    expect(serialized).not.toMatch(/people\s+management/i);
    expect(serialized).not.toMatch(/engineering\s+manager/i);
    expect(serialized).not.toMatch(/direct\s+reports/i);
    expect(serialized).not.toMatch(/hiring/i);
  });
});
