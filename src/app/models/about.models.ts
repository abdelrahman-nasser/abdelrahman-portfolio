export interface AboutNarrativeItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface AboutPageContent {
  readonly story: readonly string[];
  readonly workIntro: string;
  readonly workAreas: readonly AboutNarrativeItem[];
  readonly contributionIntro: string;
  readonly contributionAreas: readonly AboutNarrativeItem[];
  readonly closing: {
    readonly title: string;
    readonly description: string;
  };
}
