export interface SeoMetadata {
  readonly title: string;
  readonly description: string;
  readonly structuredData?: 'person';
}

export interface SeoRouteData {
  readonly seo: SeoMetadata;
}

export const SEO_ROUTE_DATA_KEY: keyof SeoRouteData = 'seo';
