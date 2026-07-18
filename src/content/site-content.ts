import type { Localized, MetadataCopy } from "./content.types";

type SiteCopy = {
  homeLabel: string;
  languageLabel: string;
  home: MetadataCopy & {
    heading: string;
    appsHeading: string;
    goalzySummary: string;
    discoverGoalzy: string;
  };
};

export const siteContent = {
  en: {
    homeLabel: "Apps",
    languageLabel: "Language",
    home: {
      title: "Apps",
      description: "Discover the available apps.",
      heading: "Apps",
      appsHeading: "Available apps",
      goalzySummary: "Turn everyday choices into colorful, sports-inspired matches.",
      discoverGoalzy: "Discover Goalzy",
    },
  },
  fr: {
    homeLabel: "Apps",
    languageLabel: "Langue",
    home: {
      title: "Applications",
      description: "Découvrez les applications disponibles.",
      heading: "Applications",
      appsHeading: "Apps disponibles",
      goalzySummary: "Transformez vos choix du quotidien en matchs sportifs hauts en couleur.",
      discoverGoalzy: "Découvrir Goalzy",
    },
  },
} as const satisfies Localized<SiteCopy>;
