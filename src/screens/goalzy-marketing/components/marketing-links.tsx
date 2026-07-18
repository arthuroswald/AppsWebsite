import Link from "next/link";

import type { appCatalog } from "@/content/app-catalog";
import type { Locale } from "@/content/content.types";

import styles from "./marketing-links.module.css";

type MarketingLinksProps = {
  app: (typeof appCatalog)["goalzy"];
  locale: Locale;
};

export function MarketingLinks({ app, locale }: MarketingLinksProps) {
  const copy = app.content[locale].marketing;
  const navigation = app.content[locale].navigation;

  return (
    <>
      <section aria-labelledby="sports-title" className={styles.sports}>
        <h2 id="sports-title">{copy.sportsHeading}</h2>
        <ul>{copy.sports.map((sport) => <li key={sport}>{sport}</li>)}</ul>
      </section>
      <section aria-labelledby="links-title" className={styles.links}>
        <h2 id="links-title">{copy.usefulLinksHeading}</h2>
        <div>
          <Link href={app.routes.support[locale]}>{navigation.support}<span aria-hidden="true"> →</span></Link>
          <Link href={app.routes.privacy[locale]}>{navigation.privacy}<span aria-hidden="true"> →</span></Link>
        </div>
      </section>
    </>
  );
}

