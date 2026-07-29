import { GoalzyPage } from "@/components/goalzy-page/goalzy-page";
import { appCatalog } from "@/content/app-catalog";
import type { Locale } from "@/content/content.types";

import { MarketingHero } from "./components/marketing-hero";
import { MarketingLinks } from "./components/marketing-links";
import { ModesSection } from "./components/modes-section";
import { StepsSection } from "./components/steps-section";

type GoalzyMarketingScreenProps = {
  locale: Locale;
};

export function GoalzyMarketingScreen({ locale }: GoalzyMarketingScreenProps) {
  const app = appCatalog.goalzy;
  const copy = app.content[locale].marketing;

  return (
    <GoalzyPage locale={locale} pageId="marketing">
      <MarketingHero copy={copy} splashImage={app.splashImage} storeUrl={app.storeUrl} />
      <StepsSection copy={copy} />
      <ModesSection copy={copy} />
      <MarketingLinks app={app} locale={locale} />
    </GoalzyPage>
  );
}
