import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should provide the primary navigation routes and CV action', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const primaryNavigation = compiled.querySelector('nav[aria-label="Primary"]');
    const links = Array.from(primaryNavigation?.querySelectorAll('a') ?? []);

    expect(compiled.querySelector('.site-header__brand')?.getAttribute('href')).toBe('/');
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/experience',
      '/projects',
      '/engineering',
      '/about',
      '/contact',
    ]);
    expect(compiled.querySelector('.site-header__cv-action')?.getAttribute('href')).toBe('/cv');
  });
});
