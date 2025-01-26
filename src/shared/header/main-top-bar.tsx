'use client';

import Jera from '../icon/jera.svg';
import ToggleButton from '@/shared/header/components/toogle-button';
import { useEffect, useState } from 'react';
import SearchButton from '@/shared/header/components/search-button';

export type Theme = 'dark' | 'light';

const MainTopBar = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className='sticky top-0 w-full flex justify-between py-3'>
      <div className='flex items-center gap-1 px-4'>
        <Jera id='main-logo' className='w-7 h-7' />
        <h1 className='font-bold text-l'>Jera</h1>
      </div>
      <div className='px-4 flex items-center gap-3'>
        <SearchButton />
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default MainTopBar;
