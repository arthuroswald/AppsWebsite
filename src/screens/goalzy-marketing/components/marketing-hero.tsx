import Image from "next/image";

import type { GoalzyMarketingCopy } from "@/content/goalzy-content.types";

import styles from "./marketing-hero.module.css";

type MarketingHeroProps = {
  copy: GoalzyMarketingCopy;
  splashImage: string;
};

export function MarketingHero({ copy, splashImage }: MarketingHeroProps) {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1>{copy.heading}</h1>
        <p className={styles.introduction}>{copy.introduction}</p>
        <ul className={styles.benefits}>
          {copy.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
      </div>
      <div aria-hidden="true" className={styles.artwork}>
        <Image alt="" className={styles.splash} fill priority sizes="(max-width: 800px) 80vw, 30vw" src={splashImage} />
      </div>
    </section>
  );
}

