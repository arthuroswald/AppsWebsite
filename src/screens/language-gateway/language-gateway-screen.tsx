"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import type { Locale } from "@/content/content.types";
import { getHomeRoute, isLocale } from "@/content/routes";
import { localeStorageKey } from "@/components/language-switcher/language-switcher";

import styles from "./language-gateway-screen.module.css";

function getPreferredLocale(): Locale {
  try {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    if (storedLocale && isLocale(storedLocale)) {
      return storedLocale;
    }
  } catch {
    // Continue with browser language when storage is unavailable.
  }

  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function rememberLocale(locale: Locale) {
  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch {
    // Navigation still works when storage is unavailable.
  }
}

export function LanguageGatewayScreen() {
  const router = useRouter();

  useEffect(() => {
    router.replace(getHomeRoute(getPreferredLocale()));
  }, [router]);

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Apps</p>
        <h1>Choose your language</h1>
        <p>Choisissez votre langue</p>
        <div className={styles.actions}>
          <Link href={getHomeRoute("en")} lang="en" onClick={() => rememberLocale("en")}>
            English
          </Link>
          <Link href={getHomeRoute("fr")} lang="fr" onClick={() => rememberLocale("fr")}>
            Français
          </Link>
        </div>
      </div>
    </main>
  );
}
