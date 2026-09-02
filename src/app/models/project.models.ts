export type ProjectKind = 'enterprise-saas' | 'government-digital-service';

export interface PortfolioProject {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly featured: boolean;
  readonly order: number;
  readonly tags: readonly string[];
  readonly route: string;
  readonly kind: ProjectKind;
}
