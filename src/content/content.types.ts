export type Locale = "en" | "fr";

export type AppId = "goalzy";

export type PageId = "home" | "marketing" | "support" | "privacy";

export type Localized<T> = Record<Locale, T>;

export type LocalizedPath = Localized<string>;

export type MetadataCopy = {
  title: string;
  description: string;
};

export type LinkCopy = {
  label: string;
  href: string;
};

