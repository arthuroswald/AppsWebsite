"use client";

import Link from "next/link";

import type { Locale } from "@/content/content.types";
import { getAlternateLocale } from "@/content/routes";
import { siteContent } from "@/content/site-content";

import styles from "./language-switcher.module.css";

export const localeStorageKey = "apps-website.locale";

const languageOptions = [
  { label: "English", locale: "en" },
  { label: "Français", locale: "fr" },
] as const;

type LanguageSwitcherProps = {
  currentLocale: Locale;
  alternatePath: string;
};

export function LanguageSwitcher({ alternatePath, currentLocale }: LanguageSwitcherProps) {
  const copy = siteContent[currentLocale];
  const alternateLocale = getAlternateLocale(currentLocale);

  function rememberLocale(locale: Locale) {
    try {
      window.localStorage.setItem(localeStorageKey, locale);
    } catch {
      // Storage is optional; navigation must still work.
    }
  }

  return (
    <nav aria-label={copy.languageLabel} className={styles.switcher}>
      {languageOptions.map(({ label, locale }) =>
        locale === currentLocale ? (
          <span aria-current="page" className={styles.current} key={locale} lang={locale}>
            {label}
          </span>
        ) : (
          <Link
            href={alternatePath}
            hrefLang={alternateLocale}
            key={locale}
            lang={locale}
            onClick={() => rememberLocale(locale)}
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  );
}
