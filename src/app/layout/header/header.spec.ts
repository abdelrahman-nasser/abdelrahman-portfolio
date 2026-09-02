import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { Header } from './header';

@Component({ template: '' })
class TestPage {}

describe('Header', () => {
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([{ path: '**', component: TestPage }])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
  });

  it('should provide the primary navigation routes and CV action', () => {
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
    expect(compiled.querySelector('app-theme-toggle')).not.toBeNull();
  });

  it('should expose a synchronized mobile navigation trigger', () => {
    const trigger = getMenuTrigger();

    expect(trigger.type).toBe('button');
    expect(trigger.getAttribute('aria-label')).toBe('Open navigation');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.getAttribute('aria-controls')).toBe('mobile-navigation');
    expect(getMobileNavigation()).toBeNull();

    openMenu();

    expect(trigger.getAttribute('aria-label')).toBe('Close navigation');
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(getMobileNavigation()?.id).toBe('mobile-navigation');

    trigger.click();
    fixture.detectChanges();

    expect(trigger.getAttribute('aria-label')).toBe('Open navigation');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(getMobileNavigation()).toBeNull();
  });

  it('should provide the expected mobile navigation routes and CV action', () => {
    openMenu();

    const mobileNavigation = getMobileNavigation();
    const links = Array.from(
      mobileNavigation?.querySelectorAll('.site-header__mobile-navigation-link') ?? [],
    );

    expect(mobileNavigation?.getAttribute('aria-label')).toBe('Mobile');
    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Experience',
      'Projects',
      'Engineering',
      'About',
      'Contact',
    ]);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/experience',
      '/projects',
      '/engineering',
      '/about',
      '/contact',
    ]);
    expect(
      mobileNavigation?.querySelector('.site-header__cv-action--mobile')?.getAttribute('href'),
    ).toBe('/cv');
  });

  it('should close the mobile navigation after activating a route link', () => {
    openMenu();

    const routeLink = getMobileNavigation()?.querySelector('a') as HTMLAnchorElement;
    routeLink.click();
    fixture.detectChanges();

    expect(getMenuTrigger().getAttribute('aria-expanded')).toBe('false');
    expect(getMobileNavigation()).toBeNull();
  });

  it('should indicate the active route in mobile navigation', async () => {
    await TestBed.inject(Router).navigateByUrl('/projects');
    fixture.detectChanges();
    openMenu();
    await fixture.whenStable();
    fixture.detectChanges();

    const activeLink = getMobileNavigation()?.querySelector(
      '.site-header__mobile-navigation-link--active',
    );

    expect(activeLink?.textContent?.trim()).toBe('Projects');
    expect(activeLink?.getAttribute('aria-current')).toBe('page');
  });

  it('should close on Escape and restore focus to the trigger', () => {
    openMenu();

    const routeLink = getMobileNavigation()?.querySelector('a') as HTMLAnchorElement;
    routeLink.focus();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    const trigger = getMenuTrigger();

    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(getMobileNavigation()).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  function openMenu(): void {
    getMenuTrigger().click();
    fixture.detectChanges();
  }

  function getMenuTrigger(): HTMLButtonElement {
    return fixture.nativeElement.querySelector('.site-header__menu-trigger') as HTMLButtonElement;
  }

  function getMobileNavigation(): HTMLElement | null {
    return fixture.nativeElement.querySelector('#mobile-navigation');
  }
});
