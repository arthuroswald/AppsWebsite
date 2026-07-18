import { AppCard } from "@/components/app-card/app-card";
import { SiteShell } from "@/components/site-shell/site-shell";
import { apps } from "@/content/app-catalog";
import type { Locale } from "@/content/content.types";
import { getAlternateLocale, homeRoutes } from "@/content/routes";
import { siteContent } from "@/content/site-content";

import styles from "./home-screen.module.css";

type HomeScreenProps = {
  locale: Locale;
};

export function HomeScreen({ locale }: HomeScreenProps) {
  const copy = siteContent[locale].home;
  const alternateLocale = getAlternateLocale(locale);

  return (
    <SiteShell alternatePath={homeRoutes[alternateLocale]} locale={locale}>
      <div className={styles.page}>
        <h1>{copy.heading}</h1>
        <section aria-label={copy.appsHeading} className={styles.apps}>
          <div className={styles.grid}>
            {apps.map((app) => (
              <AppCard
                callToAction={copy.discoverGoalzy}
                href={app.routes.marketing[locale]}
                icon={app.icon}
                key={app.id}
                name={app.content[locale].appName}
                summary={copy.goalzySummary}
              />
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
