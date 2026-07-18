import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { homeRoutes, isLocale } from "@/content/routes";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/page-metadata";
import { HomeScreen } from "@/screens/home/home-screen";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return createPageMetadata({ copy: siteContent[locale].home, locale, paths: homeRoutes });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <HomeScreen locale={locale} />;
}

