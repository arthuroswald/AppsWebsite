import Image from "next/image";
import Link from "next/link";

import styles from "./app-card.module.css";

type AppCardProps = {
  callToAction: string;
  href: string;
  icon: string;
  name: string;
  summary: string;
};

export function AppCard({ callToAction, href, icon, name, summary }: AppCardProps) {
  return (
    <article className={`${styles.card} goalzy-theme`}>
      <Image alt="" className={styles.icon} height={112} src={icon} width={112} />
      <div className={styles.copy}>
        <h2>{name}</h2>
        <p>{summary}</p>
        <Link href={href}>
          {callToAction}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}
