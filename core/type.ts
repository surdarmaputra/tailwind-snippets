export interface NavItem {
  title: string;
  href: string;
}
export interface Variant {
  title: string;
  path: string;
  code?: string;
  previewUrl?: string;
}

export interface SnippetSubCategory {
  slug: string;
  title: string;
  variants: Variant[];
}

export interface SnippetCategory {
  slug: string;
  title: string;
  subCategories: SnippetSubCategory[];
}
