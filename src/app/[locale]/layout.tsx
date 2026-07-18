import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

import { isLocale, locales } from "@/content/routes";

import "../globals.css";

type LocaleLayoutProps = PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

