export interface PortfolioProfile {
  readonly cv: {
    readonly pageUrl: string;
    readonly pdfUrl: string;
    readonly downloadFileName: string;
  };
  readonly name: string;
  readonly role: string;
  readonly headline: string;
  readonly supportLine: string;
  readonly summary: string;
  readonly location: string;
  readonly email: string;
  readonly phone?: string;
  readonly website: string;
  readonly linkedin: string;
  readonly github: string;
}
