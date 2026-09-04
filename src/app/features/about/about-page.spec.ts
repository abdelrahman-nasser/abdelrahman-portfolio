import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { routes } from '../../app.routes';
import {
  aboutPageContent,
  aiAugmentedEngineering,
  portfolioProfile,
  publicPortfolioContent,
} from '../../content';
import { AboutPage } from './about-page';

describe('AboutPage', () => {
  let fixture: ComponentFixture<AboutPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders a labelled About page with exactly one h1', () => {
    const page = compiled.querySelector('section.about-page');
    const headings = compiled.querySelectorAll('h1');

    expect(page?.getAttribute('aria-labelledby')).toBe('about-title');
    expect(headings).toHaveLength(1);
    expect(headings[0]?.id).toBe('about-title');
    expect(headings[0]?.textContent?.trim()).toBe('About');
  });

  it('uses the canonical profile and About runtime datasets directly', () => {
    expect(Reflect.get(fixture.componentInstance, 'profile')).toBe(portfolioProfile);
    expect(Reflect.get(fixture.componentInstance, 'content')).toBe(aboutPageContent);
    expect(Reflect.get(fixture.componentInstance, 'ai')).toBe(aiAugmentedEngineering);
    expect(publicPortfolioContent.about).toBe(aboutPageContent);
  });

  it('renders the complete canonical professional summary', () => {
    const intro = compiled.querySelector('.about-page__intro')?.textContent?.trim();

    expect(intro).toBe(portfolioProfile.summary);
    expect(intro).toContain('Senior Software Engineer');
    expect(intro).toContain('10+ years');
    expect(intro).toContain('.NET and Angular');
    expect(intro).toContain(
      'enterprise applications, SaaS platforms, and government digital services',
    );
    expect(intro).toContain('software architecture');
    expect(intro).toContain('distributed systems');
    expect(intro).toContain('end-to-end feature ownership');
  });

  it('uses a logical h2 hierarchy for each narrative section', () => {
    const headings = Array.from(compiled.querySelectorAll('h2')).map((heading) =>
      heading.textContent?.trim(),
    );

    expect(headings).toEqual([
      'Professional Story',
      'What I Work On',
      'How I Contribute',
      aboutPageContent.closing.title,
    ]);
  });

  it('renders the approved professional story from typed About content', () => {
    const paragraphs = Array.from(compiled.querySelectorAll('.about-page__prose p')).map(
      (paragraph) => paragraph.textContent?.trim(),
    );

    expect(paragraphs).toEqual([...aboutPageContent.story]);
  });

  it('renders work and contribution areas as semantic lists in canonical order', () => {
    const workList = compiled.querySelector('.about-page__work-list');
    const contributionList = compiled.querySelector('.about-page__contribution-list');
    const workTitles = Array.from(workList?.querySelectorAll('h3') ?? []).map((heading) =>
      heading.textContent?.trim(),
    );
    const contributionTitles = Array.from(contributionList?.querySelectorAll('h3') ?? []).map(
      (heading) => heading.textContent?.trim(),
    );

    expect(workList?.tagName).toBe('UL');
    expect(contributionList?.tagName).toBe('OL');
    expect(workTitles).toEqual(aboutPageContent.workAreas.map((area) => area.title));
    expect(contributionTitles).toEqual(
      aboutPageContent.contributionAreas.map((area) => area.title),
    );
    expect(workList?.children).toHaveLength(aboutPageContent.workAreas.length);
    expect(contributionList?.children).toHaveLength(aboutPageContent.contributionAreas.length);
  });

  it('keeps informational content out of the keyboard focus order', () => {
    const interactiveElements = compiled.querySelectorAll(
      '.about-page__prose a, .about-page__prose button, .about-page__prose [tabindex], .about-page__work-list a, .about-page__work-list button, .about-page__work-list [tabindex], .about-page__contribution-list a, .about-page__contribution-list button, .about-page__contribution-list [tabindex], .about-page__ai-note a, .about-page__ai-note button, .about-page__ai-note [tabindex]',
    );

    expect(interactiveElements).toHaveLength(0);
  });

  it('renders real RouterLinks for projects, experience, and contact', () => {
    const links = Array.from(
      compiled.querySelectorAll<HTMLAnchorElement>('.about-page__actions a'),
    );

    expect(links).toHaveLength(3);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/projects',
      '/experience',
      '/contact',
    ]);
    expect(links.every((link) => link.tagName === 'A')).toBe(true);
  });

  it('does not publish unresolved employer or project dates', () => {
    expect(compiled.querySelectorAll('time')).toHaveLength(0);
    expect(compiled.textContent).not.toMatch(/\b(?:19|20)\d{2}\b/);
  });

  it('does not inflate the professional identity into a formal management title', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(/engineering manager/i);
    expect(text).not.toMatch(/principal engineer/i);
    expect(text).not.toMatch(/head of engineering/i);
    expect(text).not.toMatch(/\bsoftware architect\b/i);
    expect(text).not.toMatch(/team lead/i);
    expect(text).not.toMatch(/people manager/i);
  });

  it('does not include private, personal-life, or job-search metadata', () => {
    const text = compiled.textContent ?? '';

    expect(text).not.toMatch(
      /family details|marital status|\bmarried\b|\bchildren\b|health information|home address/i,
    );
    expect(text).not.toMatch(/salary|compensation|notice period|relocation|job.search|layoff/i);
    expect(text).not.toContain(portfolioProfile.phone ?? '');
    expect(text).not.toContain(portfolioProfile.email);
  });

  it('keeps AI positioning accurate and human-owned', () => {
    const text = compiled.textContent ?? '';

    expect(text).toContain(aiAugmentedEngineering.statement);
    expect(text).not.toMatch(/ai expert|ai engineer|autonomous development|10x productivity/i);
  });

  it('contains no unsupported quantitative metrics', () => {
    const aboutSpecificContent = JSON.stringify(aboutPageContent);

    expect(aboutSpecificContent).not.toMatch(/%/);
    expect(aboutSpecificContent).not.toMatch(
      /\b\d+[,.]?\d*\s*(users|transactions|customers|developers|revenue)\b/i,
    );
  });

  it('resolves /about to the real AboutPage without changing route count', async () => {
    const aboutRoute = routes.find((route) => route.path === 'about');

    expect(aboutRoute).toBeDefined();
    const component = await (aboutRoute?.loadComponent as () => Promise<unknown>)();
    expect(component).toBe(AboutPage);
    expect(routes).toHaveLength(10);
  });
});
