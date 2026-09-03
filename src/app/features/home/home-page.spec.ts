import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { portfolioProfile } from '../../content';
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
});
