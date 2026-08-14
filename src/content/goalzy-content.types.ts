import type { MetadataCopy } from "./content.types";

export type ContentItem = {
  title: string;
  description: string;
};

export type GoalzyNavigationCopy = {
  overview: string;
  support: string;
  privacy: string;
};

export type GoalzyMarketingCopy = MetadataCopy & {
  eyebrow: string;
  heading: string;
  introduction: string;
  appStoreAction: string;
  stepsHeading: string;
  steps: readonly ContentItem[];
  modesHeading: string;
  modesIntroduction: string;
  versionHeading: string;
  versionNotice: string;
  modes: readonly ContentItem[];
  sportsHeading: string;
  sports: readonly string[];
  benefits: readonly string[];
  usefulLinksHeading: string;
};

export type GoalzySupportCopy = MetadataCopy & {
  eyebrow: string;
  heading: string;
  introduction: string;
  emailLabel: string;
  emailAction: string;
  detailsHeading: string;
  detailsIntroduction: string;
  details: readonly string[];
  faqHeading: string;
  faq: readonly ContentItem[];
};

export type PrivacySection = {
  title: string;
  paragraphs: readonly string[];
};

export type GoalzyPrivacyCopy = MetadataCopy & {
  eyebrow: string;
  heading: string;
  introduction: string;
  updatedLabel: string;
  updatedDate: string;
  sections: readonly PrivacySection[];
};
