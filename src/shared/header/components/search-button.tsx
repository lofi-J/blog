'use client';

import { Button } from '@/components/ui/button';
import { useModal } from '@/shared/modal/context/modal-context';
import useKeyboardBinding from '@/shared/hook/useKeyboardBinding';
import SearchModal from '@/components/modal/search-modal';

const SearchButton = () => {
  const { open } = useModal();
  const openSearchModal = () => open(<SearchModal />);

  useKeyboardBinding('Meta', 'k', openSearchModal);

  return (
    <Button variant='outline' className='text-s bg-accent-gray py-1 h-8' onClick={openSearchModal}>
      <span className='mr-1 sm:mr-1.5 tracking-wide font-small flex'>Search by keyword...</span>
      <span className='flex items-center gap-1'>
        <kbd className='font-callout'>⌘</kbd>
        <kbd className='font-small'>K</kbd>
      </span>
    </Button>
  );
};

export default SearchButton;
