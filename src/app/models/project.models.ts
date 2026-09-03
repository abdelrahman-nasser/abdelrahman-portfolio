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

export interface ProjectCaseStudySubsection {
  readonly title: string;
  readonly paragraphs?: readonly string[];
  readonly bullets?: readonly string[];
}

export interface ProjectCaseStudySection {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
  readonly subsections?: readonly ProjectCaseStudySubsection[];
}

export interface ProjectCaseStudy {
  readonly projectId: PortfolioProject['id'];
  readonly sections: readonly ProjectCaseStudySection[];
}
