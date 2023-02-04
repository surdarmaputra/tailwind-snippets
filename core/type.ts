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
  code?: string;
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

export interface SelectOption {
  label: string | null;
  value: string | null;
}
