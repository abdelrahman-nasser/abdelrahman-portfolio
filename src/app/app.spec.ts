import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the application shell', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-shell')).not.toBeNull();
  });

  it('should provide one global main landmark and routing outlet', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector<HTMLAnchorElement>('.skip-link');

    expect(compiled.querySelectorAll('main')).toHaveLength(1);
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
    expect(skipLink?.getAttribute('href')).toBe('#main-content');
    expect(compiled.querySelector('#main-content')?.id).toBe('main-content');
  });
});
