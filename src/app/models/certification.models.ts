export interface CertificationItem {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly shortName?: string;
}

export interface CertificationVerification {
  readonly label: string;
  readonly url: string;
}

export interface CertificationProvider {
  readonly id: string;
  readonly name: string;
  readonly certifications: readonly CertificationItem[];
  readonly verification?: CertificationVerification;
}
