import type { MetadataRoute } from "next";

import { getAllPublicRoutes } from "@/content/routes";
import { getAbsoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllPublicRoutes().map((path) => ({
    url: getAbsoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/en" || path === "/fr" ? 1 : 0.8,
  }));
}

