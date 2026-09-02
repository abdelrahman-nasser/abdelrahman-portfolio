import type { CredentialItem } from '../models/credential.models';

export const portfolioCredentials = [
  {
    id: 'mct',
    title: 'Microsoft Certified Trainer (MCT)',
    issuer: 'Microsoft',
  },
  {
    id: 'mcsd-web-applications',
    title: 'Microsoft Certified Solutions Developer (MCSD): Web Applications',
    issuer: 'Microsoft',
  },
  {
    id: 'mcsa-web-applications',
    title: 'Microsoft Certified Solutions Associate (MCSA): Web Applications',
    issuer: 'Microsoft',
  },
  {
    id: 'microsoft-specialist-html5',
    title: 'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3',
    issuer: 'Microsoft',
  },
  {
    id: 'mcp',
    title: 'Microsoft Certified Professional (MCP)',
    issuer: 'Microsoft',
  },
] as const satisfies readonly CredentialItem[];
