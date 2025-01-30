'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Theme } from '@/shared/header/main-top-bar';

type ToggleButtonProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const ToggleButton = ({ theme, toggleTheme }: ToggleButtonProps) => {
  return (
    <Button variant='outline' size='icon' className='h-8 w-8' onClick={toggleTheme}>
      {theme === 'dark' ? <Sun className='h-3 w-3' /> : <Moon className='h-3 w-3' />}
    </Button>
  );
};

export default ToggleButton;
