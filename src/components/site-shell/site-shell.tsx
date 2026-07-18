import Link from "next/link";
import type { PropsWithChildren } from "react";

import type { Locale } from "@/content/content.types";
import { getHomeRoute } from "@/content/routes";
import { siteContent } from "@/content/site-content";

import { LanguageSwitcher } from "../language-switcher/language-switcher";
import styles from "./site-shell.module.css";

type SiteShellProps = PropsWithChildren<{
  alternatePath: string;
  locale: Locale;
}>;

export function SiteShell({ alternatePath, children, locale }: SiteShellProps) {
  const copy = siteContent[locale];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href={getHomeRoute(locale)}>
            {copy.homeLabel}
          </Link>
          <LanguageSwitcher alternatePath={alternatePath} currentLocale={locale} />
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© {new Date().getFullYear()} Arthur Oswald</p>
        </div>
      </footer>
    </div>
  );
}
