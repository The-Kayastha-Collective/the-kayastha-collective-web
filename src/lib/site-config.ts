import siteContentJson from "@/data/site-content.json";

import type { SiteContent } from "@/types/site-content";

const siteContent: SiteContent = siteContentJson;

export default siteContent;

export const {
  site,
  navigation,
  hero,
  about,
  missionVision,
  footer,
  seo,
} = siteContent;

/**
 * Returns the current calendar year.
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Generates a copyright notice using the configured start year.
 */
export function getCopyrightYears(startYear: number): string {
  const currentYear = getCurrentYear();

  if (startYear >= currentYear) {
    return String(startYear);
  }

  return `${startYear}–${currentYear}`;
}

/**
 * Determines whether a URL is external.
 * Explicit configuration takes precedence when provided.
 */
export function isExternalUrl(
  url: string,
  external?: boolean
): boolean {
  if (external !== undefined) {
    return external;
  }

  return /^https?:\/\//i.test(url);
}