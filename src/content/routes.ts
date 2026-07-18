import type { AppId, Locale, LocalizedPath, PageId } from "./content.types";

export const locales = ["en", "fr"] as const satisfies readonly Locale[];

export const defaultLocale: Locale = "en";

export const homeRoutes = {
  en: "/en",
  fr: "/fr",
} as const satisfies LocalizedPath;

export const appRoutes = {
  goalzy: {
    marketing: {
      en: "/en/goalzy",
      fr: "/fr/goalzy",
    },
    support: {
      en: "/en/goalzy/support",
      fr: "/fr/goalzy/assistance",
    },
    privacy: {
      en: "/en/goalzy/privacy",
      fr: "/fr/goalzy/confidentialite",
    },
  },
} as const satisfies Record<AppId, Record<Exclude<PageId, "home">, LocalizedPath>>;

export const goalzySections = {
  en: {
    support: "support",
    privacy: "privacy",
  },
  fr: {
    assistance: "support",
    confidentialite: "privacy",
  },
} as const satisfies Record<Locale, Record<string, "support" | "privacy">>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getHomeRoute(locale: Locale) {
  return homeRoutes[locale];
}

export function getAppRoute(appId: AppId, pageId: Exclude<PageId, "home">, locale: Locale) {
  return appRoutes[appId][pageId][locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

export function getAlternatePath(path: LocalizedPath, locale: Locale) {
  return path[getAlternateLocale(locale)];
}

export function getAllPublicRoutes() {
  return [
    ...Object.values(homeRoutes),
    ...Object.values(appRoutes.goalzy).flatMap((route) => Object.values(route)),
  ];
}

export function getGoalzySectionPage(locale: Locale, section: string) {
  const sections = goalzySections[locale] as Record<string, "support" | "privacy">;
  return sections[section];
}
