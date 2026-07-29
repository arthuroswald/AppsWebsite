import Link from "next/link";

import { GoalzyPage } from "@/components/goalzy-page/goalzy-page";
import { appCatalog } from "@/content/app-catalog";
import type { Locale } from "@/content/content.types";
import { supportEmail } from "@/content/goalzy-content";

import styles from "./goalzy-privacy-screen.module.css";

type GoalzyPrivacyScreenProps = {
  locale: Locale;
};

export function GoalzyPrivacyScreen({ locale }: GoalzyPrivacyScreenProps) {
  const app = appCatalog.goalzy;
  const copy = app.content[locale].privacy;

  return (
    <GoalzyPage locale={locale} pageId="privacy">
      <article className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>{copy.heading}</h1>
          <p className={styles.introduction}>{copy.introduction}</p>
          <p className={styles.updated}>{copy.updatedLabel}: <time dateTime="2026-07-29">{copy.updatedDate}</time></p>
        </header>

        <div className={styles.policy}>
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>

        <aside className={styles.contact}>
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          <Link href={app.routes.support[locale]}>{app.content[locale].navigation.support}<span aria-hidden="true"> →</span></Link>
        </aside>
      </article>
    </GoalzyPage>
  );
}
