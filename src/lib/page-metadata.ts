import type { Metadata } from "next";

import type { Locale, LocalizedPath, MetadataCopy } from "@/content/content.types";
import { getAbsoluteUrl, getSiteUrl } from "@/lib/site-url";

type PageMetadataOptions = {
  copy: MetadataCopy;
  locale: Locale;
  paths: LocalizedPath;
  image?: string;
};

export function createPageMetadata({ copy, image, locale, paths }: PageMetadataOptions): Metadata {
  const imageUrl = getAbsoluteUrl(image ?? "/apps/goalzy/icon.png");

  return {
    metadataBase: new URL(getSiteUrl()),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: paths[locale],
      languages: {
        en: paths.en,
        fr: paths.fr,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: paths[locale],
      title: copy.title,
      description: copy.description,
      siteName: "Apps",
      images: [{ url: imageUrl, width: 1024, height: 1024, alt: "Goalzy" }],
    },
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description,
      images: [imageUrl],
    },
  };
}
