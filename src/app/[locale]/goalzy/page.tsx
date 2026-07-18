import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { appCatalog } from "@/content/app-catalog";
import { isLocale } from "@/content/routes";
import { createPageMetadata } from "@/lib/page-metadata";
import { GoalzyMarketingScreen } from "@/screens/goalzy-marketing/goalzy-marketing-screen";

type GoalzyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: GoalzyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const app = appCatalog.goalzy;
  return createPageMetadata({
    copy: app.content[locale].marketing,
    image: app.icon,
    locale,
    paths: app.routes.marketing,
  });
}

export default async function GoalzyMarketingPage({ params }: GoalzyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <GoalzyMarketingScreen locale={locale} />;
}

