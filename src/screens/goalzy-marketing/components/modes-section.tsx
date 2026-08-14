import type { GoalzyMarketingCopy } from "@/content/goalzy-content.types";

import styles from "./modes-section.module.css";

export function ModesSection({ copy }: { copy: GoalzyMarketingCopy }) {
  return (
    <section aria-labelledby="modes-title" className={styles.section}>
      <div className={styles.heading}>
        <h2 id="modes-title">{copy.modesHeading}</h2>
        <p>{copy.modesIntroduction}</p>
      </div>
      <aside className={styles.versionNotice}>
        <strong>{copy.versionHeading}</strong>
        <p>{copy.versionNotice}</p>
      </aside>
      <div className={styles.modes}>
        {copy.modes.map((mode) => (
          <article key={mode.title}>
            <h3>{mode.title}</h3>
            <p>{mode.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
