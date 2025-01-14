'use client';

import Jera from '../icon/jera.svg';
import ToggleButton from '@/shared/layout/components/toogle-button';
import { useEffect, useState } from 'react';

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
    <header className='sticky top-0 w-full flex justify-between'>
      <div className='px-4 py-2'>
        <div className='flex items-center gap-1'>
          <Jera id='main-logo' className='w-8 h-8' />
          <h1 className='font-bold text-xl'>Jera</h1>
        </div>
      </div>
      <div className='px-4 py-2'>
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default MainTopBar;
