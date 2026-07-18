import type { PropsWithChildren } from "react";

import type { Locale, PageId } from "@/content/content.types";
import { appRoutes } from "@/content/routes";

import { GoalzyNavigation } from "../goalzy-navigation/goalzy-navigation";
import { SiteShell } from "../site-shell/site-shell";
import styles from "./goalzy-page.module.css";

type GoalzyPageProps = PropsWithChildren<{
  locale: Locale;
  pageId: Exclude<PageId, "home">;
}>;

export function GoalzyPage({ children, locale, pageId }: GoalzyPageProps) {
  return (
    <SiteShell alternatePath={appRoutes.goalzy[pageId][locale === "en" ? "fr" : "en"]} locale={locale}>
      <div className={`${styles.page} goalzy-theme`}>
        <GoalzyNavigation currentPage={pageId} locale={locale} />
        {children}
      </div>
    </SiteShell>
  );
}

