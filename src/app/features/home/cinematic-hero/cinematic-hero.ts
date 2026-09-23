import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { portfolioProfile } from '../../../content';
import { engineeringProfile } from '../../../content/profile.content';
import { PageContainer } from '../../../layout/page-container/page-container';

interface ScenePoint {
  readonly x: number;
  readonly y: number;
}

interface SceneNode {
  readonly label: string;
  readonly detail: string;
  readonly start: ScenePoint;
  readonly end: ScenePoint;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageContainer, RouterLink],
  selector: 'app-cinematic-hero',
  styleUrl: './cinematic-hero.scss',
  templateUrl: './cinematic-hero.html',
})
export class CinematicHero implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private animationFrameId: number | null = null;

  @ViewChild('intro', { static: true })
  private readonly intro!: ElementRef<HTMLElement>;

  @ViewChildren('sceneNode')
  private readonly sceneNodes!: QueryList<ElementRef<HTMLElement>>;

  protected readonly engineeringProfile = engineeringProfile;
  protected readonly profile = portfolioProfile;
  protected readonly positioning = portfolioProfile.headline
    .split(' | ')
    .filter((part) => part !== portfolioProfile.role)
    .join(' \u00b7 ');

  protected readonly nodes: readonly SceneNode[] = [
    {
      label: 'Angular',
      detail: 'Presentation',
      start: { x: 9, y: 18 },
      end: { x: 19, y: 31 },
    },
    {
      label: 'API Gateway',
      detail: 'Integration',
      start: { x: 77, y: 14 },
      end: { x: 41, y: 31 },
    },
    {
      label: '.NET Services',
      detail: 'Application',
      start: { x: 88, y: 43 },
      end: { x: 65, y: 31 },
    },
    {
      label: 'SQL Server',
      detail: 'Data',
      start: { x: 13, y: 78 },
      end: { x: 24, y: 58 },
    },
    {
      label: 'RabbitMQ',
      detail: 'Messaging',
      start: { x: 46, y: 84 },
      end: { x: 48, y: 58 },
    },
    {
      label: 'Redis',
      detail: 'Caching',
      start: { x: 86, y: 75 },
      end: { x: 72, y: 58 },
    },
    {
      label: 'Docker / K8s',
      detail: 'Runtime',
      start: { x: 27, y: 8 },
      end: { x: 36, y: 78 },
    },
    {
      label: 'CI / CD',
      detail: 'Delivery',
      start: { x: 65, y: 88 },
      end: { x: 62, y: 78 },
    },
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const section = this.intro.nativeElement;
    const nodeElements = this.sceneNodes.map((node) => node.nativeElement);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      this.renderProgress(1, section, nodeElements);
      return;
    }

    section.classList.add('cinematic-hero--enhanced');

    this.ngZone.runOutsideAngular(() => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        section.dataset['mode'] = 'autoplay';
        this.startAutoplay(section, nodeElements);
      } else {
        section.dataset['mode'] = 'scroll';
        this.startScrollScrub(section, nodeElements);
      }
    });
  }

  private startScrollScrub(section: HTMLElement, nodeElements: readonly HTMLElement[]): void {
    let scheduled = false;

    const render = () => {
      scheduled = false;
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = this.clamp(-rect.top / scrollDistance);

      this.renderProgress(progress, section, nodeElements);
    };

    const scheduleRender = () => {
      if (scheduled) {
        return;
      }

      scheduled = true;
      this.animationFrameId = window.requestAnimationFrame(render);
    };

    window.addEventListener('scroll', scheduleRender, { passive: true });
    window.addEventListener('resize', scheduleRender, { passive: true });
    scheduleRender();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', scheduleRender);
      window.removeEventListener('resize', scheduleRender);

      if (this.animationFrameId !== null) {
        window.cancelAnimationFrame(this.animationFrameId);
      }
    });
  }

  private startAutoplay(section: HTMLElement, nodeElements: readonly HTMLElement[]): void {
    const duration = 3600;
    const startedAt = performance.now();

    const tick = (timestamp: number) => {
      const progress = this.clamp((timestamp - startedAt) / duration);
      this.renderProgress(progress, section, nodeElements);

      if (progress < 1) {
        this.animationFrameId = window.requestAnimationFrame(tick);
      }
    };

    this.animationFrameId = window.requestAnimationFrame(tick);

    this.destroyRef.onDestroy(() => {
      if (this.animationFrameId !== null) {
        window.cancelAnimationFrame(this.animationFrameId);
      }
    });
  }

  private renderProgress(
    progress: number,
    section: HTMLElement,
    nodeElements: readonly HTMLElement[],
  ): void {
    const organize = this.smoothStep(0.08, 0.58, progress);
    const recede = this.smoothStep(0.66, 0.96, progress);
    const reveal = this.smoothStep(0.69, 0.93, progress);
    const factsReveal = this.smoothStep(0.78, 1, progress);
    const connectorOpacity = this.smoothStep(0.24, 0.58, progress) * (1 - recede * 0.65);

    section.style.setProperty('--intro-copy-opacity', reveal.toFixed(3));
    section.style.setProperty('--intro-copy-y', ((1 - reveal) * 28).toFixed(2) + 'px');
    section.style.setProperty('--intro-facts-opacity', factsReveal.toFixed(3));
    section.style.setProperty('--intro-lines-opacity', connectorOpacity.toFixed(3));
    section.style.setProperty('--intro-scene-scale', (1 + recede * 0.1).toFixed(3));
    section.style.setProperty('--intro-scene-opacity', (1 - recede * 0.48).toFixed(3));
    section.style.setProperty('--intro-progress', progress.toFixed(4));

    section.dataset['stage'] =
      progress < 0.25 ? 'explore' : progress < 0.69 ? 'organize' : 'reveal';

    nodeElements.forEach((element, index) => {
      const node = this.nodes[index];

      if (!node) {
        return;
      }

      const drift = (1 - organize) * Math.sin(progress * 10 + index * 1.73) * 2.2;
      const x = this.lerp(node.start.x, node.end.x, organize) + drift;
      const y =
        this.lerp(node.start.y, node.end.y, organize) +
        (1 - organize) * Math.cos(progress * 8 + index * 1.19) * 1.6;
      const scale = 0.9 + organize * 0.1 - recede * 0.08;
      const opacity = Math.max(0.2, 0.8 + organize * 0.2 - recede * 0.7);

      element.style.left = x.toFixed(3) + '%';
      element.style.top = y.toFixed(3) + '%';
      element.style.opacity = opacity.toFixed(3);
      element.style.transform = 'translate(-50%, -50%) scale(' + scale.toFixed(3) + ')';
    });
  }

  private lerp(start: number, end: number, progress: number): number {
    return start + (end - start) * progress;
  }

  private smoothStep(start: number, end: number, value: number): number {
    const progress = this.clamp((value - start) / Math.max(0.0001, end - start));
    return progress * progress * (3 - 2 * progress);
  }

  private clamp(value: number): number {
    return Math.min(1, Math.max(0, value));
  }
}
