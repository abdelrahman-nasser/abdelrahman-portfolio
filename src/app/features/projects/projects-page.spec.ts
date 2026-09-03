import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from '../../app.routes';
import { portfolioProjects } from '../../content';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectsPage } from './projects-page';

describe('ProjectsPage', () => {
  let fixture: ComponentFixture<ProjectsPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the Projects page section with accessible labelling', () => {
    const section = compiled.querySelector('section.projects-page');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('projects-title');
  });

  it('renders exactly one h1 with the approved page title', () => {
    const headings = compiled.querySelectorAll('h1');

    expect(headings).toHaveLength(1);
    expect(headings[0]?.id).toBe('projects-title');
    expect(headings[0]?.textContent?.trim()).toBe('Selected Projects');
  });

  it('renders the approved public-safe positioning intro', () => {
    const intro = compiled.querySelector('.projects-page__intro');

    expect(intro?.textContent?.trim()).toBe(
      'Selected enterprise SaaS and government platforms where I contributed across backend APIs, frontend systems, integrations, architecture, security, testing, and production delivery.',
    );
  });

  it('provides an accessible visually hidden h2 for proper heading hierarchy', () => {
    const subheadings = compiled.querySelectorAll('h2');

    expect(subheadings).toHaveLength(1);
    expect(subheadings[0]?.classList.contains('visually-hidden')).toBe(true);
    expect(subheadings[0]?.textContent?.trim()).toBe('Project case studies');
  });

  it('renders all canonical portfolio projects', () => {
    expect(projectCards()).toHaveLength(portfolioProjects.length);
    expect(compiled.querySelectorAll('app-project-card')).toHaveLength(portfolioProjects.length);
  });

  it('preserves the canonical project order in the DOM', () => {
    const cardTitles = projectCards().map((card) => card.project().title);
    const expectedTitles = portfolioProjects.map((project) => project.title);

    expect(cardTitles).toEqual(expectedTitles);
  });

  it('renders Upland FileBound as the featured project first', () => {
    const [firstCard] = projectCards();

    expect(firstCard?.project()).toBe(portfolioProjects[0]);
    expect(firstCard?.project().id).toBe('upland-filebound');
    expect(firstCard?.project().featured).toBe(true);

    const firstCardElement = compiled.querySelector('app-project-card');
    expect(firstCardElement?.classList.contains('projects-page__project--featured')).toBe(true);
  });

  it('renders MOJ and SCEGA as standard non-featured projects', () => {
    const cards = projectCards();
    const standardCards = cards.slice(1);

    expect(standardCards).toHaveLength(2);
    for (const card of standardCards) {
      expect(card.project().featured).toBe(false);
    }
  });

  it('reuses ProjectCard for every project', () => {
    const cards = fixture.debugElement.queryAll(By.directive(ProjectCard));

    expect(cards).toHaveLength(portfolioProjects.length);
  });

  it('binds the runtime dataset routes to project card links', () => {
    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.project-card__link'));

    expect(links).toHaveLength(portfolioProjects.length);
    for (const [index, project] of portfolioProjects.entries()) {
      expect(links[index]?.getAttribute('href')).toBe(project.route);
    }
  });

  it('protects MOJ from incorrect technology claims on the page', () => {
    const mojCard = fixture.debugElement
      .queryAll(By.directive(ProjectCard))
      .find((card) => card.componentInstance.project().id === 'moj-lawyer-licensing');

    expect(mojCard).toBeDefined();
    const text = (mojCard?.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Vue.js');
    expect(text).not.toContain('Angular');
  });

  it('protects SCEGA from incorrect architecture claims on the page', () => {
    const scegaCard = fixture.debugElement
      .queryAll(By.directive(ProjectCard))
      .find((card) => card.componentInstance.project().id === 'scega-event-licensing');

    expect(scegaCard).toBeDefined();
    const text = (scegaCard?.nativeElement as HTMLElement).textContent ?? '';
    expect(text).not.toContain('Micro Frontend');
  });

  it('resolves the /projects route to the ProjectsPage component', async () => {
    const projectRoute = routes.find((route) => route.path === 'projects');

    expect(projectRoute).toBeDefined();
    const component = await (projectRoute?.loadComponent as () => Promise<unknown>)();
    expect(component).toBe(ProjectsPage);
  });

  it('defines the three canonical project paths as explicit static routes', () => {
    const projectDetailPaths = routes
      .map((route) => route.path)
      .filter((path) => path?.startsWith('projects/'));

    expect(projectDetailPaths).toEqual([
      'projects/upland-filebound',
      'projects/moj-lawyer-licensing',
      'projects/scega-event-licensing',
    ]);
  });

  it('maintains exactly 10 static routes in the route configuration', () => {
    expect(routes).toHaveLength(10);
  });

  function projectCards(): readonly ProjectCard[] {
    return fixture.debugElement
      .queryAll(By.directive(ProjectCard))
      .map((element) => element.componentInstance as ProjectCard);
  }
});
