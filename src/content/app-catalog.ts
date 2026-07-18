import type { AppId, Localized } from "./content.types";
import { goalzyContent } from "./goalzy-content";
import { appRoutes } from "./routes";

type CatalogEntry = {
  id: AppId;
  icon: string;
  titleImage: string;
  splashImage: string;
  content: typeof goalzyContent;
  routes: (typeof appRoutes)[AppId];
  storeUrls?: Localized<string>;
};

export const appCatalog = {
  goalzy: {
    id: "goalzy",
    icon: "/apps/goalzy/icon.png",
    titleImage: "/apps/goalzy/title.png",
    splashImage: "/apps/goalzy/splash.png",
    content: goalzyContent,
    routes: appRoutes.goalzy,
  },
} as const satisfies Record<AppId, CatalogEntry>;

export const apps = Object.values(appCatalog);

