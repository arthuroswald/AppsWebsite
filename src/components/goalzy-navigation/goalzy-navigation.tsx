import Link from "next/link";

import type { Locale, PageId } from "@/content/content.types";
import { goalzyContent } from "@/content/goalzy-content";
import { appRoutes } from "@/content/routes";

import styles from "./goalzy-navigation.module.css";

type GoalzyNavigationProps = {
  currentPage: Exclude<PageId, "home">;
  locale: Locale;
};

export function GoalzyNavigation({ currentPage, locale }: GoalzyNavigationProps) {
  const labels = goalzyContent[locale].navigation;
  const items = [
    { id: "marketing", label: labels.overview },
    { id: "support", label: labels.support },
    { id: "privacy", label: labels.privacy },
  ] as const;

  return (
    <nav aria-label="Goalzy" className={styles.navigation}>
      {items.map((item) => (
        <Link
          aria-current={item.id === currentPage ? "page" : undefined}
          href={appRoutes.goalzy[item.id][locale]}
          key={item.id}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

