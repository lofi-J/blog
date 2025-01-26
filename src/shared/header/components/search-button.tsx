'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const SearchButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Button
      variant='outline'
      className='text-s text-gray-500 hover:var(--foreground)'
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className='mr-3 tracking-wide'>Search by keyword...</span>
      <span className='flex items-center gap-1'>
        <kbd className='text-base'>⌘</kbd>
        <kbd className='text-s'>K</kbd>
      </span>
    </Button>
  );
};

export default SearchButton;
