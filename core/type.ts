export enum CodeLanguage {
  tsx = 'TypeScript',
  html = 'HTML',
}
export interface NavItem {
  title: string;
  href: string;
}

export interface Theme {
  theme: string | null;
  themeTitle: string | null;
}

export interface Variant extends Theme {
  title: string;
  path: string;
  codeByType?: Record<CodeLanguage, string>;
  previewUrl?: string;
}

export interface SnippetSubCategory {
  slug: string;
  title: string;
  variants: Variant[];
  href?: string;
}

export interface SnippetCategory {
  slug: string;
  title: string;
  href?: string;
  subCategories: SnippetSubCategory[];
}

export interface PageSnippet extends Theme {
  slug: string;
  title: string;
  path: string;
  codeByType?: Record<CodeLanguage, string>;
  previewUrl?: string;
  href?: string;
}

export interface SelectOption {
  label: string | null;
  value: string | null;
}
