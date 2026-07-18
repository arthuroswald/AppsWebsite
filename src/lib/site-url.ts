const fallbackSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return fallbackSiteUrl;
  }

  return configuredUrl.replace(/\/$/, "");
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

