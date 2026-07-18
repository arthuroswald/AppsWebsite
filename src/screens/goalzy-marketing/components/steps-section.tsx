import type { GoalzyMarketingCopy } from "@/content/goalzy-content.types";

import styles from "./steps-section.module.css";

export function StepsSection({ copy }: { copy: GoalzyMarketingCopy }) {
  return (
    <section aria-labelledby="steps-title" className={styles.section}>
      <h2 id="steps-title">{copy.stepsHeading}</h2>
      <ol>
        {copy.steps.map((step, index) => (
          <li key={step.title}>
            <span aria-hidden="true">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

