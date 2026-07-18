import Link from "next/link";

import { GoalzyPage } from "@/components/goalzy-page/goalzy-page";
import { appCatalog } from "@/content/app-catalog";
import type { Locale } from "@/content/content.types";
import { supportEmail } from "@/content/goalzy-content";

import styles from "./goalzy-support-screen.module.css";

type GoalzySupportScreenProps = {
  locale: Locale;
};

export function GoalzySupportScreen({ locale }: GoalzySupportScreenProps) {
  const app = appCatalog.goalzy;
  const copy = app.content[locale].support;

  return (
    <GoalzyPage locale={locale} pageId="support">
      <div className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>{copy.heading}</h1>
          <p>{copy.introduction}</p>
        </header>

        <section aria-labelledby="contact-heading" className={styles.contact}>
          <div>
            <p id="contact-heading">{copy.emailLabel}</p>
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </div>
          <a className={styles.contactAction} href={`mailto:${supportEmail}`}>{copy.emailAction}</a>
        </section>

        <section aria-labelledby="details-heading" className={styles.section}>
          <h2 id="details-heading">{copy.detailsHeading}</h2>
          <p>{copy.detailsIntroduction}</p>
          <ul className={styles.details}>
            {copy.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </section>

        <section aria-labelledby="faq-heading" className={styles.section}>
          <h2 id="faq-heading">{copy.faqHeading}</h2>
          <div className={styles.faq}>
            {copy.faq.map((item) => (
              <details key={item.title}>
                <summary>{item.title}</summary>
                <p>{item.description}</p>
              </details>
            ))}
          </div>
        </section>

        <p className={styles.policyLink}>
          <Link href={app.routes.privacy[locale]}>{app.content[locale].navigation.privacy}<span aria-hidden="true"> →</span></Link>
        </p>
      </div>
    </GoalzyPage>
  );
}

