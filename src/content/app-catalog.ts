import type { AppId } from "./content.types";
import { goalzyContent } from "./goalzy-content";
import { appRoutes } from "./routes";

type CatalogEntry = {
  id: AppId;
  icon: string;
  titleImage: string;
  splashImage: string;
  content: typeof goalzyContent;
  routes: (typeof appRoutes)[AppId];
  storeUrl?: string;
};

export const appCatalog = {
  goalzy: {
    id: "goalzy",
    icon: "/apps/goalzy/icon.png",
    titleImage: "/apps/goalzy/title.png",
    splashImage: "/apps/goalzy/splash.png",
    content: goalzyContent,
    routes: appRoutes.goalzy,
    storeUrl: "https://apps.apple.com/app/id6791262105",
  },
} as const satisfies Record<AppId, CatalogEntry>;

export const apps = Object.values(appCatalog);
