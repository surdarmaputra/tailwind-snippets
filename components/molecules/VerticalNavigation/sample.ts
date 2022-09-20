import { SnippetCategory, SnippetSubCategory, Variant } from 'core/type';

const variants: Variant[] = [
  {
    title: 'Variant 1',
    path: '/path-sample',
    theme: null,
    themeTitle: null,
  },
  {
    title: 'Variant 2',
    path: '/path-sample',
    theme: null,
    themeTitle: null,
  },
];

const subCategories: SnippetSubCategory[] = [
  {
    title: 'Sub category 1',
    slug: 'sub-category-1',
    variants,
  },
  {
    title: 'Sub category 2',
    slug: 'sub-category-2',
    variants,
  },
];

export const snippets: SnippetCategory[] = [
  {
    title: 'Category 1',
    slug: 'category-1',
    subCategories,
  },
  {
    title: 'Category 2',
    slug: 'category-2',
    subCategories,
  },
];
