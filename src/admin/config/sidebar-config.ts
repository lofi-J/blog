import { Home, StickyNote, FileSearch, Tags } from 'lucide-react';

const BASE_PATH = '/admin';
export const items = [
  {
    title: 'Home',
    url: BASE_PATH,
    icon: Home,
  },
  {
    title: 'Posts',
    url: `${BASE_PATH}/post`,
    icon: StickyNote,
  },
  {
    title: 'Categories',
    url: `${BASE_PATH}/categories`,
    icon: Tags,
  },
  {
    title: 'search',
    url: `${BASE_PATH}/search`,
    icon: FileSearch,
  },
];
