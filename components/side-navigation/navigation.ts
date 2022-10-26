import { Category, NavItem } from './types';

const components: NavItem[] = [
  { title: 'Typography', url: '/typography' },
  { title: 'Image', url: '/image' },
  { title: 'Code block', url: '/code-block' },
  { title: 'Callout', url: '/callout' },
  { title: 'List', url: '/list' },
  { title: 'Table', url: '/table' },
  { title: 'Blockquote', url: '/blockquote' },
  { title: 'Divider', url: '/divider' },
  { title: 'Card list', url: '/card-list' },
];

const recipes: NavItem[] = [
  {
    title: 'Create a new page',
    url: '/create-new-page',
  },
  {
    title: 'Implement search',
    url: '/search',
  },
  {
    title: 'Customize styles',
    url: '/customization',
  },
];

export const navigation: Category[] = [
  {
    items: [{ title: 'Home', url: '/' }],
  },
  {
    title: 'Recipes',
    items: recipes,
  },
  {
    title: 'Components',
    items: components,
  },
];
