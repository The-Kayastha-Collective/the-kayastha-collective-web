export interface SiteInfo {
  name: string;
  shortName: string;
  description: string;
  language: string;
  url: string;
  basePath: string;
}

export interface ButtonConfig {
  label: string;
  url: string;
  external?: boolean;
}

export interface NavigationContent {
  logo: string;
  logoAlt: string;
  joinButton: ButtonConfig;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
  backgroundImage: string;
  showScrollIndicator: boolean;
}

export interface AboutContent {
  sectionLabel: string;
  title: string;
  paragraphs: string[];
}

export interface MissionVisionItem {
  title: string;
  description: string;
}

export interface MissionVisionContent {
  sectionLabel: string;
  heading: string;
  description: string;
  mission: MissionVisionItem;
  vision: MissionVisionItem;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  enabled: boolean;
}

export interface FooterContent {
  brandName: string;
  tagline: string;
  copyrightStartYear: number;
  socialLinks: SocialLink[];
}

export interface SEOContent {
  title: string;
  description: string;
  keywords: string[];
  openGraphImage: string;
}

export interface SiteContent {
  site: SiteInfo;
  navigation: NavigationContent;
  hero: HeroContent;
  about: AboutContent;
  missionVision: MissionVisionContent;
  footer: FooterContent;
}