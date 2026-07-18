import type { Localized } from "./content.types";
import type { GoalzyNavigationCopy } from "./goalzy-content.types";
import { goalzyMarketingContent } from "./goalzy-marketing-content";
import { goalzyPrivacyContent } from "./goalzy-privacy-content";
import { goalzySupportContent } from "./goalzy-support-content";

const navigation = {
  en: { overview: "Overview", support: "Support", privacy: "Privacy" },
  fr: { overview: "Présentation", support: "Assistance", privacy: "Confidentialité" },
} as const satisfies Localized<GoalzyNavigationCopy>;

export const goalzyContent = {
  en: {
    appName: "Goalzy",
    navigation: navigation.en,
    marketing: goalzyMarketingContent.en,
    support: goalzySupportContent.en,
    privacy: goalzyPrivacyContent.en,
  },
  fr: {
    appName: "Goalzy",
    navigation: navigation.fr,
    marketing: goalzyMarketingContent.fr,
    support: goalzySupportContent.fr,
    privacy: goalzyPrivacyContent.fr,
  },
} as const;

export { supportEmail } from "./goalzy-support-content";
