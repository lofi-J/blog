'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ToggleButton from '@/shared/header/components/toogle-button';
import SearchButton from '@/shared/header/components/search-button';
import Jera from '@/shared/icon/jera.svg';

export type Theme = 'dark' | 'light';

const MainTopBar = () => {
  const router = useRouter();

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
    <header className='sticky top-0 w-full flex justify-between px-4 h-[56px]'>
      <div className='flex items-center gap-1 cursor-pointer' onClick={() => router.push('/')}>
        <Jera id='main-logo' className='w-7 md:w-8' />
        <h1 className='font-bold font-title3 hidden sm:block'>Jera</h1>
      </div>
      <div className='flex items-center gap-3'>
        <SearchButton />
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default MainTopBar;
