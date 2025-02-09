import { Home, StickyNote, FileSearch } from 'lucide-react';

const BASE_PATH = '/admin';
export const items = [
  {
    title: 'Home',
    url: BASE_PATH,
    icon: Home,
  },
  {
    title: 'post',
    url: `${BASE_PATH}/post`,
    icon: StickyNote,
  },
  {
    title: 'search',
    url: `${BASE_PATH}/search`,
    icon: FileSearch,
  },
];
