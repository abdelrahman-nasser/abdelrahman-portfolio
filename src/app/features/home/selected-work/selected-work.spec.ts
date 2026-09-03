import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { portfolioProjects } from '../../../content';
import { ProjectCard } from '../../../shared/components/project-card/project-card';
import { SelectedWork } from './selected-work';

describe('SelectedWork', () => {
  let fixture: ComponentFixture<SelectedWork>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedWork],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedWork);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the Selected Work section', () => {
    const section = compiled.querySelector('section.selected-work');

    expect(section).not.toBeNull();
    expect(section?.getAttribute('aria-labelledby')).toBe('selected-work-title');
  });

  it('uses an h2 for the section heading', () => {
    const heading = compiled.querySelector('section.selected-work > app-page-container h2');

    expect(heading?.id).toBe('selected-work-title');
    expect(heading?.textContent?.trim()).toBe('Selected Work');
  });

  it('renders every portfolio project', () => {
    expect(projectCards()).toHaveLength(portfolioProjects.length);
  });

  it('preserves the portfolio project order in the DOM', () => {
    expect(projectCards().map((card) => card.project().title)).toEqual(
      portfolioProjects.map((project) => project.title),
    );
  });

  it('renders the featured project first', () => {
    const [firstProject] = projectCards().map((card) => card.project());

    expect(firstProject).toBe(portfolioProjects[0]);
    expect(firstProject?.featured).toBe(true);
  });

  it('reuses ProjectCard for every project', () => {
    const cards = fixture.debugElement.queryAll(By.directive(ProjectCard));

    expect(cards).toHaveLength(portfolioProjects.length);
    expect(compiled.querySelectorAll('app-project-card')).toHaveLength(portfolioProjects.length);
  });

  function projectCards(): readonly ProjectCard[] {
    return fixture.debugElement
      .queryAll(By.directive(ProjectCard))
      .map((element) => element.componentInstance as ProjectCard);
  }
});
