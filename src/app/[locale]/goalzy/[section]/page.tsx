import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { appCatalog } from "@/content/app-catalog";
import { getGoalzySectionPage, goalzySections, isLocale, locales } from "@/content/routes";
import { createPageMetadata } from "@/lib/page-metadata";
import { GoalzyPrivacyScreen } from "@/screens/goalzy-privacy/goalzy-privacy-screen";
import { GoalzySupportScreen } from "@/screens/goalzy-support/goalzy-support-screen";

type GoalzySectionPageProps = {
  params: Promise<{ locale: string; section: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(goalzySections[locale]).map((section) => ({ locale, section })),
  );
}

export async function generateMetadata({ params }: GoalzySectionPageProps): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};

  const pageId = getGoalzySectionPage(locale, section);
  if (!pageId) return {};

  const app = appCatalog.goalzy;
  return createPageMetadata({
    copy: app.content[locale][pageId],
    locale,
    paths: app.routes[pageId],
  });
}

export default async function GoalzySectionPage({ params }: GoalzySectionPageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();

  const pageId = getGoalzySectionPage(locale, section);
  if (!pageId) notFound();

  return pageId === "support"
    ? <GoalzySupportScreen locale={locale} />
    : <GoalzyPrivacyScreen locale={locale} />;
}
