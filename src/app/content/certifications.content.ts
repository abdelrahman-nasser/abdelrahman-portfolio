import type {
  CertificationItem,
  CertificationProvider,
  CertificationVerification,
} from '../models/certification.models';

export const canonicalMicrosoftCertifications = [
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
] as const satisfies readonly CertificationItem[];

export const microsoftTranscriptVerification = {
  label: 'View Microsoft Transcript',
  url: 'https://learn.microsoft.com/en-us/users/abdelrahman91/transcript/vpjp9iq53rz38zk',
} as const satisfies CertificationVerification;

export const microsoftCertificationProvider = {
  id: 'microsoft',
  name: 'Microsoft',
  certifications: canonicalMicrosoftCertifications,
  verification: microsoftTranscriptVerification,
} as const satisfies CertificationProvider;

export const portfolioCertificationProviders = [
  microsoftCertificationProvider,
] as const satisfies readonly CertificationProvider[];

export const portfolioCertifications = canonicalMicrosoftCertifications;
