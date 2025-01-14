'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Theme } from '@/shared/layout/main-top-bar';

type ToggleButtonProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const ToggleButton = ({ theme, toggleTheme }: ToggleButtonProps) => {
  return (
    <Button variant='outline' size='icon' onClick={toggleTheme}>
      {theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
    </Button>
  );
};

export default ToggleButton;
