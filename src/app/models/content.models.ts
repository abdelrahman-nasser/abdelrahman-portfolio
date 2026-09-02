export interface EngineeringPrinciple {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface AiAugmentedEngineering {
  readonly id: string;
  readonly title: string;
  readonly statement: string;
  readonly capabilities: readonly string[];
  readonly workflow: readonly string[];
  readonly humanResponsibilities: readonly string[];
}
