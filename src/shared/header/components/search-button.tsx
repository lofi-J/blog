'use client';

import { Button } from '@/components/ui/button';
import { useModal } from '@/shared/modal/context/modal-context';
import useKeyboardBinding from '@/shared/hook/useKeyboardBinding';

const SearchButton = () => {
  const { open, close, modals } = useModal();
  const openSearchModal = () => {
    console.log('action called');
    open('test');
  };

  useKeyboardBinding('Meta', 'k', openSearchModal);

  return (
    <Button variant='outline' className='text-s text-gray-500 hover:var(--foreground)' onClick={openSearchModal}>
      <span className='mr-3 tracking-wide'>Search by keyword...</span>
      <span className='flex items-center gap-1'>
        <kbd className='text-base'>⌘</kbd>
        <kbd className='text-s'>K</kbd>
      </span>
    </Button>
  );
};

export default SearchButton;
