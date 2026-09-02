export interface ExperienceItem {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies?: readonly string[];
  readonly startDate?: string;
  readonly endDate?: string;
}
