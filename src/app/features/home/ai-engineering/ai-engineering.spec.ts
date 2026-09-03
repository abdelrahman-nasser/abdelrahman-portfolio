import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { aiAugmentedEngineering } from '../../../content';
import { AiEngineering } from './ai-engineering';

describe('AiEngineering', () => {
  let fixture: ComponentFixture<AiEngineering>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiEngineering],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AiEngineering);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled AI-Augmented Engineering section', () => {
    const section = compiled.querySelector('section.ai-engineering');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('ai-engineering-title');
  });

  it('uses an h2 for the section heading', () => {
    const heading = compiled.querySelector('#ai-engineering-title');

    expect(heading?.tagName).toBe('H2');
    expect(heading?.textContent?.trim()).toBe('AI-Augmented Engineering');
  });

  it('renders the full canonical positioning statement from the runtime dataset', () => {
    const intro = compiled.querySelector('.ai-engineering__intro');

    expect(intro?.textContent?.trim()).toBe(aiAugmentedEngineering.statement);
  });

  it('renders every canonical workflow stage from the runtime dataset', () => {
    const steps = Array.from(compiled.querySelectorAll('.ai-engineering__step'));

    expect(steps).toHaveLength(aiAugmentedEngineering.workflow.length);
  });

  it('preserves canonical workflow stage order in the DOM', () => {
    const names = Array.from(compiled.querySelectorAll('.ai-engineering__step-name')).map((el) =>
      el.textContent?.trim(),
    );

    expect(names).toEqual([...aiAugmentedEngineering.workflow]);
  });

  it('renders every canonical human responsibility from the runtime dataset', () => {
    const items = Array.from(compiled.querySelectorAll('.ai-engineering__ownership-item'));

    expect(items).toHaveLength(aiAugmentedEngineering.humanResponsibilities.length);
  });

  it('renders ownership concept: architecture', () => {
    const text = compiled.querySelector('.ai-engineering__ownership')?.textContent?.toLowerCase();

    expect(text).toContain('architecture');
  });

  it('renders ownership concept: validation', () => {
    const text = compiled.querySelector('.ai-engineering__ownership')?.textContent?.toLowerCase();

    expect(text).toContain('validation');
  });

  it('renders ownership concept: security', () => {
    const text = compiled.querySelector('.ai-engineering__ownership')?.textContent?.toLowerCase();

    expect(text).toContain('security');
  });

  it('renders ownership concept: business logic', () => {
    const text = compiled.querySelector('.ai-engineering__ownership')?.textContent?.toLowerCase();

    expect(text).toContain('business logic');
  });

  it('renders ownership concept: final engineering decisions', () => {
    const text = compiled.querySelector('.ai-engineering__ownership')?.textContent?.toLowerCase();

    expect(text).toContain('final engineering decisions');
  });

  it('has no interactive elements inside the section', () => {
    const interactive = compiled.querySelectorAll(
      '.ai-engineering a, .ai-engineering button, .ai-engineering input, .ai-engineering select, .ai-engineering textarea, .ai-engineering [tabindex]',
    );

    expect(interactive).toHaveLength(0);
  });

  it('does not contain forbidden positioning phrase: AI Expert', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('ai expert');
  });

  it('does not contain forbidden positioning phrase: AI Engineer', () => {
    // Allow "AI-Augmented Engineering" — check for the specific forbidden form
    const text = compiled.textContent ?? '';
    const matches = text.match(/\bai engineer\b/gi) ?? [];

    expect(matches).toHaveLength(0);
  });

  it('does not contain forbidden positioning phrase: ML Engineer', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('ml engineer');
  });

  it('does not contain forbidden phrase: fully autonomous', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('fully autonomous');
  });

  it('does not contain forbidden phrase: 10x developer', () => {
    expect(compiled.textContent?.toLowerCase()).not.toContain('10x developer');
  });
});
